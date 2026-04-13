import { useState, useEffect } from "react";
import { Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { BUSINESS_INFO } from "@/constants";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md border-b border-brand-100 shadow-md py-3" : "bg-white/10 backdrop-blur-md border-b border-white/20 shadow-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="bg-brand-800 p-3 rounded-lg group-hover:bg-brand-700 transition-colors shadow-sm">
            <Leaf className="w-8 h-8 text-brand-50" />
          </div>
          <span className="font-serif text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-sm transition-colors text-brand-950">
            {BUSINESS_INFO.name}
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 pr-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-bold text-brand-900 hover:text-brand-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger render={<Button variant="ghost" size="icon" className={isScrolled ? "text-brand-950" : "text-white"} />}>
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-brand-50 border-brand-200">
              <div className="flex flex-col gap-6 mt-12">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-lg font-serif font-medium text-brand-900 hover:text-brand-950"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
