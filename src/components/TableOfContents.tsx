const navItems = [
  { label: "Home", href: "#home" },
  { label: "Slots", href: "#slots" },
  { label: "Bonuses", href: "#bonuses" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

const TableOfContents = () => {
  return (
    <nav className="bg-secondary border-b border-border">
      <div className="container mx-auto px-4">
        <ul className="flex items-center justify-center gap-8 py-3 overflow-x-auto">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium whitespace-nowrap"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default TableOfContents;
