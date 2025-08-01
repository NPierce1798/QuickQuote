'use client';

import { Phone, Clock, Shield, Users, CheckCircle, Star, Mail, MapPin } from 'lucide-react';
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

    export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        <Header />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Hero Section */}
            <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Contact Us
            </h1>
            <p className="text-xl text-blue-200">
                Questions about our service? We're here to help 24/7
            </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h2>
                
                <div className="space-y-6">
                <div className="flex items-start">
                    <Phone className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                    <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Emergency HVAC Help</h3>
                    <p className="text-gray-600 mb-2">Need immediate HVAC assistance?</p>
                    <Link 
                        href="/"
                        className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                        Use our emergency request form →
                    </Link>
                    </div>
                </div>

                <div className="flex items-start">
                    <Mail className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                    <div>
                    <h3 className="font-semibold text-gray-800 mb-1">General Questions</h3>
                    <p className="text-gray-600 mb-2">For general inquiries and support</p>
                    <a 
                        href="mailto:support@ServiceElite.com"
                        className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                        support@ServiceElite.com
                    </a>
                    </div>
                </div>

                <div className="flex items-start">
                    <Users className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                    <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Contractors</h3>
                    <p className="text-gray-600 mb-2">Interested in joining our network?</p>
                    <a 
                        href="mailto:contractors@ServiceElite.com"
                        className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                        contractors@ServiceElite.com
                    </a>
                    </div>
                </div>

                <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                    <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Service Areas</h3>
                    <p className="text-gray-600">
                        Currently serving major metropolitan areas. Check our homepage to see if we cover your location.
                    </p>
                    </div>
                </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
                
                <div className="space-y-6">
                <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Is your service really free?</h3>
                    <p className="text-gray-600">
                    Yes! There's no cost to homeowners. We connect you with licensed contractors who pay us for qualified leads.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold text-gray-800 mb-2">How quickly will contractors contact me?</h3>
                    <p className="text-gray-600">
                    Most contractors call within 15 minutes of your request. Emergency requests are prioritized for immediate response.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Are the contractors licensed and insured?</h3>
                    <p className="text-gray-600">
                    Absolutely. All contractors in our network are pre-screened for proper licensing and insurance coverage.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold text-gray-800 mb-2">What if I don't like the quotes I receive?</h3>
                    <p className="text-gray-600">
                    You're under no obligation to hire anyone. All quotes are free, and you can choose the contractor that best fits your needs and budget.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Do you provide the HVAC service directly?</h3>
                    <p className="text-gray-600">
                    No, we're a referral service. We connect you with independent, licensed HVAC contractors in your area who perform the actual work.
                    </p>
                </div>
                </div>
            </div>
            </div>

            {/* Emergency CTA */}
            <div className="text-center mt-12">
            <div className="bg-red-600/20 backdrop-blur-sm rounded-2xl p-8 border border-red-400/30">
                <h2 className="text-2xl font-bold text-white mb-4">HVAC Emergency?</h2>
                <p className="text-red-100 mb-6">Don't wait - get help from licensed contractors in your area right now</p>
                <Link 
                href="/"
                className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-4 px-8 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                🔥 Get Emergency Help Now
                </Link>
            </div>
            </div>
        </div>

        <Footer />
        </div>
    );
}