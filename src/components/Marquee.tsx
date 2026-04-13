import { motion } from "motion/react";
import { Star } from "lucide-react";

const items = [
  "100% Organic",
  "Biodegradable",
  "Sustainable",
  "Premium Quality",
  "Eco-Friendly",
  "Zero Waste",
  "Export Quality",
];

export function Marquee() {
  return (
    <div className="w-full bg-brand-950 text-brand-50 py-4 overflow-hidden flex items-center relative border-y border-brand-800">
      <motion.div
        className="flex whitespace-nowrap gap-12 items-center w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
      >
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 text-sm md:text-base font-bold tracking-widest uppercase text-brand-200"
          >
            <span>{item}</span>
            <Star className="w-4 h-4 text-brand-500" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
