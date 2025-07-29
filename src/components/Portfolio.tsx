
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Portfolio = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.1);
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation(0.1);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Platform e-commerce modern dengan fitur lengkap, payment gateway, dan admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tags: ["React", "Node.js", "MongoDB"],
      gradient: "from-purple-400 to-blue-600"
    },
    {
      title: "Mobile Banking App",
      description: "Aplikasi mobile banking dengan UI/UX modern dan fitur keamanan tingkat tinggi.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      tags: ["React Native", "Firebase", "TypeScript"],
      gradient: "from-blue-400 to-cyan-600"
    },
    {
      title: "AI Dashboard",
      description: "Dashboard analytics dengan integrasi AI untuk visualisasi data dan reporting otomatis.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["Vue.js", "Python", "TensorFlow"],
      gradient: "from-cyan-400 to-purple-600"
    },
    {
      title: "Social Media Platform",
      description: "Platform media sosial dengan real-time messaging dan content sharing features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tags: ["Next.js", "GraphQL", "PostgreSQL"],
      gradient: "from-purple-400 to-pink-600"
    }
  ];

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 transform ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured
            <br />
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcase dari beberapa project terbaik yang telah saya kerjakan 
            dengan berbagai teknologi dan solusi inovatif.
          </p>
        </div>

        <div 
          ref={projectsRef}
          className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 delay-300 transform ${
            projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card rounded-2xl overflow-hidden hover:glow-effect transition-all duration-500 transform hover:scale-105"
              style={{ 
                transitionDelay: projectsVisible ? `${index * 0.2}s` : '0s',
                opacity: projectsVisible ? 1 : 0,
                transform: projectsVisible ? 'translateY(0)' : 'translateY(40px)'
              }}
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-white/10 text-white rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="border-white/20 hover:bg-white/10">
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className="border-white/20 hover:bg-white/10">
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
