import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TermsPage from "@/components/TermsPage";

export const metadata: Metadata = {
  title: "Terms & Conditions | RoyalFinity Technologies",
  description: "Read the Terms & Conditions for using RoyalFinity Technologies website and services.",
};

export default function TermsConditions() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <TermsPage />
      <Footer />
    </div>
  );
}
