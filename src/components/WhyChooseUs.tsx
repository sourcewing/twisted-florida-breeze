import { useEffect, useRef } from "react";
import { Anchor, UtensilsCrossed, Wine, Award } from "lucide-react";

const features = [
  {
    icon: Anchor,
    title: "Fresh Daily Catch",
    desc: "Straight from Florida waters to your plate — every single day. No freezers, no shortcuts.",
  },
  {
    icon: UtensilsCrossed,
    title: "Award-Winning Chef",
    desc: "Chef Marco brings 20 years of Michelin-star experience and a passion for coastal cuisine.",
  },
  {
    icon: Wine,
    title: "Craft Cocktails",
    desc: "Handcrafted cocktails with tropical twists. Our sunset spritz is legendary.",
  },
  {
    icon: Award,
    title: "Waterfront Ambiance",
    desc: "Dine dockside with panoramic harbor views, live music, and unforgettable sunsets.",
  },
];

const WhyChooseUs = () => {
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
      id="why-us"
      ref={ref}
      className="section-padding bg-cream opacity-0"
      style={{ animationDelay: "0.1s" }}
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4">The Difference</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-navy mb-4">
            Why <span className="italic text-primary">Twisted Lobster</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group text-center p-8 rounded-xl bg-white/60 border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                <f.icon className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-xl text-navy mb-3">{f.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
