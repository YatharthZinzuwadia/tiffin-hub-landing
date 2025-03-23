import { motion } from "framer-motion";

const Hero = () => (
  <motion.section
    className="min-h-screen bg-white flex items-center justify-center text-center px-4"
    id="hero"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <div>
      <h1 className="text-5xl font-bold text-red-600 mb-2">TiffinHub</h1>
      <p className="text-sm uppercase tracking-wider text-gray-600 mb-8">
        Delicious meals, delivered fresh
      </p>
      <input
        type="text"
        placeholder="Enter Phone Number"
        className="w-full max-w-sm p-3 border border-gray-300 rounded-full text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 mb-4"
      />
      <button className="w-full max-w-sm bg-red-600 text-white font-semibold py-3 rounded-full hover:bg-red-700 transition-colors">
        Continue
      </button>
      <p className="text-xs text-gray-500 mt-4">
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
