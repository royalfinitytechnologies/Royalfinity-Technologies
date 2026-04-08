import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutPage from "@/components/AboutPage";

export const metadata = {
  title: "About Us | RoyalFinity Technologies",
  description: "Learn about RoyalFinity Technologies — our story, mission, vision, values, and the team behind your digital growth.",
};

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <AboutPage />
      <Footer />
    </div>
  );
}
