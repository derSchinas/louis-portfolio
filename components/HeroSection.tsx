import Image from 'next/image';
import InformationIcon from "../public/information.png";
import LouisFit from "../public/louisfit.webp";
import { MessageCircleWarning } from 'lucide-react';
import CarrerPlan from './CareerPlan';


export default function HeroSection() {
  return (
    <section className="col-span-1 grid grid-cols-1 lg:grid-cols-6 gap-y-4 md:gap-x-6">
      {/* Left Area (4 columns) */}
      <div className="col-span-1 lg:col-span-4 grid grid-cols-1 gap-y-4">
        {/* Welcome Box */}
        <div className="px-4 p-8 md:p-6 xl:p-8 gap-16 w-full h-full rounded-xl overflow-hidden bg-gradient-to-br dark:from-neutral-800 dark:to-neutral-900 from-neutral-100 to-neutral-50 shadow-neutral-200 dark:shadow-neutral-500 shadow-sm hover:shadow min-h-full">
          <div className="grid grid-flow-row gap-4 h-full">
            <h1 className="font-semibold text-6xl leading-16">
              Hey, I'm <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-600 to-lime-600 dark:from-lime-300 dark:to-emerald-400">Louis!</span>
            </h1>
            <p>
              What I'm doing right now? Currently studying abroad at Griffith University in Brisbane, Australia, until the end of October 2025. Seeking an internship opportunity to commence after completing my semester abroad.
            </p>
          </div>
        </div>

        {/* About Me Box */}
        <div className="px-4 p-8 md:p-6 xl:p-8 grid grid-cols-1 md:grid-cols-10 w-full h-full rounded-xl overflow-hidden bg-gradient-to-br dark:from-neutral-800 dark:to-neutral-900 from-neutral-100 to-neutral-50 shadow-neutral-200 dark:shadow-neutral-500 shadow-sm hover:shadow min-h-full">
          <div className="col-span-1 md:col-span-2 flex justify-center pb-4 md:pb-0">
            <div className="relative max-h-32 w-32 h-32 flex items-center justify-center">
              <MessageCircleWarning size={96} className="text-lime-600 dark:text-lime-300" />
            </div>
          </div>
          <div className="col-span-1 md:col-span-8 grid grid-cols-1 gap-y-4">
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-3xl leading-12">
                About Me
              </h1>
              <CarrerPlan/>
            </div>
            <span>
            I am a 4th-semester Business Information Systems student at Reutlingen University, driven by a passion for software development, artificial intelligence, and the future of work. I thrive on crafting innovative solutions and adapting to the fast-evolving digital landscape. Highly communicative, I love delivering engaging presentations that spark ideas. My knack for thinking outside the box pushes me to seek unconventional approaches, tackling challenges with creativity and bold ideas. With a vision to blend neuroscience and technology, I aim to shape the future through groundbreaking projects, whether in global tech roles or as an entrepreneur launching my own startup.
            </span>
          </div>
        </div>
      </div>

      {/* Right Area (2 columns) */}
      <div className="col-span-1 lg:col-span-2 order-first lg:order-last lg:h-full w-full">
        <div className="w-full h-full rounded-xl overflow-hidden bg-gradient-to-br dark:from-neutral-800 dark:to-neutral-900 from-neutral-100 to-neutral-50 shadow-neutral-200 dark:shadow-neutral-500 shadow-sm hover:shadow relative">
          <div className="relative w-full h-64 lg:h-full min-h-[320px]">
            <Image
              src={LouisFit}
              alt="Louis Schinas"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              priority
              className="object-cover object-top drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}