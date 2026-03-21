import React from 'react';
import { FolderOpen, ExternalLink, Github, Youtube } from 'lucide-react';

function Projects() {
  const projects = [
    {
      title: "Web Development (HTML, CSS)",
      description: "Developed a responsive web application interface featuring a modern main landing page with a styled navigation bar and product section. Designed a feedback form with JavaScript validation, preview/edit functionality, and enhanced usability for user interaction.",
      liveLink: "https://vyishnavan.github.io/Web-Development-Project/",
      githubLink: "https://github.com/Vyishnavan/Web-Development-Project",
      youtubeLink: "",
      image: "/images/Images/Web development  and design.png",
      skills: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Business Computing Using Python",
      description: "Completed a Business Computing portfolio involving Python data analysis, Pandas vectorisation, and SQL database design. Applied programming tools to manipulate datasets, explore correlations, and build a hospital management database with clear documentation and analysis.",
      liveLink: "",
      githubLink: "https://github.com/Vyishnavan/Business-Computing-Using-Python",
      youtubeLink: "",
      image: "/images/Images/Business Computing cw1.png",
      skills: ["Python", "Pandas", "SQL", "Data Analysis"]
    },
    {
      title: "Data Analysis and Visualisation for a Online Retail Business",
      description: "Developed a Python-based application for an online retail dataset, integrating SQLite database creation, SQL queries, and modular code for analysis. Produced visualisations with Matplotlib/Seaborn to highlight sales trends, customer behaviour, and product performance, supported by a technical report.",
      liveLink: "",
      githubLink: "https://github.com/Vyishnavan/Data-Analysis-And-Visualization-For-A-Online-Retail-Business-",
      youtubeLink: "",
      image: "/images/Images/Business Computing coursework (Data Analysis & Visualisation).png",
      skills: ["Python", "SQLite", "Matplotlib", "Seaborn"]
    },
    {
      title: "Coursework-Case-Study-JungleTrailTours",
      description: "Designed and implemented a relational database for JungleTrailTours, including a UML-based ERD, SQL table creation scripts, and populated datasets. Executed and documented ten SQL queries to demonstrate functionality, ensuring proper use of primary/foreign keys and relationships.",
      liveLink: "",
      githubLink: "https://github.com/Vyishnavan/Coursework-Case-Study-JungleTrailTours-",
      youtubeLink: "https://www.youtube.com/watch?v=4FH5oxhonYY",
      image: "/images/udemy.png",
      skills: ["SQL", "Relational Database", "UML", "ERD"]
    },
    {
      title: "BIS-Concepts-Group-Coursework",
      description: "Collaborated in a team project analyzing the role of information systems in business, digital transformation strategies, global challenges, and digital marketing evolution. Produced a structured group report with case studies, documented meetings, and individual reflections to demonstrate teamwork and professional research skills.",
      liveLink: "",
      githubLink: "https://github.com/Vyishnavan/BIS-Concepts-Group-Coursework",
      youtubeLink: "",
      image: "/images/Images/BIS Concepts group CW.png",
      skills: ["Information Systems", "Research", "Teamwork", "Digital Marketing"]
    },
    {
      title: "BIS-Concepts-Coursework-2-Individual-Report",
      description: "Produced an individual report evaluating global business challenges and the role of information systems in HR, e-commerce, supply chain, and operations. Analysed case studies of Walmart, Amazon, Toyota, and Uber, with strategic insights on HRIS, digital transactions, pricing strategies, and regulatory adaptation.",
      liveLink: "",
      githubLink: "https://github.com/Vyishnavan/BIS-Concepts-Coursework-2-Individual-Report",
      youtubeLink: "",
      image: "/images/Images/BIS Concepts CW2 (Individual report).png",
      skills: ["Business Challenges", "Information Systems", "HRIS", "Operations"]
    },
    {
      title: "Progression-marks-test-plan",
      description: "This Python program is a student progression tracker designed to categorize academic results based on credit inputs (Pass, Defer, and Fail). It validates that all inputs are integers within a specific range and ensures they sum to exactly 120 credits. The system features an interactive menu for students and teachers, generating a visual histogram of outcomes, saving data to a text file, and storing student records in a dictionary for easy retrieval.",
      liveLink: "",
      githubLink: "https://github.com/Vyishnavan/Progression-marks-test-plan",
      youtubeLink: "",
      image: "/images/Images/Python.png",
      skills: ["Python", "Validation", "File I/O", "Data Structures"]
    },
    {
      title: "FOODIVERSE-A-Global-Recipe-Sharing-Platform",
      description: "Collaborated on the Foodiverse project, a global recipe-sharing platform. Produced class and state machine diagrams, applied design patterns individually, designed a GUI for recipe uploads, and documented teamwork through structured meeting records to demonstrate system design, teamwork, and professional research skills.",
      liveLink: "",
      githubLink: "https://github.com/Vyishnavan/FOODIVERSE-A-Global-Recipe-Sharing-Platform",
      youtubeLink: "",
      image: "/images/bulkmail.png",
      skills: ["System Design", "UML", "GUI", "Teamwork"]
    },
    {
      title: "5COSC020W--DATABASE--SYSTEMS--COURSEWORK--INDIVIDUAL-",
      description: "Part A: Designed a conceptual EERD for Foodz@Yourz using UML notations, supported by a critical evaluation, decision log, and structured data dictionary. Part B: Mapped the conceptual model to a logical ERD, created SQL table definitions, and documented mapping decisions with clear rationale, ensuring relational integrity and alignment with business rules.",
      liveLink: "",
      githubLink: "https://github.com/Vyishnavan/5COSC020W--DATABASE--SYSTEMS--COURSEWORK--INDIVIDUAL-",
      youtubeLink: "",
      image: "/images/Images/DDI.png",
      skills: ["Database Systems", "EERD", "SQL", "UML"]
    }
  ];

  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-visible">
      {/* Background Animations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-20 left-10 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-bounce delay-2000"></div>

      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto relative z-10 animate-fade-in-up">
        {/* Title with padding and margin fix */}
        <div className="text-center mb-16 px-6 overflow-visible">
          <h2
            className="pb-2 text-4xl md:text-5xl font-extrabold mb-4 px-4 tracking-wide bg-gradient-to-r from-yellow-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent"
            style={{ marginLeft: '0.25rem', marginRight: '0.25rem' }}
          >
            Year 1 Academic Projects
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/40 rounded-2xl p-6 shadow-xl group hover:shadow-yellow-300/10 transition duration-300 transform hover:-translate-y-1 flex flex-col"
            >
              {/* Project Image */}
              {project.image && (
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="rounded-xl mb-6 object-cover w-full h-48"
                />
              )}

              {/* Title Row */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all">
                  <FolderOpen className="text-white" size={24} />
                </div>
                <h3 className="ml-4 text-xl font-semibold text-yellow-300 group-hover:text-yellow-400 transition-colors">
                  {project.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>



              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-auto">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 shadow-md hover:shadow-yellow-400/30 transition-all hover:scale-105"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border-2 border-gray-600 rounded-full text-gray-300 font-semibold hover:border-yellow-400 hover:text-yellow-400 transition-all hover:scale-105"
                  >
                    <Github size={18} /> GitHub
                  </a>
                )}
                {project.youtubeLink && (
                  <a
                    href={project.youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/80 rounded-full text-white font-semibold hover:bg-red-500 hover:shadow-lg hover:shadow-red-500/30 transition-all hover:scale-105"
                  >
                    <Youtube size={18} /> YouTube
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-3deg); }
        }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out both; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
      `}</style>
    </section>
  );
}

export default Projects;
