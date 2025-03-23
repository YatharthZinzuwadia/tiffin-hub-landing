import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/download", label: "Download" },
    { to: "/contact-us", label: "Contact Us" },
    { to: "/order", label: "Order" },
    { to: "/blog", label: "Blog" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white text-gray-800 p-4 shadow-md z-20">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <motion.span
          className="text-2xl sm:text-3xl font-bold text-red-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          TiffinHub
        </motion.span>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-2 sm:mt-0">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-gray-600 hover:text-red-600 text-sm sm:text-base transition-colors ${
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
            className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors text-sm sm:text-base"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
