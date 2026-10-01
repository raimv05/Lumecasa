import { Metadata } from "next";
import CollectionsClient from "./CollectionsClient";

export const metadata: Metadata = {
  title: "Collections | LUMECASA",
  description:
    "Explore our curated selection of luxury decorative and architectural lighting, designed to transform any space into a masterpiece of illumination.",
};

export default function CollectionsPage() {
  return <CollectionsClient />;
}
