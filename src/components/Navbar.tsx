import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Search, UserRound, ChevronDown } from "lucide-react";

import SearchModal from "../components/SearchModal";
import AccountModal from "../components/auth/AccountModal";
import ProfileDropdown from "./ProfileDropdown";
import { useAuth } from "../context/AuthContext";

import logo from "../assets/naturalwoodslogo.png";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Collections",
    path: "/collections",
  },
  {
    name: "Paintings",
    submenu: [
      {
        name: "Human Figure Paintings",
        path: "/collections/human-figure",
      },
      {
        name: "Nature Paintings",
        path: "/collections/nature",
      },
      {
        name: "Spiritual Paintings",
        path: "/collections/spiritual",
      },
      {
        name: "Abstract Paintings",
        path: "/collections/abstract",
      },
      {
        name: "Historical Paintings",
        path: "/collections/historical",
      },
    ],
  },
  {
    name: "Wall Art",
    path: "/collections/wallart",
  },
  {
    name: "Wooden Creations",
    submenu: [
      {
        name: "Wooden Sculptures",
        path: "/collections/wooden-creations/sculptures",
      },

      {
        name: "Pumpkin Lamps",
        path: "/collections/wooden-creations/pumpkin-lamps",
      },
    ],
  },

  {
    name: "About Us",
    path: "/about",
  },
];

export default function Navbar() {
  const { user, loading } = useAuth();

  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setProfileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* ================= Header ================= */}

      <div className="mx-auto grid h-20 max-w-7xl grid-cols-3 items-center px-4 lg:h-28 lg:px-8">
        {/* Left */}

        <div className="flex items-center justify-start">
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Logo */}

        <div className="flex justify-center">
          <Link to="/">
            <img
              src={logo}
              alt="Natural Woods"
              className="h-16 w-auto md:h-20 lg:h-24 xl:h-28"
            />
          </Link>
        </div>

        {/* Right */}

        <div className="flex items-center justify-end gap-5 text-[#2F2115]">
          {/* Search */}

          <button
            onClick={() => setSearchOpen(true)}
            className="transition cursor-pointer hover:text-[#C79A3B]"
          >
            <Search size={24} />
          </button>

          {/* Account */}

          <div ref={profileRef} className="relative">
            {!loading && !user ? (
              <button
                onClick={() => setAccountOpen(true)}
                className="transition cursor-pointer hover:text-[#C79A3B]"
              >
                <UserRound size={24} />
              </button>
            ) : !loading && user ? (
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2"
              >
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt={user.displayName ?? ""}
                    className="h-9 w-9 rounded-full border object-cover"
                  />
                ) : (
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2F2115] text-sm font-semibold text-white">
                    {(
                      user.displayName?.charAt(0) ??
                      user.email?.charAt(0) ??
                      "U"
                    ).toUpperCase()}
                  </div>
                )}
              </button>
            ) : null}

            <ProfileDropdown
              open={profileOpen}
              onClose={() => setProfileOpen(false)}
            />
          </div>
        </div>
      </div>

      {/* ================= Desktop Navigation ================= */}

      <nav className="hidden border-t border-slate-100 lg:block">
        <div className="mx-auto flex max-w-7xl justify-center gap-16 px-6 py-4">
          {navLinks.map((item) => (
            <div key={item.name} className="group relative">
              <NavLink
                to={item.path ?? "#"}
                className={({ isActive }) =>
                  `flex items-center gap-1 font-medium transition ${
                    isActive
                      ? "text-[#C79A3B]"
                      : "text-[#2F2115] hover:text-[#C79A3B]"
                  }`
                }
              >
                <span>{item.name}</span>

                {item.submenu && (
                  <ChevronDown
                    size={16}
                    className="transition-transform duration-300 group-hover:rotate-180"
                  />
                )}
              </NavLink>

              {item.submenu && (
                <div className="invisible absolute left-1/2 top-full z-50 mt-3 w-64 -translate-x-1/2 rounded-xl bg-white opacity-0 shadow-xl transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  {item.submenu.map((sub) => (
                    <NavLink
                      key={sub.path}
                      to={sub.path}
                      className={({ isActive }) =>
                        `block border-b border-gray-100 px-5 py-3 transition ${
                          isActive
                            ? "bg-[#F8F4EC] text-[#C79A3B]"
                            : "text-[#2F2115] hover:bg-[#F8F4EC] hover:text-[#C79A3B]"
                        }`
                      }
                    >
                      {sub.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* ================= Mobile Menu ================= */}

      <div
        className={`overflow-hidden bg-white transition-all duration-300 lg:hidden ${
          menuOpen ? "max-h-screen border-t" : "max-h-0"
        }`}
      >
        {/* Mobile Navigation */}

        <nav className="flex flex-col">
          {navLinks.map((item) => (
            <div key={item.name}>
              <div
                className={`border-b border-slate-200 ${
                  openSubmenu === item.name ? "bg-[#F8F4EC]" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <NavLink
                    to={item.path ?? "#"}
                    onClick={(e) => {
                      if (item.submenu) {
                        e.preventDefault();

                        setOpenSubmenu(
                          openSubmenu === item.name ? null : item.name,
                        );
                      } else {
                        setMenuOpen(false);
                        setOpenSubmenu(null);
                      }
                    }}
                    className={({ isActive }) =>
                      `flex-1 px-5 py-4 text-sm font-medium transition ${
                        isActive
                          ? "text-[#C79A3B]"
                          : "text-[#2F2115] hover:text-[#C79A3B]"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>

                  {item.submenu && (
                    <button
                      onClick={() =>
                        setOpenSubmenu(
                          openSubmenu === item.name ? null : item.name,
                        )
                      }
                      className="px-5 py-4"
                    >
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${
                          openSubmenu === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {item.submenu && (
                  <div
                    className={`overflow-hidden bg-[#FAF8F4] transition-all duration-300 ${
                      openSubmenu === item.name ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    {item.submenu.map((sub) => (
                      <NavLink
                        key={sub.path}
                        to={sub.path}
                        onClick={() => {
                          setMenuOpen(false);
                          setOpenSubmenu(null);
                        }}
                        className={({ isActive }) =>
                          `block border-t border-slate-200 px-10 py-3 text-sm transition ${
                            isActive
                              ? "bg-[#F8F4EC] text-[#C79A3B]"
                              : "text-[#2F2115] hover:bg-white hover:text-[#C79A3B]"
                          }`
                        }
                      >
                        {sub.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </nav>
      </div>

      {/* ================= Modals ================= */}

      <AccountModal open={accountOpen} onClose={() => setAccountOpen(false)} />

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
