import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 text-sm pt-12 pb-6 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-4">Nexum Power</h2>
          <p className="leading-relaxed text-gray-400">
            Powering Kenya’s growth through innovation and sustainable energy
            solutions — from solar to smart electrical systems.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-medium mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#services" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-white">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-medium mb-4">Contact</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <Mail className="w-4 h-4 mt-1 text-green-400" />
              <span>info@nexumpower.co.ke</span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="w-4 h-4 mt-1 text-green-400" />
              <span>+254 712 345 678</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-1 text-green-400" />
              <span>Mlolongo, Machakos County</span>
            </li>
          </ul>
        </div>

        {/* Newsletter or Socials Placeholder */}
        <div>
          <h3 className="text-white font-medium mb-4">Stay Connected</h3>
          <p className="mb-3">Join our newsletter to stay updated.</p>
          <form className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="px-3 py-1.5 w-full rounded-sm text-gray-900 text-sm"
            />
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-1.5 rounded-sm text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Nexum Power Limited. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
