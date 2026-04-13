import { motion } from "motion/react";
import { BUSINESS_INFO } from "@/constants";

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-brand-100/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-950 mb-4">Our Craftsmanship</h2>
          <p className="text-brand-700">
            A glimpse into our manufacturing process and the beautiful eco-friendly products we create at Utkat Coir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BUSINESS_INFO.media.gallery.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-3xl shadow-lg aspect-[4/5] ${
                index === 1 ? "md:translate-y-12" : ""
              }`}
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <p className="text-white font-serif text-xl">Quality Assurance</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
