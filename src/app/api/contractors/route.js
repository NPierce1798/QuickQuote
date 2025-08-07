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
    const { businessName, contactName, phone, email, serviceCity, serviceState, serviceRadius } = await request.json();

    console.log('Processing contractor signup:', { businessName, contactName, email, serviceCity, serviceState });

    // 1. Insert contractor directly into contractors table
    const { data: contractor, error: contractorError } = await supabase
      .from('contractors')
      .insert([
        {
          business_name: businessName,
          contact_name: contactName,
          phone,
          email,
          service_city: serviceCity,
          service_state: serviceState,
          service_radius: parseInt(serviceRadius),
          service_zip_codes: [], // Empty array - you'll populate manually after approval
          is_active: false, // Set to false until you approve them
          success_fee_amount: 50.00, // Default fee
          service_lat: null, // You can add coordinates later
          service_lng: null
        }
      ])
      .select()
      .single();

    if (contractorError) {
      console.error('Error saving contractor:', contractorError);
      return NextResponse.json({ error: 'Failed to save contractor application' }, { status: 500 });
    }

    console.log('Contractor saved:', contractor.id);

    // 2. Send confirmation email to contractor
    try {
      await resend.emails.send({
        from: 'ServiceElite <noreply@serviceelite.com>', // Update with your domain
        to: [email],
        subject: 'Welcome to ServiceElite - Application Received!',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563eb;">Welcome to ServiceElite!</h2>
            
            <p>Hi ${contactName},</p>
            
            <p>Thanks for applying to join our contractor network! We've received your application for <strong>${businessName}</strong>.</p>
            
            <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2563eb;">
              <h3 style="color: #1e40af; margin-top: 0;">Application Details:</h3>
              <p><strong>Business:</strong> ${businessName}</p>
              <p><strong>Contact:</strong> ${contactName}</p>
              <p><strong>Service Area:</strong> ${serviceCity}, ${serviceState} (${serviceRadius} mile radius)</p>
              <p><strong>Contractor ID:</strong> ${contractor.id}</p>
            </div>

            <h3 style="color: #1e40af;">What happens next?</h3>
            <ul>
              <li>We'll review your application within 24 hours</li>
              <li>We'll verify your licensing and insurance status</li>
              <li>Once approved, you'll start receiving leads immediately</li>
              <li>Remember: You only pay $50 when you get hired for a job</li>
            </ul>

            <p>Questions? Just reply to this email or call us at <strong>(123) 456-7890</strong></p>

            <p>Best regards,<br>
            The ServiceElite Team</p>

            <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
            <p style="color: #666; font-size: 12px;">
              ServiceElite - Licensed Contractor Network<br>
              You're receiving this because you applied to join our contractor network.
            </p>
          </div>
        `
      });

      console.log('Confirmation email sent to contractor');

    } catch (emailError) {
      console.error('Error sending contractor confirmation email:', emailError);
    }

    // 3. Send notification email to admin
    try {
      await resend.emails.send({
        from: 'ServiceElite <noreply@serviceelite.com>', // Update with your domain
        to: ['npierce1798@gmail.com'], // Your admin email
        subject: `🎯 New Contractor Application - ${businessName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #dc2626;">🎯 New Contractor Application</h2>
            
            <div style="background: #fef2f2; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #dc2626;">
              <h3 style="color: #991b1b; margin-top: 0;">Contractor Details:</h3>
              <p><strong>Business Name:</strong> ${businessName}</p>
              <p><strong>Contact Name:</strong> ${contactName}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Service Area:</strong> ${serviceCity}, ${serviceState}</p>
              <p><strong>Service Radius:</strong> ${serviceRadius} miles</p>
              <p><strong>Contractor ID:</strong> ${contractor.id}</p>
              <p><strong>Applied:</strong> ${new Date().toLocaleString()}</p>
              <p><strong>Status:</strong> Inactive (awaiting approval)</p>
            </div>

            <h3 style="color: #1e40af;">Action Required:</h3>
            <ol>
              <li>Call ${contactName} at ${phone} within 24 hours</li>
              <li>Verify licensing and insurance status</li>
              <li>Add ZIP codes to service_zip_codes array</li>
              <li>Set is_active = true to start sending leads</li>
              <li>Optionally add service_lat/service_lng coordinates</li>
            </ol>

            <p style="background: #fffbeb; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b;">
              <strong>💡 Tip:</strong> Call them while they're still excited about signing up!
            </p>

            <p>The contractor is now in your contractors table but inactive until you approve them.</p>
          </div>
        `
      });

      console.log('Admin notification sent');

    } catch (notificationError) {
      console.error('Error sending admin notification:', notificationError);
    }

    return NextResponse.json({ 
      success: true, 
      contractorId: contractor.id,
      message: 'Contractor application submitted successfully'
    });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ 
      error: 'Internal server error',
      details: error.message 
    }, { status: 500 });
  }
}

// Optional: GET method for testing
export async function GET() {
  return NextResponse.json({ 
    message: 'ServiceElite Contractor Signup API is running',
    timestamp: new Date().toISOString()
  });
}