import React, { useState, useEffect } from "react";
import {
  Zap,
  Sun,
  Cpu,
  ArrowRight,
  Sparkles,
  Battery,
  Shield,
  Users,
  Globe,
  Award,
  Target,
  Heart,
  Lightbulb,
  CheckCircle,
} from "lucide-react";

const About = ({ setOpenMissionModal }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseMove = (e) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth) * 100,
      y: (e.clientY / window.innerHeight) * 100,
    });
  };

  const stats = [
    { number: "500+", label: "Projects Completed", icon: Award },
    { number: "15+", label: "Years Experience", icon: Zap },
    { number: "50+", label: "Team Members", icon: Users },
    { number: "100%", label: "Client Satisfaction", icon: CheckCircle },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Pioneering cutting-edge electrical and solar solutions that drive Kenya's technological advancement.",
    },
    {
      icon: Shield,
      title: "Reliability",
      description:
        "Delivering consistent, dependable power systems you can trust for your most critical operations.",
    },
    {
      icon: Heart,
      title: "Community",
      description:
        "Building lasting relationships and empowering local communities through sustainable energy solutions.",
    },
    {
      icon: Globe,
      title: "Sustainability",
      description:
        "Committed to environmentally responsible practices and clean energy for a greener future.",
    },
  ];

  const services = [
    {
      icon: Zap,
      title: "Electrical Solutions",
      description: "Complete electrical installations and maintenance",
    },
    {
      icon: Sun,
      title: "Solar Energy",
      description: "Renewable solar power systems and installations",
    },
    {
      icon: Cpu,
      title: "Smart Technology",
      description: "Advanced automation and control systems",
    },
    {
      icon: Battery,
      title: "Energy Storage",
      description: "Efficient battery systems and backup solutions",
    },
  ];

  return (
    <section
      className="min-h-screen relative overflow-hidden"
      id="about"
      onMouseMove={handleMouseMove}
      style={{
        background: `
          linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.7) 100%),
          radial-gradient(circle at ${mousePosition.x}% ${
          mousePosition.y
        }%, rgba(34, 197, 94, 0.15) 0%, transparent 60%),
          radial-gradient(circle at ${100 - mousePosition.x}% ${
          100 - mousePosition.y
        }%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
          linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
          url('https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-green-400 opacity-10 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 4 + 2}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          >
            <div
              className="w-2 h-2 bg-green-400/20 rotate-45 rounded-sm animate-spin"
              style={{ animationDuration: `${10 + i * 2}s` }}
            />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10  mx-auto px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm shadow-lg hover:bg-green-500/30 transition-all duration-300">
              <Sparkles className="w-5 h-5 text-green-400 animate-pulse" />
              <span className="text-green-400 text-sm font-medium">
                About Nexum Power
              </span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Empowering Kenya's
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400">
                Energy Future
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              For over 15 years, Nexum Power Limited has been at the forefront
              of electrical, electronics, and solar energy solutions in Machakos
              County, Kenya.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        {/* <div
          className={`transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-md rounded-sm p-6 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
                  <div className="p-3 bg-green-500/20 rounded-full w-fit mx-auto mb-4 group-hover:bg-green-500/30 transition-colors">
                    <stat.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="text-3xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Mission Section */}
        <div
          className={`transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="flex items-center gap-3 mb-6">
                {/* <div className="p-2 bg-green-500/20 rounded-full">
                  <Target className="w-6 h-6 text-green-400" />
                </div> */}
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                At Nexum Power Limited, we believe that reliable, sustainable
                power is the foundation of progress. Our mission is to deliver
                world-class electrical and solar solutions that empower
                communities, businesses, and industries across Kenya to thrive.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                From residential solar installations to industrial power
                infrastructure, we are committed to excellence in every project,
                ensuring our clients receive not just power, but the peace of
                mind that comes with superior engineering and service.
              </p>
              <div className="flex gap-4">
                <button
                  className="group bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-3 rounded-sm shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 font-semibold"
                  onClick={() => {
                    setOpenMissionModal(true);
                  }}
                >
                  <Zap className="w-4 h-4" />
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-sm p-8 border border-white/20 shadow-lg">
                <div className="grid grid-cols-2 gap-6">
                  {services.map((service, i) => (
                    <div
                      key={i}
                      className="bg-green-500/10 backdrop-blur-sm rounded-sm p-4 border border-green-500/20 hover:bg-green-500/20 transition-all duration-300 group"
                    >
                      <div className="p-2 bg-green-500/20 rounded-full w-fit mb-3 group-hover:bg-green-500/30 transition-colors">
                        <service.icon className="w-5 h-5 text-green-400" />
                      </div>
                      <h3 className="text-sm font-semibold text-white mb-1">
                        {service.title}
                      </h3>
                      <p className="text-xs text-gray-400">
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div
          className={`transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-2 bg-green-500/20 rounded-full">
                <Heart className="w-6 h-6 text-green-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">Our Core Values</h2>
            </div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              These principles guide everything we do and shape how we approach
              every challenge.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {values.map((value, index) => (
              <div key={index} className="group">
                <div className="bg-white/10 backdrop-blur-md rounded-sm p-6 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg h-full">
                  <div className="p-3 bg-green-500/20 rounded-full w-fit mb-4 group-hover:bg-green-500/30 transition-colors">
                    <value.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-white">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div
          className={`transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-2 bg-green-500/20 rounded-full">
                <Users className="w-6 h-6 text-green-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">Our Leadership</h2>
            </div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Experienced professionals driving innovation in Kenya's energy
              sector.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                name: "Dennis Peter Munyao",
                role: "Chief Executive Officer",
                experience: "4+ years in energy solutions",
              },
              {
                name: "Grace Wanjiku",
                role: "Chief Technology Officer",
                experience: "4+ years in electrical systems",
              },
              {
                name: "David Kiprotich",
                role: "Head of Solar Division",
                experience: "4+ years in renewable energy",
              },
            ].map((member, index) => (
              <div key={index} className="group">
                <div className="bg-white/10 backdrop-blur-md rounded-sm p-6 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">
                    {member.name}
                  </h3>
                  <p className="text-green-400 font-semibold mb-2 text-sm">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-xs">{member.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
      </div>

      {/* Floating Visual Elements */}
      <div className="absolute top-1/4 left-10 opacity-30">
        <div
          className="w-32 h-32 border-2 border-green-400/30 rounded-full animate-spin"
          style={{ animationDuration: "20s" }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <Battery className="w-8 h-8 text-green-400" />
          </div>
        </div>
      </div>

      <div className="absolute top-1/3 right-10 opacity-30">
        <div
          className="w-28 h-28 border-2 border-green-400/30 rounded-full animate-spin"
          style={{ animationDuration: "15s", animationDirection: "reverse" }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <Shield className="w-7 h-7 text-green-400" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-1/4 left-1/4 opacity-20">
        <div className="w-24 h-24 bg-green-400/10 rounded-full animate-pulse flex items-center justify-center">
          <Sun className="w-6 h-6 text-green-400" />
        </div>
      </div>

      <div className="absolute bottom-1/3 right-1/4 opacity-20">
        <div
          className="w-20 h-20 bg-green-400/10 rounded-full animate-pulse flex items-center justify-center"
          style={{ animationDelay: "1s" }}
        >
          <Cpu className="w-5 h-5 text-green-400" />
        </div>
      </div>

      {/* Enhanced Gradient Overlays */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
    </section>
  );
};

export default About;
