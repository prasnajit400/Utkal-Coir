import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Leaf, Recycle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS_INFO } from "@/constants";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);

  return (
    <section id="home" className="flex flex-col">
      {/* Top Part with Image */}
      <div className="relative h-[40vh] min-h-[300px] w-full overflow-hidden mt-20">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img
            src={BUSINESS_INFO.media.cover}
            alt="Coir Manufacturing"
            className="w-full h-[120%] object-cover -mt-[10%]"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>

      {/* Bottom Part without Image */}
      <div className="bg-brand-50 pt-12 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl xl:max-w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-200/50 border border-brand-200 text-brand-950 text-sm font-bold mb-6">
                <Leaf className="w-4 h-4 text-brand-800" />
                Eco-Friendly Manufacturing Since {BUSINESS_INFO.operational.established}
              </span>
              <h1 className="text-[clamp(14px,3.5vw,3.5rem)] whitespace-nowrap font-bold text-brand-950 leading-[1.1] mb-6">
                Trusted Coir Solutions for a Greener Tomorrow
              </h1>
              <p className="text-lg md:text-xl text-brand-800 font-medium max-w-3xl mb-10">
                Premium manufacturer of eco-friendly coir products. 100% natural, durable, and sustainable.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg" 
                className="bg-brand-600 hover:bg-brand-700 text-white rounded-full px-8 h-14 text-lg shadow-lg"
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                className="bg-white hover:bg-gray-50 text-brand-950 rounded-full px-8 h-14 text-lg font-bold shadow-lg border border-brand-200"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Us
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex items-center gap-8 mt-10 pt-8 border-t border-brand-200"
            >
              <div className="flex items-center gap-3 text-brand-950">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-brand-200 shadow-sm">
                  <Recycle className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <p className="text-sm font-bold">100% Organic</p>
                  <p className="text-xs font-semibold text-brand-600">Natural Fibers</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
