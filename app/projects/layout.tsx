import type { Metadata } from "next";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Our Projects | Borehole Drilling & Water Solutions",
  description:
    "Explore our portfolio of borehole drilling, pump installation, geophysical surveys, and water infrastructure projects completed across Lagos and Nigeria.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
