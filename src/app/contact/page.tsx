import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Discuss Your Project | LUMECASA",
  description:
    "Partner with LUMECASA for your next commercial, hospitality, or luxury residential lighting project. Get in touch with our lighting experts today.",
};

export default function ContactPage() {
  return <ContactClient />;
}
