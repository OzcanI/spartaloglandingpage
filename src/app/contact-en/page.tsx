import type { Metadata } from 'next'
import { Mail, MapPin, Phone, Send, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact - SpartaLog',
  description: 'Get in touch with SpartaLog. Contact us for questions and suggestions.',
}

export default function ContactEnPage() {
  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            href="/en"
            className="inline-flex items-center space-x-2 text-[#02cf68] hover:text-[#02cf68]/80 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="bg-gray-900 rounded-lg shadow-lg p-8 border border-gray-800">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#02cf68] mb-4">Contact</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Get in touch with us for questions, suggestions, or feedback about SpartaLog.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-[#02cf68] mb-6">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-[#02cf68] p-3 flex-shrink-0">
                    <Mail className="w-full h-full text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Email</h3>
                    <p className="text-gray-300">ibosnfs1997@gmail.com</p>
                    <p className="text-sm text-gray-400 mt-1">Send email for fastest response</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-[#02cf68] p-3 flex-shrink-0">
                    <MapPin className="w-full h-full text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Address</h3>
                    <p className="text-gray-300">Bursa, Turkey</p>
                    <p className="text-sm text-gray-400 mt-1">Developer office</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-[#02cf68] p-3 flex-shrink-0">
                    <Phone className="w-full h-full text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Response Time</h3>
                    <p className="text-gray-300">24-48 hours</p>
                    <p className="text-sm text-gray-400 mt-1">We respond within business days</p>
                  </div>
                </div>
              </div>

              {/* <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mt-8">
                <h3 className="text-lg font-medium text-[#02cf68] mb-3">Frequently Asked Questions</h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <p><strong>Is the app free?</strong> Yes, SpartaLog is completely free.</p>
                  <p><strong>Which platforms are supported?</strong> Currently being developed for iOS.</p>
                  <p><strong>Is my data secure?</strong> Yes, all your data is stored encrypted.</p>
                </div>
              </div> */ }
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h2 className="text-2xl font-semibold text-[#02cf68] mb-6">Send Message</h2>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#02cf68] transition-colors"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#02cf68] transition-colors"
                    placeholder="example@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#02cf68] transition-colors"
                    required
                  >
                    <option value="">Select subject</option>
                    <option value="general">General Question</option>
                    <option value="bug">Bug Report</option>
                    <option value="feature">Feature Request</option>
                    <option value="support">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#02cf68] transition-colors resize-none"
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#02cf68] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#02cf68]/90 transition-colors flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>

              <div className="mt-6 p-4 bg-gray-700 rounded-lg">
                <p className="text-sm text-gray-300">
                  <strong>Note:</strong> This form is currently for demo purposes. Please use our email address for real contact.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-[#02cf68] mb-4">About SpartaLog</h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                SpartaLog is an AI-powered fitness tracking application. 
                It analyzes your workouts, tracks your progress, and helps you achieve your fitness goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
