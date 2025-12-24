"use client";

import { Container } from "@/components/ui/Container";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

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

const faqs = [
  { q: "What exactly does an AI agent do?", a: "XpressoAI agents handle end-to-end workflows — from gathering data to executing actions — without needing constant human input." },
  { q: "How long does it take to get started?", a: "Most clients are up and running within 2-4 weeks, depending on the complexity of the workflows being automated." },
  { q: "Do I need technical skills to use this?", a: "No. Our team handles the setup, training, and maintenance. You interact with the agents through a simple interface." },
  { q: "What tools can it integrate with?", a: "We integrate with most major business tools including Slack, Salesforce, HubSpot, Google Workspace, Notion, and more via API." },
  { q: "Is my data secure?", a: "Yes. We use enterprise-grade encryption and adhere to strict data privacy protocols. Your data is never used to train public models." },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative z-10 bg-white py-24 border-t border-gray-100">
      <Container className="max-w-3xl">
         <motion.div
            className="text-center mb-16"
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
               FAQ
            </motion.h2>
            <motion.h1
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
               className="text-3xl md:text-5xl font-serif font-normal text-gray-900"
            >
               <BlurTypewriter text="Frequently asked questions" />
            </motion.h1>
         </motion.div>
         
         <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
         >
             {faqs.map((item, i) => (
                 <FAQItem key={i} question={item.q} answer={item.a} />
             ))}
         </motion.div>

      </Container>
    </section>
  )
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-100 last:border-0">
            <button 
               onClick={() => setIsOpen(!isOpen)}
               className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
            >
                <span className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors">{question}</span>
                <span className={`transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}>
                    <Plus className="w-5 h-5 text-gray-400" />
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                       initial={{ height: 0, opacity: 0 }}
                       animate={{ height: "auto", opacity: 1 }}
                       exit={{ height: 0, opacity: 0 }}
                       transition={{ duration: 0.3 }}
                       className="overflow-hidden"
                    >
                        <p className="pb-6 text-gray-600 leading-relaxed">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
