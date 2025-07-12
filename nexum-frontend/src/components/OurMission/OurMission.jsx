import React, { useEffect } from "react";
import {
  Target,
  Zap,
  Sun,
  Cpu,
  Battery,
  X,
  Globe,
  Leaf,
  TrendingUp,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const OurMission = ({ openMissionModal, setOpenMissionModal }) => {
  useEffect(() => {
    if (openMissionModal) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [openMissionModal]);

  return (
    <AnimatePresence>
      {openMissionModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center"
        >
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="relative w-full h-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl overflow-y-auto"
          >
            <button
              onClick={() => setOpenMissionModal(false)}
              className="absolute top-0 right-0 text-white p-6 hover:text-red-400 transition z-10"
            >
              <X className="w-10 h-10" />
            </button>

            <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-green-600/30 scrollbar-track-transparent">
              <div
                className="h-64 w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80')",
                }}
              />

              {/* Main Content */}
              <div className="p-8 space-y-12 text-white">
                {/* Mission Section */}
                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-green-500/20 p-2 rounded-full">
                      <Target className="w-6 h-6 text-green-400" />
                    </div>
                    <h2 className="text-3xl font-bold">Our Mission</h2>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    To provide dependable, innovative, and sustainable energy
                    solutions that power homes, businesses, and industries
                    across Kenya and beyond. We aim to ensure that clean,
                    affordable energy is accessible to all.
                  </p>
                </section>

                {/* Vision Section */}
                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-green-500/20 p-2 rounded-full">
                      <Globe className="w-6 h-6 text-green-400" />
                    </div>
                    <h2 className="text-3xl font-bold">Our Vision</h2>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Nexum Power envisions a future where we are a global energy
                    brand — leading in retail, wholesale, export, and energy
                    production. From powering rural homes to international
                    industries, we are committed to reaching every corner of the
                    globe.
                  </p>
                </section>

                {/* What We Do Section */}
                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-green-500/20 p-2 rounded-full">
                      <Zap className="w-6 h-6 text-green-400" />
                    </div>
                    <h2 className="text-3xl font-bold">What We Do</h2>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
                    {[
                      {
                        icon: <Zap className="w-8 h-8 text-white" />,
                        label: "Electrical Installations",
                        bg: "bg-gradient-to-br from-green-600 to-green-400",
                      },
                      {
                        icon: <Sun className="w-8 h-8 text-white" />,
                        label: "Solar Systems",
                        bg: "bg-gradient-to-br from-yellow-500 to-yellow-300",
                      },
                      {
                        icon: <Cpu className="w-8 h-8 text-white" />,
                        label: "Smart Automation",
                        bg: "bg-gradient-to-br from-purple-600 to-purple-400",
                      },
                      {
                        icon: <Battery className="w-8 h-8 text-white" />,
                        label: "Energy Storage",
                        bg: "bg-gradient-to-br from-blue-600 to-blue-400",
                      },
                    ].map((card, idx) => (
                      <div
                        key={idx}
                        className={`flex flex-col items-center justify-center text-center text-white p-6 rounded-sm shadow-md hover:scale-105 transition-transform duration-300 ${card.bg}`}
                      >
                        <div className="mb-3">{card.icon}</div>
                        <p className="text-sm font-medium">{card.label}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Future Plans */}
                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-green-500/20 p-2 rounded-full">
                      <TrendingUp className="w-6 h-6 text-green-400" />
                    </div>
                    <h2 className="text-3xl font-bold">The Future</h2>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Nexum Power is not just focused on the present. We are
                    expanding into solar product manufacturing, power system
                    exports, and sustainable energy production. Our future
                    includes opening new branches across Africa, building
                    partnerships worldwide, and creating green jobs for future
                    generations.
                  </p>
                </section>

                {/* Sustainability */}
                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-green-500/20 p-2 rounded-full">
                      <Leaf className="w-6 h-6 text-green-400" />
                    </div>
                    <h2 className="text-3xl font-bold">Sustainability First</h2>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Sustainability is at the heart of what we do. From solar
                    power to clean installations, every Nexum project considers
                    its environmental impact. We are proud to contribute to a
                    cleaner, greener planet.
                  </p>
                </section>
              </div>
            </div>

            {/* Optional: Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OurMission;
