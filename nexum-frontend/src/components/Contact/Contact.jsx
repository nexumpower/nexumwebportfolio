import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-950 text-gray-200 py-20 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you're curious about our services,
            need support, or want to partner—reach out anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
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
                <p className="text-gray-400">Mlolongo, Machakos County, Kenya</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-gray-900 p-8 rounded-md shadow-md space-y-6">
            <div>
              <label className="block mb-1 text-sm font-medium">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:border-green-400"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:border-green-400"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Message</label>
              <textarea
                rows="5"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:border-green-400"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-md transition"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
