import { motion } from "framer-motion";

const timelineSteps = [
  {
    title: "Enter Phone Number",
    description: "Provide your phone number to start the registration process.",
    icon: "📱",
  },
  {
    title: "Verify OTP",
    description: "Enter the OTP sent to your phone to verify your identity.",
    icon: "🔒",
  },
  {
    title: "Add Details",
    description: "Fill in your name, address, and other details.",
    icon: "📝",
  },
  {
    title: "Choose Locality",
    description: "Select your area to find vendors near you.",
    icon: "📍",
  },
  {
    title: "Browse Meals",
    description: "Explore a variety of meals and select your favorites.",
    icon: "🍽️",
  },
  {
    title: "Confirm Order",
    description: "Review your order and confirm delivery details.",
    icon: "✅",
  },
];

const Timeline = () => {
  return (
    <div className="py-12 sm:py-16 bg-white">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-12 text-center">
        How It Works
      </h2>
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-600"></div>
        {timelineSteps.map((step, index) => (
          <motion.div
            key={index}
            className={`flex items-center mb-12 ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-1/2 px-4">
              <motion.div
                className="p-4 bg-gray-100 rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            </div>
            <div className="w-1/2 flex justify-center">
              <motion.div
                className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {step.icon}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
