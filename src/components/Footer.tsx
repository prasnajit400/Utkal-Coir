import { Leaf } from "lucide-react";
import { BUSINESS_INFO } from "@/constants";

export function Footer() {
  return (
    <footer className="bg-brand-950 text-brand-100 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-brand-500 p-2 rounded-lg">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                {BUSINESS_INFO.name}
              </span>
            </div>
            <p className="text-brand-300 text-sm leading-relaxed">
              Utkal Coir is a leading manufacturer of sustainable coir products. Committed to eco-friendly practices and traditional craftsmanship since 2007.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-brand-300">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Products</h4>
            <ul className="space-y-4 text-sm text-brand-300">
              {BUSINESS_INFO.products.map(p => (
                <li key={p.name}><a href="#products" className="hover:text-white transition-colors">{p.name}</a></li>
              ))}
              <li><a href="#products" className="hover:text-white transition-colors">Handicrafts</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Custom Mats</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-brand-400">
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
