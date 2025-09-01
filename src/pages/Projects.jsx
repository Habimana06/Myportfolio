import React, { useState, useEffect } from 'react';

// Auto-import images from src/images
const importedImages = import.meta.glob('@/images/*.{png,jpg,jpeg,gif,webp}', { eager: true });


function getProjectDetails(filename) {
  const name = filename.toLowerCase();
  
  // Hospital Appointment System (Java)
  if (name.includes('200126')) {
    return {
      title: "MediCare Appointment System",
      description: "A comprehensive Java-based hospital appointment management system featuring patient registration, doctor scheduling, appointment booking, and medical record management with an intuitive desktop interface.",
      stack: ["Java", "Swing", "MySQL", "JDBC"],
      category: "Healthcare",
      type: "Desktop Application"
    };
  }
  
  // Hospital Appointment Web System
  if (name.includes('094157')) {
    return {
      title: "HealthHub Web Portal",
      description: "Modern web-based hospital appointment system with responsive design, real-time booking capabilities, patient dashboard, and doctor availability management built with vanilla web technologies.",
      stack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      category: "Healthcare",
      type: "Web Application"
    };
  }
  
  // Municipal Service Request System
  if (name.includes('094218')) {
    return {
      title: "CityServe Request Portal",
      description: "Municipal service request management system enabling citizens to submit service requests, track progress, and communicate with local government departments through an intuitive web interface.",
      stack: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      category: "Government",
      type: "Web Application"
    };
  }
  
  // Anime Download Web
  if (name.includes('094915')) {
    return {
      title: "AnimeVault Streaming Platform",
      description: "Full-stack anime streaming and download platform with user authentication, content management, search functionality, and responsive design powered by Spring Boot backend.",
      stack: ["HTML5", "CSS3", "JavaScript", "Java Spring Boot", "MySQL"],
      category: "Entertainment",
      type: "Full-Stack Web App"
    };
  }
  
  // Anon E-commerce
  if (name.includes('094947')) {
    return {
      title: "Anon Marketplace",
      description: "Modern e-commerce frontend showcasing product catalogs, shopping cart functionality, user-friendly checkout process, and responsive design optimized for all devices.",
      stack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      category: "E-commerce",
      type: "Frontend Application"
    };
  }
  
  // Builderz
  if (name.includes('095045')) {
    return {
      title: "Builderz Engineering Hub",
      description: "Professional platform for engineers and architects featuring project management, blueprint sharing, collaboration tools, and resource library with full-stack architecture.",
      stack: ["HTML5", "CSS3", "JavaScript", "Node.js", "MongoDB"],
      category: "Real Estate",
      type: "Full-Stack Platform"
    };
  }
  
  // Eflyer E-commerce
  if (name.includes('095153')) {
    return {
      title: "Eflyer Digital Store",
      description: "Elegant e-commerce frontend featuring modern product showcases, interactive galleries, smooth animations, and mobile-first responsive design for optimal shopping experience.",
      stack: ["HTML5", "CSS3", "JavaScript", "SASS"],
      category: "E-commerce",
      type: "Frontend Application"
    };
  }
  
  // Burger Delivery
  if (name.includes('095256')) {
    return {
      title: "BurgerExpress Delivery",
      description: "Food delivery mobile application specializing in gourmet burgers with real-time order tracking, customization options, payment integration, and location-based services.",
      stack: ["React Native", "JavaScript", "Firebase"],
      category: "Mobile App",
      type: "Mobile Application"
    };
  }
  
  // Organic Web
  if (name.includes('095336')) {
    return {
      title: "FreshHarvest Organic Market",
      description: "Full-stack organic produce marketplace connecting local farmers with consumers, featuring inventory management, order processing, and sustainable farming information.",
      stack: ["HTML5", "CSS3", "JavaScript", "java", "postgress"],
      category: "E-commerce",
      type: "Full-Stack Web App"
    };
  }
  
  // Lighten Music Store
  if (name.includes('095352')) {
    return {
      title: "Lighten Music Instruments",
      description: "Specialized online store for musical instruments featuring detailed product specifications, audio samples, virtual instrument previews, and musician community features.",
      stack: ["HTML5", "CSS3", "JavaScript", "jQuery"],
      category: "E-commerce",
      type: "Frontend Application"
    };
  }
  
  // Videograph
  if (name.includes('095416')) {
    return {
      title: "VideoGraph Media Hub",
      description: "Media management platform for video content creators featuring upload capabilities, metadata management, video processing, and content organization with clean UI design.",
      stack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      category: "Media",
      type: "Frontend Application"
    };
  }
  
  // Restaurant Menu
  if (name.includes('095508')) {
    return {
      title: "TasteHub Restaurant Menu",
      description: "Digital restaurant menu application with interactive food galleries, nutritional information, allergen alerts, and seamless ordering interface for enhanced dining experience.",
      stack: ["React", "CSS3", "JavaScript"],
      category: "Mobile App",
      type: "Restaurant App"
    };
  }
  
  // Villa Rental
  if (name.includes('095523')) {
    return {
      title: "LuxuryVilla Rental Platform",
      description: "Premium villa rental and sales platform featuring virtual tours, booking management, property listings, and comprehensive search filters with full-stack implementation.",
      stack: ["HTML5", "CSS3", "JavaScript", "Node.js", "MongoDB"],
      category: "Real Estate",
      type: "Full-Stack Platform"
    };
  }
  
  // Citizen Engage
  if (name.includes('095629')) {
    return {
      title: "CitizenEngage Platform",
      description: "Civic engagement platform empowering citizens to participate in local governance through feedback systems, community forums, polling, and direct communication with officials.",
      stack: ["React.js", "Tailwind", "Java", "Springboot", "PostgreSQL"],
      category: "Government",
      type: "Full-Stack Web App"
    };
  }
  
  // Default fallback
  if (name.includes('095706')) {
    return {
      title: "UCSTORE Inventory Dashboard",
      description: "for management of store for admin and employee for easy managing store check and dashboard ",
      stack: ["React.js", "Tailwind", "java", "PostgreSQL"],
      category: "E-commerce",
      type: "Full-Stack Web App"
    };
  }
};

