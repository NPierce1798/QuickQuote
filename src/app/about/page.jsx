'use client';

import { Phone, Clock, Shield, Users, CheckCircle, Star } from 'lucide-react';
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

    export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        <Header />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Hero Section */}
            <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                About ServiceElite
            </h1>
            <p className="text-xl text-blue-200">
                Connecting homeowners with trusted HVAC professionals when you need help most
            </p>
            </div>

            {/* Main Content */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 mb-12">
            <div className="space-y-8">
                <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                    When your heating or cooling system breaks down, you need help fast. ServiceElite was created to solve the frustrating problem of finding reliable HVAC contractors quickly. We connect homeowners with pre-screened, licensed professionals who can respond to your emergency within minutes, not hours.
                </p>
                </div>

                <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">How It Works</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                    <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-blue-600">1</span>
                    </div>
                    <h3 className="font-semibold mb-2">Submit Request</h3>
                    <p className="text-gray-600">Fill out our simple 3-field form with your contact info and problem description.</p>
                    </div>
                    <div className="text-center">
                    <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-blue-600">2</span>
                    </div>
                    <h3 className="font-semibold mb-2">Get Contacted</h3>
                    <p className="text-gray-600">Licensed contractors in your area receive your request and call you within 15 minutes.</p>
                    </div>
                    <div className="text-center">
                    <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-blue-600">3</span>
                    </div>
                    <h3 className="font-semibold mb-2">Choose & Schedule</h3>
                    <p className="text-gray-600">Compare quotes and availability, then choose the contractor that best fits your needs.</p>
                    </div>
                </div>
                </div>

                <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose ServiceElite?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start">
                    <Shield className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                    <div>
                        <h3 className="font-semibold mb-2">Licensed & Insured Only</h3>
                        <p className="text-gray-600">All contractors in our network are pre-screened for proper licensing and insurance coverage.</p>
                    </div>
                    </div>
                    <div className="flex items-start">
                    <Clock className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                    <div>
                        <h3 className="font-semibold mb-2">Fast Response Times</h3>
                        <p className="text-gray-600">Average response time of 15 minutes means you get help when you need it most.</p>
                    </div>
                    </div>
                    <div className="flex items-start">
                    <Users className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                    <div>
                        <h3 className="font-semibold mb-2">Multiple Quotes</h3>
                        <p className="text-gray-600">Get quotes from multiple contractors so you can compare prices and choose what works best.</p>
                    </div>
                    </div>
                    <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                    <div>
                        <h3 className="font-semibold mb-2">No Obligation</h3>
                        <p className="text-gray-600">Getting quotes is completely free with no commitment to hire anyone.</p>
                    </div>
                    </div>
                </div>
                </div>

                <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Promise</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                    We understand that HVAC emergencies are stressful and inconvenient. That's why we've built a service focused on speed, reliability, and transparency. We don't charge homeowners anything - our service is completely free. We simply connect you with qualified professionals who can solve your heating and cooling problems quickly and professionally.
                </p>
                </div>
            </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h2 className="text-2xl font-bold text-white mb-4">Need HVAC Help Right Now?</h2>
                <p className="text-blue-200 mb-6">Get connected with licensed contractors in your area within 15 minutes</p>
                <Link 
                href="/"
                className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-4 px-8 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                Get Emergency Help Now
                </Link>
            </div>
            </div>
        </div>

        <Footer />
        </div>
    );
}