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
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4">Visit Us</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-navy mb-4">
            Find <span className="italic text-primary">Your Table</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg text-navy mb-1">Location</h3>
                <p className="text-muted-foreground font-body">
                  1234 Harbor View Drive<br />Key West, FL 33040
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg text-navy mb-1">Reservations</h3>
                <p className="text-muted-foreground font-body">(305) 555-0187</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg text-navy mb-1">Hours</h3>
                <p className="text-muted-foreground font-body">
                  Mon – Thu: 5:00 PM – 10:00 PM<br />
                  Fri – Sat: 5:00 PM – 11:00 PM<br />
                  Sun: 4:00 PM – 9:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-sand to-muted flex items-center justify-center border border-border overflow-hidden">
            <div className="text-center p-8">
              <MapPin className="w-12 h-12 text-primary/40 mx-auto mb-3" />
              <p className="text-muted-foreground font-body text-sm">
                Interactive map coming soon
              </p>
              <p className="text-navy font-heading text-lg mt-2">Key West, Florida</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
