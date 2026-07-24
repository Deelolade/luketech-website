import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#071426] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20 lg:px-20">
        {/* Top */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="relative block h-16 w-52">
              <Image
                src="/images/white-navbar-logo.png"
                alt="Luketech logo"
                fill
                loading="eager"
                className="object-contain object-left"
              />
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">
              Reliable water solutions, from the ground up.
            </p>
          </div>

          {/* Nav */}
          <div>
            <ul className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
              <li>
                <Link href="/" className="text-white/60 transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/60 transition-colors hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-white/60 transition-colors hover:text-white">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/60 transition-colors hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4 text-sm">
            {/* Phone numbers */}
            <div className="text-white/60">
              <a href="tel:08023431553" className="inline-flex items-center gap-1.5 transition-colors hover:text-white">
                <FaPhone className="text-xs" />
                08023431553
              </a>
              {" "}|{" "}
              <a href="tel:09039338960" className="inline-flex items-center gap-1.5 transition-colors hover:text-white">
                <FaPhone className="text-xs" />
                09039338960
              </a>
              {" "}|{" "}
              <a href="tel:08155876014" className="inline-flex items-center gap-1.5 transition-colors hover:text-white">
                <FaPhone className="text-xs" />
                08155876014
              </a>
            </div>

            {/* Email + Location */}
            <div className="space-y-1 text-white/40">
              <p>
                <a href="mailto:Info@luketechpdc.com" className="transition-colors hover:text-white">
                  Info@luketechpdc.com
                </a>
              </p>
              <p>Lagos, Nigeria</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com/luketechpdc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/50 transition-all hover:border-[#2E96A3] hover:text-[#2E96A3]"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-sm" />
              </a>
              <a
                href="https://instagram.com/luketechpdc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/50 transition-all hover:border-[#2E96A3] hover:text-[#2E96A3]"
                aria-label="Instagram"
              >
                <FaInstagram className="text-sm" />
              </a>
              <a
                href="https://x.com/luketechpdc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/50 transition-all hover:border-[#2E96A3] hover:text-[#2E96A3]"
                aria-label="X (Twitter)"
              >
                <FaXTwitter className="text-sm" />
              </a>
              <a
                href="https://linkedin.com/company/luketechpdc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/50 transition-all hover:border-[#2E96A3] hover:text-[#2E96A3]"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-sm" />
              </a>
            </div>

            <p className="text-sm text-white/30">
              © {new Date().getFullYear()} Luketech Plumbing and Drilling Company Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
