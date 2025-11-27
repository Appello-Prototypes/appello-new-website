import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Appello | Get in Touch",
  description: "Have questions about Appello? Get in touch with our team. Book a demo, send us a message, or reach out via email.",
  openGraph: {
    title: "Contact Us - Appello",
    description: "Get in touch with the Appello team.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


