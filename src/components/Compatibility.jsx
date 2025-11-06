import { Chrome, Layers, MonitorSmartphone } from 'lucide-react';

export default function Compatibility() {
  return (
    <section className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-[#232181] sm:text-4xl">Works with your browser</h2>
          <p className="mt-2 text-[#3B3A8F]/80">Optimized for Chromium browsers today, with Firefox support on the way.</p>
        </div>
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-[#5A5DD1]/10 bg-[#F1F9FF] p-6 text-center shadow-sm">
            <Chrome className="mx-auto mb-3 h-8 w-8 text-[#5A5DD1]" />
            <div className="font-semibold text-[#232181]">Google Chrome</div>
            <div className="text-sm text-[#3B3A8F]/80">Full support</div>
          </div>
          <div className="rounded-2xl border border-[#5A5DD1]/10 bg-[#F1F9FF] p-6 text-center shadow-sm">
            <Layers className="mx-auto mb-3 h-8 w-8 text-[#5A5DD1]" />
            <div className="font-semibold text-[#232181]">Microsoft Edge</div>
            <div className="text-sm text-[#3B3A8F]/80">Full support</div>
          </div>
          <div className="rounded-2xl border border-[#5A5DD1]/10 bg-[#F1F9FF] p-6 text-center shadow-sm">
            <MonitorSmartphone className="mx-auto mb-3 h-8 w-8 text-[#5A5DD1]" />
            <div className="font-semibold text-[#232181]">Firefox</div>
            <div className="text-sm text-[#3B3A8F]/80">Coming soon</div>
          </div>
        </div>
      </div>
    </section>
  );
}
