import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[86vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay to enhance readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#F1F9FF]/80 via-[#F5FAFF]/70 to-white/95" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#5A5DD1]/20 bg-white/70 px-4 py-1 text-sm text-[#3B3A8F] shadow-sm backdrop-blur-md">
          <Sparkles className="h-4 w-4 text-[#5A5DD1]" />
          Meet your new tab memory
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-[#232181] sm:text-5xl md:text-6xl">
          Save and restore your browsing flow in one click
        </h1>
        <p className="mt-4 max-w-2xl text-base text-[#3B3A8F]/80 sm:text-lg">
          TabNest captures your current tabs and tab groups so you can jump back into focus instantly—no more losing context between sessions.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#download"
            className="group inline-flex items-center gap-2 rounded-xl bg-[#5A5DD1] px-6 py-3 text-white shadow-lg shadow-[#5A5DD1]/30 transition hover:translate-y-[-1px] hover:bg-[#4f52c0]"
          >
            <Rocket className="h-5 w-5" />
            Add to Chrome
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-xl border border-[#5A5DD1]/30 bg-white px-6 py-3 text-[#3B3A8F] shadow-sm transition hover:bg-[#F1F9FF]"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}
