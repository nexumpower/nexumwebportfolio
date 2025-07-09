import React, { useState, useEffect } from "react";
import {
  Zap,
  Sun,
  Cpu,
  Battery,
  Shield,
  Home,
  Building,
  Factory,
  ChevronDown,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Users,
  Clock,
  Award,
  Wrench,
  Settings,
  Power,
  Monitor,
  Lightbulb,
  Phone,
  Globe,
  Wifi,
  Database,
  Server,
  Gauge,
  Star,
  Smartphone,
  Tablet,
  BatteryCharging,
  Activity,
  BarChart3
} from "lucide-react";

const Services = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const services = [
    {
      id: 0,
      title: "Electrical Solutions",
      icon: Zap,
      description: "Complete electrical installations, maintenance, and power distribution systems.",
      features: [
        { icon: Power, title: "Power Distribution", desc: "Advanced electrical panels and distribution systems" },
        { icon: Lightbulb, title: "Lighting Systems", desc: "LED and smart lighting solutions" },
        { icon: Shield, title: "Safety Systems", desc: "Circuit protection and safety installations" },
        { icon: Wrench, title: "Maintenance", desc: "Preventive and corrective electrical maintenance" },
      ],
      stats: { completed: "200+", rating: "4.9/5", warranty: "5 Years" }
    },
    {
      id: 1,
      title: "Solar Energy Systems",
      icon: Sun,
      description: "Renewable solar power installations for homes and businesses.",
      features: [
        { icon: BatteryCharging, title: "Energy Storage", desc: "Advanced battery backup systems" },
        { icon: Monitor, title: "Monitoring", desc: "Real-time performance tracking and analytics" },
        { icon: Settings, title: "Inverters", desc: "Grid-tie and off-grid inverter solutions" },
      ],
      stats: { completed: "150+", rating: "4.8/5", warranty: "10 Years" }
    },
    {
      id: 2,
      title: "Smart Automation",
      icon: Cpu,
      description: "Intelligent building automation and smart control systems.",
      features: [
        { icon: Smartphone, title: "Mobile Control", desc: "Remote monitoring via mobile apps" },
        { icon: Wifi, title: "IoT Integration", desc: "Connected sensors and smart networks" },
        { icon: Database, title: "Data Analytics", desc: "Performance insights and predictive maintenance" },
        { icon: Tablet, title: "Dashboard", desc: "Centralized control interfaces" },
      ],
      stats: { completed: "80+", rating: "4.9/5", warranty: "3 Years" }
    },
    {
      id: 3,
      title: "Energy Storage Solutions",
      icon: Battery,
      description: "Advanced battery systems and grid backup solutions.",
      features: [
        { icon: BatteryCharging, title: "Lithium Systems", desc: "High-capacity lithium-ion battery installations" },
        { icon: Activity, title: "Grid Backup", desc: "Seamless power transition during outages" },
        { icon: BarChart3, title: "Load Management", desc: "Intelligent energy distribution and optimization" },
        { icon: Gauge, title: "Monitoring", desc: "Real-time battery health tracking" },
      ],
      stats: { completed: "120+", rating: "4.8/5", warranty: "7 Years" }
    }
  ];

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? -1 : index);
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Services</h2>
      <div className="space-y-4">
        {services.map((service, index) => (
          <div key={service.id} className="border border-neutral-300 rounded-lg">
            <div
              className="flex items-center justify-between p-4 cursor-pointer bg-gray-100"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex items-center gap-2">
                <service.icon className="text-green-500 w-5 h-5" />
                <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
              </div>
              <ChevronDown className={`w-4 h-4 text-gray-500 transform transition-transform ${activeAccordion === index ? 'rotate-180' : ''}`} />
            </div>
            {activeAccordion === index && (
              <div className="p-4 bg-white">
                <p className="mb-4 text-gray-600">{service.description}</p>
                <h4 className="text-md font-semibold text-gray-700 mb-2 flex items-center gap-1">
                  <Settings className="w-4 h-4 text-green-500" /> Key Features
                </h4>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <feature.icon className="text-green-400 w-4 h-4 mt-1" />
                      <div>
                        <p className="font-medium text-gray-800 text-sm">{feature.title}</p>
                        <p className="text-gray-500 text-sm">{feature.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex gap-4 text-sm text-gray-500">
                  <span><CheckCircle className="inline w-4 h-4 text-green-500 mr-1" />{service.stats.completed} Projects</span>
                  <span><Star className="inline w-4 h-4 text-yellow-500 mr-1" />{service.stats.rating} Rating</span>
                  <span><Shield className="inline w-4 h-4 text-blue-500 mr-1" />{service.stats.warranty} Warranty</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
