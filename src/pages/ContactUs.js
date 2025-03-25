import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        className="w-full max-w-md sm:max-w-lg lg:max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="text-center lg:text-left"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-6">
            We’d love to hear from you! Reach out with any questions or
            feedback.
          </p>
          <div className="space-y-4">
            <p className="text-gray-800">
              <i className="fas fa-phone mr-2 text-red-600"></i> +1 234 567 890
            </p>
            <p className="text-gray-800">
              <i className="fas fa-envelope mr-2 text-red-600"></i>{" "}
              support@tiffinhub.com
            </p>
            <p className="text-gray-800">
              <i className="fas fa-map-marker-alt mr-2 text-red-600"></i> 123
              Food Street, NY
            </p>
          </div>
        </motion.div>
        <motion.form
          className="space-y-4"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-full text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-full text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded-lg text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 h-32"
          />
          <button className="w-full py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors">
            Send Message
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default ContactUs;
