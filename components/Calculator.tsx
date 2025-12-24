"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Calculator as CalcIcon } from "lucide-react";

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

export default function Calculator() {
  return (
    <section id="calculator" className="relative z-10 bg-white py-24 border-t border-gray-100">
      <Container>
        <div className="flex flex-row gap-12 items-start">
            
            {/* Left: Text */}
            <div className="lg:w-1/2">
               <motion.div
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
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-sm font-medium mb-6"
               >
                  <CalcIcon size={14} /> Calculator
               </motion.h2>
               <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                  className="text-4xl md:text-5xl font-serif font-normal text-gray-900 mb-6 tracking-tight"
               >
                   <BlurTypewriter text="Quantify the cost of" />
                   <br />
                   <BlurTypewriter text="not automating" />
               </motion.h1>
                   
                   {/* Results Display (Static for UI) */}
                   <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                       <p className="text-gray-600 mb-2">You're losing approximately</p>
                       <div className="text-3xl font-bold text-gray-900 mb-1">~520 hours/month</div>
                       <p className="text-gray-500 text-sm mb-4">to repetitive tasks. That's <span className="text-gray-900 font-semibold">$20,784/month</span> in time costs.</p>
                       
                       <div className="h-px w-full bg-gray-200 my-4" />
                       
                       <div className="flex items-center gap-3">
                           <div className="p-2 bg-green-100 rounded-lg text-green-700">
                               <svg
                                 width="20"
                                 height="20"
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor"
                                 strokeWidth="2"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                               >
                                 <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                                 <polyline points="17 6 23 6 23 12" />
                               </svg>
                           </div>
                           <div>
                               <p className="text-sm text-gray-600">XpressoAI could reclaim 80% of that</p>
                               <p className="font-bold text-green-600">saving ~$16,627/month</p>
                           </div>
                       </div>
                   </div>

                   <div className="mt-8">
                       <Button size="lg" className="rounded-none bg-black text-white hover:bg-gray-800">
                           Get a custom automation plan
                       </Button>
                   </div>
               </motion.div>
            </div>

            {/* Right: Inputs UI */}
            <div className="lg:w-1/2 w-full">
               <motion.div
                  className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8 md:p-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
               >
                   <div className="space-y-8">
                       
                       {/* Input 1 */}
                       <div>
                           <div className="flex justify-between mb-4">
                               <label className="font-medium text-gray-900">Team size</label>
                               <span className="font-mono text-gray-500 bg-gray-100 px-2 py-1 rounded">12</span>
                           </div>
                           <input 
                              type="range" 
                              min="1" max="100" defaultValue="12" 
                              className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-black"
                           />
                       </div>

                       {/* Input 2 */}
                       <div>
                           <div className="flex justify-between mb-4">
                               <label className="font-medium text-gray-900">Manual Hours / Week</label>
                               <span className="font-mono text-gray-500 bg-gray-100 px-2 py-1 rounded">10</span>
                           </div>
                           <p className="text-xs text-gray-400 mb-3">How many hours per week each team member spends on manual tasks.</p>
                           <input 
                              type="range" 
                              min="1" max="40" defaultValue="10" 
                              className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-black"
                           />
                       </div>

                        {/* Input 3 */}
                       <div>
                           <div className="flex justify-between mb-4">
                               <label className="font-medium text-gray-900">Avg. Hourly Cost ($)</label>
                               <span className="font-mono text-gray-500 bg-gray-100 px-2 py-1 rounded">$40</span>
                           </div>
                           <input 
                              type="range" 
                              min="10" max="200" defaultValue="40" 
                              className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-black"
                           />
                       </div>

                   </div>
               </motion.div>
            </div>
        </div>
      </Container>
    </section>
  );
}
