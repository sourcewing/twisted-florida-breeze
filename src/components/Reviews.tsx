import { useEffect, useRef } from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    text: "The best lobster I've ever had — and I've been to Maine. The sunset views are just the cherry on top.",
    rating: 5,
  },
  {
    name: "James & Linda K.",
    text: "We celebrated our anniversary here and it was absolutely perfect. The Twisted Tail is a must-order.",
    rating: 5,
  },
  {
    name: "Carlos D.",
    text: "Incredible cocktails and the freshest seafood. Our server knew every dish inside and out. 10/10.",
    rating: 5,
  },
];

const Reviews = () => {
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
      id="reviews"
      ref={ref}
      className="section-padding bg-secondary opacity-0"
      style={{ animationDelay: "0.1s" }}
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4">Guest Voices</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-secondary-foreground mb-4">
            What Our <span className="italic text-primary">Guests Say</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-primary/30 transition-all duration-500"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-secondary-foreground/80 font-body text-base leading-relaxed mb-6 italic">
                "{r.text}"
              </p>
              <p className="text-gold font-heading text-sm tracking-wide">— {r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
