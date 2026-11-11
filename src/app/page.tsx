import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-ink">
      {/* Subtle Technical Grid & Ambient Lighting Backgrounds */}
      <div className="gtm-grid-bg" aria-hidden="true" />
      <div className="gtm-radial-glow" aria-hidden="true" />

      {/* Primary Header */}
      <Header />

      {/* Main Single-Page Experience */}
      <main className="relative z-10 flex-1 flex flex-col justify-center">
        <Hero />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}

