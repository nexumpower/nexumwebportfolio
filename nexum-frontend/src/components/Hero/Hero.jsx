import { useState } from "react";
import { useEffect } from "react";

import Navbar from "../Navbar/Navbar";

import "./hero.css"

import {
  Zap,
  Sun,
  Cpu,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Battery,
  Shield,
} from "lucide-react";


const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  const words = ["Innovation", "Technology", "Excellence", "Sustainability"];

  useEffect(() => {
    setIsVisible(true);
    const wordInterval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(wordInterval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseMove = (e) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth) * 100,
      y: (e.clientY / window.innerHeight) * 100,
    });
  };

  const features = [
    { icon: <Zap className="w-3 h-3" />, text: "Electrical Solutions" },
    { icon: <Sun className="w-3 h-3" />, text: "Solar Energy" },
    { icon: <Cpu className="w-3 h-3" />, text: "Smart Technology" },
  ];

  return (
    <div
      className="hero relative min-h-screen overflow-hidden flex items-center justify-center"
      onMouseMove={handleMouseMove}
      style={{
        background: `
            linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.5) 100%),
            radial-gradient(circle at ${mousePosition.x}% ${
          mousePosition.y
        }%, rgba(34, 197, 94, 0.15) 0%, transparent 60%),
            radial-gradient(circle at ${100 - mousePosition.x}% ${
          100 - mousePosition.y
        }%, 
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

      {/* Navbar */}
      <Navbar />

      {/* Main Content - Centered */}
      <div className="z-10 absolute max-w-6xl mx-auto px-6 sm:px-12 text-center">
        {/* Floating Badge */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        ></div>

        {/* Main Heading - Centered */}
        <div
          className={`transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-3xl sm:text-3xl lg:text-5xl font-bold leading-tight mb-4 text-white">
            Powering Kenya's Growth Through ELectronics
          </h1>
        </div>

        {/* Description - Centered */}
        <div
          className={`transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
            Nexum Power Limited is a leading provider of electrical,
            electronics, and solar energy solutions in Machakos County, Kenya.
          </p>
        </div>

        {/* Features - Centered */}
        <div
          className={`transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-sm px-6 py-[0.2em] border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg group"
              >
                <div className="p-2 bg-green-500/20 rounded-full group-hover:bg-green-500/30 transition-colors">
                  <span className="text-green-400">{feature.icon}</span>
                </div>
                <span className="text-white font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons - Centered */}
        <div
          className={`transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex gap-6 flex-wrap justify-center mb-16">
            <a
              href="#services"
              className="group bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-10 py-[0.2rem] rounded-sm shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-3xl flex items-center gap-3 font-semibold text-lg relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Zap className="w-3 h-3" />
              Explore Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-10 py-[0.2rem] rounded-sm transition-all duration-300 transform hover:scale-105 backdrop-blur-md bg-white/10 font-semibold text-lg shadow-lg hover:shadow-sm"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Floating Stats */}
        <div
          className={`transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            <div className="text-center group">
              <div className="text-3xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform">
                500+
              </div>
              <div className="text-gray-400 text-sm">Projects Completed</div>
            </div>
            {/* <div className="text-center group">
              <div className="text-3xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform">15+</div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div> */}
            <div className="text-center group">
              <div className="text-3xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform">
                100%
              </div>
              <div className="text-gray-400 text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <div className="text-white/50 text-sm">Scroll Down</div>
          <ChevronDown className="w-6 h-6 text-white/70" />
        </div>
      </div>

      {/* Enhanced Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

      {/* Top Gradient */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />

      <style jsx>{`
        @keyframes scaleX {
          0%,
          100% {
            transform: scaleX(0);
          }
          50% {
            transform: scaleX(1);
          }
        }
      `}</style>

      <div className="inline-flex absolute items-center gap-2 bg-green-500/20 border border-green-500/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm shadow-lg hover:bg-green-500/30 transition-all duration-300 top-[50%] left-[2rem] rotate-90">
        <Sparkles className="w-5 h-5 text-green-400 animate-pulse" />
        <span className="text-green-400 text-sm font-medium">
          Leading Energy Solutions Provider
        </span>
        <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
      </div>
    </div>
  );
};

export default Hero;
