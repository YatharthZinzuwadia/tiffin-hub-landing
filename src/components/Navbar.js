import { Link } from "react-scroll";

const Navbar = () => (
  <nav className="fixed top-0 w-full bg-white text-gray-800 p-4 shadow-md z-10">
    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
      <span className="text-2xl sm:text-3xl font-bold text-red-600">
        TiffinHub
      </span>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-2 sm:mt-0">
        <Link
          to="services"
          smooth={true}
          duration={500}
          className="text-gray-600 hover:text-red-600 cursor-pointer text-sm sm:text-base"
        >
          Services
        </Link>
        <Link
          to="testimonials"
          smooth={true}
          duration={500}
          className="text-gray-600 hover:text-red-600 cursor-pointer text-sm sm:text-base"
        >
          Testimonials
        </Link>
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="text-gray-600 hover:text-red-600 cursor-pointer text-sm sm:text-base"
        >
          Contact
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
