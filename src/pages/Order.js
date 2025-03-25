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
      "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=2088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState("");

  const handleNext = () => {
    if (step === 2) {
      if (validateAddress()) {
        setStep(step + 1);
      }
    } else {
      setStep(step + 1);
    }
  };

  const handleSelectMeal = (meal) => {
    setSelectedMeal(meal);
    handleNext();
  };

  const validateAddress = () => {
    if (address.trim().length < 5) {
      setAddressError("Address must be at least 5 characters long");
      return false;
    }
    setAddressError("");
    return true;
  };

  const inputVariants = {
    focus: {
      scale: 1.05,
      borderColor: "#ef4444",
      transition: { duration: 0.3 },
    },
    blur: { scale: 1, borderColor: "#d1d5db", transition: { duration: 0.3 } },
    invalid: { x: [0, -10, 10, -10, 0], transition: { duration: 0.5 } },
  };

  return (
    <section className="min-h-screen bg-white pt-24 sm:pt-28 lg:pt-32 px-4 sm:px-6 lg:px-8">
      {step === 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-8 sm:mb-10 text-center">
            Select Your Meal
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {meals.map((meal) => (
              <motion.div
                key={meal.id}
                className="p-4 sm:p-6 bg-white rounded-lg shadow-md border border-gray-200 cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => handleSelectMeal(meal)}
              >
                <img
                  src={meal.image}
                  alt={meal.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  loading="lazy"
                />
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">
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
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-8 text-center">
            Confirm Your Order
          </h2>
          <div className="p-4 bg-gray-100 rounded-lg mb-4">
            <h3 className="text-lg font-bold text-gray-800">
              {selectedMeal.name}
            </h3>
            <p className="text-gray-600">${selectedMeal.price}</p>
          </div>
          <motion.input
            type="text"
            placeholder="Delivery Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            onBlur={validateAddress}
            className="w-full p-3 border border-gray-300 rounded-full text-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-red-600 mb-2"
            whileHover={{
              scale: 1.1,
              transition: { type: "spring", stiffness: 300 },
            }}
            animate={addressError ? "invalid" : "blur"}
            variants={inputVariants}
            whileFocus="focus"
          />
          {addressError && (
            <motion.p
              className="text-red-600 text-xs sm:text-sm mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {addressError}
            </motion.p>
          )}
          <motion.button
            className="w-full py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors"
            whileHover={{
              scale: 1.1,
              transition: { type: "spring", stiffness: 300 },
            }}
            onClick={handleNext}
          >
            Place Order
          </motion.button>
        </motion.div>
      )}
      {step === 3 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
            Order Confirmed!
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-6">
            Your {selectedMeal.name} will be delivered soon.
          </p>
          <motion.button
            className="py-3 px-6 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors"
            whileHover={{
              scale: 1.1,
              transition: { type: "spring", stiffness: 300 },
            }}
            onClick={() => setStep(1)}
          >
            Order Again
          </motion.button>
        </motion.div>
      )}
    </section>
  );
};

export default Order;
