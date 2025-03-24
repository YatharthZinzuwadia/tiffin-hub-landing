import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const Home = () => {
  const canvasRef = useRef(null);

  // animated logo with particle effect
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 200;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 5 + 1,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 - 1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(239, 68, 68, 0.5)";
      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="relative">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <section className="min-h-[70vh] sm:min-h-screen bg-white flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 relative z-10 pt-24 sm:pt-28">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full max-w-md sm:max-w-lg lg:max-w-xl"
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-red-600 mb-2"
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
            className="w-full p-3 sm:p-4 border border-gray-300 rounded-full text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 mb-4 text-sm sm:text-base"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          />
          <motion.button
            className="w-full py-3 sm:py-4 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors text-sm sm:text-base"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
