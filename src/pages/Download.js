import { motion } from "framer-motion";

const Download = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-red-600 to-white flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
      <motion.div
        className="w-full max-w-md sm:max-w-lg lg:max-w-xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Download the TiffinHub App
        </motion.h2>
        <motion.p
          className="text-sm sm:text-base lg:text-lg text-white mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Order delicious meals on the go! Available on iOS and Android.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <a
            href="#"
            className="bg-white text-red-600 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors flex items-center gap-2"
          >
            <i className="fab fa-apple"></i> App Store
          </a>
          <a
            href="#"
            className="bg-white text-red-600 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors flex items-center gap-2"
          >
            <i className="fab fa-google-play"></i> Google Play
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Download;
