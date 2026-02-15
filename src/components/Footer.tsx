const footerLinks = ["About", "Menu", "Why Us", "Reviews", "Contact"];

const Footer = () => {
  const handleClick = (label: string) => {
    const href = `#${label.toLowerCase().replace(/\s+/g, "-")}`;
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary py-16 px-4 md:px-8 border-t border-white/5">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-secondary-foreground mb-4">
              Twisted<span className="text-primary"> Lobster</span>
            </h3>
            <p className="text-secondary-foreground/50 font-body text-sm leading-relaxed">
              Premium seafood dining on the Florida coast. Where bold flavors meet the open water.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-gold font-heading text-sm uppercase tracking-[0.2em] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => handleClick(link)}
                    className="text-secondary-foreground/60 hover:text-primary font-body text-sm transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-gold font-heading text-sm uppercase tracking-[0.2em] mb-4">Hours</h4>
            <div className="space-y-1 text-secondary-foreground/60 font-body text-sm">
              <p>Mon – Thu: 5 PM – 10 PM</p>
              <p>Fri – Sat: 5 PM – 11 PM</p>
              <p>Sun: 4 PM – 9 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-foreground/40 font-body text-sm">
            © 2025 Twisted Lobster. All rights reserved.
          </p>
          <p className="text-secondary-foreground/40 font-body text-sm">
            Made with 🦞 in Florida
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
