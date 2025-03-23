import { motion } from "framer-motion";

const Hero = () => (
  <motion.section
    className="min-h-screen bg-white flex items-center justify-center text-center px-4 sm:px-6 lg:px-8"
    id="hero"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-red-600 mb-2">
        TiffinHub
      </h1>
      <p className="text-xs sm:text-sm lg:text-base uppercase tracking-wider text-gray-600 mb-6 sm:mb-8">
        Delicious meals, delivered fresh
      </p>
      <input
        type="text"
        placeholder="Enter Phone Number"
        className="w-full p-3 sm:p-4 border border-gray-300 rounded-full text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 mb-4 text-sm sm:text-base"
      />
      <button className="w-full py-3 sm:py-4 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors text-sm sm:text-base">
        Continue
      </button>
      <p className="text-xs sm:text-sm text-gray-500 mt-4">
        By continuing, you agree to our{" "}
        <a href="#" className="text-red-600 hover:underline">
          Terms of Service
        </a>{" "}
        &{" "}
        <a href="#" className="text-red-600 hover:underline">
          Privacy Policy
        </a>
      </p>
    </div>
  </motion.section>
);

export default Hero;
