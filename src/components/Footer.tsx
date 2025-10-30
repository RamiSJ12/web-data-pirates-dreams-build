
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <div>
                <h1 className="text-xl font-bold text-white">Data Pirates Agency</h1>
                <p className="text-teal-400 font-medium">Software Innovation for the Modern World</p>
              </div>
            </div>
            <p className="text-platinum-300 mb-4 max-w-md">
              We are dedicated to helping you accomplish your goals through cutting-edge technology solutions and innovative software development.
            </p>
            <div className="space-y-2 text-platinum-300">
              <p>Website: www.datapirates.agency</p>
              <p>Email: contact@datapirates.agency</p>
              <p>Monday to Friday: 9:00 AM to 5:00 PM</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-teal-400">Quick Links</h3>
            <div className="space-y-2">
              <NavLink to="/" className="block text-platinum-300 hover:text-teal-400 transition-colors">
                Home
              </NavLink>
              <NavLink to="/services" className="block text-platinum-300 hover:text-teal-400 transition-colors">
                Services
              </NavLink>
              <NavLink to="/solutions" className="block text-platinum-300 hover:text-teal-400 transition-colors">
                Solutions
              </NavLink>
              <NavLink to="/portfolio" className="block text-platinum-300 hover:text-teal-400 transition-colors">
                Portfolio
              </NavLink>
              <NavLink to="/about" className="block text-platinum-300 hover:text-teal-400 transition-colors">
                About
              </NavLink>
              <NavLink to="/contact" className="block text-platinum-300 hover:text-teal-400 transition-colors">
                Contact
              </NavLink>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-teal-400">Legal</h3>
            <div className="space-y-2">
              <NavLink to="/terms" className="block text-platinum-300 hover:text-teal-400 transition-colors">
                Terms of Service
              </NavLink>
              <NavLink to="/legal" className="block text-platinum-300 hover:text-teal-400 transition-colors">
                Legal Disclaimers
              </NavLink>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-700 mt-8 pt-8 text-center text-platinum-400">
          <p>&copy; 2025 Data Pirates Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
