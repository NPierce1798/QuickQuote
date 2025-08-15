'use client';

import { useState } from 'react';
import { Phone, Clock, Shield, Users, CheckCircle, Star, DollarSign, Target, TrendingUp, Wrench } from 'lucide-react';
import Link from 'next/link';

const Header = () => (
    <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-blue-600">
            <h1 className="text-2xl font-bold">ServiceElite</h1>
            <p className="text-gray-600 text-sm">For HVAC Contractors</p>
            </Link>
            
            <div className="flex items-center space-x-4">
            <a href="tel:+1234567890" className="flex items-center text-blue-600 hover:text-blue-800">
                <Phone className="w-5 h-5 mr-2" />
                <span className="font-semibold">Call Us: (123) 456-7890</span>
            </a>
            </div>
        </div>
        </div>
    </header>
    );

const Footer = () => (
    <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-xl font-bold mb-4">ServiceElite</h3>
        <p className="text-gray-400 mb-4">
            Connecting qualified HVAC contractors with customers who need help now.
        </p>
        <p className="text-gray-500">&copy; 2024 ServiceElite. All rights reserved.</p>
        </div>
    </footer>
    );

export default function ContractorPage() {
    console.log('ContractorPage is rendering!');
    
    const [contactForm, setContactForm] = useState({
        businessName: '',
        contactName: '',
        phone: '',
        email: '',
        serviceCity: '',
        serviceState: '',
        serviceRadius: '25'
    });

    const handleInputChange = (e) => {
        setContactForm({
        ...contactForm,
        [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
        console.log('Submitting contractor signup:', contactForm);
        
        const response = await fetch('/api/contractors', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(contactForm),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Failed to submit application: ${errorData.error || response.statusText}`);
        }

        const result = await response.json();
        console.log('Contractor signup successful:', result);
        
        // Reset form
        setContactForm({
            businessName: '',
            contactName: '',
            phone: '',
            email: '',
            serviceCity: '',
            serviceState: '',
            serviceRadius: '25'
        });
        
        alert('Thanks! We\'ll contact you within 24 hours to get you set up and start sending leads.');
        
        } catch (error) {
        console.error('Contractor signup error:', error);
        alert('Error submitting application: ' + error.message + '. Please try again.');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">

        <Header />

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Ready for More Quality HVAC Leads?
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                Join ServiceElite and get pre-qualified customers calling you within minutes
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
                <div className="text-2xl font-bold text-yellow-300 mb-2">
                You Only Pay When You Get Hired
                </div>
                <p className="text-lg text-blue-100">
                Zero upfront costs. Zero monthly fees. Only pay $50 when a customer hires you for the job.
                </p>
            </div>
            </div>
        </div>

        {/* How It Works for Contractors */}
        <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">How ServiceElite Works for You</h2>
                <p className="text-lg text-gray-600">Simple, fast, and profitable</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Customer Submits Request</h3>
                <p className="text-gray-600 text-sm">
                    Homeowner fills out detailed form with their HVAC problem and contact info
                </p>
                </div>

                <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">You Get Notified</h3>
                <p className="text-gray-600 text-sm">
                    Instant email with customer details, problem description, and contact info
                </p>
                </div>

                <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Wrench className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Call & Close</h3>
                <p className="text-gray-600 text-sm">
                    Call customer within 15 minutes, provide quote, schedule service
                </p>
                </div>

                <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Get Paid</h3>
                <p className="text-gray-600 text-sm">
                    Complete the job, get paid by customer. Pay us $50 only if you get hired.
                </p>
                </div>
            </div>
            </div>
        </div>

        {/* Benefits Section */}
        <div className="py-16 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
                Why Contractors Choose ServiceElite
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
                <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    ServiceElite Advantages
                </h3>
                <div className="space-y-4">
                    <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                        <div className="font-semibold text-gray-800">Pay Only When You Get Hired</div>
                        <div className="text-gray-600">$50 fee only when customer hires you. No upfront costs.</div>
                    </div>
                    </div>
                    <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                        <div className="font-semibold text-gray-800">Pre-Qualified Leads</div>
                        <div className="text-gray-600">Customers actively seeking service with detailed problem descriptions.</div>
                    </div>
                    </div>
                    <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                        <div className="font-semibold text-gray-800">Fast Response Required</div>
                        <div className="text-gray-600">Customers expect calls within 15 minutes. First to call often wins.</div>
                    </div>
                    </div>
                    <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                        <div className="font-semibold text-gray-800">Local Territory Focused</div>
                        <div className="text-gray-600">Only contractors in customer's area get notified.</div>
                    </div>
                    </div>
                    <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                        <div className="font-semibold text-gray-800">No Contracts</div>
                        <div className="text-gray-600">Cancel anytime. No long-term commitments.</div>
                    </div>
                    </div>
                </div>
                </div>

                <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                    <span className="text-red-500 mr-3">⚠️</span>
                    Other Lead Sources
                </h3>
                <div className="space-y-4">
                    <div className="flex items-start">
                    <span className="text-red-500 mr-3 mt-0.5">✗</span>
                    <div>
                        <div className="font-semibold text-gray-800">HomeAdvisor/Angie's List</div>
                        <div className="text-gray-600">$100-300 per lead whether you get hired or not. Shared with 4+ contractors.</div>
                    </div>
                    </div>
                    <div className="flex items-start">
                    <span className="text-red-500 mr-3 mt-0.5">✗</span>
                    <div>
                        <div className="font-semibold text-gray-800">Google Ads</div>
                        <div className="text-gray-600">$200-500/month minimum. Complex setup. Hit or miss results.</div>
                    </div>
                    </div>
                    <div className="flex items-start">
                    <span className="text-red-500 mr-3 mt-0.5">✗</span>
                    <div>
                        <div className="font-semibold text-gray-800">Referral Programs</div>
                        <div className="text-gray-600">Inconsistent. Hard to scale. Dependent on others.</div>
                    </div>
                    </div>
                    <div className="flex items-start">
                    <span className="text-red-500 mr-3 mt-0.5">✗</span>
                    <div>
                        <div className="font-semibold text-gray-800">Cold Calling</div>
                        <div className="text-gray-600">Time consuming. Low success rate. People hate cold calls.</div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>

        {/* Pricing Section */}
        <div className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Simple, Fair Pricing</h2>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border-2 border-green-200">
                <div className="text-4xl font-bold text-green-600 mb-4">$50</div>
                <div className="text-xl font-semibold text-gray-800 mb-4">Per Successful Job Only</div>
                <div className="text-gray-600 mb-6">
                On a typical $3,000 repair job, you keep $2,950. On a $8,000 replacement, you keep $7,950.
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
                <div>✅ No setup fees</div>
                <div>✅ No monthly costs</div>
                <div>✅ No lead fees</div>
                <div>✅ No contracts</div>
                <div>✅ No hidden charges</div>
                <div>✅ Cancel anytime</div>
                </div>
            </div>

            <p className="text-lg text-gray-600 mt-6">
                <strong>Example:</strong> If you get 3 jobs per month through ServiceElite, you pay $150 total and earn thousands more in revenue.
            </p>
            </div>
        </div>

        {/* FAQ Section */}
        <div className="py-16 bg-gray-100">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="space-y-8">
                <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">How do you verify I got hired?</h3>
                <p className="text-gray-600">We follow up with customers 24-48 hours after the lead to confirm if they hired someone and who they chose.</p>
                </div>
                
                <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">How many contractors get each lead?</h3>
                <p className="text-gray-600">Maximum 3 contractors per lead. We prioritize contractors who respond fastest and have the best track record.</p>
                </div>
                
                <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">What if the customer doesn't hire anyone?</h3>
                <p className="text-gray-600">You pay nothing. If no one gets hired, there's no fee for anyone.</p>
                </div>
                
                <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">How quickly do I need to respond?</h3>
                <p className="text-gray-600">Within 15 minutes for best results. First contractor to call often gets the job.</p>
                </div>
                
                <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">What areas do you serve?</h3>
                <p className="text-gray-600">Currently launching in Phoenix metro area. You set your service radius (10-50 miles) from your city center. We automatically match you with customers in your coverage area.</p>
                </div>
            </div>
            </div>
        </div>

        {/* Signup Form */}
        <div className="py-16 bg-blue-600 text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-xl text-blue-100">Join ServiceElite and start getting quality leads this week</p>
            </div>

            <div className="bg-white rounded-2xl p-8">
                <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Business Name *</label>
                    <input
                    type="text"
                    name="businessName"
                    required
                    value={contactForm.businessName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                    placeholder="ABC HVAC Services"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Contact Name *</label>
                    <input
                    type="text"
                    name="contactName"
                    required
                    value={contactForm.contactName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                    placeholder="John Smith"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                    type="tel"
                    name="phone"
                    required
                    value={contactForm.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                    placeholder="(555) 123-4567"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                    type="email"
                    name="email"
                    required
                    value={contactForm.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                    placeholder="john@abchvac.com"
                    />
                </div>

                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Area *</label>
                    <div className="grid md:grid-cols-3 gap-4">
                    <div>
                        <input
                        type="text"
                        name="serviceCity"
                        required
                        value={contactForm.serviceCity}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                        placeholder="Phoenix"
                        />
                        <label className="text-xs text-gray-500 mt-1">City</label>
                    </div>
                    <div>
                        <select
                        name="serviceState"
                        required
                        value={contactForm.serviceState}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                        >
                        <option value="">State</option>
                        <option value="AZ">Arizona</option>
                        <option value="TX">Texas</option>
                        <option value="NC">North Carolina</option>
                        <option value="FL">Florida</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="GA">Georgia</option>
                        <option value="NV">Nevada</option>
                        <option value="TN">Tennessee</option>
                        <option value="SC">South Carolina</option>
                        </select>
                        <label className="text-xs text-gray-500 mt-1">State</label>
                    </div>
                    <div>
                        <select
                        name="serviceRadius"
                        required
                        value={contactForm.serviceRadius}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                        >
                        <option value="10">10 miles</option>
                        <option value="15">15 miles</option>
                        <option value="20">20 miles</option>
                        <option value="25">25 miles</option>
                        <option value="30">30 miles</option>
                        <option value="40">40 miles</option>
                        <option value="50">50 miles</option>
                        </select>
                        <label className="text-xs text-gray-500 mt-1">Radius</label>
                    </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                    Example: "Phoenix, AZ within 25 miles" covers Scottsdale, Tempe, Mesa, Glendale, etc.
                    </p>
                </div>

                <div className="md:col-span-2 text-center">
                    <button
                    type="submit"
                    className="bg-gradient-to-r from-green-600 to-green-700 text-white font-bold py-4 px-8 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg"
                    >
                    Get Started - It's Free!
                    </button>
                    <p className="text-sm text-gray-600 mt-4">
                    We'll contact you within 24 hours to get you set up and sending leads.
                    </p>
                </div>
                </form>
            </div>
            </div>
        </div>

        <Footer />
        </div>
    );
}