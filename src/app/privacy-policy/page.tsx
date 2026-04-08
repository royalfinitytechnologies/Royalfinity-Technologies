import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PrivacyPolicyPage from "@/components/PrivacyPolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy | RoyalFinity Technologies",
  description: "Learn how RoyalFinity Technologies collects, uses, and protects your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PrivacyPolicyPage />
      <Footer />
    </div>
  );
}
