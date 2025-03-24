import { motion } from "framer-motion";
import { useState } from "react";

const meals = [
  {
    id: 1,
    name: "Vegetarian Thali",
    price: 10,
    image:
      "https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Chicken Biryani",
    price: 12,
    image:
      "https://images.unsplash.com/photo-1589302168068-37903e0ef661?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Paneer Tikka",
    price: 8,
    image:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=300&auto=format&fit=crop",
  },
];

const Order = () => {
  const [step, setStep] = useState(1);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const handleNext = () => setStep(step + 1);
  const handleSelectMeal = (meal) => {
    setSelectedMeal(meal);
    handleNext();
  };

  return (
    <section className="min-h-screen bg-white py-18 sm:py-20 px-4 sm:px-6 lg:px-8">
      {step === 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">
            Select Your Meal
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
            {meals.map((meal) => (
              <motion.div
                key={meal.id}
                className="p-4 sm:p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                onClick={() => handleSelectMeal(meal)}
              >
                <img
                  src={meal.image}
                  alt={meal.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  loading="lazy"
                />
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                  {meal.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  ${meal.price}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
      {step === 2 && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Confirm Your Order
          </h2>
          <div className="p-4 bg-gray-100 rounded-lg mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              {selectedMeal.name}
            </h3>
            <p className="text-gray-600">${selectedMeal.price}</p>
          </div>
          <input
            type="text"
            placeholder="Delivery Address"
            className="w-full p-3 border border-gray-300 rounded-full text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 mb-4"
          />
          <button
            onClick={handleNext}
            className="w-full py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors"
          >
            Place Order
          </button>
        </motion.div>
      )}
      {step === 3 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Order Confirmed!
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-6">
            Your {selectedMeal.name} will be delivered soon.
          </p>
          <button
            onClick={() => setStep(1)}
            className="py-3 px-6 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors"
          >
            Order Again
          </button>
        </motion.div>
      )}
    </section>
  );
};

export default Order;
