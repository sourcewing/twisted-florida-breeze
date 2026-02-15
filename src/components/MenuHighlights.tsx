import { useEffect, useRef } from "react";

const categories = [
  {
    title: "Starters",
    items: [
      { name: "Lobster Bisque", desc: "Creamy, rich, with a hint of sherry", price: "$18" },
      { name: "Seared Diver Scallops", desc: "Citrus beurre blanc, microgreens", price: "$24" },
      { name: "Coconut Shrimp", desc: "Thai chili sauce, toasted coconut", price: "$16" },
    ],
  },
  {
    title: "Signature Lobster",
    items: [
      { name: "The Twisted Tail", desc: "Butter-poached tail, truffle mash, gold leaf", price: "$62" },
      { name: "Lobster Mac & Cheese", desc: "Three-cheese blend, herb crust", price: "$38" },
      { name: "Grilled Whole Lobster", desc: "Garlic herb butter, grilled corn", price: "$58" },
    ],
  },
  {
    title: "From the Sea",
    items: [
      { name: "Pan-Seared Grouper", desc: "Mango salsa, jasmine rice", price: "$42" },
      { name: "Blackened Mahi-Mahi", desc: "Key lime aioli, seasonal veg", price: "$36" },
      { name: "Seafood Tower", desc: "Oysters, shrimp, crab, lobster", price: "$95" },
    ],
  },
  {
    title: "Sweet Finales",
    items: [
      { name: "Key Lime Pie", desc: "Graham crust, torched meringue", price: "$14" },
      { name: "Crème Brûlée", desc: "Madagascar vanilla bean", price: "$15" },
      { name: "Chocolate Lava Cake", desc: "Molten center, sea salt caramel", price: "$16" },
    ],
  },
];

const MenuHighlights = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-up");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="menu"
      ref={ref}
      className="section-padding bg-secondary opacity-0"
      style={{ animationDelay: "0.1s" }}
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4">Curated Selection</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-secondary-foreground mb-4">
            Menu <span className="italic text-primary">Highlights</span>
          </h2>
          <p className="text-secondary-foreground/60 max-w-xl mx-auto font-body">
            A taste of what awaits. Our full menu changes with the season and the day's freshest catch.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {categories.map((cat) => (
            <div key={cat.title} className="space-y-6">
              <h3 className="font-heading text-2xl text-gold border-b border-gold/30 pb-3">
                {cat.title}
              </h3>
              {cat.items.map((item) => (
                <div
                  key={item.name}
                  className="group flex justify-between items-start gap-4 p-3 rounded-lg transition-all duration-300 hover:bg-white/5"
                >
                  <div>
                    <p className="font-heading text-lg text-secondary-foreground group-hover:text-primary transition-colors">
                      {item.name}
                    </p>
                    <p className="text-secondary-foreground/50 font-body text-sm">{item.desc}</p>
                  </div>
                  <span className="text-gold font-heading text-lg whitespace-nowrap">{item.price}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;
