import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">TiffinHub</h3>
        <p className="text-gray-400 text-sm">
          Delicious meals, delivered fresh to your door.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li>
            <Link to="/" className="text-gray-400 hover:text-red-600 text-sm">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-gray-400 hover:text-red-600 text-sm"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/order"
              className="text-gray-400 hover:text-red-600 text-sm"
            >
              Order
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Support</h3>
        <ul className="space-y-2">
          <li>
            <Link
              to="/contact-us"
              className="text-gray-400 hover:text-red-600 text-sm"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/download"
              className="text-gray-400 hover:text-red-600 text-sm"
            >
              Download
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
        <div className="flex gap-4">
          <a href="#" className="text-gray-400 hover:text-red-600">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-red-600">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-red-600">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
    <div className="text-center text-gray-400 text-sm mt-8">
      &copy; 2025 TiffinHub. All rights reserved.
    </div>
  </footer>
);

export default Footer;
