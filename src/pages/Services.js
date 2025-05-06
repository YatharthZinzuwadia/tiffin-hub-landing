import { motion } from "framer-motion";
import Timeline from "../components/Timeline";

const servicesData = [
  {
    title: "Daily Meal Delivery",
    description:
      "Fresh, home-cooked meals delivered to your doorstep every day.",
    icon: "🍽",
  },
  {
    title: "Customizable Menus",
    description:
      "Choose your meals based on dietary preferences and restrictions.",
    icon: "📋",
  },
  {
    title: "Affordable Plans",
    description: "Flexible subscription plans starting at just $10/month.",
    icon: "💰",
  },
  {
    title: "Vendor Network",
    description:
      "Connect with local vendors for the freshest ingredients and meals.",
    icon: "🤝",
  },
  {
    title: "Meal Tracking",
    description: "Track your meal preparation and delivery in real-time.",
    icon: "📍",
  },
  {
    title: "Special Diet Options",
    description: "Vegan, gluten-free, and other diet-specific meals available.",
    icon: "🥗",
  },
];

const Services = () => {
  return (
    <div>
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-18 sm:pb-20 bg-white text-center">
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 sm:mb-8 px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="p-4 sm:p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
      <Timeline />
    </div>
  );
};

export default Services;
