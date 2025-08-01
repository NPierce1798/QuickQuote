import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { phone, streetAddress, city, state, zipCode, problemType, urgency } = await request.json();

    // 1. Insert lead into database
    const { data: lead, error: leadError } = await supabase
      .from('leads')
      .insert([
        {
          phone,
          street_address: streetAddress,
          city,
          state,
          zip_code: zipCode,
          problem_type: problemType,
          urgency: urgency || 'emergency'
        }
      ])
      .select()
      .single();

    if (leadError) {
      console.error('Error inserting lead:', leadError);
      return NextResponse.json({ error: 'Failed to save lead' }, { status: 500 });
    }

    // 2. Find contractors in the area
    console.log('Looking for contractors in ZIP:', zipCode);
    
    const { data: contractors, error: contractorError } = await supabase
      .from('contractors')
      .select('*')
      .eq('is_active', true)
      .filter('service_zip_codes', 'cs', `{${zipCode}}`);

    // Enhanced debugging
    console.log('Contractor query details:');
    console.log('- ZIP code searched:', zipCode);
    console.log('- Contractors found:', contractors?.length || 0);
    console.log('- Contractor data:', JSON.stringify(contractors, null, 2));

    if (!contractors || contractors.length === 0) {
      console.log('❌ NO CONTRACTORS FOUND - checking database...');
      
      // Debug query - check what contractors exist
      const { data: allContractors } = await supabase
        .from('contractors')
        .select('id, email, service_zip_codes, is_active');
      
      console.log('All contractors in database:', JSON.stringify(allContractors, null, 2));
    }
    
    if (contractorError) {
      console.error('Error finding contractors:', contractorError);
    }

    // 3. Send emails to contractors (limit to 3)
    const selectedContractors = contractors?.slice(0, 3) || [];
    let emailsSent = 0;

    console.log('Selected contractors for emails:', selectedContractors);

    for (const contractor of selectedContractors) {
      try {
        console.log('📧 Attempting to send email to contractor:');
        console.log('- Contractor ID:', contractor.id);
        console.log('- Email:', contractor.email);
        console.log('- Active status:', contractor.is_active);
        
        // Generate confirmation token
        const confirmationToken = Math.random().toString(36).substring(2, 15);
        console.log('- Generated token:', confirmationToken);

        // Insert lead assignment
        const { data: assignment, error: assignmentError } = await supabase
          .from('lead_assignments')
          .insert([
            {
              lead_id: lead.id,
              contractor_id: contractor.id,
              confirmation_token: confirmationToken
            }
          ])
          .select();

        if (assignmentError) {
          console.error('❌ Error creating lead assignment:', assignmentError);
          continue;
        }
        
        console.log('✅ Lead assignment created:', assignment);

        // Send email to contractor
        const emailResult = await resend.emails.send({
          from: 'ServiceElite <onboarding@resend.dev>',
          to: [contractor.email],
          subject: `🔥 NEW HVAC LEAD - ${city}, ${state}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #dc2626;">🔥 NEW HVAC LEAD - URGENT</h2>
              
              <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>Customer Phone:</strong> ${phone}</p>
                <p><strong>Address:</strong> ${streetAddress}, ${city}, ${state} ${zipCode}</p>
                <p><strong>Problem:</strong> ${problemType}</p>
                <p><strong>Urgency:</strong> ${urgency}</p>
                <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
              </div>

              <div style="text-align: center; margin: 30px 0;">
                <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/confirm-contractor?token=${confirmationToken}" 
                   style="background: #dc2626; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold;">
                  CLICK HERE TO CONFIRM YOU'LL CALL THEM
                </a>
              </div>

              <p style="color: #666; font-size: 14px;">
                First to respond often gets the job!<br>
                You only pay $${contractor.success_fee_amount || 50} if they hire you.
              </p>

              <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
              <p style="color: #666; font-size: 12px;">
                ServiceElite - Licensed Contractor Network<br>
                Questions? Reply to this email.
              </p>
            </div>
          `
        });

        console.log('✅ Resend API response:', emailResult);
        console.log('✅ Email sent successfully to:', contractor.email);
        emailsSent++;
        
      } catch (emailError) {
        console.error(`❌ Error sending email to ${contractor.email}:`, emailError);
        console.error('Full error details:', JSON.stringify(emailError, null, 2));
      }
    }

    // 4. Send notification email to you
    try {
      await resend.emails.send({
        from: 'ServiceElite <onboarding@resend.dev>',
        to: ['npierce1798@gmail.com'],
        subject: `New HVAC Lead Submitted - ${city}, ${state}`,
        html: `
          <h3>New Lead Alert</h3>
          <p><strong>Customer:</strong> ${phone}</p>
          <p><strong>Address:</strong> ${streetAddress}, ${city}, ${state} ${zipCode}</p>
          <p><strong>Problem:</strong> ${problemType}</p>
          <p><strong>Contractors Notified:</strong> ${emailsSent}</p>
          <p><strong>Lead ID:</strong> ${lead.id}</p>
        `
      });
    } catch (notificationError) {
      console.error('Error sending notification email:', notificationError);
    }

    console.log('Total emails sent to contractors:', emailsSent);

    return NextResponse.json({ 
      success: true, 
      leadId: lead.id,
      contractorsNotified: emailsSent
    });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}