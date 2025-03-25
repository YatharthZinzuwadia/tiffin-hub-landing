import { motion } from "framer-motion";

const ServiceCard = ({ title, description }) => {
  return (
    <motion.div
      className="p-4 sm:p-6 bg-white rounded-lg shadow-md border border-gray-200"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-gray-600">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
