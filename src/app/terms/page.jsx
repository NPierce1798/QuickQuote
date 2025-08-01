'use client';

import { Phone } from 'lucide-react';
import Link from 'next/link';

const Header = () => (
    <header className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-white">
            <h1 className="text-2xl font-bold">ServiceElite</h1>
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
            <h3 className="text-xl font-bold mb-4">ServiceElite</h3>
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
            <p>&copy; 2024 ServiceElite. All rights reserved.</p>
        </div>
        </div>
    </footer>
    );

    export default function TermsOfServicePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        <Header />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Terms of Service</h1>
            <p className="text-gray-600 mb-8">Last updated: December 2024</p>

            <div className="space-y-8">
                <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
                <div className="space-y-4 text-gray-600">
                    <p>By accessing and using ServiceElite's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
                </div>
                </section>

                <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">2. Service Description</h2>
                <div className="space-y-4 text-gray-600">
                    <p>ServiceElite is a referral service that connects homeowners with licensed HVAC contractors. We:</p>
                    <ul className="list-disc pl-6 space-y-2">
                    <li>Facilitate connections between homeowners and HVAC professionals</li>
                    <li>Do not provide HVAC services directly</li>
                    <li>Do not employ or control the contractors in our network</li>
                    <li>Are not responsible for the work performed by contractors</li>
                    </ul>
                </div>
                </section>

                <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">3. User Responsibilities</h2>
                <div className="space-y-4 text-gray-600">
                    <p>When using our service, you agree to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                    <li>Provide accurate and complete information</li>
                    <li>Use the service only for legitimate HVAC needs</li>
                    <li>Treat contractors professionally and respectfully</li>
                    <li>Not abuse or misuse our referral system</li>
                    <li>Comply with all applicable laws and regulations</li>
                    </ul>
                </div>
                </section>

                <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Contractor Relationships</h2>
                <div className="space-y-4 text-gray-600">
                    <p>Important disclaimers about contractors:</p>
                    <ul className="list-disc pl-6 space-y-2">
                    <li>All contractors are independent businesses, not employees of ServiceElite</li>
                    <li>We pre-screen contractors for licensing and insurance but do not guarantee their work</li>
                    <li>All contracts for HVAC services are directly between you and the contractor</li>
                    <li>We are not responsible for contractor performance, pricing, or service quality</li>
                    <li>Any disputes should be resolved directly with the contractor</li>
                    </ul>
                </div>
                </section>

                <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">5. No Warranties</h2>
                <div className="space-y-4 text-gray-600">
                    <p>Our referral service is provided "as is" without warranties of any kind. We do not warrant:</p>
                    <ul className="list-disc pl-6 space-y-2">
                    <li>That contractors will be available when needed</li>
                    <li>The quality, timeliness, or pricing of contractor services</li>
                    <li>That our website will be error-free or uninterrupted</li>
                    <li>The accuracy of information provided by contractors</li>
                    </ul>
                </div>
                </section>

                <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">6. Limitation of Liability</h2>
                <div className="space-y-4 text-gray-600">
                    <p>ServiceElite shall not be liable for:</p>
                    <ul className="list-disc pl-6 space-y-2">
                    <li>Any damages arising from contractor services or work performed</li>
                    <li>Property damage caused by contractors</li>
                    <li>Personal injury resulting from contractor services</li>
                    <li>Financial losses related to contractor pricing or billing</li>
                    <li>Indirect, incidental, or consequential damages</li>
                    </ul>
                    <p>Our maximum liability is limited to the amount you paid for our services (which is $0 for homeowners).</p>
                </div>
                </section>

                <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">7. Indemnification</h2>
                <div className="space-y-4 text-gray-600">
                    <p>You agree to indemnify and hold ServiceElite harmless from any claims, damages, or expenses arising from:</p>
                    <ul className="list-disc pl-6 space-y-2">
                    <li>Your use of our service</li>
                    <li>Your interactions with contractors</li>
                    <li>Any violation of these terms</li>
                    <li>Any false or misleading information you provide</li>
                    </ul>
                </div>
                </section>

                <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">8. Privacy</h2>
                <div className="space-y-4 text-gray-600">
                    <p>Your privacy is important to us. Please review our <Link href="/privacy" className="text-blue-600 hover:text-blue-800">Privacy Policy</Link>, which also governs your use of the service, to understand our practices.</p>
                </div>
                </section>

                <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">9. Termination</h2>
                <div className="space-y-4 text-gray-600">
                    <p>We may terminate or suspend your access to our service immediately, without prior notice, for conduct that we believe violates these terms or is harmful to other users, contractors, or our business interests.</p>
                </div>
                </section>

                <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">10. Changes to Terms</h2>
                <div className="space-y-4 text-gray-600">
                    <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to this page. Your continued use of the service after changes are posted constitutes acceptance of the modified terms.</p>
                </div>
                </section>

                <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">11. Governing Law</h2>
                <div className="space-y-4 text-gray-600">
                    <p>These terms shall be governed by and construed in accordance with the laws of [Your State], without regard to conflict of law principles.</p>
                </div>
                </section>

                <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">12. Contact Information</h2>
                <div className="space-y-4 text-gray-600">
                    <p>If you have any questions about these Terms of Service, please contact us:</p>
                    <ul className="list-none space-y-2">
                    <li>Email: <a href="mailto:legal@ServiceElite.com" className="text-blue-600 hover:text-blue-800">legal@ServiceElite.com</a></li>
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