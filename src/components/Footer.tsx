import { Link } from "react-router-dom";
import logo from "../assets/logo2.png";
import {
  FaFacebookF,
  FaInstagram,
  
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-[#F8F4EC] text-[#3A2A1D]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & About */}
          <div>
            <img src={logo} alt="Natural Woods Logo" className="h-20 w-auto" />

            <p className="mt-5 text-sm leading-7 text-[#3A2A1D]">
              Discover handcrafted wooden decor, wall art, sculptures, and
              premium natural wood created with timeless craftsmanship.
            </p>

            <div className="mt-6 flex gap-4">
              <a href="https://www.facebook.com/naturalwoods.sangli.2025">
                <FaFacebookF className="text-xl  transition" />
              </a>

              <a href="https://www.instagram.com/naturalwoods_sangli">
                <FaInstagram className="text-xl  transition" />
              </a>

             
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-xl font-semibold">Quick Links</h3>

            <ul className="space-y-3 text-[#3A2A1D]">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/collections">Collections</Link>
              </li>
              <li>
                <Link to="/wall-art">Wall Art</Link>
              </li>
              <li>
                <Link to="/collections/wooden-creations/sculptures">Sculptures</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h3 className="mb-5 text-xl font-semibold">Collections</h3>

            <ul className="space-y-3 text-[#3A2A1D]">
              <li><Link to="/collections/nature">Nature Paintings</Link></li>
              <li><Link to="/collections/human-figure">Human Figure Paintings</Link></li>
              <li><Link to="/collections/abstract">Abstract Paintings</Link></li>
              <li><Link to="/collections/historical">Historical Paintings</Link></li>
              <li><Link to="/collections/spiritual">Spiritual Paintings</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-xl font-semibold">Contact Us</h3>

            <div className="space-y-4 text-[#3A2A1D]">
              <div className="flex items-center gap-3">
                <MdPhone />
                <span>+91 84848 48401</span>
              </div>

              <div className="flex items-center gap-3">
                <MdEmail />
                <span>mailsudhirshetty@gmail.com</span>
              </div>

              <div className="flex items-start gap-3">
                <MdLocationOn className="mt-1" />
                <span>Sangli, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/20 pt-6 text-center text-sm text-gray-700">
          © 2026 Natural Woods. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
