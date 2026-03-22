import React from 'react';
import { Presentation } from 'lucide-react';

function About() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-10 right-10 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-bounce delay-2000"></div>

        {/* Floating Symbols */}

      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto relative z-10 animate-fade-in-up">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-orange-400 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Biography Section */}
        <div className="bg-gray-800/80 backdrop-blur-md rounded-3xl p-12 text-gray-200 text-lg leading-relaxed mb-16 max-w-full mx-auto shadow-lg border border-yellow-500/30">
          <p className="mb-6">
            👋 <strong className="text-yellow-400">Hi, I'm Sathalogithasiva Vyishnavan</strong>, a passionate Business Information System Student.  
            My journey started with a deep curiosity for understanding how organizations work, quickly evolving into a love for <span className="text-orange-400 font-semibold">strategic planning and business growth</span> that makes a difference.
          </p>

          <p className="mb-6 italic border-l-4 border-yellow-400 pl-4 text-yellow-300">
            “My business journey has been driven by a desire to optimize processes and lead teams effectively to solve real-world challenges.”
          </p>

          <p className="mb-6">
            Over the course of my studies, I've developed expertise in <span className="font-bold text-yellow-400">Market Analysis</span> and <span className="font-bold text-yellow-400">Business Strategy</span>, focusing on delivering <span className="text-orange-400 font-semibold">data-driven insights</span>.
            I’m committed to continuous learning and enjoy participating in case study competitions.
          </p>

          <p>
            Beyond academics, I thrive on <span className="text-yellow-300 font-semibold">collaborating with peers</span>, exploring progressive business models, and developing <span className="text-orange-400 italic">leadership skills</span> to create sustainable enterprise ecosystems.
            Excited to bring my strategic vision to impactful projects.
          </p>
        </div>

        {/* Content Layout */}
        <div className="flex justify-center mb-20">
          <div className="w-full max-w-3xl">
            <ContentCard
              icon={<Presentation className="text-white" size={24} />}
              title="Business Expertise"
              text="With a strong foundation in management and strategy, I analyze complex market landscapes and develop executable growth plans."
              pills={[
                "Strategic Planning", "Market Analysis", "Financial Modeling", "Project Management",
                "Leadership", "Operations", "Client Relations"
              ]}
            />
          </div>
        </div>

        {/* Skills Overview */}
        <div className="flex justify-center mb-20">
          <div className="bg-gray-800/60 p-10 rounded-2xl shadow-xl border border-gray-700/40 w-full max-w-4xl">
            <h3 className="text-white text-3xl font-bold mb-8 text-center">Skills Overview</h3>
            <div className="space-y-10">
              <SkillBar skill="Strategic Planning" percentage={90} />
              <SkillBar skill="Data & Market Analysis" percentage={85} />
              <SkillBar skill="Project Management" percentage={80} />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <div className="bg-gray-800/60 px-8 py-12 rounded-2xl border border-gray-700/50 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Let's Work Together!</h3>
            <p className="text-gray-300 mb-6">I’m always excited to collaborate and take on new challenges. Let's bring your vision to life.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <CTAButton href="/contact" text="Get In Touch" primary />
              <CTAButton href="/projects" text="View Projects" />
            </div>
          </div>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out both; }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-3deg); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
      `}</style>
    </section>
  );
}

// Reusable Components

const ContentCard = ({ icon, title, text, pills = [], gradient }) => (
  <div className="bg-gray-800/60 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/40 shadow-lg">
    <div className="flex items-center mb-4">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 shadow-lg ${gradient ? `bg-gradient-to-br ${gradient}` : 'bg-gradient-to-br from-blue-500 to-purple-600'}`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white">{title}</h3>
    </div>
    <p className="text-gray-300 text-lg">{text}</p>
    {pills.length > 0 && (
      <div className="flex flex-wrap gap-2 mt-4">
        {pills.map((pill, idx) => (
          <span key={idx} className="px-3 py-1 rounded-full text-sm text-blue-300 bg-blue-500/10 border border-blue-400/30 font-medium">{pill}</span>
        ))}
      </div>
    )}
  </div>
);

const SkillBar = ({ skill, percentage }) => (
  <div>
    <div className="flex justify-between text-sm mb-1 text-gray-300">
      <span>{skill}</span>
      <span>{percentage}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-3">
      <div className="h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full" style={{ width: `${percentage}%` }}></div>
    </div>
  </div>
);

const CTAButton = ({ href, text, primary }) => (
  <a
    href={href}
    className={`px-6 py-3 font-bold rounded-full transition-all transform hover:scale-105 duration-300 ${
      primary
        ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 hover:shadow-yellow-400/25'
        : 'border-2 border-gray-500 text-gray-300 hover:border-yellow-400 hover:text-yellow-400'
    }`}
  >
    {text}
  </a>
);

export default About;
