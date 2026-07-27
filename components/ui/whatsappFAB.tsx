import { FaWhatsapp } from "react-icons/fa6";

const WhatsAppFAB = () => {
  return (
    <a
      href="https://wa.me/2348023431553?text=Hello%2C%20I%27m%20interested%20in%20your%20borehole%20drilling%20and%20water%20solution%20services.%20I%27d%20like%20to%20make%20an%20inquiry."
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3"
      aria-label="Chat on WhatsApp"
    >
      {/* Label — slides in on hover */}
      <span className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-md opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
        Chat with us
      </span>

      {/* Button */}
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform duration-300 group-hover:scale-110">
        <FaWhatsapp className="text-2xl text-white" />
      </span>
    </a>
  );
};

export default WhatsAppFAB;
