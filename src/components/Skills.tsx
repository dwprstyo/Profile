
import { Database, Globe, Smartphone, Users } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Skills = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.1);
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation(0.1);

  const skills = [
    {
      icon: Globe,
      title: "Web Development",
      description: "React, Next.js, TypeScript, dan teknologi web modern lainnya untuk membangun aplikasi yang scalable."
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "React Native dan Flutter untuk mengembangkan aplikasi mobile cross-platform yang performant."
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Node.js, Python, dan database management untuk membangun API dan sistem backend yang robust."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Pengalaman bekerja dalam tim dengan metodologi Agile dan tools kolaborasi modern."
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={headerRef} 
          className={`text-center mb-16 transition-all duration-1000 transform ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Complete Solutions
            <br />
            <span className="text-gradient">for your Project</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Memberikan solusi end-to-end untuk setiap kebutuhan pengembangan digital Anda 
            dengan teknologi terdepan dan best practices.
          </p>
        </div>

        <div 
          ref={skillsRef} 
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 delay-300 transform ${
            skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className={`glass-card p-8 rounded-2xl text-center hover:glow-effect transition-all duration-300 transform hover:scale-105`}
              style={{ 
                transitionDelay: skillsVisible ? `${index * 0.1}s` : '0s' 
              }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl mx-auto flex items-center justify-center">
                  <skill.icon size={32} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{skill.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
