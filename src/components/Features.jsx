import { FolderOpen, MousePointerClick, RefreshCcw, ShieldCheck, Sparkles } from 'lucide-react';

const features = [
  {
    icon: MousePointerClick,
    title: 'One‑click Save & Restore',
    desc: 'Capture every open tab and group instantly. Restore your entire workspace exactly how you left it.'
  },
  {
    icon: FolderOpen,
    title: 'Smart Tab Groups',
    desc: 'Automatically preserves tab groups and colors so your projects stay organized and recognizable.'
  },
  {
    icon: RefreshCcw,
    title: 'Session Snapshots',
    desc: 'Create named snapshots for work, study, or research and switch contexts in seconds.'
  },
  {
    icon: ShieldCheck,
    title: 'Private by Design',
    desc: 'Runs locally with minimal permissions. Your browsing data stays on your device.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-[#F5FAFF] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-[#232181] sm:text-4xl">Designed for flow</h2>
            <p className="mt-2 text-[#3B3A8F]/80">A focused toolkit that respects your time and attention.</p>
          </div>
          <Sparkles className="hidden h-8 w-8 text-[#5A5DD1] sm:block" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-[#5A5DD1]/10 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition hover:shadow-lg hover:shadow-[#5A5DD1]/10"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#5A5DD1] to-[#3B3A8F] text-white shadow-md">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-[#232181]">{title}</h3>
              <p className="mt-2 text-sm text-[#3B3A8F]/80">{desc}</p>
              <div className="mt-4 h-[2px] w-0 bg-gradient-to-r from-[#5A5DD1] to-[#3B3A8F] transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
