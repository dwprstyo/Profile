import { Code2, Palette, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation(0.2);
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.2);
  const { ref: visualRef, isVisible: visualVisible } = useScrollAnimation(0.2);

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={textRef}
          className={`text-center mb-16 transition-all duration-1000 transform ${
            textVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-20"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            High Quality
            <br />
            <span className="text-gradient">Project Collections</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I specialize in creating innovative digital solutions by combining
            captivating design with cutting-edge technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Cards */}
          <div
            ref={cardsRef}
            className={`space-y-6 transition-all duration-1000 delay-300 transform ${
              cardsVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
          >
            <div className="glass-card p-6 rounded-2xl hover:glow-effect transition-all duration-300 transform hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl">
                  <Code2 size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Development
                  </h3>
                  <p className="text-gray-300">
                    I use React, Angular, Express, and Laravel to build
                    responsive, fast, and scalable web and mobile applications.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl hover:glow-effect transition-all duration-300 transform hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                  <Palette size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    UI/UX Design
                  </h3>
                  <p className="text-gray-300">
                    Creating intuitive user experiences with modern and
                    user-friendly designs.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl hover:glow-effect transition-all duration-300 transform hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl">
                  <Zap size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Performance
                  </h3>
                  <p className="text-gray-300">
                    High-performance optimization to ensure applications run
                    fast and efficiently across all devices.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div
            ref={visualRef}
            className={`flex justify-center lg:justify-end transition-all duration-1000 delay-500 transform ${
              visualVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
          >
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-6 rounded-2xl glow-effect">
                  <div className="w-full h-32 bg-gradient-to-br from-purple-400 to-blue-600 rounded-xl mb-4"></div>
                  <div className="h-4 bg-white/20 rounded mb-2"></div>
                  <div className="h-3 bg-white/10 rounded w-3/4"></div>
                </div>
                <div className="glass-card p-6 rounded-2xl mt-8">
                  <div className="w-full h-24 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-xl mb-4"></div>
                  <div className="h-4 bg-white/20 rounded mb-2"></div>
                  <div className="h-3 bg-white/10 rounded w-2/3"></div>
                </div>
                <div className="glass-card p-6 rounded-2xl -mt-4">
                  <div className="w-full h-28 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl mb-4"></div>
                  <div className="h-4 bg-white/20 rounded mb-2"></div>
                  <div className="h-3 bg-white/10 rounded w-4/5"></div>
                </div>
                <div className="glass-card p-6 rounded-2xl mt-4">
                  <div className="w-full h-20 bg-gradient-to-br from-purple-400 to-pink-600 rounded-xl mb-4"></div>
                  <div className="h-4 bg-white/20 rounded mb-2"></div>
                  <div className="h-3 bg-white/10 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
