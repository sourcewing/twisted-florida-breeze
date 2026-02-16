import { useEffect, useRef } from "react";

const categories = [
  {
    title: "The App Trap",
    items: [
      {
        name: "Salmon Bites",
        desc: "Fresh cut salmon breaded and fried, tossed in sesame ginger sauce, served with coconut jasmine rice",
        price: "$12.99",
      },
      {
        name: "Coconut Shrimp",
        desc: "Coconut and panko breaded shrimp",
        price: "$13.99",
      },
      {
        name: "Lobster Bites",
        desc: "1/4 lb fried diced lobster tail pieces",
        price: "$13.99",
      },
      {
        name: "Tempura Shrimp",
        desc: "Over coconut rice with Asian ginger drizzle",
        price: "$13.97",
      },
      {
        name: "Big Boomin' Shrimp",
        desc: "1/2 lb of breaded and tossed shrimp atop coconut jasmine rice",
        price: "$16.99",
      },
      {
        name: "Soflo Smoked Fish Dip",
        desc: "Smoked mahi, sailfish and more—made into a creamy dip, served with jalapeños & club crackers",
        price: "$12.99",
      },
      {
        name: "Thai Calamari",
        desc: "Fried rings and tenticles with banana peppers, drizzled with ginger Asian sauce",
        price: "$15.99",
      },
      {
        name: "Seared Ahi Tuna",
        desc: "Sesame encrusted saku tuna with Vietnamese sauce and mango",
        price: "$14.99",
      },
      {
        name: "Clam Poutine Fries",
        desc: "Battered fries topped with clam strips, clam chowder and bacon bits",
        price: "$16.99",
      },
      {
        name: "Clam Strips",
        desc: "Fresh NE clams hand breaded and fried",
        price: "$9.99",
      },
      {
        name: "Whole Bellys",
        desc: "Fresh NE clams hand breaded and fried",
        price: "$17.99",
      },
    ],
  },
  {
    title: "Eat Fresh & Eat It Raw!",
    items: [
      {
        name: "Virginia Blues on the Half",
        desc: "Raw oysters",
        price: "1/2 dozen $14 • 1 dozen $25",
      },
      {
        name: "Northeast Oyster of the Day",
        desc: "Raw oysters",
        price: "1/2 dozen $16 • 1 dozen $28",
      },
      {
        name: "Peel & Eat Gulf Shrimp",
        desc: "Chilled shrimp",
        price: "1/2 pound $14 • 1 pound $25",
      },
      {
        name: "Snow Crab",
        desc: "Chilled crab",
        price: "1.25 pound $26",
      },
    ],
  },
  {
    title: "Some Soup For You!",
    items: [
      { name: "Clam Chowder", desc: "", price: "Cup $6 • Bowl $10" },
      { name: "Lobster Bisque", desc: "", price: "Cup $7 • Bowl $11" },
    ],
  },
  {
    title: 'The "Green" Stuff',
    items: [
      {
        name: "Caesar Salad",
        desc: "Add: Chicken $14.99 • Salmon $17.99 • Shrimp $15.99",
        price: "$9.99",
      },
      {
        name: "Greek Salad",
        desc: "Add: Chicken $15.99 • Salmon $18.99 • Shrimp $16.99 • Ahi Tuna $18.99",
        price: "$11.99",
      },
      {
        name: "Lobster Cobb",
        desc: "Blue cheese, egg, bacon, tomato, cucumber w/ champagne vinaigarette",
        price: "$21.99",
      },
    ],
  },
  {
    title: "Handhelds",
    items: [
      { name: "Cheeseburger", desc: "Add bacon $1", price: "$14.99" },
      { name: "Chicken Breast Sandwich", desc: "With bacon and swiss", price: "$14.99" },
      {
        name: "Breaded Haddock Sandwich",
        desc: "A large breaded haddock filet",
        price: "$17.99",
      },
      {
        name: "Soft Shell Crab (2-Jumbo)",
        desc: "Fried with lettuce, tomato, onion & chipotle aioli",
        price: "$19.99",
      },
      {
        name: "Gulf Grouper Sandwich",
        desc: "Blackened, fried or broiled",
        price: "$20.99",
      },
      {
        name: "New England Lobster Roll",
        desc: "Hot or cold… your choice",
        price: "$21.99",
      },
      {
        name: "Triple Tail Reuben",
        desc: "Lightly breaded and fried filet of triple tail on marble rye with swiss, 1000 & kraut",
        price: "$18.99",
      },
      {
        name: "Blackened Mahi Taco's (3)",
        desc: "Blackened mahi with cilantro cream, cabbage and pico de gallo served with coconut jasmine rice",
        price: "$15.99",
      },
      {
        name: "Boom Shrimp Taco's (3)",
        desc: "Large shrimp tossed in spicy boom sauce atop cilantro cream, cabbage and pico de gallo served with coconut jasmine rice",
        price: "$15.99",
      },
      {
        name: "Lobster Chipolte Taco (3)",
        desc: "Lightly breaded and fried with a chipolte cream sauce and cabbage, served with coconut jasmine rice",
        price: "$21.99",
      },
    ],
  },
  {
    title: "Twisted Baskets",
    items: [
      {
        name: "Large Shrimp 1/2 lb",
        desc: "Served with pineapple slaw & battered fries • Breaded, blackened or grilled",
        price: "$16.99",
      },
      {
        name: "Fried Oysters",
        desc: "Served with pineapple slaw & battered fries",
        price: "$17.99",
      },
      {
        name: "Soft Shell Crab (2)",
        desc: "Served with pineapple slaw & battered fries • Breaded and garlic buttered",
        price: "$19.99",
      },
      {
        name: "Fish N Chips",
        desc: "Served with pineapple slaw & battered fries • Beer battered cod",
        price: "$16.99",
      },
      {
        name: "Beer Battered Haddock",
        desc: "Served with pineapple slaw & battered fries",
        price: "$17.99",
      },
      {
        name: "Ipswich Clams",
        desc: "Served with pineapple slaw & battered fries",
        price: "$25.99",
      },
      {
        name: "Shrimp & Scallops",
        desc: "Served with pineapple slaw & battered fries",
        price: "$17.99",
      },
      {
        name: "Chicken Tenders",
        desc: "Served with pineapple slaw & battered fries",
        price: "$14.99",
      },
      {
        name: "NE Clam Strips",
        desc: "Served with pineapple slaw & battered fries",
        price: "$15.99",
      },
      {
        name: "Grouper Basket",
        desc: "Served with pineapple slaw & battered fries",
        price: "$17.99",
      },
      {
        name: "Basket Add-Ons",
        desc: "Add Shrimp $6.99 • Add Scallops (4) $10.99 • Add Oysters $13.99",
        price: "",
      },
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
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4">
            Curated Selection
          </p>
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
                    {item.desc ? (
                      <p className="text-secondary-foreground/50 font-body text-sm">{item.desc}</p>
                    ) : null}
                  </div>
                  {item.price ? (
                    <span className="text-gold font-heading text-lg whitespace-nowrap">{item.price}</span>
                  ) : null}
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
