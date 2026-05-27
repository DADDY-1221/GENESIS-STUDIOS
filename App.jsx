export default function GenesisStudiosWebsite() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden font-sans">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-[radial-gradient(circle_at_top,_#0f172a,_#000000)]">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />

        <div className="relative z-10 text-center max-w-5xl">
          <div className="mb-6 inline-flex items-center gap-2 border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 rounded-full text-yellow-300 tracking-[0.25em] uppercase text-xs md:text-sm backdrop-blur-sm">
            Genesis Studios
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-none">
            Explore The
            <span className="block text-yellow-400">Extraordinary</span>
          </h1>

          <p className="mt-8 text-zinc-300 text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto">
            Cinematic travel, luxury experiences, storytelling, technology,
            and unforgettable adventures across the globe.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <button className="px-8 py-4 rounded-2xl bg-yellow-400 text-black font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl">
              Begin The Journey
            </button>

            <button className="px-8 py-4 rounded-2xl border border-zinc-700 hover:border-yellow-400 text-white text-lg transition-all duration-300">
              Watch Stories
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-28 px-6 md:px-16 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold leading-tight">
              A Vision Beyond Travel
            </h2>

            <p className="mt-8 text-zinc-400 text-lg leading-relaxed">
              Genesis Studios is a cinematic media brand built to document
              global adventures, luxury experiences, modern technology,
              creative storytelling, and the journey of building a worldwide
              creator empire from the ground up.
            </p>

            <p className="mt-6 text-zinc-500 leading-relaxed">
              Every destination tells a story. Every frame captures emotion.
              Every journey inspires the next.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 backdrop-blur-sm hover:border-yellow-400/30 transition-all">
              <h3 className="text-2xl font-semibold text-yellow-400">
                Luxury Travel
              </h3>
              <p className="mt-3 text-zinc-400">
                Premium destinations, airlines, hotels, and unforgettable global experiences.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 backdrop-blur-sm hover:border-yellow-400/30 transition-all">
              <h3 className="text-2xl font-semibold text-yellow-400">
                Cinematic Storytelling
              </h3>
              <p className="mt-3 text-zinc-400">
                Visual journeys inspired by modern filmmaking and emotional storytelling.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 backdrop-blur-sm hover:border-yellow-400/30 transition-all">
              <h3 className="text-2xl font-semibold text-yellow-400">
                Creator Lifestyle
              </h3>
              <p className="mt-3 text-zinc-400">
                Building a powerful global creator brand from zero.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section className="py-32 px-6 text-center bg-black border-t border-zinc-900">
        <div className="max-w-4xl mx-auto">
          <p className="text-4xl md:text-6xl font-light leading-tight text-white">
            “Travel is more than movement.
            <span className="block text-yellow-400 mt-4">
              It is transformation.”
            </span>
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 px-6 text-center bg-[linear-gradient(to_bottom,_#000000,_#0f172a)] border-t border-zinc-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            This Is Only
            <span className="block text-yellow-400">The Beginning</span>
          </h2>

          <p className="mt-8 text-zinc-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Join Genesis Studios as we explore the world through creativity,
            ambition, cinematic storytelling, and unforgettable adventures.
          </p>

          <button className="mt-12 px-10 py-5 rounded-2xl bg-yellow-400 text-black text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-2xl">
            Join The Journey
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 py-10 text-center text-zinc-500 text-sm bg-black">
        © 2026 Genesis Studios — Cinematic Travel & Storytelling
      </footer>
    </div>
  );
}
