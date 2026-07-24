"use client";

import { useState, type FormEvent } from "react";
import { FaArrowRightLong, FaPhone, FaWhatsapp } from "react-icons/fa6";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  help: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const INITIAL: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  help: "",
  message: "",
};

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.firstName.trim()) errors.firstName = "Required";
  if (!data.lastName.trim()) errors.lastName = "Required";
  if (!data.email.trim()) {
    errors.email = "Required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Invalid email";
  }
  if (!data.help.trim()) errors.help = "Required";
  if (!data.message.trim()) errors.message = "Required";
  return errors;
}

const ContactPage = () => {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setForm(INITIAL);
    } catch {
      setStatus("error");
    }
  };

  const input =
    "w-full border border-white/10 bg-transparent px-4 py-3.5 text-sm text-white placeholder:text-white/25 outline-none transition-colors focus:border-white/30";

  return (
    <section className="min-h-screen bg-[#030B24]">
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-24 md:px-10 md:pb-20 md:pt-28 lg:px-16">
        <div className="grid gap-16 lg:grid-cols-[1fr_380px] lg:gap-20">
          {/* Left: Form */}
          <div>
            <h1 className="text-3xl font-bold text-white md:text-4xl">
              Contact
            </h1>
            <p className="mt-3 text-base text-white/40">
              How can we help? Call, email or use our form below.
            </p>

            <form onSubmit={handleSubmit} className="mt-12 space-y-4" noValidate>
              <div className="grid gap-4 md:grid-cols-2">
                <Field error={errors.firstName}>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    className={input}
                  />
                </Field>
                <Field error={errors.lastName}>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    className={input}
                  />
                </Field>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Field error={errors.email}>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email address"
                    className={input}
                  />
                </Field>
                <Field error={errors.help}>
                  <input
                    type="text"
                    name="help"
                    value={form.help}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    className={input}
                  />
                </Field>
              </div>

              <Field error={errors.message}>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Your message"
                  className={`${input} resize-none`}
                />
              </Field>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="border border-[#2E96A3] bg-transparent px-8 py-3 text-sm font-medium text-[#2E96A3] transition-all duration-300 hover:bg-[#2E96A3] hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {status === "loading" ? "Sending..." : "Submit"}
                </button>
              </div>

              {status === "success" && (
                <p className="mt-6 text-sm text-white/60">
                  Thank you for reaching out. We've received your enquiry and
                  our team will get back to you shortly.
                </p>
              )}
              {status === "error" && (
                <p className="mt-6 text-sm text-red-400">
                  Something went wrong. Please try again or contact us directly
                  by phone or WhatsApp.
                </p>
              )}
            </form>
          </div>

          {/* Right: Contact Info */}
          <div className="flex flex-col gap-12 lg:pt-0">
            {/* Phone */}
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-white/30">
                Phone
              </p>
              <div className="mt-3 space-y-1">
                <a
                                  href="tel:08023431553"
                                  className="flex items-center gap-2 text-xl font-bold text-white transition-colors hover:text-white/80"
                                >
                                  <FaPhone className="text-sm text-white/30" />
                                  08023431553
                                </a>
                <a
                                  href="tel:09039338960"
                                  className="flex items-center gap-2 text-xl font-bold text-white transition-colors hover:text-white/80"
                                >
                                  <FaPhone className="text-sm text-white/30" />
                                  09039338960
                                </a>
                <a
                                  href="tel:08155876014"
                                  className="flex items-center gap-2 text-xl font-bold text-white transition-colors hover:text-white/80"
                                >
                                  <FaPhone className="text-sm text-white/30" />
                                  08155876014
                                </a>
              </div>
            </div>

            {/* Email */}
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-white/30">
                Email
              </p>
              <a
                href="mailto:Info@luketechpdc.com"
                className="mt-3 block text-xl font-bold text-white transition-colors hover:text-white/80"
              >
                Info@luketechpdc.com
              </a>
            </div>

            {/* WhatsApp */}
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-white/30">
                WhatsApp
              </p>
              <a
                href="https://wa.me/2348023431553"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-xl font-bold text-white transition-colors hover:text-white/80"
              >
                Chat with us
                <FaWhatsapp className="text-[#25D366]" />
              </a>
            </div>

            {/* Location */}
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-white/30">
                Location
              </p>
              <p className="mt-3 text-xl font-bold text-white">
                Lagos, Nigeria
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function Field({
  error,
  children,
}: {
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}

export default ContactPage;
