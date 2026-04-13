import { motion } from "motion/react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { ProductCard } from "@/components/ProductCard";
import { Gallery } from "@/components/Gallery";
import { ContactInfo } from "@/components/ContactInfo";
import { Footer } from "@/components/Footer";
import { BUSINESS_INFO } from "@/constants";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Star } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-50 relative overflow-hidden">
      {/* Animated Organic Backgrounds */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-brand-200/40 blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-brand-300/30 blur-[120px]"
        />
      </div>

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <Marquee />

        {/* About Section - Bento Grid */}
        <section id="about" className="py-24 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center max-w-2xl mx-auto">
              <Badge className="bg-brand-200 text-brand-800 hover:bg-brand-200 mb-4 px-4 py-1">
                Our Story
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-950 leading-tight">
                Pioneering Sustainable <br />
                <span className="text-brand-600">Coir Manufacturing</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Big Image Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden relative group shadow-xl"
              >
                <img
                  src="about-img.png"
                  alt="About Utkal Coir"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/20 to-transparent flex flex-col justify-end p-8 md:p-12">
                  <p className="text-lg text-brand-100 mb-4 max-w-lg leading-relaxed">
                    Established in {BUSINESS_INFO.operational.established}, Utkal Coir has grown from a local workshop to a leading manufacturer and supplier of premium coir products.
                  </p>
                </div>
              </motion.div>

              {/* Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-brand-800 rounded-3xl p-8 text-white flex flex-col justify-center items-center text-center relative overflow-hidden shadow-xl"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-500/40 to-transparent opacity-50" />
                <p className="text-7xl font-black mb-2 relative z-10 drop-shadow-lg">19+</p>
                <p className="text-brand-200 uppercase tracking-widest text-sm relative z-10 font-bold">Years of Excellence</p>
              </motion.div>

              {/* Features Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white/60 backdrop-blur-md rounded-3xl p-8 border border-white shadow-xl flex flex-col justify-center"
              >
                <div className="space-y-6">
                  {BUSINESS_INFO.features.slice(0, 3).map((feature) => (
                    <div key={feature} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-brand-600" />
                      </div>
                      <span className="text-brand-900 font-bold">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Founder Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="md:col-span-2 bg-gradient-to-r from-brand-100 to-white rounded-3xl p-8 flex items-center gap-6 border border-brand-200/50 shadow-lg"
              >
                <div className="w-16 h-16 rounded-full bg-brand-800 flex items-center justify-center text-white text-2xl font-bold shrink-0 shadow-inner">
                  {BUSINESS_INFO.owner.name.charAt(0)}
                </div>
                <div>
                  <p className="text-brand-600 font-bold mb-1 uppercase tracking-wider text-sm">Founded by</p>
                  <p className="text-2xl font-black text-brand-950 uppercase tracking-wide">{BUSINESS_INFO.owner.name}</p>
                </div>
              </motion.div>

              {/* Review Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-brand-950 text-brand-50 rounded-3xl p-8 relative overflow-hidden shadow-xl"
              >
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-brand-600 blur-3xl opacity-30 rounded-full" />
                <div className="flex gap-1 mb-6 text-brand-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < 4 ? "fill-current" : "fill-none"}`} />
                  ))}
                </div>
                <p className="italic text-brand-200 font-medium leading-relaxed">
                  "High-quality eco-friendly products. Their coir mats are exceptionally durable and beautifully crafted."
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-24 bg-brand-950">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <Badge className="bg-brand-500/20 text-brand-300 border-brand-500/30 mb-6">
                  Our Catalog
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Products</h2>
                <p className="text-brand-300">
                  Explore our range of premium natural fiber products, processed with care to ensure maximum durability and environmental sustainability.
                </p>
              </div>
              <div className="flex gap-4">
                <Badge variant="outline" className="text-brand-100 border-brand-100/20 px-4 py-2">
                  Wholesale
                </Badge>
                <Badge variant="outline" className="text-brand-100 border-brand-100/20 px-4 py-2">
                  Retail
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {BUSINESS_INFO.products.map((product) => (
                <ProductCard
                  key={product.name}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                />
              ))}
            </div>
          </div>
        </section>

        <Gallery />
        <ContactInfo />
      </main>

      <Footer />
    </div>
  );
}
