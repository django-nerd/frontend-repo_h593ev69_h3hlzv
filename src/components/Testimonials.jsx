import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Avery Chen',
    role: 'Product Manager',
    text:
      'TabNest nails the balance of power and simplicity. I switch between projects daily and it restores my entire context flawlessly.'
  },
  {
    name: 'Jordan Lee',
    role: 'Graduate Researcher',
    text:
      'My browser used to be chaos. Now I snapshot study sessions and jump back in without hunting for 20 links.'
  },
  {
    name: 'Sam Patel',
    role: 'Frontend Engineer',
    text:
      'The one‑click restore is magical. It even keeps my tab groups and colors intact. Instant focus.'
  }
];

export default function Testimonials() {
  return (
    <section className="relative w-full bg-[#F5FAFF] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-[#232181] sm:text-4xl">Loved by productivity people</h2>
          <p className="mt-2 text-[#3B3A8F]/80">Real users, real focus wins.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="group relative overflow-hidden rounded-2xl border border-[#5A5DD1]/10 bg-white p-6 shadow-sm transition hover:shadow-lg">
              <Quote className="absolute right-4 top-4 h-6 w-6 text-[#5A5DD1]/30" />
              <div className="mb-3 flex items-center gap-1 text-[#5A5DD1]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-[#232181]">{t.text}</p>
              <div className="mt-4 text-sm text-[#3B3A8F]">{t.name} • {t.role}</div>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(90,93,209,0.08), transparent 40%)' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
