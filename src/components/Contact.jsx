import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    services: {
      painting: false,
      wallpaper: false,
    },
    contactMethod: 'email', // default
    message: '',
  });

  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        services: {
          ...prev.services,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    // Basic Validation
    if (!formData.phone) {
      alert('Phone number is required.');
      setStatus('idle');
      return;
    }

    try {
      // ------------------------------------------------------------------
      // INSTRUCTIONS FOR GOOGLE SHEETS INTEGRATION:
      // 1. Create a Google Sheet.
      // 2. Go to Extensions > Apps Script.
      // 3. Paste the following script:
      /*
        function doPost(e) {
          var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
          var data = JSON.parse(e.postData.contents);
          var services = [];
          if(data.services.painting) services.push("Painting");
          if(data.services.wallpaper) services.push("Wallpaper");

          sheet.appendRow([new Date(), data.name, data.phone, data.email, services.join(", "), data.contactMethod, data.message]);
          return ContentService.createTextOutput(JSON.stringify({"result":"success"})).setMimeType(ContentService.MimeType.JSON);
        }
      */
      // 4. Deploy > New Deployment > Web App > Who has access: Anyone.
      // 5. Copy the Web App URL and replace 'YOUR_GOOGLE_SCRIPT_URL' below.
      // ------------------------------------------------------------------

      const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL';

      // Mock Submission for Demo
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form Submitted:', formData);

      // If user adds their URL, this code will run:
      if (GOOGLE_SCRIPT_URL !== 'YOUR_GOOGLE_SCRIPT_URL' && GOOGLE_SCRIPT_URL.startsWith('http')) {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          body: JSON.stringify(formData),
          mode: 'no-cors' // Important for Google Apps Script
        });
      }

      setStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        services: { painting: false, wallpaper: false },
        contactMethod: 'email',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-brand-dark text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-dark to-black z-0" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-light/10 rounded-full blur-3xl z-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif">Contact Us</h2>
          <p className="text-xl text-gray-300 font-light">
            Ready to transform your home? Get in touch for a free quote.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
          {status === 'success' ? (
            <div className="text-center py-12 animate-fade-in">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-400" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
              <p className="text-gray-300 text-lg mb-8">Thank you for contacting Altai Home Services. We will get back to you shortly.</p>
              <button
                onClick={() => setStatus('idle')}
                className="px-8 py-3 bg-brand-light text-white rounded-full hover:bg-brand-light/80 transition-all duration-300"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-light/50 focus:border-transparent transition-all"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number <span className="text-red-400">*</span></label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-light/50 focus:border-transparent transition-all"
                    placeholder="(555) 123-4567"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email Address (Optional)</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-light/50 focus:border-transparent transition-all"
                  placeholder="you@example.com"
                />
              </div>

              {/* Services Checkboxes */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-4">Services Needed</label>
                <div className="flex flex-wrap gap-8">
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <div className="relative flex items-center">
                      <input
                        type="checkbox"
                        name="painting"
                        checked={formData.services.painting}
                        onChange={handleChange}
                        className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-500 bg-white/10 checked:border-brand-light checked:bg-brand-light transition-all"
                      />
                      <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none opacity-0 peer-checked:opacity-100 text-white transition-opacity" viewBox="0 0 14 14" fill="none">
                        <path d="M3 8L6 11L11 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="group-hover:text-white transition-colors">Painting</span>
                  </label>

                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <div className="relative flex items-center">
                      <input
                        type="checkbox"
                        name="wallpaper"
                        checked={formData.services.wallpaper}
                        onChange={handleChange}
                        className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-500 bg-white/10 checked:border-brand-light checked:bg-brand-light transition-all"
                      />
                      <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none opacity-0 peer-checked:opacity-100 text-white transition-opacity" viewBox="0 0 14 14" fill="none">
                        <path d="M3 8L6 11L11 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="group-hover:text-white transition-colors">Wallpaper Installation</span>
                  </label>
                </div>
              </div>

              {/* Preferred Contact Method */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-4">Preferred Method of Contact</label>
                <div className="flex flex-wrap gap-6">
                  {['Text', 'Call', 'Email'].map((method) => (
                    <label key={method} className="flex items-center space-x-3 cursor-pointer group">
                      <div className="relative flex items-center">
                        <input
                          type="radio"
                          name="contactMethod"
                          value={method.toLowerCase()}
                          checked={formData.contactMethod === method.toLowerCase()}
                          onChange={handleChange}
                          className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-500 bg-white/10 checked:border-brand-light checked:bg-brand-light transition-all"
                        />
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
                      </div>
                      <span className="group-hover:text-white transition-colors">{method}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Additional Details</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-light/50 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us more about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full flex items-center justify-center px-8 py-4 bg-brand-beige text-brand-dark font-bold text-lg rounded-xl hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                {status === 'submitting' ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-brand-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending Request...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send Request <Send className="ml-2 w-5 h-5" />
                  </span>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
