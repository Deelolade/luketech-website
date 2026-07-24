import Image from "next/image";
import Link from "next/link";

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
              <a href="tel:08023431553" className="transition-colors hover:text-white">
                08023431553
              </a>
              {" "}|{" "}
              <a href="tel:09039338960" className="transition-colors hover:text-white">
                09039338960
              </a>
              {" "}|{" "}
              <a href="tel:08155876014" className="transition-colors hover:text-white">
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
          <p className="text-sm text-white/30">
            © {new Date().getFullYear()} Luketech Plumbing and Drilling Company Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
