'use client';

import { useState } from 'react';
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

export default function HomePage() {
  const [formData, setFormData] = useState({
    phone: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    problemType: '',
    urgency: 'emergency'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmedContractors, setConfirmedContractors] = useState(0);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Add your API call here
    console.log('Form submitted:', formData);
    
    setIsSubmitted(true);
    
    // Simulate contractor confirmations
    setTimeout(() => setConfirmedContractors(1), 2000);
    setTimeout(() => setConfirmedContractors(2), 4000);
    setTimeout(() => setConfirmedContractors(3), 6000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Request Submitted!</h2>
          <p className="text-gray-600 mb-6">Licensed contractors in your area have been notified.</p>
          
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-center mb-2">
              <Users className="w-5 h-5 text-blue-600 mr-2" />
              <span className="font-semibold text-blue-800">
                {confirmedContractors} of 3 contractors confirmed
              </span>
            </div>
            <div className="w-full bg-blue-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${(confirmedContractors / 3) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="text-sm text-gray-500 mb-6">
            <p className="mb-2">✓ Expect calls within 30 minutes</p>
            <p className="mb-2">✓ Compare quotes and availability</p>
            <p>✓ Choose the contractor that fits your needs</p>
          </div>

          <button
            onClick={() => setIsSubmitted(false)}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      <Header />

      {/* Trust Banner */}
      <div className="bg-white/5 backdrop-blur-sm border-b border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
            <div className="flex flex-col items-center">
              <div className="text-lg md:text-xl font-bold text-yellow-300">15 min</div>
              <div className="text-xs md:text-sm text-blue-200">Average Response</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-lg md:text-xl font-bold text-yellow-300">100%</div>
              <div className="text-xs md:text-sm text-blue-200">Licensed & Insured</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-lg md:text-xl font-bold text-yellow-300">Free</div>
              <div className="text-xs md:text-sm text-blue-200">No Hidden Fees</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-lg md:text-xl font-bold text-yellow-300">24/7</div>
              <div className="text-xs md:text-sm text-blue-200">Emergency Service</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Value Proposition */}
          <div className="text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Emergency HVAC Repair
              <span className="block text-yellow-300">Get 3 Free Quotes</span>
              <span className="block text-2xl lg:text-3xl">in 30 Minutes</span>
            </h2>
            <p className='text-md mb-6'>We send your info to <span className='text-yellow-300 font-bold'>3 contractors in your area</span>, they <span className='text-yellow-300 font-bold'>call you with quotes</span>, you <span className='text-yellow-300 font-bold'>pick the best one</span>, no commitment</p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Clock className="w-6 h-6 text-yellow-300 mr-3" />
                <span className="text-lg">Average response time: 15 minutes</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-6 h-6 text-yellow-300 mr-3" />
                <span className="text-lg">Licensed & insured contractors only</span>
              </div>
              <div className="flex items-center">
                <Star className="w-6 h-6 text-yellow-300 mr-3" />
                <span className="text-lg">Rated contractors in your area</span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold mb-3">Common Problems We Solve:</h3>
              <ul className="grid grid-cols-2 gap-2 text-sm">
                <li>• AC not cooling</li>
                <li>• Furnace not heating</li>
                <li>• Strange noises</li>
                <li>• High energy bills</li>
                <li>• Poor air quality</li>
                <li>• System breakdowns</li>
              </ul>
            </div>
          </div>

          {/* Right Column - Lead Form */}
          <div id="form" className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Get Help in 15 Minutes</h3>
              <p className="text-gray-600">Quick address details help us find the right contractors</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 text-lg text-black placeholder-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="(555) 123-4567"
                />
              </div>

              {/* Address Fields */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Address *</label>
                
                <div className="space-y-3">
                  <input
                    type="text"
                    name="streetAddress"
                    required
                    value={formData.streetAddress}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 text-lg text-black placeholder-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Street address"
                  />
                  
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-lg text-black placeholder-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="City"
                    />
                    
                    <div className="grid grid-cols-2 gap-2">
                      <select
                        name="state"
                        required
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 text-lg text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">State</option>
                        <option value="AL">AL</option>
                        <option value="AK">AK</option>
                        <option value="AZ">AZ</option>
                        <option value="AR">AR</option>
                        <option value="CA">CA</option>
                        <option value="CO">CO</option>
                        <option value="CT">CT</option>
                        <option value="DE">DE</option>
                        <option value="FL">FL</option>
                        <option value="GA">GA</option>
                        <option value="HI">HI</option>
                        <option value="ID">ID</option>
                        <option value="IL">IL</option>
                        <option value="IN">IN</option>
                        <option value="IA">IA</option>
                        <option value="KS">KS</option>
                        <option value="KY">KY</option>
                        <option value="LA">LA</option>
                        <option value="ME">ME</option>
                        <option value="MD">MD</option>
                        <option value="MA">MA</option>
                        <option value="MI">MI</option>
                        <option value="MN">MN</option>
                        <option value="MS">MS</option>
                        <option value="MO">MO</option>
                        <option value="MT">MT</option>
                        <option value="NE">NE</option>
                        <option value="NV">NV</option>
                        <option value="NH">NH</option>
                        <option value="NJ">NJ</option>
                        <option value="NM">NM</option>
                        <option value="NY">NY</option>
                        <option value="NC">NC</option>
                        <option value="ND">ND</option>
                        <option value="OH">OH</option>
                        <option value="OK">OK</option>
                        <option value="OR">OR</option>
                        <option value="PA">PA</option>
                        <option value="RI">RI</option>
                        <option value="SC">SC</option>
                        <option value="SD">SD</option>
                        <option value="TN">TN</option>
                        <option value="TX">TX</option>
                        <option value="UT">UT</option>
                        <option value="VT">VT</option>
                        <option value="VA">VA</option>
                        <option value="WA">WA</option>
                        <option value="WV">WV</option>
                        <option value="WI">WI</option>
                        <option value="WY">WY</option>
                      </select>
                      
                      <input
                        type="text"
                        name="zipCode"
                        required
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 text-lg text-black placeholder-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="ZIP"
                        pattern="[0-9]{5}(-[0-9]{4})?"
                        maxLength="10"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">What's the problem? *</label>
                <textarea
                  name="problemType"
                  required
                  value={formData.problemType}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-4 py-3 text-lg text-black placeholder-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                  placeholder="Describe your HVAC problem in detail (e.g., 'AC stopped cooling yesterday, warm air coming from vents, thermostat set to 72 but house is 85 degrees')"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-4 px-6 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg"
              >
                🔥 Get Emergency Help Now - FREE
              </button>

              <p className="text-sm text-gray-500 text-center">
                Licensed contractors will call you within 15 minutes. No commitment required.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How ServiceElite Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Skip the hassle of calling multiple contractors. Get connected with qualified professionals instantly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Submit Your Request</h3>
              <p className="text-gray-600">
                Fill out our simple form with your contact info, address, and problem description. Takes under 2 minutes.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Get Multiple Calls</h3>
              <p className="text-gray-600">
                Up to 3 licensed contractors in your area will call you within 15 minutes with quotes and availability.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Choose & Schedule</h3>
              <p className="text-gray-600">
                Compare quotes, availability, and reviews. Choose the contractor that best fits your needs and budget.
              </p>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Why ServiceElite vs. Other Options?</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  ServiceElite Advantages
                </h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span><strong>Completely free</strong> - no hidden fees or charges</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span><strong>Pre-screened contractors</strong> - licensed & insured only</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span><strong>Fast response</strong> - calls within 15 minutes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span><strong>Multiple quotes</strong> - compare prices instantly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span><strong>No obligation</strong> - you choose or walk away</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="text-red-500 mr-2">⚠️</span>
                  Other Methods
                </h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span><strong>Calling contractors directly:</strong> Time consuming, many don't answer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span><strong>HomeAdvisor/Angie's List:</strong> Pay membership fees, mixed quality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span><strong>Google searching:</strong> Hard to verify credentials, hit or miss</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span><strong>Emergency services:</strong> Often overpriced, limited options</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-lg text-gray-700 mb-4">
                <strong>Bottom line:</strong> Get multiple qualified contractors competing for your business in minutes, not hours.
              </p>
              <a 
                href="#form" 
                className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 px-8 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get Started Now - It's Free
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}