const autoProjects = Object.entries(importedImages).map(([path, mod]) => {
  const src = mod.default || mod;
  const filename = path.split('/').pop() || 'Project';
  
  // Skip WhatsApp image
  if (filename.toLowerCase().includes('whatsapp')) {
    return null;
  }
  
  const projectDetails = getProjectDetails(filename);
  
  return {
    ...projectDetails,
    imageSrc: src,
    id: filename.replace(/\.(png|jpe?g|gif|webp)$/i, '')
  };
}).filter(Boolean);

const staticProjects = [
  {
    title: "Upcoming Innovation",
    description: "Next-generation project currently in development phase featuring cutting-edge technologies and revolutionary user experience design.",
    stack: ["React", "TypeScript", "Three.js"],
    category: "Web Application",
    type: "In Development",
    image: "🚀",
    isUpcoming: true
  }
];

const projects = [...autoProjects, ...staticProjects];

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleProjects(projects.map((_, i) => i));
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const categories = ['All', ...new Set(projects.map(p => p.category))];
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="text-6xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 animate-fade-in tracking-tight">
              Portfolio Showcase
            </h2>
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl rounded-lg"></div>
            <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full animate-expand shadow-lg"></div>
          </div>
          <p className="text-xl text-gray-300 mt-8 max-w-3xl mx-auto animate-fade-in-delayed leading-relaxed">
            Explore my diverse collection of innovative projects spanning healthcare, e-commerce, government solutions, and creative applications
          </p>
        </div>

        {/* Enhanced Filter Tabs */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-white/10 backdrop-blur-md p-2 rounded-3xl shadow-2xl border border-white/20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-sm"></div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`relative px-8 py-4 rounded-2xl font-semibold transition-all duration-500 transform ${
                  filter === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-2xl scale-105 -translate-y-1'
                    : 'text-gray-300 hover:text-white hover:bg-white/10 hover:scale-105'
                }`}
              >
                <span className="relative z-10">{category}</span>
                {filter === category && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-50 -z-10"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={index}
              isVisible={visibleProjects.includes(index)}
            />
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-20">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl rounded-3xl"></div>
            <div className="relative p-12 bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl"></div>
              <h3 className="text-3xl font-bold text-white mb-6 relative z-10">
                Ready to Collaborate?
              </h3>
              <p className="text-gray-300 mb-8 text-lg relative z-10 max-w-md mx-auto">
                Let's turn your vision into reality with innovative solutions and cutting-edge technology
              </p>
              <div className="flex gap-4 justify-center relative z-10">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                  <span className="relative z-10">View Resume</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-2xl border border-white/20 hover:bg-white/20 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-delayed {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes expand {
          from { width: 0; }
          to { width: 8rem; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(1deg); }
        }

        @keyframes slide-up {
          from { 
            opacity: 0; 
            transform: translateY(60px) scale(0.9) rotateX(10deg); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1) rotateX(0deg); 
          }
        }

        @keyframes card-hover {
          from { transform: translateY(0) rotateX(0deg) rotateY(0deg); }
          to { transform: translateY(-10px) rotateX(5deg) rotateY(-5deg); }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(147, 51, 234, 0.5); }
        }

        .animate-fade-in {
          animation: fade-in 1.2s ease-out;
        }

        .animate-fade-in-delayed {
          animation: fade-in-delayed 1.2s ease-out 0.4s both;
        }

        .animate-expand {
          animation: expand 1.5s ease-out 0.8s both;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out both;
        }

        .animate-card-hover {
          animation: card-hover 0.3s ease-out both;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .animate-glow {
          animation: glow-pulse 3s ease-in-out infinite;
        }

        .card-3d {
          transform-style: preserve-3d;
          perspective: 1000px;
        }

        .card-3d:hover {
          transform: translateY(-10px) rotateX(5deg) rotateY(-5deg);
        }
      `}</style>
    </div>
  );
}

