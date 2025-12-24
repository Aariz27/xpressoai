"use client";

import Navbar from "@/components/Navbar";
import { Container } from "@/components/ui/Container";
import { MapPin, PhoneCall, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const contactDetails = [
  {
    icon: MapPin,
    label: "Visit us",
    value: "Trafalgar Blvd. 67, Hong Kong",
  },
  {
    icon: PhoneCall,
    label: "Call us",
    value: "+12 345 678 912",
  },
  {
    icon: Mail,
    label: "Email us",
    value: "hello@xpressoai.com",
  },
];

const inputClasses =
  "mt-2 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/30";

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

export default function GetStartedPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050A24] text-white">
      <Navbar />

      <section className="relative isolate overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0" aria-hidden>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/background.png)" }}
          />
        </div>

        <Container className="relative z-10 grid gap-16 lg:grid-cols-[1.05fr,1fr]">
          <div>
            <p className="uppercase tracking-[0.4em] text-xs text-white/50">
              Contact
            </p>
            <h1 className="mt-4 font-serif text-5xl text-white md:text-6xl lg:text-7xl">
              <BlurTypewriter text="Get started" />
            </h1>
            <motion.p
              className="mt-6 text-lg text-white/75 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Tell us what{"'"}s slowing your team down — we{"'"}ll help you
              explore how XpressoAI can automate it and deliver measurable
              results.
            </motion.p>

            <motion.div
              className="mt-16 space-y-10 border-t border-white/15 pt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {contactDetails.map((detail, index) => (
                <motion.div
                  key={detail.label}
                  className="flex items-start gap-5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/5">
                    <detail.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                      {detail.label}
                    </p>
                    <p className="mt-2 text-xl text-white">{detail.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.form
            className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-lg shadow-[0_20px_60px_rgba(1,8,23,0.5)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-white/80">
                  Your name*
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                  className={inputClasses}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-white/80">
                  Email*
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className={inputClasses}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-white/80">
                  Phone number*
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  required
                  className={inputClasses}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-white/80">
                  Subject*
                </label>
                <input
                  type="text"
                  placeholder="Enter a subject"
                  required
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="text-sm font-medium text-white/80">
                Your message*
              </label>
              <textarea
                rows={6}
                placeholder="Enter your message..."
                required
                className={`${inputClasses} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded-md bg-white py-3.5 text-base font-semibold text-black shadow-lg shadow-white/20 transition hover:bg-white/90"
            >
              Submit
            </button>

            <p className="mt-6 text-center text-xs text-white/60">
              By sending this form, you agree to our{" "}
              <Link href="#" className="underline decoration-white/40">
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link href="#" className="underline decoration-white/40">
                Privacy Policy
              </Link>{" "}
              terms.
            </p>
          </motion.form>
        </Container>
      </section>
    </main>
  );
}
