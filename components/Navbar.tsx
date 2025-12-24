"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const smoothScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <motion.header
      className="absolute top-0 left-0 right-0 z-50 bg-transparent py-5 transition-all duration-300"
      style={{ backgroundColor: 'transparent' }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
             <img
               src="/logo.png"
               alt="XpressoAI Logo"
               className="h-8 w-8 object-contain"
             />
             <span className="font-normal text-lg tracking-tight text-white">XpressoAI</span>
          </Link>

          {/* Separator */}
          <div className="hidden lg:block w-px h-6 bg-white"></div>

          {/* Nav Links - aligned left of logo */}
          <nav className="hidden lg:flex items-center gap-8 text-base font-normal text-white">
            <button onClick={() => smoothScrollToSection('features')} className="hover:text-white transition-colors">Use cases</button>
            <button onClick={() => smoothScrollToSection('about')} className="hover:text-white transition-colors">About</button>
            <button onClick={() => smoothScrollToSection('careers')} className="hover:text-white transition-colors">Careers</button>
            <button onClick={() => smoothScrollToSection('contact')} className="hover:text-white transition-colors">Contact</button>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-[#050A24]/95 backdrop-blur-md border-b border-white/5"
          >
            <Container className="py-6">
              <nav className="flex flex-col gap-4 text-sm font-normal text-white">
                <button onClick={() => smoothScrollToSection('features')} className="text-left hover:text-white transition-colors py-2">Use cases</button>
                <button onClick={() => smoothScrollToSection('about')} className="text-left hover:text-white transition-colors py-2">About</button>
                <button onClick={() => smoothScrollToSection('careers')} className="text-left hover:text-white transition-colors py-2">Careers</button>
                <button onClick={() => smoothScrollToSection('contact')} className="text-left hover:text-white transition-colors py-2">Contact</button>
              </nav>
              <Link
                href="/get-started"
                className="mt-6 inline-flex w-full items-center justify-center bg-white/5 backdrop-blur-lg border border-white/10 px-6 py-4 text-base font-medium text-white transition hover:bg-white/10"
              >
                Get started
              </Link>
            </Container>
          </motion.div>
        )}

        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/get-started"
            className="inline-flex h-12 items-center justify-center bg-white/5 backdrop-blur-lg border border-white/10 px-6 py-3 text-base font-medium text-white transition hover:bg-white/10"
          >
            Get started
          </Link>
        </div>
        
        {/* Mobile Menu Button - White */}
        <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10 hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                <motion.svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  animate={isMobileMenuOpen ? "open" : "closed"}
                >
                  <motion.line
                    x1="3"
                    y1="12"
                    x2="21"
                    y2="12"
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: 45, y: 6 }
                    }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.line
                    x1="3"
                    y1="6"
                    x2="21"
                    y2="6"
                    variants={{
                      closed: { opacity: 1 },
                      open: { opacity: 0 }
                    }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.line
                    x1="3"
                    y1="18"
                    x2="21"
                    y2="18"
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: -45, y: -6 }
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.svg>
            </Button>
        </div>
      </Container>
    </motion.header>
  );
}
