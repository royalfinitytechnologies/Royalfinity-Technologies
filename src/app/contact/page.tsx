import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactPage from "@/components/ContactPage";

export const metadata = {
  title: "Contact Us | RoyalFinity Technologies",
  description: "Get in touch with RoyalFinity Technologies. We're here to help you grow your business.",
};

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ContactPage />
      <Footer />
    </div>
  );
}
