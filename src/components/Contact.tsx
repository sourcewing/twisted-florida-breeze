import { useEffect, useRef } from "react";
import { MapPin, Phone, Clock } from "lucide-react";

const Contact = () => {
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
      id="contact"
      ref={ref}
      className="section-padding bg-cream opacity-0"
      style={{ animationDelay: "0.1s" }}
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4">
            Visit Us
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-navy mb-4">
            Find <span className="italic text-primary">Your Table</span>
          </h2>
        </div>

        {/* Contact info only (centered now) */}
        <div className="max-w-xl mx-auto space-y-10">

          {/* Location */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-heading text-lg text-navy mb-1">Location</h3>
              <p className="text-muted-foreground font-body">
                1341 Del Prado Blvd S #1,<br />
                Cape Coral, FL 33990
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-heading text-lg text-navy mb-1">Reservations</h3>
              <p className="text-muted-foreground font-body">(239) 800-2879</p>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-heading text-lg text-navy mb-1">Hours</h3>
              <p className="text-muted-foreground font-body">
                Mon – Sun: 11:30am – 9:00pm
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
