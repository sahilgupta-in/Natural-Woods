import { Link } from "react-router-dom";
import logo from "../assets/logo2.png";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
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
                <Link to="/collections/wooden-creations/sculptures">
                  Sculptures
                </Link>
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
              <li>
                <Link to="/collections/nature">Nature Paintings</Link>
              </li>
              <li>
                <Link to="/collections/human-figure">
                  Human Figure Paintings
                </Link>
              </li>
              <li>
                <Link to="/collections/abstract">Abstract Paintings</Link>
              </li>
              <li>
                <Link to="/collections/historical">Historical Paintings</Link>
              </li>
              <li>
                <Link to="/collections/spiritual">Spiritual Paintings</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-[#3A2A1D]">
              Contact Us
            </h3>

            <div className="space-y-5 text-[#3A2A1D]">
              {/* Phone */}
              <a
                href="tel:+918484848401"
                className="flex items-center gap-3 transition-colors "
              >
                <MdPhone className="text-xl flex-shrink-0" />
                <span>+91 84848 48401</span>
              </a>

              {/* Email */}
              <a
                href="mailto:contact@naturalwoodssangli.com"
                className="flex items-center gap-3 transition-colors "
              >
                <MdEmail className="text-xl flex-shrink-0" />
                <span>contact@naturalwoodssangli.com</span>
              </a>

              {/* Address */}
              <a
                href="https://maps.google.com/?q=Naturalwoods+Unity+Heights+Near+Halad+Bhavan+Canteen+Vakharbhag+Sangli+416416"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 transition-colors "
              >
                <MdLocationOn className="mt-1 text-2xl flex-shrink-0" />
                <span className="leading-7">
                  Natural Woods, Unity Heights
                  <br />
                   Near Halad Bhavan Canteen,
                  <br />
                  Vakhar Bhag, Sangli – 416416,
                  <br />
                  Maharashtra, India
                </span>
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-5 flex items-center gap-4">
              <a
                href="https://www.facebook.com/naturalwoods.sangli.2025"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="rounded-full border border-[#C79A3B] p-3 transition-all duration-300 hover:bg-[#C79A3B] hover:text-white"
              >
                <FaFacebook className="text-xl" />
              </a>

              <a
                href="https://www.instagram.com/naturalwoods_sangli"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-full border border-[#C79A3B] p-3 transition-all duration-300 hover:bg-[#C79A3B] hover:text-white"
              >
                <FaInstagram className="text-xl" />
              </a>
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
