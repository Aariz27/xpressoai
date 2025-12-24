"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";

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

export default function Features() {
  return (
    <section id="features" className="relative z-10 bg-white py-24 lg:py-32 rounded-t-[3rem] shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.1)] border-t border-gray-100">
      <Container>
        <div className="flex flex-col gap-4 text-center mb-16">
           <motion.h2
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.7, ease: "easeOut" }}
             className="text-2xl font-medium tracking-tight text-gray-900 uppercase"
           >
             Introducing XpressoAI
           </motion.h2>
           <motion.h1
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.7, ease: "easeOut" }}
             className="text-6xl font-serif font-normal text-black max-w-4xl mx-auto"
           >
             <BlurTypewriter text="AI agents designed to think," />
             <br />
             <BlurTypewriter text="act and deliver at scale" />
           </motion.h1>
        </div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
           {/* Card 1: Unify and Analyze */}
           <FeatureCard
              title="Unify and Analyze All Your Data"
              description="Connect internal docs, third-party tools, and real-time inputs into a single intelligent interface. Let AI surface insights that drive smarter, more confident business decisions."
              visual={
                <div className="h-64 w-full bg-gray-50 rounded-xl border border-gray-100 p-6 relative overflow-hidden flex items-end justify-center gap-2 shadow-lg">
                    {/* Placeholder Chart */}
                    {[40, 70, 50, 90, 60, 80].map((h, i) => (
                        <motion.div 
                           key={i}
                           initial={{ height: 0 }}
                           whileInView={{ height: `${h}%` }}
                           viewport={{ once: true }}
                           transition={{ duration: 0.8, delay: i * 0.1 }}
                           className="w-12 bg-blue-500/10 rounded-t-md border-t border-x border-blue-500/20 relative group"
                        >
                            <div className="absolute top-0 w-full h-1 bg-blue-500/50" />
                        </motion.div>
                    ))}
                    <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent pointer-events-none" />
                </div>
              }
           />
           
           {/* Card 2: Automate High-Frequency Workflows */}
           <FeatureCard
              title="Automate High-Frequency Workflows"
              description="XpressoAI agents break down complex tasks into clear, traceable steps. Eliminate repetitive work and scale your team's output with unmatched efficiency and precision."
              visual={
                 <div className="h-64 w-full bg-gray-50 rounded-xl border border-gray-100 p-6 relative flex flex-col items-center justify-center gap-4 shadow-lg">
                     {/* Placeholder Workflow Nodes */}
                     <div className="flex items-center gap-4">
                        <div className="p-3 bg-white shadow-md border border-gray-200 rounded-lg">
                           <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">1</div>
                        </div>
                        <div className="h-[2px] w-12 bg-gray-200" />
                        <div className="p-3 bg-white shadow-md border border-gray-200 rounded-lg">
                           <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">2</div>
                        </div>
                        <div className="h-[2px] w-12 bg-gray-200" />
                         <div className="p-3 bg-white shadow-md border border-gray-200 rounded-lg">
                           <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">3</div>
                        </div>
                     </div>
                     <div className="text-xs text-gray-400 font-mono">Processing Data...</div>
                 </div>
              }
           />
        </motion.div>

        {/* Card 3: Accelerate Execution (Full Width) */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
           <div className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 overflow-hidden flex flex-col md:flex-row">
              <div className="p-8 md:p-12 flex flex-col justify-center gap-6 md:w-1/2">
                 <h2 className="text-3xl font-medium text-gray-900">Accelerate Execution with Reliable Autonomy</h2>
                 <p className="text-gray-600 leading-relaxed">
                   Our agents don’t just assist — they complete tasks end-to-end with accountability and speed. Track progress, refine outputs, and get results faster.
                 </p>
                 <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-4">
                    <Button className="rounded-full bg-black text-white hover:bg-gray-800 px-6 py-6 text-base">
                       View use cases
                    </Button>
                    <div className="flex flex-col gap-1">
                        <div className="flex -space-x-2">
                           {[1,2,3].map(i => (
                               <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden">
                                  <Users className="w-4 h-4 text-gray-500" />
                               </div>
                           ))}
                        </div>
                        <span className="text-xs font-medium text-gray-500">Trusted by 300+ clients</span>
                    </div>
                 </div>
              </div>
              <div className="bg-gradient-to-r from-white via-[#fee3cf] to-[#cbdff5] md:w-1/2 p-8 flex items-center justify-center relative overflow-hidden">
                   <div className="w-full max-w-sm h-64 bg-white rounded-xl shadow-lg border border-gray-200 p-4 relative">
                        {/* Fake Line Chart */}
                        <svg className="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
                           {/* Horizontal dashed grid lines */}
                           <line x1="0" y1="10" x2="100" y2="10" stroke="#e5e7eb" strokeWidth="0.5" strokeDasharray="2,2" />
                           <line x1="0" y1="20" x2="100" y2="20" stroke="#e5e7eb" strokeWidth="0.5" strokeDasharray="2,2" />
                           <line x1="0" y1="30" x2="100" y2="30" stroke="#e5e7eb" strokeWidth="0.5" strokeDasharray="2,2" />
                           <line x1="0" y1="40" x2="100" y2="40" stroke="#e5e7eb" strokeWidth="0.5" strokeDasharray="2,2" />
                           <line x1="0" y1="50" x2="100" y2="50" stroke="#e5e7eb" strokeWidth="0.5" strokeDasharray="2,2" />

                           {/* y = x² parabola with minimum at (0,0) */}
                           <path d="M0 0 Q 25 12.5, 50 25 Q 75 12.5, 100 0" fill="none" stroke="#000000" strokeWidth="1" strokeLinecap="round" />
                        </svg>
                   </div>
              </div>
           </div>
        </motion.div>

      </Container>
    </section>
  );
}

function FeatureCard({ title, description, visual }: { title: string, description: string, visual: React.ReactNode }) {
    return (
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="group p-8 bg-[#f7f8fa] border border-gray-100 transition-all duration-300"
        >
            <h2 className="text-2xl font-medium text-gray-900 mb-4">{title}</h2>
            <div className="mb-8">{visual}</div>
            <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
            <div className="flex items-center text-sm font-serif font-normal text-gray-900 group-hover:text-blue-600 transition-colors cursor-pointer">
                View use cases <ArrowUpRight className="w-4 h-4 ml-1" />
            </div>
        </motion.div>
    )
}
