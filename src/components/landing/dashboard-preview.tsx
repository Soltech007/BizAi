"use client";

import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, Monitor } from "lucide-react";

export default function DashboardPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true, margin: "0px", amount: 0.3 });

  const [rotateAngle, setRotateAngle] = useState(90);
  const [scale, setScale] = useState(0.8);
  const [opacity, setOpacity] = useState(0.3);

  const image = PlaceHolderImages.find(
    (img) => img.id === "dashboard-preview-hero"
  );

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !containerRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // FASTER ANIMATION
      const startPoint = windowHeight * 0.85;
      const endPoint = windowHeight * -0.15;

      let scrollProgress = 0;

      if (rect.top > startPoint) {
        scrollProgress = 0;
      } else if (rect.top <= startPoint && rect.top >= endPoint) {
        scrollProgress = (startPoint - rect.top) / (startPoint - endPoint);
      } else {
        scrollProgress = 1;
      }

      // Smooth easing
      const easedProgress = scrollProgress < 0.5
        ? 2 * scrollProgress * scrollProgress
        : 1 - Math.pow(-2 * scrollProgress + 2, 2) / 2;

      // Update transformations
      setRotateAngle(90 - (easedProgress * 90));
      setScale(0.8 + (easedProgress * 0.2));
      setOpacity(0.3 + (easedProgress * 0.7));
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!image) return null;

  return (
    <section
      ref={sectionRef}
      className="relative py-8 md:py-12 lg:py-20 overflow-hidden"
      style={{ minHeight: "auto" }}
    >
      <div
        ref={containerRef}
        className="min-h-[400px] md:min-h-screen flex flex-col justify-center overflow-hidden"
      >
        <div className="container mx-auto max-w-7xl px-4 md:px-8 relative z-10">
          {/* Section heading */}
          <div ref={headingRef} className="text-center mb-4 md:mb-12 lg:mb-16">
            {/* Badge */}
            <motion.div
              className="flex justify-center mb-3 md:mb-6"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10">
                <Monitor className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Live Dashboard</span>
              </div>
            </motion.div>

            <h2 className="text-2xl md:text-4xl lg:text-5xl font-headline font-semibold text-foreground mb-2 md:mb-3 lg:mb-4">
              <motion.span
                className="inline-block mr-2"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Your Dashboard {" "}
              </motion.span>
              <span className="relative inline-block">
                <motion.span
                  className="relative z-10 font-black"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Comes to Life
                </motion.span>

                {/* Nike Swoosh */}
                <svg
                  className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-6 md:h-8 z-0"
                  viewBox="0 0 300 30"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M 0 20 Q 75 8, 150 12 T 300 8"
                    stroke="url(#dashboard-gradient)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
                  />
                  <defs>
                    <linearGradient id="dashboard-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#fb923c" />
                      <stop offset="100%" stopColor="#f97316" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Sparkle */}
                <motion.span
                  className="absolute -top-1 -right-2 md:-top-2 md:-right-3 inline-block"
                  initial={{ scale: 0, rotate: 0 }}
                  animate={isInView ? { scale: 1, rotate: 360 } : {}}
                  transition={{ duration: 0.6, delay: 1.4, type: "spring" }}
                >
                  <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-orange-400" />
                </motion.span>
              </span>
            </h2>

            <motion.p
              className="text-sm md:text-base lg:text-lg text-muted-foreground px-4 md:px-0"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Watch as your messy operations transform into organized brilliance
            </motion.p>
          </div>

          {/* Dashboard container */}
          <div
            className="relative flex justify-center items-center"
            style={{
              perspective: "2000px",
              minHeight: "200px"
            }}
          >
            {/* Main dashboard */}
            <div
              className="relative transition-none w-full max-w-6xl"
              style={{
                transform: `
                  rotateX(${rotateAngle}deg) 
                  rotateZ(${rotateAngle / 30}deg)
                  scale(${scale})
                `,
                transformStyle: "preserve-3d",
                opacity: opacity,
                willChange: "transform, opacity"
              }}
            >
              {/* Dashboard frame */}
              <div className="relative rounded-xl md:rounded-2xl overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 p-1">
                {/* Browser bar */}
                <div className="bg-slate-800 rounded-t-xl md:rounded-t-2xl px-3 md:px-4 py-1.5 md:py-2 flex items-center gap-2 relative z-10">
                  <div className="flex gap-1 md:gap-1.5">
                    <motion.div
                      className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500"
                      whileHover={{ scale: 1.2 }}
                    />
                    <motion.div
                      className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500"
                      whileHover={{ scale: 1.2 }}
                    />
                    <motion.div
                      className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500"
                      whileHover={{ scale: 1.2 }}
                    />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="bg-slate-700 rounded px-2 md:px-4 py-0.5 md:py-1 text-[10px] md:text-xs text-slate-300 flex items-center gap-1">
                      <motion.span
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        🔒
                      </motion.span>
                      app.freightsync.com
                    </div>
                  </div>
                </div>

                {/* Dashboard image */}
                <div className="relative">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    width={1200}
                    height={675}
                    className="rounded-b-xl md:rounded-b-2xl w-full h-auto"
                    priority
                    data-ai-hint={image.imageHint}
                  />
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                className="hidden md:block absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-semibold pointer-events-none"
                style={{
                  opacity: 1 - rotateAngle / 90,
                  transform: `translateZ(50px) scale(${1 - rotateAngle / 180})`
                }}
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                ✓ Live Tracking
              </motion.div>

              <motion.div
                className="hidden md:block absolute bottom-2 -left-2 md:bottom-0 md:-left-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-semibold pointer-events-none"
                style={{
                  opacity: 1 - rotateAngle / 90,
                  transform: `translateZ(50px) scale(${1 - rotateAngle / 180})`
                }}
                animate={{
                  y: [0, 5, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                ⚡ Real-time Sync
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}