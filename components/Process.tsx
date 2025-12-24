"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { Check, Search, Code, Settings } from "lucide-react";
import { useState } from "react";

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

const steps = [
  {
    id: "discovery",
    title: "Discovery",
    description: "Uncover Automation Opportunities",
    detail: "We start by analyzing your current workflows, tools, and communication patterns to identify where AI can create the most impact. From customer-facing touchpoints to internal bottlenecks, we surface high-leverage use cases that deliver real results—fast.",
    icon: Search,
  },
  {
    id: "develop",
    title: "Develop",
    description: "Build & Train Custom Agents",
    detail: "We engineer bespoke AI agents tailored to your specific needs. Our team handles the prompt engineering, knowledge base integration, and testing to ensure your agents perform reliably and accurately within your existing infrastructure.",
    icon: Code,
  },
  {
    id: "optimize",
    title: "Optimize",
    description: "Continuous Improvement",
    detail: "AI is not a set-it-and-forget-it solution. We monitor performance, gather feedback, and iteratively refine the agents. This ensures they evolve with your business and maintain high accuracy over time.",
    icon: Settings,
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="relative z-10 bg-white py-24 border-t border-gray-100">
      <Container>
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          
          {/* Left Side: Navigation */}
          <div className="md:w-1/3 flex flex-col justify-center">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.7, ease: "easeOut" }}
               className="mb-8"
            >
                <h2 className="text-sm font-medium text-blue-600 tracking-wider uppercase mb-2 block">Process</h2>
                <h1 className="text-3xl font-serif font-normal text-gray-900 leading-tight">
                  <BlurTypewriter text="Empower your growth with" />
                  <br />
                  <BlurTypewriter text="AI-driven solutions" />
                </h1>
            </motion.div>
            
            <motion.div
               className="flex flex-col gap-4 relative"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
               <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-gray-100" />
               {steps.map((step, index) => (
                  <motion.button
                    key={step.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                    onClick={() => setActiveStep(index)}
                    className={`relative pl-12 py-2 text-left transition-all duration-300 group`}
                  >
                     <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-2 flex items-center justify-center bg-white z-10 transition-colors duration-300 ${activeStep === index ? "border-blue-600 text-blue-600" : "border-gray-200 text-gray-300 group-hover:border-gray-300"}`}>
                        <span className="text-sm font-bold">{index + 1}</span>
                     </div>
                     <h2 className={`text-xl font-medium transition-colors duration-300 ${activeStep === index ? "text-gray-900" : "text-gray-400 group-hover:text-gray-600"}`}>
                        {step.title}
                     </h2>
                  </motion.button>
               ))}
            </motion.div>
            </div>

          {/* Right Side: Content Content */}
          <div className="md:w-2/3">
             <motion.div
                className="relative h-[500px] w-full bg-gray-50 rounded-3xl border border-gray-100 overflow-hidden p-8 flex flex-col justify-end"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
             >
                {steps.map((step, index) => (
                   activeStep === index && (
                     <motion.div
                        key={step.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between"
                     >
                        {/* Visual Placeholder (Top) */}
                        <div className="flex-1 flex items-center justify-center mb-8 relative">
                           {/* Abstract Workflow Visual */}
                           <div className="w-full max-w-md h-48 relative">
                              <div className="absolute top-0 left-0 p-4 bg-white shadow-lg rounded-xl border border-gray-100 z-10 animate-pulse">
                                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-2">
                                     <step.icon size={16} />
                                  </div>
                                  <div className="h-2 w-24 bg-gray-200 rounded mb-1" />
                                  <div className="h-2 w-16 bg-gray-100 rounded" />
                              </div>
                              
                              <div className="absolute bottom-0 right-0 p-4 bg-white shadow-lg rounded-xl border border-gray-100 z-10 delay-150">
                                   <div className="flex items-center gap-2 mb-2">
                                      <div className="h-2 w-2 bg-green-500 rounded-full" />
                                      <span className="text-xs font-medium text-gray-600">Complete</span>
                                   </div>
                                   <div className="h-2 w-32 bg-gray-200 rounded" />
                              </div>

                              {/* Connecting Lines */}
                              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                                  <path d="M 50 20 C 150 20, 150 150, 250 150" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" fill="none" />
                              </svg>
                           </div>
                        </div>

                        {/* Text Content (Bottom) */}
                        <div>
                            <div className="text-sm font-mono text-blue-600 mb-2">0{index + 1} – {step.title}</div>
                            <h2 className="text-2xl font-medium text-gray-900 mb-4">{step.description}</h2>
                            <p className="text-gray-600 leading-relaxed">
                                {step.detail}
                            </p>
                        </div>
                     </motion.div>
                   )
                ))}
             </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
