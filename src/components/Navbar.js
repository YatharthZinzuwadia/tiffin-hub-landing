import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/download", label: "Download" },
    { to: "/contact-us", label: "Contact Us" },
    { to: "/order", label: "Order" },
    { to: "/blog", label: "Blog" },
  ];

  // Toggle menu state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Animation variants for the menu
  const menuVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  // Animation variants for the links (staggered effect)
  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  // Animation variants for the hamburger bars
  const barVariants = {
    closed: { rotate: 0, y: 0, opacity: 1 },
    openTop: { rotate: 45, y: 6 },
    openMiddle: { opacity: 0 },
    openBottom: { rotate: -45, y: -6 },
  };

  return (
    <nav className="fixed top-0 w-full bg-white text-gray-800 py-3 sm:py-4 shadow-md z-20">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <motion.span
          className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          TiffinHub
        </motion.span>
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-4 lg:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-gray-600 hover:text-red-600 text-sm lg:text-base transition-colors ${
                location.pathname === link.to
                  ? "text-red-600 font-semibold"
                  : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/register"
            className="bg-red-600 text-white px-3 lg:px-4 py-1.5 lg:py-2 rounded-full hover:bg-red-700 transition-colors text-sm lg:text-base"
          >
            Register
          </Link>
        </div>
        {/* Hamburger Button for Tablet and Phone */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <motion.span
            className="w-6 h-0.5 bg-gray-600"
            variants={barVariants}
            initial="closed"
            animate={isOpen ? "openTop" : "closed"}
          />
          <motion.span
            className="w-6 h-0.5 bg-gray-600"
            variants={barVariants}
            initial="closed"
            animate={isOpen ? "openMiddle" : "closed"}
          />
          <motion.span
            className="w-6 h-0.5 bg-gray-600"
            variants={barVariants}
            initial="closed"
            animate={isOpen ? "openBottom" : "closed"}
          />
        </button>
      </div>
      {/* Mobile/Tablet Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            className="fixed top-0 left-0 w-full h-full bg-white z-30 lg:hidden flex flex-col items-center justify-center"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {/* Menu Links */}
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.to}
                  custom={index}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <Link
                    to={link.to}
                    className={`text-gray-600 hover:text-red-600 text-2xl sm:text-3xl font-medium transition-colors ${
                      location.pathname === link.to
                        ? "text-red-600 font-semibold"
                        : ""
                    }`}
                    onClick={toggleMenu}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                custom={navLinks.length}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <Link
                  to="/register"
                  className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors text-base sm:text-lg"
                  onClick={toggleMenu}
                >
                  Register
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
