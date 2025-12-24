"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "lucide-react";

const BlurTypewriter = ({ text }: { text: string }) => {
  const characters = text.split("");

  return (
    <span className="inline-flex items-center">
      {characters.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          initial={{ opacity: 0, y: 16, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
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

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-[#050A24] text-white flex flex-col justify-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/background.png')]" />
      </div>

      <Container className="relative z-10 flex flex-col items-center text-center mt-[120px]">
        <motion.div
            style={{ y, opacity }}
            className="flex flex-col items-center gap-6 max-w-5xl"
        >
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-xs font-normal text-white/90 backdrop-blur-md border border-white/10 uppercase tracking-wide">
              <Sparkles className="w-3 h-3 text-blue-300" />
              Introducing XpressoAI
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.1] drop-shadow-xl">
            <BlurTypewriter text="Reimagine work with" />
            <br className="hidden md:block"/>
            <BlurTypewriter text=" autonomous AI agents" />
          </h1>

          {/* Subtext */}
          <motion.p
            className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Your on-demand AI workforce. Automate routine tasks, streamline decision-making, and free your team to focus on what matters most.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Button size="lg" className="rounded-none px-8 py-6 text-base font-normal bg-white text-black hover:bg-white/90 shadow-lg shadow-white/5 transition-all hover:scale-105 active:scale-95 border-none">
              Get in touch
            </Button>
            <Button size="lg" className="rounded-none px-8 py-6 text-base font-normal bg-white/5 backdrop-blur-lg border border-white/10 text-white hover:bg-white/10 transition-all hover:scale-105 active:scale-95">
              View use cases
            </Button>
          </motion.div>
        </motion.div>
      </Container>
      

    </section>
  );
}
