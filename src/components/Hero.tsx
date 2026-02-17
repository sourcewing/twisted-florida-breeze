import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Waterfront dining at sunset in the Florida Keys"
          className="w-full h-full object-cover"
          loading="eager" />

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        {/* Warm sunset shimmer overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-gold/10 animate-shimmer bg-[length:400%_100%]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-gold font-body text-sm md:text-base uppercase tracking-[0.4em] mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.3s" }}>PREMIUM SEAFOOD • CAPE CORAL, FLORIDA

        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white leading-[1.1] mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.5s" }}>
          Where the Catch<br />
          <span className="italic text-primary">Meets the Coast</span>
        </h1>
        <p className="text-white/70 font-body text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up opacity-0" style={{ animationDelay: "0.7s" }}>
          Indulge in Florida's finest lobster and fresh-caught seafood, prepared with bold flavors
          and served at golden hour.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0" style={{ animationDelay: "0.9s" }}>
          <button
            onClick={() => scrollTo("#menu")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-body font-bold uppercase tracking-widest text-sm px-10 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(0,72%,45%,0.3)]">

            View Our Menu
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="border border-white/30 text-white hover:bg-white/10 font-body font-bold uppercase tracking-widest text-sm px-10 py-4 rounded-lg transition-all duration-300 hover:scale-105">

            Find Us
          </button>
        </div>
      </div>

      {/* Decorative wave SVG at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" className="w-full h-auto">
          <path
            d="M0 60L48 55C96 50 192 40 288 42C384 44 480 58 576 62C672 66 768 60 864 52C960 44 1056 34 1152 38C1248 42 1344 60 1392 69L1440 78V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V60Z"
            fill="hsl(30, 25%, 96%)" />

        </svg>
      </div>
    </section>);

};

export default Hero;
