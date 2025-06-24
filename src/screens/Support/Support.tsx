import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Send, Phone, Mail, MessageCircle, HelpCircle } from "lucide-react";

export const Support = (): JSX.Element => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        category: ''
      });
    }, 3000);
  };

  // Sidebar Component
  const Sidebar = () => (
    <div className="fixed left-0 top-0 h-full w-20 bg-white flex flex-col items-center py-6 space-y-8 z-10 shadow-lg">
      <div 
        className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center transform hover:scale-110 transition-all duration-300 cursor-pointer"
        onClick={() => navigate('/home')}
      >
        <div className="w-8 h-8 bg-white rounded-lg"></div>
      </div>

      <div className="flex flex-col space-y-6">
        <div 
          className="relative group cursor-pointer"
          onClick={() => navigate('/messages')}
        >
          <div className="w-12 h-12 bg-gray-100 hover:bg-pink-100 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
            <div className="w-6 h-6 text-gray-600 group-hover:text-pink-600">💬</div>
          </div>
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#FC1924] rounded-full flex items-center justify-center animate-pulse">
            <span className="text-xs text-white font-bold">2</span>
          </div>
        </div>

        <div 
          className="group cursor-pointer"
          onClick={() => navigate('/games')}
        >
          <div className="w-12 h-12 bg-gray-100 hover:bg-purple-100 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
            <div className="w-6 h-6 text-gray-600 group-hover:text-purple-600">🎮</div>
          </div>
        </div>

        <div 
          className="group cursor-pointer"
          onClick={() => navigate('/discovery')}
        >
          <div className="w-12 h-12 bg-gray-100 hover:bg-blue-100 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
            <div className="w-6 h-6 text-gray-600 group-hover:text-blue-600">🌐</div>
          </div>
        </div>

        <div 
          className="group cursor-pointer"
          onClick={() => navigate('/profile')}
        >
          <div className="w-12 h-12 bg-gray-100 hover:bg-orange-100 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
            <div className="w-6 h-6 text-gray-600 group-hover:text-orange-600">👤</div>
          </div>
        </div>

        <div className="group cursor-pointer">
          <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
            <div className="w-6 h-6 text-yellow-600">❓</div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#1a1a1a] flex relative overflow-hidden font-['Space_Grotesk']">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-20 p-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <button 
            onClick={() => navigate('/home')}
            className="flex items-center space-x-2 mb-8 text-white/80 hover:text-white transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </button>

          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold text-white mb-4">Need Help?</h1>
            <p className="text-xl text-gray-400">We're here to support you every step of the way</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-slide-up">
              <div className="bg-[#2a2a2a] rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Email Support</h3>
                      <p className="text-gray-400">support@evoke.com</p>
                      <p className="text-gray-500 text-sm">Response within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Phone Support</h3>
                      <p className="text-gray-400">+234 800 EVOKE (38653)</p>
                      <p className="text-gray-500 text-sm">Mon-Fri, 9AM-6PM WAT</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Live Chat</h3>
                      <p className="text-gray-400">Available 24/7</p>
                      <p className="text-gray-500 text-sm">Instant support</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-[#2a2a2a] rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
                
                <div className="space-y-4">
                  <div className="border-b border-gray-600 pb-4">
                    <h3 className="text-white font-semibold mb-2">How do I create an event?</h3>
                    <p className="text-gray-400 text-sm">Click on "Create Vibe" from the homepage and follow the step-by-step process to set up your event.</p>
                  </div>
                  
                  <div className="border-b border-gray-600 pb-4">
                    <h3 className="text-white font-semibold mb-2">How do I buy tickets?</h3>
                    <p className="text-gray-400 text-sm">Browse events, click "Buy Ticket" on any event you're interested in, and complete the payment process.</p>
                  </div>
                  
                  <div className="border-b border-gray-600 pb-4">
                    <h3 className="text-white font-semibold mb-2">Can I get a refund?</h3>
                    <p className="text-gray-400 text-sm">Refund policies vary by event. Check the event details or contact the event organizer directly.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-semibold mb-2">How do I scan tickets?</h3>
                    <p className="text-gray-400 text-sm">Event organizers can use the built-in QR code scanner from their event dashboard to validate tickets.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-[#2a2a2a] rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                
                {showSuccess ? (
                  <div className="text-center py-12 animate-fade-in">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                      <HelpCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-green-400">We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white text-sm font-medium mb-2">Name</label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="w-full bg-[#3a3a3a] border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FC1924] transition-all duration-200"
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-white text-sm font-medium mb-2">Email</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="w-full bg-[#3a3a3a] border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FC1924] transition-all duration-200"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Category</label>
                      <select
                        value={formData.category}
                        onChange={(e) => handleInputChange('category', e.target.value)}
                        className="w-full bg-[#3a3a3a] border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FC1924] transition-all duration-200"
                        required
                      >
                        <option value="">Select a category</option>
                        <option value="technical">Technical Support</option>
                        <option value="billing">Billing & Payments</option>
                        <option value="events">Event Management</option>
                        <option value="account">Account Issues</option>
                        <option value="feedback">Feedback & Suggestions</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Subject</label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        className="w-full bg-[#3a3a3a] border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FC1924] transition-all duration-200"
                        placeholder="Brief description of your issue"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Message</label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        rows={6}
                        className="w-full bg-[#3a3a3a] border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FC1924] transition-all duration-200 resize-none"
                        placeholder="Please describe your issue in detail..."
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#FC1924] hover:bg-[#e01620] text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};