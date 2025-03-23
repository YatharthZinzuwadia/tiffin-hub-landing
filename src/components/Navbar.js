import { Link } from "react-scroll";

const Navbar = () => (
  <nav className="fixed top-0 w-full bg-white text-gray-800 p-4 shadow-md z-10">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      <span className="text-2xl font-bold text-red-600">TiffinHub</span>
      <div className="flex gap-6">
        <Link
          to="services"
          smooth={true}
          duration={500}
          className="text-gray-600 hover:text-red-600 cursor-pointer"
        >
          Services
        </Link>
        <Link
          to="testimonials"
          smooth={true}
          duration={500}
          className="text-gray-600 hover:text-red-600 cursor-pointer"
        >
          Testimonials
        </Link>
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="text-gray-600 hover:text-red-600 cursor-pointer"
        >
          Contact
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
