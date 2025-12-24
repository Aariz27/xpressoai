"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const BlurTypewriter = ({ text }: { text: string }) => {
  const characters = text.split("");

  return (
    <span className="inline-flex items-center">
      {characters.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          initial={{ opacity: 0, y: 16, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.04,
            duration: 0.2,
            ease: "easeOut",
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

export default function Pricing() {
  return (
    <section id="pricing" className="relative z-10 bg-white py-24 border-t border-gray-100">
      <Container>
         <motion.div
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
         >
            <div>
               <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                  className="text-sm font-medium text-blue-600 tracking-wider uppercase mb-2 block"
               >
                  Pricing
               </motion.h2>
               <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                  className="text-3xl md:text-5xl font-serif font-normal text-gray-900"
               >
                  <BlurTypewriter text="Plans built for speed and scale" />
               </motion.h1>
            </div>
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
               className="bg-gray-100 p-1 rounded-lg inline-flex"
            >
               <button className="px-4 py-2 rounded-md text-sm font-medium bg-white shadow-sm text-gray-900">Yearly</button>
               <button className="px-4 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-gray-900">Monthly</button>
            </motion.div>
         </motion.div>

         <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
         >
            
            {/* Plan 1 */}
            <PricingCard 
               name="Starter"
               price="$899"
               description="Best for businesses who test if AI can boost their efficiency."
               features={[
                   "Automate 3 core workflows",
                   "Up to 5 AI agents",
                   "Standard integrations",
                   "Basic analytics",
                   "Email & chat support",
                   "Onboarding session"
               ]}
            />

            {/* Plan 2 */}
            <PricingCard 
               name="Pro"
               price="$1,899"
               description="Best for businesses who are ready to go all-in with AI and fully optimize their ops."
               features={[
                   "Unlimited workflows",
                   "Up to 15 AI agents",
                   "Premium integrations",
                   "Advanced reporting",
                   "Dedicated account manager",
                   "Priority support & strategy calls"
               ]}
               popular
            />

         </motion.div>
      </Container>
    </section>
  )
}

function PricingCard({ name, price, description, features, popular }: { name: string, price: string, description: string, features: string[], popular?: boolean }) {
    return (
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className={`p-8 rounded-3xl border flex flex-col ${popular ? "bg-black text-white border-black" : "bg-white text-gray-900 border-gray-200"}`}
        >
            <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{name}</h3>
                <p className={`text-sm ${popular ? "text-gray-400" : "text-gray-500"}`}>{description}</p>
            </div>
            
            <div className="mb-8">
                <span className="text-4xl font-bold">{price}</span> <span className={`text-sm ${popular ? "text-gray-400" : "text-gray-500"}`}>/ mo</span>
            </div>

            <Button className={`w-full mb-8 py-6 rounded-xl ${popular ? "bg-white text-black hover:bg-gray-200" : "bg-black text-white hover:bg-gray-800"}`}>
                Get in touch
            </Button>

            <div className="space-y-4 flex-1">
                {features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3">
                        <div className={`h-5 w-5 rounded-full flex items-center justify-center ${popular ? "bg-white/20 text-white" : "bg-gray-100 text-gray-900"}`}>
                            <Check size={12} />
                        </div>
                        <span className={`text-sm ${popular ? "text-gray-300" : "text-gray-600"}`}>{f}</span>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}
