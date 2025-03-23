import { motion } from "framer-motion";
import { useState } from "react";

const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    phone: "",
    otp: "",
    name: "",
    address: "",
    locality: "",
  });

  const handleNext = () => setStep(step + 1);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        className="w-full max-w-md sm:max-w-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {step === 1 && (
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
              Step 1: Enter Phone Number
            </h2>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-full text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 mb-4"
            />
            <button
              onClick={handleNext}
              className="w-full py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors"
            >
              Next
            </button>
          </motion.div>
        )}
        {step === 2 && (
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
              Step 2: Verify OTP
            </h2>
            <input
              type="text"
              name="otp"
              placeholder="Enter OTP"
              value={formData.otp}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-full text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 mb-4"
            />
            <button
              onClick={handleNext}
              className="w-full py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors"
            >
              Verify
            </button>
          </motion.div>
        )}
        {step === 3 && (
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
              Step 3: Add Details
            </h2>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-full text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 mb-4"
            />
            <input
              type="text"
              name="address"
              placeholder="Your Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-full text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 mb-4"
            />
            <button
              onClick={handleNext}
              className="w-full py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors"
            >
              Next
            </button>
          </motion.div>
        )}
        {step === 4 && (
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
              Step 4: Choose Locality
            </h2>
            <input
              type="text"
              name="locality"
              placeholder="Your Locality"
              value={formData.locality}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-full text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 mb-4"
            />
            <button
              onClick={() => alert("Registration Complete!")}
              className="w-full py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors"
            >
              Complete Registration
            </button>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default Register;
