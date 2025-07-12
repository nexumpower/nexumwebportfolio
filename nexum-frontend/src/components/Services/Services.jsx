import React, { useState } from "react";
import {
  Zap,
  Sun,
  Cpu,
  Battery,
  Shield,
  ChevronDown,
  CheckCircle,
  Wrench,
  Settings,
  Power,
  Monitor,
  Lightbulb,
  Wifi,
  Database,
  Gauge,
  Star,
  Smartphone,
  Tablet,
  BatteryCharging,
  Activity,
  BarChart3,
} from "lucide-react";

const Services = () => {
  const [activeAccordion, setActiveAccordion] = useState(-1);

  const services = [
    {
      id: 0,
      title: "Electrical Solutions",
      icon: Zap,
      description:
        "Complete electrical installations, maintenance, and power distribution systems.",
      features: [
        {
          icon: Power,
          title: "Power Distribution",
          desc: "Advanced electrical panels and distribution systems",
        },
        {
          icon: Lightbulb,
          title: "Lighting Systems",
          desc: "LED and smart lighting solutions",
        },
        {
          icon: Shield,
          title: "Safety Systems",
          desc: "Circuit protection and safety installations",
        },
        {
          icon: Wrench,
          title: "Maintenance",
          desc: "Preventive and corrective electrical maintenance",
        },
      ],
      stats: { completed: "200+", rating: "4.9/5", warranty: "5 Years" },
    },
    {
      id: 1,
      title: "Solar Energy Systems",
      icon: Sun,
      description:
        "Renewable solar power installations for homes and businesses.",
      features: [
        {
          icon: BatteryCharging,
          title: "Energy Storage",
          desc: "Advanced battery backup systems",
        },
        {
          icon: Monitor,
          title: "Monitoring",
          desc: "Real-time performance tracking and analytics",
        },
        {
          icon: Settings,
          title: "Inverters",
          desc: "Grid-tie and off-grid inverter solutions",
        },
      ],
      stats: { completed: "150+", rating: "4.8/5", warranty: "10 Years" },
    },
    {
      id: 2,
      title: "Smart Automation",
      icon: Cpu,
      description: "Intelligent building automation and smart control systems.",
      features: [
        {
          icon: Smartphone,
          title: "Mobile Control",
          desc: "Remote monitoring via mobile apps",
        },
        {
          icon: Wifi,
          title: "IoT Integration",
          desc: "Connected sensors and smart networks",
        },
        {
          icon: Database,
          title: "Data Analytics",
          desc: "Performance insights and predictive maintenance",
        },
        {
          icon: Tablet,
          title: "Dashboard",
          desc: "Centralized control interfaces",
        },
      ],
      stats: { completed: "80+", rating: "4.9/5", warranty: "3 Years" },
    },
    {
      id: 3,
      title: "Energy Storage Solutions",
      icon: Battery,
      description: "Advanced battery systems and grid backup solutions.",
      features: [
        {
          icon: BatteryCharging,
          title: "Lithium Systems",
          desc: "High-capacity lithium-ion battery installations",
        },
        {
          icon: Activity,
          title: "Grid Backup",
          desc: "Seamless power transition during outages",
        },
        {
          icon: BarChart3,
          title: "Load Management",
          desc: "Intelligent energy distribution and optimization",
        },
        {
          icon: Gauge,
          title: "Monitoring",
          desc: "Real-time battery health tracking",
        },
      ],
      stats: { completed: "120+", rating: "4.8/5", warranty: "7 Years" },
    },
  ];

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? -1 : index);
  };

  return (
    <div className="p-4 px-8 bg-neutral-900 shadow-md" id="services">
      <h2 className="text-3xl font-bold text-center text-white mb-10">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="border border-white/10 rounded-sm overflow-hidden bg-neutral-800"
          >
            <button
              className="w-full flex items-center justify-between p-4 cursor-pointer bg-neutral-800 hover:bg-neutral-700 transition-colors"
              onClick={() => toggleAccordion(index)}
              aria-expanded={activeAccordion === index}
            >
              <div className="flex items-center gap-3 text-left">
                <service.icon className="text-green-400 w-5 h-5" />
                <h3 className="text-lg font-semibold text-white">
                  {service.title}
                </h3>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-white transition-transform duration-300 ${
                  activeAccordion === index ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${
                activeAccordion === index
                  ? "max-h-[1000px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-4 text-white">
                <p className="mb-4 text-white/80">{service.description}</p>
                <h4 className="text-md font-semibold mb-2 flex items-center gap-1">
                  <Settings className="w-4 h-4 text-green-400" /> Key Features
                </h4>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <feature.icon className="text-green-300 w-4 h-4 mt-1" />
                      <div>
                        <p className="font-medium text-white text-sm">
                          {feature.title}
                        </p>
                        <p className="text-white/60 text-sm">{feature.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex gap-5 text-sm text-white/70 flex-wrap">
                  <span>
                    <CheckCircle className="inline w-4 h-4 text-green-400 mr-1" />
                    {service.stats.completed} Projects
                  </span>
                  <span>
                    <Star className="inline w-4 h-4 text-yellow-400 mr-1" />
                    {service.stats.rating} Rating
                  </span>
                  <span>
                    <Shield className="inline w-4 h-4 text-blue-400 mr-1" />
                    {service.stats.warranty} Warranty
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
