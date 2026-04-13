import { motion } from "motion/react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { BUSINESS_INFO } from "@/constants";

interface ProductProps {
  key?: string;
  name: string;
  price: string;
  image: string;
}

export function ProductCard({ name, price, image }: ProductProps) {
  const handleInquire = () => {
    const phoneNumber = BUSINESS_INFO.contact.phone.replace(/\D/g, '');
    const message = `Hi, I am interested in your ${name}. Can you provide more details and pricing?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="h-full"
    >
      <Card className="overflow-hidden border border-brand-100 shadow-xl hover:shadow-2xl hover:shadow-brand-500/20 bg-white/80 backdrop-blur-sm group h-full flex flex-col transition-all duration-300">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Badge className="absolute top-4 right-4 bg-brand-800 text-brand-50 shadow-md">
            Natural
          </Badge>
        </div>
        <CardContent className="p-6 flex-grow">
          <h3 className="text-xl font-serif font-bold text-brand-950 mb-2 group-hover:text-brand-700 transition-colors">{name}</h3>
          <p className="text-brand-600 text-sm mb-4">
            Premium quality {name.toLowerCase()} sourced from the finest coconut husks.
          </p>
        </CardContent>
        <CardFooter className="p-6 pt-0 mt-auto">
          <Button 
            onClick={handleInquire}
            className="w-full bg-brand-100 hover:bg-brand-800 hover:text-white text-brand-900 border-none shadow-sm transition-all duration-300"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Inquire Now
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
