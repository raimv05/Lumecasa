import { Metadata } from "next";
import ShowroomClient from "./ShowroomClient";

export const metadata: Metadata = {
  title: "Flagship Showroom | LUMECASA",
  description:
    "Experience LUMECASA lighting in person. Plan a visit to our flagship showroom in Mohali to consult with our luxury lighting experts.",
};

export default function ShowroomPage() {
  return <ShowroomClient />;
}