function ProjectCard({ project, index, isVisible }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`group relative ${isVisible ? 'animate-slide-up' : 'opacity-0'} card-3d`}
      style={{ animationDelay: `${index * 0.15}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Container */}
      <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20 transition-all duration-700 transform group-hover:scale-105 group-hover:-translate-y-3 group-hover:[transform:rotateX(8deg)_rotateY(-8deg)] overflow-hidden">
        
        {/* Shimmer Effect */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shimmer"></div>
        
        {/* Project Image/Icon */}
        {project.imageSrc ? (
          <div className="relative mb-6 rounded-2xl overflow-hidden shadow-2xl border border-white/30 group-hover:shadow-purple-500/25 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
            <img 
              src={project.imageSrc} 
              alt={project.title} 
              className="w-full h-56 object-cover transform transition duration-700 group-hover:scale-110 group-hover:rotate-1" 
            />
            <div className="absolute top-4 left-4 z-20">
              <span className="px-3 py-1 bg-black/70 backdrop-blur-sm text-white text-xs font-bold rounded-full border border-white/20">
                {project.type}
              </span>
            </div>
            {/* 3D Hover Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10`}></div>
          </div>
        ) : (
          <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mb-6 text-3xl shadow-xl group-hover:shadow-purple-500/50 transform group-hover:rotate-12 transition-all duration-500">
            {project.image || '🚀'}
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-8 right-8 z-20">
          <span className="px-4 py-2 bg-gradient-to-r from-blue-500/90 to-purple-500/90 backdrop-blur-sm text-white text-sm font-bold rounded-full shadow-lg border border-white/30 transform group-hover:scale-110 transition-all duration-300">
            {project.category}
          </span>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300 leading-tight">
            {project.title}
          </h3>
          
          <p className="text-gray-300 mb-6 leading-relaxed text-sm line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.stack.map((tech, idx) => (
              <span 
                key={idx} 
                className="px-3 py-2 bg-white/10 backdrop-blur-sm text-gray-200 text-xs font-semibold rounded-xl border border-white/20 hover:bg-blue-500/20 hover:border-blue-400/50 hover:text-blue-200 transition-all duration-300 cursor-default transform hover:scale-105"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            {project.isUpcoming ? (
              <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm text-yellow-300 font-semibold rounded-2xl border border-yellow-500/30 shadow-lg">
                <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Coming Soon
              </div>
            ) : (
              <>
                <button className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500/80 to-emerald-500/80 backdrop-blur-sm text-white font-bold rounded-2xl shadow-xl hover:shadow-green-500/25 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-white/20 group/btn overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Onboarding
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <button className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-bold rounded-2xl border border-white/30 hover:bg-white/20 hover:border-white/50 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Case Study
                </button>
              </>
            )}
          </div>
        </div>

        {/* Animated Glow Effect */}
        <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl transition-all duration-700 ${isHovered ? 'opacity-100 animate-glow' : 'opacity-0'} -z-10`}></div>
        
        {/* 3D Shadow */}
        <div className={`absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 -z-20 transform translate-y-4`}></div>
        
        {/* Floating Particles Effect */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-70 animate-ping"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '2s'
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}