import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "kong.weiyi@northeastern.edu",
      link: "mailto:kong.weiyi@northeastern.edu, mailto:oscarkong05@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+1 (305) 339-8775",
      link: "tel:+13053398775"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Boston, MA",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      name: "GitHub",
      url: "https://github.com/Oscar-Kong"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/weiyi-kong-3a65492a5"
    },
    {
      icon: <ExternalLink className="w-5 h-5" />,
      name: "Recreon Startup",
      url: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto rounded-full"></div>
            <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
              I'm always interested in new opportunities, interesting projects, and collaborations. 
              Whether you want to discuss Recreon, explore potential partnerships, or just say hello!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-bold text-white mb-8">Let's Connect</h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg backdrop-blur-sm border border-emerald-700/30 hover:border-emerald-600/50 transition-all duration-300 hover:bg-slate-800/70 group">
                    <div className="p-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-lg flex-shrink-0 group-hover:from-emerald-500 group-hover:to-green-500 transition-all duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-slate-400 text-sm">{info.title}</div>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-white font-medium hover:text-emerald-400 transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-white font-medium">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Current Status */}
              <div className="mb-8 p-6 bg-gradient-to-r from-slate-800/70 to-emerald-900/30 rounded-lg backdrop-blur-sm border border-emerald-700/30">
                <h4 className="text-lg font-semibold text-white mb-2">Current Status</h4>
                <p className="text-slate-300 text-sm mb-2">
                  🎓 Computer Science Student at Northeastern University
                </p>
                <p className="text-slate-300 text-sm mb-2">
                  🚀 Building Recreon - Sports Social Platform
                </p>
                <p className="text-slate-300 text-sm">
                  📚 Available for internships: January - September 2026
                </p>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target={social.url !== "#" ? "_blank" : undefined}
                      rel={social.url !== "#" ? "noopener noreferrer" : undefined}
                      className="p-3 bg-slate-800/50 text-emerald-300 rounded-lg hover:bg-gradient-to-r hover:from-emerald-600 hover:to-green-600 hover:text-white transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-emerald-700/30 hover:border-transparent"
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-800/50 p-8 rounded-xl backdrop-blur-sm border border-emerald-700/30 animate-slide-in-right">
              <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-slate-300 text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-emerald-700/50 text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                    placeholder="Oscar Kong"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-slate-300 text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-emerald-700/50 text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                    placeholder="oscarkong05@gmail.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-slate-300 text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-emerald-700/50 text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 resize-none backdrop-blur-sm"
                    placeholder="Contact me for work oppertunities, ask about Recreon, or just say hello!"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-lg hover:from-emerald-700 hover:to-green-700 transition-all duration-300 flex items-center justify-center gap-2 font-semibold transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;