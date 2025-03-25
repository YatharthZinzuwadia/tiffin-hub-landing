import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const Home = () => {
  const canvasRef = useRef(null);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const geometry = new THREE.SphereGeometry(5, 32, 32);
    const material = new THREE.MeshBasicMaterial({
      color: 0xef4444,
      wireframe: true,
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    camera.position.z = 15;

    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    return () => renderer.dispose();
  }, []);

  const validatePhone = () => {
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      setPhoneError("Please enter a valid 10-digit phone number");
      return false;
    }
    setPhoneError("");
    return true;
  };

  const handleSubmit = () => {
    if (validatePhone()) {
      alert("Phone number submitted: " + phone);
    }
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
    <div className="relative">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-20" />
      <section className="min-h-[70vh] sm:min-h-screen bg-white flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 relative z-10 pt-24 sm:pt-28">
        <motion.div
          className="w-full max-w-md sm:max-w-lg lg:max-w-xl text-left lg:text-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-red-600 mb-2"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            TiffinHub
          </motion.h1>
          <motion.p
            className="text-xs sm:text-sm lg:text-base uppercase tracking-wider text-gray-600 mb-6 sm:mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Delicious meals, delivered fresh
          </motion.p>
          <motion.input
            type="text"
            placeholder="Enter Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
            onBlur={validatePhone}
            className="w-full p-3 sm:p-4 border border-gray-300 rounded-full text-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-red-600 mb-2 text-sm sm:text-base"
            whileHover={{
              scale: 1.1,
              transition: { type: "spring", stiffness: 300 },
            }}
            animate={phoneError ? "invalid" : "blur"}
            variants={inputVariants}
            whileFocus="focus"
          />
          {phoneError && (
            <motion.p
              className="text-red-600 text-xs sm:text-sm mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {phoneError}
            </motion.p>
          )}
          <motion.button
            className="w-full py-3 sm:py-4 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors text-sm sm:text-base"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            whileHover={{
              scale: 1.1,
              transition: { type: "spring", stiffness: 300 },
            }}
            onClick={handleSubmit}
          >
            Get Started
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
