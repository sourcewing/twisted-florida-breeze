import { useEffect, useRef } from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Jonathan Frances",
    text: "My wife and I had a fantastic dinner at Twisted Lobster in Cape Coral, and it definitely lived up to the hype as one of the top seafood places in the area! The casual, welcoming vibe is perfect—friendly staff, great service, and that laid-back Florida feel.",
    rating: 5,
  },
  {
    name: "Robert Arthur",
    text: "We were looking for quality seafood for dinner that was in a causal atmosphere. Not a fancy dining experience. This place does not disappoint and you can tell as locals were there dining. The meal special for Saturday was perfect and at a fair price. Service was perfect with just the right amount of attention. We are already looking to go back soon and try some of there other meals. Nice friendly servers and staff with a 'Think Customer' mindset! Put the Twisted Lobster on your list, will not disappoint.",
    rating: 5,
  },
  {
    name: "Amber Brock",
    text: "The food was SOOOO flavorful. Their clam chowder was the BEST I have EVER had! I ate it so fast I forgot to snap a picture. Ooops! My mom said their bacon brussel sprouts were the best she has had as well. The lobster and steak was seasoned PERFECTLY! And the portions were big!",
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
