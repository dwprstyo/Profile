import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div
              className={`transition-all duration-1000 delay-300 transform ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-white">Create Next</span>
                <br />
                <span className="text-white">Generation</span>
                <br />
                <span className="text-gradient">Projects</span>
                <br />
                <span className="text-white">Today</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                I’m a passionate Software Developer based in Jakarta, Indonesia,
                with a strong focus on Front-End Development using React and
                Angular. I build responsive, scalable, and intuitive web
                applications—and I love turning complex ideas into user-friendly
                digital solutions. With experience in both frontend and backend,
                I've worked on impactful projects including an Autodebit PLN
                system used by customers nationwide, HRIS platforms, e-learning
                systems, and RESTful API-based applications
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 glow-effect">
                  Get Connected
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <div className="flex gap-4 justify-center lg:justify-start">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-white/20 hover:bg-white/10"
                  >
                    <Github size={20} />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-white/20 hover:bg-white/10"
                  >
                    <Linkedin size={20} />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-white/20 hover:bg-white/10"
                  >
                    <Mail size={20} />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image/Card */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-1000 delay-700 transform ${
              isLoaded
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
          >
            <div className="relative">
              <div className="glass-card p-8 rounded-3xl glow-effect">
                <div className="w-80 h-80 bg-gradient-to-br from-purple-400 to-blue-600 rounded-2xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white rounded-full"></div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      Creative Developer
                    </h3>
                    <p className="text-sm opacity-80">Building the Future</p>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div
                className="absolute -top-4 -right-4 glass-card p-4 rounded-xl animate-float"
                style={{
                  transitionDelay: isLoaded ? "1200ms" : "0ms",
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                  transition: "all 0.8s ease-out",
                }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient">
                    3+ Years
                  </div>
                  <div className="text-xs text-gray-400">Experience</div>
                </div>
              </div>

              <div
                className="absolute -bottom-4 -left-4 glass-card p-4 rounded-xl animate-float"
                style={{
                  animationDelay: "1s",
                  transitionDelay: isLoaded ? "1500ms" : "0ms",
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                  transition: "all 0.8s ease-out",
                }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient">50+</div>
                  <div className="text-xs text-gray-400">Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
