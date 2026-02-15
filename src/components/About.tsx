import { useEffect, useRef } from "react";

const About = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-up");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="section-padding bg-cream opacity-0"
      style={{ animationDelay: "0.1s" }}>

      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4">Our Story</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-navy mb-6 leading-tight">
            A Twist on <span className="text-primary italic">Florida Tradition</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg leading-relaxed mb-4">Born on the sun-soaked docks of the Florida, Twisted Lobster reimagines classic coastal dining. Every dish starts with the freshest catch — pulled straight from local waters and prepared with bold, unexpected flavors.



          </p>
          <p className="text-muted-foreground font-body text-lg leading-relaxed">
            Our chef's signature twist? Taking timeless seafood favorites and elevating them with
            global inspiration, craft sauces, and fire-kissed perfection. This is not your average
            lobster shack — this is where the coast gets a little more interesting.
          </p>
        </div>

        {/* Visual placeholder */}
        <div className="relative">
          <div className="aspect-[4/5] rounded-lg bg-gradient-to-br from-primary/20 via-coral/20 to-gold/20 flex items-center justify-center overflow-hidden">
            <div className="text-center p-8">
              <span className="text-7xl mb-4 block">🦞</span>
              <p className="text-navy/60 font-heading text-xl italic">Premium Seafood Since 2018</p>
            </div>
          </div>
          {/* Gold accent bar */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold/20 rounded-lg -z-10" />
        </div>
      </div>
    </section>);

};

export default About;