import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className="flex flex-col">
      {/* Top Section: Links & Info */}
      <footer className="footer lg:pb-[80px] sm:footer-horizontal bg-black p-10">
        <nav className="max-w-xs">
          <h6 className="footer-title font-bold text-white">CS — Ticket System</h6>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </nav>
        <nav>
          <h6 className="footer-title font-bold text-white">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Our Mission</a>
          <a className="link link-hover">Contact Sales</a>
        </nav>
        <nav>
          <h6 className="footer-title font-bold text-white">Services</h6>
          <a className="link link-hover">Product & Services</a>
          <a className="link link-hover">Customer Stories</a>
          <a className="link link-hover">Download Apps</a>
        </nav>
        <nav>
          <h6 className="footer-title font-bold text-white">Legal</h6>
          <a className="link link-hover">Terms & Conditions</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Join Us</a>
        </nav>
        <nav>
          {/* 3. Pass the explicitly imported icons directly to the component */}
          <h6 className="footer-title font-bold text-white">Social Links</h6>
          <a className="link link-hover">
            <FontAwesomeIcon icon={faSquareXTwitter} className="mr-2" />@CS — Ticket System
          </a>
          <a className="link link-hover">
            <FontAwesomeIcon icon={faLinkedin} className="mr-2" />@CS — Ticket System
          </a>
          <a className="link link-hover">
            <FontAwesomeIcon icon={faInstagram} className="mr-2" />@CS — Ticket System
          </a>
          <a className="link link-hover">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />support@cst.com
          </a>
        </nav>
      </footer>
      {/* Bottom Section: Copyright */}
      <footer className="footer footer-center bg-black text-base-content p-4">
        <aside>
          <p>© {new Date().getFullYear()} CS — Ticket System. All rights reserved.</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;