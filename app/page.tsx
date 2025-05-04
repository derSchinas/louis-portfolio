"use client";

import HeroSection from '@/components/HeroSection';
import SocialSection from '@/components/SocialSection';
import ExperienceSection from '@/components/ExperienceSection';

export default function Home() {

  return (
    <div className="grid grid-cols-1 gap-y-4">
      {/* First Section: Welcome box, About Me and Image */}
      <HeroSection />

      {/* Second Section: Social Boxes */}
      <SocialSection />

      {/* Third Section: Work Experience and Get in Touch */}
      <ExperienceSection />
    </div>
  );
}