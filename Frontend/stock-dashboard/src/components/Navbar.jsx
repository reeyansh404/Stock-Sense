import { Menu, X, Settings, HelpCircle } from "lucide-react"; // Remove Search import
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Remove searchOpen state

  const navLinks = [
    { name: "Dashboard", path: "/home" },
    { name: "Markets", path: "/market" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "News", path: "/news" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 shadow-sm z-50">
      <div className="h-full px-4 flex items-center justify-between max-w-7xl mx-auto">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <Link to="/home" className="flex items-center gap-2">
            <img src="/Logo/Stock_Sense.png" alt="Logo" className="h-8" />
            <span className="font-bold text-lg text-gray-800 hidden sm:block">
              Stock Sense
            </span>
          </Link>
        </div>

        {/* Center: Nav Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-700 hover:text-black transition-colors font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          {/* Settings */}
          <button
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            title="Settings"
          >
            <Settings className="w-5 h-5 text-gray-700" />
          </button>

          {/* Help */}
          <button
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            title="Help"
          >
            <HelpCircle className="w-5 h-5 text-gray-700" />
          </button>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-2 ml-2">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              Login
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition-colors">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors ml-2"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            {/* Mobile Auth Buttons */}
            <div className="pt-3 pb-2 space-y-2 border-t border-gray-200 mt-2">
              <button className="w-full px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                Login
              </button>
              <button className="w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition-colors">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}