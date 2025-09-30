import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t  mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Company Links */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="text-gray-600 hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-gray-600 hover:text-blue-600">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="text-gray-600 hover:text-blue-600">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/refund-policy" className="text-gray-600 hover:text-blue-600">
                Return & Refund Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* For Customers */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">For Customers</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/blog" className="text-gray-600 hover:text-blue-600">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-600 hover:text-blue-600">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* For Partners */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">For Partners</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/register" className="text-gray-600 hover:text-blue-600">
                Register as a Professional
              </Link>
            </li>
            <li>
              <Link to="/franchise" className="text-gray-600 hover:text-blue-600">
                Become Franchise Partner
              </Link>
            </li>
          </ul>

          {/* Social Links */}
          <h3 className="font-semibold text-gray-900 mt-6 mb-4">Social Links</h3>
          <div className="flex space-x-4 text-gray-600">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="w-5 h-5 hover:text-blue-600" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-5 h-5 hover:text-pink-500" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="w-5 h-5 hover:text-blue-700" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="w-5 h-5 hover:text-red-600" />
            </a>
          </div>

          {/* App Store Badges */}
          <div className="mt-4 space-y-2">
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-10"
              />
            </a>
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-10"
              />
            </a>
          </div>
        </div>

        {/* Location Map */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Our Location</h3>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.534887845479!2d77.05305737549355!3d28.5820938756908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d193e8b1d9a17%3A0x4f3e36e764f8e067!2sSector%2049%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1696269382121!5m2!1sen!2sin"
            width="100%"
            height="180"
            className="rounded-lg shadow"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t w-[70%] m-auto py-4 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} Mannubhai. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
