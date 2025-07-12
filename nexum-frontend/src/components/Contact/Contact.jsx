import { Mail, Phone, MapPin, Send, X } from "lucide-react";

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
      <div className="bg-gray-950 text-gray-200 max-w-[1000px] w-full p-8 rounded-md relative overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Title and Description */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Get in Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you're curious about our
            services, need support, or want to partner—reach out anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="text-green-400 w-6 h-6" />
              <div>
                <h4 className="font-semibold text-white">Email</h4>
                <p className="text-gray-400">info@nexumpower.co.ke</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-green-400 w-6 h-6" />
              <div>
                <h4 className="font-semibold text-white">Phone</h4>
                <p className="text-gray-400">+254 712 345 678</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="text-green-400 w-6 h-6" />
              <div>
                <h4 className="font-semibold text-white">Location</h4>
                <p className="text-gray-400">
                  Mlolongo, Machakos County, Kenya
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-gray-900 p-6 rounded-sm shadow space-y-6">
            <div>
              <label className="block mb-1 text-sm font-medium">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-sm text-white focus:outline-none focus:border-green-400"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-sm text-white focus:outline-none focus:border-green-400"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Message</label>
              <textarea
                rows="5"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-sm text-white focus:outline-none focus:border-green-400"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-sm transition"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
