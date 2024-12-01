import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-white py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-gray-300">
              SGSITS Indore<br />
              Address Line 1<br />
              Indore, MP 452001<br />
              Email: <a href="mailto:contact@sgsits.ac.in" className="underline">contact@sgsits.ac.in</a><br />
              Phone: <a href="tel:+911234567890" className="underline">+91 123 456 7890</a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="text-gray-300 space-y-2">
              <li><a href="/homepage" className="hover:underline">HomePage</a></li>
              <li><a href="/event-details" className="hover:underline">Events Details</a></li>
              <li><a href="/timeline" className="hover:underline">Timeline</a></li>
              <li><a href="/alumni-spotlights" className="hover:underline">Alumni Spotlights</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f text-2xl"></i>
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-300 text-sm">
          &copy; {new Date().getFullYear()} SGSITS Indore. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
