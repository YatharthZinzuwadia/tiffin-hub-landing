import { motion } from "framer-motion";

const Login = () => {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        className="w-full max-w-md sm:max-w-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
          Login
        </h2>
        <input
          type="text"
          placeholder="Phone Number"
          className="w-full p-3 border border-gray-300 rounded-full text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border border-gray-300 rounded-full text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 mb-4"
        />
        <button className="w-full py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors">
          Login
        </button>
      </motion.div>
    </section>
  );
};

export default Login;
