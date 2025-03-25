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
  const [errors, setErrors] = useState({});

  const handleNext = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let newErrors = { ...errors };
    switch (name) {
      case "phone":
        if (!/^\d{10}$/.test(value)) {
          newErrors.phone = "Phone must be a 10-digit number";
        } else {
          delete newErrors.phone;
        }
        break;
      case "otp":
        if (!/^\d{4}$/.test(value)) {
          newErrors.otp = "OTP must be a 4-digit number";
        } else {
          delete newErrors.otp;
        }
        break;
      case "name":
        if (!/^[a-zA-Z\s]+$/.test(value) || value.trim() === "") {
          newErrors.name = "Name must contain only letters and cannot be empty";
        } else {
          delete newErrors.name;
        }
        break;
      case "address":
        if (value.trim().length < 5) {
          newErrors.address = "Address must be at least 5 characters long";
        } else {
          delete newErrors.address;
        }
        break;
      case "locality":
        if (value.trim().length < 3) {
          newErrors.locality = "Locality must be at least 3 characters long";
        } else {
          delete newErrors.locality;
        }
        break;
      default:
        break;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep = () => {
    const currentField = stepsConfig[step - 1].field;
    return validateField(currentField, formData[currentField]);
  };

  const stepsConfig = [
    { title: "Enter Phone Number", field: "phone" },
    { title: "Verify OTP", field: "otp" },
    { title: "Add Details", field: "name" },
    { title: "Choose Locality", field: "locality" },
  ];

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
    <section className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28">
      <motion.div
        className="w-full max-w-md sm:max-w-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Steps Navigation */}
        <div className="flex flex-col sm:flex-row justify-between mb-8 gap-4">
          {stepsConfig.map((stepConfig, index) => (
            <motion.div
              key={index}
              className={`flex-1 text-center p-3 rounded-lg ${
                index + 1 === step
                  ? "bg-red-600 text-white"
                  : index + 1 < step
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-500 opacity-50"
              }`}
              initial={{ rotateX: 90 }}
              animate={{ rotateX: index + 1 <= step ? 0 : 90 }}
              transition={{ duration: 0.5 }}
            >
              {stepConfig.title}
            </motion.div>
          ))}
        </div>

        {/* Step Content */}
        {step === 1 && (
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-6 text-center">
              Step 1: Enter Phone Number
            </h2>
            <motion.input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) =>
                handleChange({
                  target: {
                    name: "phone",
                    value: e.target.value.replace(/\D/g, ""),
                  },
                })
              }
              className="w-full p-3 border border-gray-300 rounded-full text-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-red-600 mb-2"
              whileHover={{
                scale: 1.1,
                transition: { type: "spring", stiffness: 300 },
              }}
              animate={errors.phone ? "invalid" : "blur"}
              variants={inputVariants}
              whileFocus="focus"
            />
            {errors.phone && (
              <motion.p
                className="text-red-600 text-xs sm:text-sm mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {errors.phone}
              </motion.p>
            )}
            <motion.button
              onClick={handleNext}
              className="w-full py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors"
              whileHover={{
                scale: 1.1,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              Next
            </motion.button>
          </motion.div>
        )}
        {step === 2 && (
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-6 text-center">
              Step 2: Verify OTP
            </h2>
            <motion.input
              type="text"
              name="otp"
              placeholder="Enter OTP"
              value={formData.otp}
              onChange={(e) =>
                handleChange({
                  target: {
                    name: "otp",
                    value: e.target.value.replace(/\D/g, ""),
                  },
                })
              }
              className="w-full p-3 border border-gray-300 rounded-full text-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-red-600 mb-2"
              whileHover={{
                scale: 1.1,
                transition: { type: "spring", stiffness: 300 },
              }}
              animate={errors.otp ? "invalid" : "blur"}
              variants={inputVariants}
              whileFocus="focus"
            />
            {errors.otp && (
              <motion.p
                className="text-red-600 text-xs sm:text-sm mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {errors.otp}
              </motion.p>
            )}
            <motion.button
              onClick={handleNext}
              className="w-full py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors"
              whileHover={{
                scale: 1.1,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              Verify
            </motion.button>
          </motion.div>
        )}
        {step === 3 && (
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-6 text-center">
              Step 3: Add Details
            </h2>
            <motion.input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-full text-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-red-600 mb-2"
              whileHover={{
                scale: 1.1,
                transition: { type: "spring", stiffness: 300 },
              }}
              animate={errors.name ? "invalid" : "blur"}
              variants={inputVariants}
              whileFocus="focus"
            />
            {errors.name && (
              <motion.p
                className="text-red-600 text-xs sm:text-sm mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {errors.name}
              </motion.p>
            )}
            <motion.input
              type="text"
              name="address"
              placeholder="Your Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-full text-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-red-600 mb-2"
              whileHover={{
                scale: 1.1,
                transition: { type: "spring", stiffness: 300 },
              }}
              animate={errors.address ? "invalid" : "blur"}
              variants={inputVariants}
              whileFocus="focus"
            />
            {errors.address && (
              <motion.p
                className="text-red-600 text-xs sm:text-sm mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {errors.address}
              </motion.p>
            )}
            <motion.button
              onClick={handleNext}
              className="w-full py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors"
              whileHover={{
                scale: 1.1,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              Next
            </motion.button>
          </motion.div>
        )}
        {step === 4 && (
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-6 text-center">
              Step 4: Choose Locality
            </h2>
            <motion.input
              type="text"
              name="locality"
              placeholder="Your Locality"
              value={formData.locality}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-full text-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-red-600 mb-2"
              whileHover={{
                scale: 1.1,
                transition: { type: "spring", stiffness: 300 },
              }}
              animate={errors.locality ? "invalid" : "blur"}
              variants={inputVariants}
              whileFocus="focus"
            />
            {errors.locality && (
              <motion.p
                className="text-red-600 text-xs sm:text-sm mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {errors.locality}
              </motion.p>
            )}
            <motion.button
              onClick={() => validateStep() && alert("Registration Complete!")}
              className="w-full py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors"
              whileHover={{
                scale: 1.1,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              Complete Registration
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default Register;
