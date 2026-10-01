import { Metadata } from "next";
import TradeClient from "./TradeClient";

export const metadata: Metadata = {
  title: "Trade Program | LUMECASA",
  description:
    "Join the LUMECASA Trade Program for exclusive pricing, dedicated project management, and technical resources tailored for architects and interior designers.",
};

export default function TradePage() {
  return <TradeClient />;
}
