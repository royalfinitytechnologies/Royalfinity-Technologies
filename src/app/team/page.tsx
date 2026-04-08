import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamPage from "@/components/TeamPage";

export const metadata: Metadata = {
  title: "Our Team | RoyalFinity Technologies",
  description: "Meet the talented team behind RoyalFinity Technologies — developers, designers, marketers, and leaders driving your digital growth.",
};

export default function Team() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <TeamPage />
      <Footer />
    </div>
  );
}
