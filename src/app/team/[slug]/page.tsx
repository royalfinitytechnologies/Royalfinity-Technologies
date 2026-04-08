import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamMemberPage from "@/components/TeamMemberPage";
import { teamData } from "@/lib/team-data";

export async function generateStaticParams() {
  return teamData.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const member = teamData.find((m) => m.slug === slug);
  if (!member) return {};
  return {
    title: `${member.name} — ${member.role} | RoyalFinity Technologies`,
    description: member.shortDesc,
  };
}

export default async function TeamPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = teamData.find((m) => m.slug === slug);
  if (!member) notFound();
  return (
    <div className="min-h-screen">
      <Navbar />
      <TeamMemberPage member={member} />
      <Footer />
    </div>
  );
}
