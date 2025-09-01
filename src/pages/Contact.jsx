import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/habimana-happy-ntaganira/",
    icon: "💼",
    color: "from-blue-500 to-blue-600",
    hoverColor: "hover:from-blue-600 hover:to-blue-700"
  },
  {
    name: "GitHub",
    url: "https://github.com/Habimana06",
    icon: "🚀",
    color: "from-gray-700 to-gray-800",
    hoverColor: "hover:from-gray-800 hover:to-gray-900"
  },
  {
    name: "Email",
    url: "mailto:hntaganira06@gmail.com",
    icon: "✉️",
    color: "from-purple-500 to-purple-600",
    hoverColor: "hover:from-purple-600 hover:to-purple-700"
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    icon: "🐦",
    color: "from-sky-500 to-sky-600",
    hoverColor: "hover:from-sky-600 hover:to-sky-700"
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    timeline: '',
    briefLink: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Send via Formspree (no backend)
      const response = await fetch('https://formspree.io/f/mblkvvkp', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          projectType: formData.projectType,
          budget: formData.budget,
          timeline: formData.timeline,
          briefLink: formData.briefLink,
          message: formData.message,
          _subject: `Portfolio message from ${formData.name}`,
        })
      });
      if (!response.ok) throw new Error('Failed to send');
      setSubmitStatus('success');
      setShowDialog(true);
      setFormData({ name: '', email: '', projectType: '', budget: '', timeline: '', briefLink: '', message: '' });
    } catch (err) {
      console.error(err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-black text-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-block">
            <h2 className="text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Let's Connect
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full animate-expand"></div>
          </div>
          <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto animate-fade-in-delayed">
            Ready to bring your ideas to life? I'd love to hear about your project and explore how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0 transform translate-x-[-50px]'}`}>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <span className="text-3xl">📝</span>
                Send me a message
              </h3>

              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Your Name"
                    required
                    className={`w-full p-4 bg-white/10 border-2 rounded-2xl transition-all duration-300 focus:outline-none focus:bg-white/20 ${
                      focusedField === 'name' 
                        ? 'border-purple-500 shadow-lg transform scale-105' 
                        : 'border-white/20 hover:border-white/30'
                    }`}
                  />
                  {focusedField === 'name' && (
                    <div className="absolute -top-3 left-4 bg-purple-500 text-white text-xs px-2 py-1 rounded-full animate-bounce">
                      What should I call you?
                    </div>
                  )}
                  </div>
                  <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Your Email"
                    required
                    className={`w-full p-4 bg-white/10 border-2 rounded-2xl transition-all duration-300 focus:outline-none focus:bg-white/20 ${
                      focusedField === 'email' 
                        ? 'border-purple-500 shadow-lg transform scale-105' 
                        : 'border-white/20 hover:border-white/30'
                    }`}
                  />
                  {focusedField === 'email' && (
                    <div className="absolute -top-3 left-4 bg-purple-500 text-white text-xs px-2 py-1 rounded-full animate-bounce">
                      I'll get back to you here!
                    </div>
                  )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('projectType')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full p-4 bg-slate-900/90 text-white border-2 rounded-2xl transition-all duration-300 focus:outline-none focus:bg-slate-900 appearance-none ${
                        focusedField === 'projectType' 
                          ? 'border-purple-500 shadow-lg transform scale-105' 
                          : 'border-white/20 hover:border-white/30'
                      }`}
                      required
                    >
                      <option value="" disabled>System Type</option>
                      <option>Website</option>
                      <option>Mobile App</option>
                      <option>Backend API</option>
                      <option>UI/UX Design</option>
                      <option>E-commerce</option>
                      <option>LMS</option>
                      <option>ERP</option>
                      <option>Other</option>
                    </select>
                    <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/60">▾</div>
                  </div>
                  <div className="relative">
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('budget')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full p-4 bg-slate-900/90 text-white border-2 rounded-2xl transition-all duration-300 focus:outline-none focus:bg-slate-900 appearance-none ${
                        focusedField === 'budget' 
                          ? 'border-purple-500 shadow-lg transform scale-105' 
                          : 'border-white/20 hover:border-white/30'
                      }`}
                      required
                    >
                      <option value="" disabled>Budget (RWF)</option>
                      <option>0 - 200,000 RWF</option>
                      <option>200,000 - 500,000 RWF</option>
                      <option>500,000 - 1,000,000 RWF</option>
                      <option>1,000,000 - 3,000,000 RWF</option>
                      <option>3,000,000+ RWF</option>
                    </select>
                    <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/60">▾</div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('timeline')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full p-4 bg-slate-900/90 text-white border-2 rounded-2xl transition-all duration-300 focus:outline-none focus:bg-slate-900 appearance-none ${
                        focusedField === 'timeline' 
                          ? 'border-purple-500 shadow-lg transform scale-105' 
                          : 'border-white/20 hover:border-white/30'
                      }`}
                      required
                    >
                      <option value="" disabled>Timeline</option>
                      <option>ASAP</option>
                      <option>1–3 months</option>
                      <option>3–6 months</option>
                      <option>6+ months</option>
                    </select>
                    <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/60">▾</div>
                  </div>
                  <div className="relative">
                    <input
                      type="url"
                      name="briefLink"
                      value={formData.briefLink}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('briefLink')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Link to brief or files (optional)"
                      className={`w-full p-4 bg-white/10 border-2 rounded-2xl transition-all duration-300 focus:outline-none focus:bg-white/20 ${
                        focusedField === 'briefLink' 
                          ? 'border-purple-500 shadow-lg transform scale-105' 
                          : 'border-white/20 hover:border-white/30'
                      }`}
                    />
                  </div>
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Tell me about your project or just say hi!"
                    required
                    rows="5"
                    className={`w-full p-4 bg-white/10 border-2 rounded-2xl transition-all duration-300 focus:outline-none focus:bg-white/20 resize-none ${
                      focusedField === 'message' 
                        ? 'border-purple-500 shadow-lg transform scale-105' 
                        : 'border-white/20 hover:border-white/30'
                    }`}
                  ></textarea>
                  {focusedField === 'message' && (
                    <div className="absolute -top-3 left-4 bg-purple-500 text-white text-xs px-2 py-1 rounded-full animate-bounce">
                      Share your ideas!
                    </div>
                  )}
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full py-4 px-8 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:from-indigo-600 hover:to-purple-600'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-3">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-3">
                      <span>Send Message</span>
                      <span className="text-xl">🚀</span>
                    </span>
                  )}
                </button>

                {submitStatus === 'error' && (
                  <div className="text-center p-4 bg-red-100 border border-red-300 rounded-2xl">
                    <span className="text-red-800 font-semibold">❌ Something went wrong. Please try again later.</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Contact Info & Social Links */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-in-right' : 'opacity-0 transform translate-x-[50px]'}`}>
            {/* Contact Info Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <span className="text-3xl">💬</span>
                Get in touch
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition-colors duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-xl">
                    📧
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-gray-600">hntaganira06@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition-colors duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center text-xl">
                    🌍
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Location</p>
                    <p className="text-gray-600">Kigali, Rwanda</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition-colors duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-xl">
                    ⚡
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Response Time</p>
                    <p className="text-gray-600">Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <span className="text-3xl">🤝</span>
                Connect with me
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex flex-col items-center p-4 bg-gradient-to-r ${social.color} text-white rounded-2xl shadow-lg ${social.hoverColor} transform hover:scale-110 transition-all duration-300 animate-float`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <span className="text-2xl mb-2 group-hover:animate-bounce">{social.icon}</span>
                    <span className="font-semibold">{social.name}</span>
                  </a>
                ))}
              </div>

              {/* Extras */}
              <div className="mt-6 grid grid-cols-1 gap-4">
                <a href="/resume.pdf" className="p-4 rounded-2xl bg-white/60 border border-white/80 text-center font-semibold hover:bg-white transition-colors duration-300">Download Resume</a>
              </div>
            </div>

            {/* Fun Facts */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <span className="text-3xl">💡</span>
                Fun Facts
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl">
                  <span className="text-xl">☕</span>
                  <span className="text-gray-700">Coffee enthusiast & night owl coder</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl">
                  <span className="text-xl">🎮</span>
                  <span className="text-gray-700">Love building interactive experiences</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl">
                  <span className="text-xl">🚀</span>
                  <span className="text-gray-700">Always excited about new tech trends</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Dialog */}
      {showDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl text-center">
            <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white flex items-center justify-center text-2xl shadow-lg">✓</div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Message Ready to Send</h4>
            <p className="text-gray-600 mb-6">Your email client has been opened. If it didn’t, please check your pop-up settings.</p>
            <button
              onClick={() => { setShowDialog(false); navigate('/'); }}
              className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow-lg hover:opacity-90 transition"
            >
              OK
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-delayed {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes expand {
          from { width: 0; }
          to { width: 6rem; }
        }

        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-delayed {
          animation: fade-in-delayed 1s ease-out 0.3s both;
        }

        .animate-expand {
          animation: expand 1s ease-out 0.5s both;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out 0.2s both;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out 0.4s both;
        }

        .animate-float {
          animation: float 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}