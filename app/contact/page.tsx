import type { Metadata } from "next";
import ContactPage from "@/components/contact/contactPage";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Contact Luketech | Borehole Drilling & Water Solutions",
  description:
    "Contact Luketech Plumbing and Drilling Company Ltd for borehole drilling, geophysical surveys, pump installation, plumbing, and water infrastructure services across Nigeria.",
};

export default function Page() {
  return (
    <>
      <ContactPage />
      <Footer />
    </>
  );
}
