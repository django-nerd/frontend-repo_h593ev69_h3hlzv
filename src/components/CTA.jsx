import { Download } from 'lucide-react';

export default function CTA() {
  return (
    <section id="download" className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-[#5A5DD1]/20 bg-gradient-to-br from-[#F1F9FF] to-white p-10 shadow-xl">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-3xl font-bold text-[#232181]">Get TabNest</h3>
            <p className="mt-2 text-[#3B3A8F]/80">Install in seconds. Start saving time today.</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl bg-[#5A5DD1] px-6 py-3 text-white shadow-lg shadow-[#5A5DD1]/30 transition hover:translate-y-[-1px] hover:bg-[#4f52c0]"
              >
                <Download className="h-5 w-5" />
                Add to Chrome
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl border border-[#5A5DD1]/30 bg-white px-6 py-3 text-[#3B3A8F] shadow-sm transition hover:bg-[#F1F9FF]"
              >
                Microsoft Edge
              </a>
            </div>
            <div className="mt-4 text-xs text-[#3B3A8F]/70">Firefox support coming soon</div>
          </div>
        </div>
      </div>
    </section>
  );
}
