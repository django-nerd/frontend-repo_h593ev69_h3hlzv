import Hero from './components/Hero';
import Features from './components/Features';
import Compatibility from './components/Compatibility';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 w-full border-b border-[#5A5DD1]/10 bg-white/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-[#5A5DD1] to-[#3B3A8F]" />
            <span className="font-semibold text-[#232181]">TabNest</span>
          </div>
          <nav className="hidden gap-6 text-sm text-[#3B3A8F] sm:flex">
            <a href="#features" className="hover:text-[#232181]">Features</a>
            <a href="#download" className="hover:text-[#232181]">Download</a>
            <a href="#" className="hover:text-[#232181]">Docs</a>
          </nav>
          <a href="#download" className="rounded-lg bg-[#5A5DD1] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#4f52c0]">Get TabNest</a>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <Compatibility />
        <Testimonials />
        <CTA />
      </main>

      <footer className="border-t border-[#5A5DD1]/10 bg-[#F5FAFF] py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-sm text-[#3B3A8F]/80">© {new Date().getFullYear()} TabNest. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-[#3B3A8F]/80">
            <a href="#" className="hover:text-[#232181]">Privacy</a>
            <a href="#" className="hover:text-[#232181]">Terms</a>
            <a href="#" className="hover:text-[#232181]">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
