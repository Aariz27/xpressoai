"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

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

const comparisonData = [
  { feature: "Manual task delegation", agency: false, aiSupply: true },
  { feature: "Limited data usage", agency: false, aiSupply: true },
  { feature: "Human error & delay", agency: false, aiSupply: true }, // Logic flip: Agency HAS delay, XpressoAI DOES NOT. 
                                                                    // Actually usually these tables show "Good Feature": No vs Yes.
                                                                    // Let's rephrase to positive features based on screenshot.
                                                                    // Screenshot: "End-to-end task automation", "Unified analysis", "Reliable", "Scales"
  
];

const features = [
    { name: "End-to-end task automation", other: false, us: true },
    { name: "Unified analysis across all data", other: false, us: true },
    { name: "Reliable, always-on AI agents", other: false, us: true },
    { name: "Scales without adding headcount", other: false, us: true },
    { name: "Instant setup & integration", other: false, us: true },
];

export default function Comparison() {
  return (
    <section id="comparison" className="relative z-10 bg-white py-24 border-t border-gray-100">
      <Container>
         <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
         >
            <motion.h2
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
               className="text-sm font-medium text-blue-600 tracking-wider uppercase mb-2 block"
            >
               Compare
            </motion.h2>
            <motion.h1
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
               className="text-3xl md:text-5xl font-serif font-normal text-gray-900 mb-6"
            >
               <BlurTypewriter text="Why Choose XpressoAI" />
            </motion.h1>
            <motion.p
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
               className="text-lg text-gray-600"
            >
               Stop relying on slow, manual workflows. Let XpressoAI automate the heavy lifting so your team can focus on high-impact work.
            </motion.p>
         </motion.div>

         <motion.div
            className="max-w-4xl mx-auto bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
         >
             {/* Header */}
             <div className="grid grid-cols-3 p-6 md:p-8 bg-gray-50 border-b border-gray-200 items-end">
                <div className="text-sm font-medium text-gray-500">Features</div>
                <div className="text-center text-xl font-bold text-gray-400">Other agencies</div>
                <div className="text-center text-xl font-bold text-gray-900">XpressoAI</div>
             </div>

             {/* Rows */}
             {features.map((item, i) => (
                <div key={i} className="grid grid-cols-3 p-6 md:p-8 border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors">
                   <div className="flex items-center font-medium text-gray-900 pr-4">{item.name}</div>
                   
                   <div className="flex items-center justify-center">
                       {item.other ? (
                           <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600"><Check size={18} /></div>
                       ) : (
                           <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400"><X size={18} /></div>
                       )}
                   </div>

                   <div className="flex items-center justify-center">
                        {item.us ? (
                           <div className="h-8 w-8 rounded-full bg-black flex items-center justify-center text-white"><Check size={18} /></div>
                       ) : (
                           <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400"><X size={18} /></div>
                       )}
                   </div>
                </div>
             ))}
         </motion.div>

      </Container>
    </section>
  )
}
