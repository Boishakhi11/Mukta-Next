"use client";

import ThemeToggle from "../Theme/ThemeToggole";
import Magnetic from "../Motion/Magnetic";

const Navbar = () => {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  const linkClass =
    "relative text-[15px] font-medium text-base-content/80 transition-colors duration-300 hover:text-primary after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full";

  return (
    <header className="fixed top-0 left-0 z-50 w-full glass-nav">
      <div className="w-11/12 mx-auto h-16 flex items-center justify-between">
        {/* Logo */}
        <Magnetic strength={0.18} max={10}>
          <a
            href="#home"
            className="text-xl md:text-2xl orbitron italic font-bold text-primary tracking-wide"
            data-cursor="hover"
          >
            BOISHAKHI
          </a>
        </Magnetic>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          <nav>
            <ul className="flex items-center gap-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Magnetic strength={0.14} max={8}>
                    <a href={item.href} className={linkClass} data-cursor="hover">
                      {item.name}
                    </a>
                  </Magnetic>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] w-52 rounded-2xl bg-base-100 p-3 shadow-lg border border-base-300"
            >
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="font-medium hover:text-primary transition-colors"
                    data-cursor="hover"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
