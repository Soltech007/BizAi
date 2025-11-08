"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import DotGrid from "@/components/ui/dot-grid";

export default function Hero() {
  const words = ["accessible.", "impactful.", "measurable."];
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [pause, setPause] = useState(false);
  const longestWord = words.reduce((a, b) => (a.length > b.length ? a : b), "");

  useEffect(() => {
    if (pause) return;
    const currentWord = words[wordIndex];
    const typingSpeed = isDeleting ? 60 : 120;

    const handleTyping = () => {
      if (!isDeleting && displayText.length < currentWord.length) {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
      } else if (!isDeleting && displayText.length === currentWord.length) {
        setPause(true);
        setTimeout(() => setIsDeleting(true), 1000);
        setTimeout(() => setPause(false), 1000);
      } else if (isDeleting && displayText.length > 0) {
        setDisplayText(currentWord.slice(0, displayText.length - 1));
      } else if (isDeleting && displayText.length === 0) {
        setIsDeleting(false);
        setPause(true);
        setTimeout(() => {
          setWordIndex((prev) => (prev + 1) % words.length);
          setPause(false);
        }, 200);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex, pause, words]);

  return (
    <section className="relative overflow-hidden w-full min-h-[calc(100vh-4rem)] lg:min-h-screen flex items-center">
      {/* Dot Grid Background */}
      <div className="absolute inset-0 w-full h-full">
        <DotGrid
          dotSize={4}
          gap={14}
          baseColor="hsl(var(--primary))"
          activeColor="hsl(var(--primary))"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
          className="opacity-20"
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-background/60 to-primary/10" />
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background)/0.8)_100%)]" />

      {/* Main Container */}
      <div className="container mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 py-2 sm:py-5 lg:py-10">
        <div className="flex justify-center items-center w-full h-full">
          <div className="w-full max-w-5xl text-center space-y-6 sm:space-y-8 lg:space-y-12">

            {/* ✅ Main Heading with Typing Effect */}
            <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-6xl font-headline tracking-tight text-foreground leading-tight">
              <span className="font-light block">Enterprise AI Solutions</span>
              <span className="font-semibold block mt-3 sm:mt-4 lg:mt-5">
                Make AI for business <br />
                <span className="inline-block relative ml-1 pb-2">
                  <span className="invisible">{longestWord}</span>
                  <span className="absolute left-0 top-0 inline-flex items-baseline">
                    <span
                      className="bg-gradient-to-r mt-5 sm:mt-5 from-primary to-blue-800 bg-clip-text text-transparent transition-all duration-300 ease-in-out"
                      aria-live="polite"
                    >
                      {displayText}
                    </span>
                    <span
                      className="ml-1 w-[2px] bg-primary mt-7 sm:mt-0 inline-block animate-blink"
                      style={{ height: "0.8em" }}
                      aria-hidden="true"
                    />
                  </span>
                </span>
              </span>
            </h1>

            {/* ✅ Subheading */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
              We help mid-market and enterprise teams deploy{" "}
              <strong>production-ready AI solutions</strong> with fast ROI, low
              friction, and strong governance. From{" "}
              <strong>AI strategy consulting</strong> to{" "}
              <strong>AI chatbots</strong> and <strong>voice automation</strong>{" "}
              — all integrated with your CRM, ERP, and contact center.
            </p>

            {/* ✅ Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center w-full px-4 sm:px-0">
              <Button
                asChild
                className="btn-primary-custom hover:bg-primary/90 h-12 sm:h-13 lg:h-14 px-6 sm:px-8 lg:px-10 text-sm sm:text-base lg:text-lg w-full sm:w-auto"
              >
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
              <Button
                color="secondary"
                asChild
                className="h-12 sm:h-13 lg:h-14 px-6 sm:px-8 lg:px-10 text-sm sm:text-base lg:text-lg btn-primary-custom w-full sm:w-auto"
              >
                <Link href="/aicallingagent">Explore AI Products</Link>
              </Button>
            </div>

            {/* ✅ Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 lg:gap-10 text-sm md:text-base lg:text-lg text-muted-foreground w-full">
              {[
                "24/7 AI Availability",
                "50+ Enterprise Clients",
                "SOC2 & GDPR Compliant",
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-2 lg:gap-3">
                  <svg
                    className="w-5 h-5 lg:w-6 lg:h-6 text-green-600 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="whitespace-nowrap">{text}</span>
                </div>
              ))}
            </div>

            {/* ✅ Industry Keywords */}
            <p className="text-xs sm:text-sm lg:text-base text-muted-foreground/70 leading-relaxed px-4">
              Serving Telecom, BFSI, Healthcare, Retail, Logistics & SaaS industries
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}