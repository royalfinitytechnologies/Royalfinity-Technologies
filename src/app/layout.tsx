import type { Metadata } from "next";
import { Orbitron, Space_Grotesk } from "next/font/google";
import { Providers } from "@/components/providers";
import WhatsAppButton from "@/components/WhatsAppButton";
import ChatBot from "@/components/ChatBot";
import SmoothScroll from "@/components/ui/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import "../index.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RoyalFinity Technologies | Digital Growth Solutions",
  description: "From building websites to running ads and managing your brand, we handle it all so you can focus on growing your business.",
  authors: [{ name: "RoyalFinity Technologies" }],
  keywords: ["web development", "mobile apps", "digital marketing", "branding", "software development", "AI automation", "e-commerce"],
  openGraph: {
    title: "RoyalFinity Technologies",
    description: "Transform your business with next-generation digital solutions.",
    type: "website",
    url: "https://royalfinitytechnologies.com",
    siteName: "RoyalFinity Technologies",
  },
  twitter: {
    card: "summary_large_image",
    site: "@RoyalFinityTech",
    title: "RoyalFinity Technologies",
    description: "Transform your business with next-generation digital solutions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${orbitron.variable} ${spaceGrotesk.variable}`}>
      <body>
        <Providers>
          <SmoothScroll>
            <CustomCursor />
            <ScrollProgress />
            <div className="page-transition">
              {children}
            </div>
            <WhatsAppButton />
            <ChatBot />
          </SmoothScroll>
        </Providers>
      </body>
    </html>
  );
}
