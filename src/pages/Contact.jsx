import React from 'react';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';

function Contact() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-16 right-10 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-24 left-10 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-bounce delay-2000"></div>

      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto relative z-10 animate-fade-in-up">
        {/* Fixed Heading */}
        <div className="text-center mb-12 px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 px-2 tracking-wide bg-gradient-to-r from-yellow-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent">
            Contact Me
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
        </div>

        {/* Direct Contact Info */}
        <div className="bg-gray-800/50 p-8 md:p-12 rounded-2xl shadow-xl border border-gray-700/50 backdrop-blur-md flex flex-col items-center justify-center space-y-8 mb-12">
          <p className="text-gray-300 text-lg md:text-xl text-center max-w-2xl leading-relaxed">
            Feel free to reach out to me directly via email or phone. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
            <a href="mailto:vyishnavan456@gmail.com" className="flex items-center gap-4 bg-gray-900/80 px-6 py-4 rounded-xl border border-gray-700 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/20 transition-all group max-w-sm w-full">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-3 rounded-lg text-gray-900 group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-400 mb-1">Email Me</p>
                <p className="font-semibold text-yellow-50 text-sm md:text-base">vyishnavan456@gmail.com</p>
              </div>
            </a>
            
            <a href="tel:0762350001" className="flex items-center gap-4 bg-gray-900/80 px-6 py-4 rounded-xl border border-gray-700 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/20 transition-all group max-w-sm w-full">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-3 rounded-lg text-gray-900 group-hover:scale-110 transition-transform">
                <Phone size={24} />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-400 mb-1">Call Me</p>
                <p className="font-semibold text-yellow-50 text-sm md:text-base">0762350001</p>
              </div>
            </a>
          </div>
        </div>

        {/* Animated Social Links Below Form */}
        <div className="flex justify-center space-x-10 mt-12">
          <SocialLink href="#" icon={<Github size={28} />} label="GitHub" />
          <SocialLink href="#" icon={<Linkedin size={28} />} label="LinkedIn" />
          <SocialLink href="mailto:vyishnavan456@gmail.com" icon={<Mail size={28} />} label="Email" />
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-3deg);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out both;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        /* Social Icon Animation */
        .social-link {
          background: rgba(31, 41, 55, 0.5);
          border: 1px solid rgba(107, 114, 128, 0.5);
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #9ca3af; /* Tailwind gray-400 */
          width: 56px;
          height: 56px;
          transition: all 0.4s ease;
          cursor: pointer;
          box-shadow: 0 0 0 rgba(255, 193, 7, 0);
          /* initially no shadow */
        }
        .social-link:hover {
          color: #f59e0b; /* Tailwind yellow-400 */
          border-color: #f59e0b;
          box-shadow:
            0 0 8px 2px rgba(245, 158, 11, 0.6),
            0 0 16px 4px rgba(245, 158, 11, 0.4);
          transform: scale(1.2);
        }
        .social-link:active {
          transform: scale(1.1);
          box-shadow:
            0 0 4px 1px rgba(245, 158, 11, 0.8);
        }
      `}</style>
    </section>
  );
}

// SocialLink component 
function SocialLink({ href, icon, label }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="social-link"
      title={label}
    >
      {icon}
    </a>
  );
}

export default Contact;
