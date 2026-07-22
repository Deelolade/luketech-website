import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="relative w-full">
      <nav className="absolute left-0 right-0 mx-auto flex w-full items-center justify-between px-24 py-5">
        {/* Logo */}
        <Link href="/" className="relative h-28 w-28 shrink-0">
          <Image
            src="/images/white-navbar-logo.png"
            alt="Luketech logo"
            fill
            className="object-contain"
          />
        </Link>

        {/* Hamburger */}
        <button
          type="button"
          className="group flex h-12 w-12 flex-col items-end justify-center gap-1.5"
          aria-label="Open navigation menu"
        >
          <span className="h-[3px] w-8 bg-white transition-all duration-300 group-hover:w-8" />
          <span className="h-[3px] w-6 bg-white transition-all duration-300 group-hover:w-8" />
          <span className="h-[3px] w-4 bg-white transition-all duration-300 group-hover:w-8" />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
