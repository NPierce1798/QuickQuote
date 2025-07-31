'use client';

import { Phone } from 'lucide-react';
import Link from 'next/link';

const Header = () => (
    <header className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-white">
            <h1 className="text-2xl font-bold">QuickHVAC</h1>
            <p className="text-blue-200 text-sm">Licensed Contractor Network</p>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-6 text-white">
            <Link href="/about" className="hover:text-yellow-300 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-yellow-300 transition-colors">Contact</Link>
            <div className="flex items-center text-yellow-300">
                <Phone className="w-5 h-5 mr-2" />
                <span className="text-lg font-semibold">24/7 Emergency</span>
            </div>
            </nav>
            
            <div className="md:hidden flex items-center text-yellow-300">
            <Phone className="w-5 h-5 mr-2" />
            <span className="text-sm font-semibold">24/7</span>
            </div>
        </div>
        </div>
    </header>
    );

    const Footer = () => (
    <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
            <div>
            <h3 className="text-xl font-bold mb-4">QuickHVAC</h3>
            <p className="text-gray-400">
                Connecting homeowners with licensed HVAC contractors for emergency repairs and installations.
            </p>
            </div>
            <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
                <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">About Us</Link>
                <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">Contact</Link>
                <Link href="/privacy" className="block text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="block text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
            </div>
            </div>
            <div>
            <h4 className="font-semibold mb-4">Emergency Service</h4>
            <p className="text-gray-400 mb-2">Available 24/7 for HVAC emergencies</p>
            <p className="text-yellow-300 font-semibold">Licensed & Insured Contractors</p>
            </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 QuickHVAC. All rights reserved.</p>
        </div>
        </div>
    </footer>
    );

    export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        <Header />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
            <p className="text-gray-600 mb-8">Last updated: December 2024</p>

            <div className="space-y-8">
                <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
                <div className="space-y-4 text-gray-600">
                    <p>When you use our HVAC contractor referral service, we collect the following information:</p>
                    <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Contact Information:</strong> Phone number, service address</li>
                    <li><strong>Service Details:</strong> Type of HVAC problem, urgency level</li>
                    <li><strong>Technical Information:</strong> IP address, browser type, device information</li>
                    <li><strong>Usage Data:</strong> How you interact with our website and services</li>
                    </ul>
                </div>
                </section>

                <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
                <div className="space-y-4 text-gray-600">
                    <p>We use your information to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                    <li>Connect you with licensed HVAC contractors in your area</li>
                    <li>Facilitate communication between you and contractors</li>
                    <li>Improve our service and website functionality</li>
                    <li>Send service-related communications</li>
                    <li>Comply with legal obligations</li>
                    </ul>
                </div>
                </section>

                <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Information Sharing</h2>
                <div className="space-y-4 text-gray-600">
                    <p>We share your information with:</p>
                    <ul className="list-disc pl-6 space-y-2">
                    <li><strong>HVAC Contractors:</strong> We share your contact and service request details with licensed contractors in your area who can help with your request</li>
                    <li><strong>Service Providers:</strong> Third-party companies that help us operate our website and provide our services</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                    </ul>
                    <p><strong>We do not sell your personal information to third parties.</strong></p>
                </div>
                </section>

                <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Data Security</h2>
                <div className="space-y-4 text-gray-600">
                    <p>We implement appropriate security measures to protect your personal information, including:</p>
                    <ul className="list-disc pl-6 space-y-2">
                    <li>Secure SSL encryption for data transmission</li>
                    <li>Regular security assessments and updates</li>
                    <li>Limited access to personal information</li>
                    <li>Secure data storage practices</li>
                    </ul>
                </div>
                </section>

                <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Your Rights</h2>
                <div className="space-y-4 text-gray-600">
                    <p>You have the right to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                    <li>Access the personal information we have about you</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt out of non-essential communications</li>
                    </ul>
                    <p>To exercise these rights, contact us at <a href="mailto:privacy@quickhvac.com" className="text-blue-600 hover:text-blue-800">privacy@quickhvac.com</a></p>
                </div>
                </section>

                <section>
                <h2 className="text-xl font-semibent text-gray-800 mb-4">6. Cookies and Tracking</h2>
                <div className="space-y-4 text-gray-600">
                    <p>We use cookies and similar technologies to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                    <li>Remember your preferences</li>
                    <li>Analyze website traffic and usage</li>
                    <li>Improve our services</li>
                    <li>Provide relevant advertising</li>
                    </ul>
                    <p>You can control cookie settings through your browser preferences.</p>
                </div>
                </section>

                <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">7. Changes to This Policy</h2>
                <div className="space-y-4 text-gray-600">
                    <p>We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date.</p>
                </div>
                </section>

                <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">8. Contact Us</h2>
                <div className="space-y-4 text-gray-600">
                    <p>If you have questions about this privacy policy, please contact us:</p>
                    <ul className="list-none space-y-2">
                    <li>Email: <a href="mailto:privacy@quickhvac.com" className="text-blue-600 hover:text-blue-800">privacy@quickhvac.com</a></li>
                    <li>Address: [Your Business Address]</li>
                    </ul>
                </div>
                </section>
            </div>
            </div>
        </div>

        <Footer />
        </div>
    );
}