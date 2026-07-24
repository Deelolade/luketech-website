"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight - 90);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "bg-transparent" : "bg-[#030B24]"
      }`}
    >
      <nav className="mx-auto flex w-full items-center bg-transparent justify-between px-3 md:px-10 lg:px-24 py-3 md:py-4 lg:py-5">
        {/* Logo */}
        <Link
          href="/"
          className="relative h-18 w-18 md:h-20 md:w-20 lg:h-28 lg:w-28 shrink-0"
        >
          <Image
            src="/images/white-navbar-logo.png"
            alt="Luketech logo"
            fill
            sizes="(max-width: 1023px) 56px, 112px"
            className="object-contain"
          />
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setOpenMenu(!openMenu)}
          type="button"
          className="cursor-crosshair relative z-50 flex h-12 w-12 flex-col items-end justify-center gap-1.5"
          aria-label="Toggle navigation menu"
        >
          <span
            className={`h-[3px] w-8 transition-all duration-300 ${scrolled && !openMenu ? "bg-[#030B24]" : "bg-white"} ${openMenu ? "w-8 translate-y-[9px] rotate-45" : ""}`}
          />
          <span
            className={`h-[3px] w-6 transition-all duration-300 ${scrolled && !openMenu ? "bg-[#030B24]" : "bg-white"} ${openMenu ? "w-8 opacity-0" : ""}`}
          />
          <span
            className={`h-[3px] w-4 transition-all duration-300 ${scrolled && !openMenu ? "bg-[#030B24]" : "bg-white"} ${openMenu ? "w-8 -translate-y-[9px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* Slide-in Menu */}
      <div
        className={`fixed inset-0 z-40 flex items-center justify-end bg-[#030B24]/90 text-white transition-opacity duration-300 ${
          openMenu ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="mr-8 flex flex-col items-end gap-6 md:mr-16">
          <Link
            href="/"
            onClick={() => setOpenMenu(false)}
            className={`text-3xl font-bold transition-all duration-500 delay-100 hover:text-gray-300 md:text-4xl ${
              openMenu
                ? "translate-y-0 opacity-100"
                : "-translate-y-4 opacity-0"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setOpenMenu(false)}
            className={`text-3xl font-bold transition-all duration-500 delay-200 hover:text-gray-300 md:text-4xl ${
              openMenu
                ? "translate-y-0 opacity-100"
                : "-translate-y-4 opacity-0"
            }`}
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpenMenu(false)}
            className={`text-3xl font-bold transition-all duration-500 delay-300 hover:text-gray-300 md:text-4xl ${
              openMenu
                ? "translate-y-0 opacity-100"
                : "-translate-y-4 opacity-0"
            }`}
          >
            Contact
          </Link>
          <Link
            href="/projects"
            onClick={() => setOpenMenu(false)}
            className={`text-3xl font-bold transition-all duration-500 delay-[400ms] hover:text-gray-300 md:text-4xl ${
              openMenu
                ? "translate-y-0 opacity-100"
                : "-translate-y-4 opacity-0"
            }`}
          >
            Projects
          </Link>
          <div className="mt-4 text-right">
            <h2 className="text-xl font-bold">How can we help?</h2>
            <ul className="mt-2 flex flex-col gap-4">
              <Link
                href="/contact"
                className="group flex cursor-pointer items-center justify-end gap-3 text-gray-300"
              >
                <span>Get a Quote</span>
                <FaArrowRightLong className="transition-transform duration-400 group-hover:translate-x-2 relative top-px" />
              </Link>
              <li className="text-gray-300">
                <a
                  href="tel:+2348023431553"
                  className="hover:text-blue-400 hover:transition-colors hover:duration-300"
                >
                  08023431553
                </a>
                <span className="mx-2">|</span>
                <a
                  href="tel:+2349039338960"
                  className="hover:text-blue-400 hover:transition-colors hover:duration-300"
                >
                 09039338960
                </a>
                <span className="mx-2">|</span>
                <a
                  href="tel:+23408155876014"
                  className="hover:text-blue-400 hover:transition-colors hover:duration-300"
                >
                  08155876014
                </a>
              </li>
              <li className="text-gray-300">
                <a
                  href="mailto:Info@luketechpdc.com"
                  className="hover:text-blue-400 hover:transition-colors hover:duration-300"
                >
                  Info@luketechpdc.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
