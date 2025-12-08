"use client";

import { Brain, Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Image from "next/image";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { useState } from "react";
import toast from "react-hot-toast";

const footerLinks = {
  Product: [
    { name: "AI Calling Agent", href: "/product/aicallingagent" },
    { name: "AI Automation Chatbot", href: "/product/aiautomationchatbot" },
  ],
  Services: [
    { name: "Consultation", href: "/services/consultation" },
    { name: "Training", href: "/services/training" },
    { name: "Data-Analyst", href: "/services/dataanalytics" },
    { name: "Implementation", href: "/services/implementation" },
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "#" },
    { name: "Contact Us", href: "/contact" },
    { name: "Become a channel partner", href: "/partner" },
  ],
  Resources: [
    { name: "Blog", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Affiliate", href: "#" },
    { name: "FAQs", href: "#" },
  ],
};

// ✅ FIX: Add aria-labels to social links
const socialLinks = [
  { name: "Twitter", href: "#", Icon: Twitter, ariaLabel: "Follow BizAI Hacks on Twitter" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/bizaihacks/", Icon: Linkedin, ariaLabel: "Follow BizAI Hacks on LinkedIn" },
  { name: "Instagram", href: "#", Icon: FaInstagram, ariaLabel: "Follow BizAI Hacks on Instagram" },
  { name: "Facebook", href: "https://www.facebook.com/bizaihacks/", Icon: FaFacebook, ariaLabel: "Follow BizAI Hacks on Facebook" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubscribeStatus('success');
        toast.success("Subscribed successfully 🎉", {
          position: "top-center",
          icon: "✅",
        });
        setEmail("");
        setTimeout(() => setSubscribeStatus('idle'), 5000);
      } else {
        setSubscribeStatus('error');
        toast.error(data.error || "Failed to subscribe");
        setTimeout(() => setSubscribeStatus('idle'), 5000);
      }
    } catch (err) {
      console.error(err);
      setSubscribeStatus('error');
      toast.error("Something went wrong");
      setTimeout(() => setSubscribeStatus('idle'), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer
      className="border-t"
      style={{
        backgroundColor: "hsl(var(--background))",
        borderColor: "hsl(var(--border))",
      }}
      role="contentinfo"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          {/* Left: Logo + Info */}
          <div className="md:col-span-4 space-y-4">
            {/* ✅ FIX: Add aria-label to logo link */}
            <Link 
              href="/" 
              className="flex items-center gap-2 group"
              aria-label="BizAI Hacks - Go to homepage"
            >
              <div className="w-[150px] h-10">
                <Image
                  src="/logo.webp"
                  alt="BizAI Hacks Logo"
                  width={150}
                  height={150}
                  className="object-contain rounded-lg"
                  priority
                />
              </div>
            </Link>

            <p
              className="text-sm max-w-xs leading-relaxed"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              Making AI accessible, secure, and measurable for business teams —
              delivering fast ROI, low friction, and strong governance.
            </p>

            {/* Contact Info */}
            <address className="space-y-2 pt-2 not-italic">
              <div className="flex items-center gap-2 text-sm">
                <Phone
                  className="h-4 w-4 flex-shrink-0"
                  style={{ color: "hsl(var(--primary))" }}
                  aria-hidden="true"
                />
                <a
                  href="tel:+919723723322"
                  className="hover:text-primary transition-colors"
                  style={{ color: "hsl(var(--muted-foreground))" }}
                >
                  +91 97237 23322
                </a>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <Mail
                  className="h-4 w-4 flex-shrink-0"
                  style={{ color: "hsl(var(--primary))" }}
                  aria-hidden="true"
                />
                <a
                  href="mailto:contact@bizaihacks.com"
                  className="hover:text-primary transition-colors"
                  style={{ color: "hsl(var(--muted-foreground))" }}
                >
                  contact@bizaihacks.com
                </a>
              </div>

              <div className="flex items-start gap-2 text-sm">
                <MapPin
                  className="h-4 w-4 mt-0.5 flex-shrink-0"
                  style={{ color: "hsl(var(--primary))" }}
                  aria-hidden="true"
                />
                <span style={{ color: "hsl(var(--muted-foreground))" }}>
                  Vibrant Park, Survey No. 182 <br /> Near NH 8 GIDC Phase 1,{" "}
                  <br />
                  Vapi, Gujarat - 396195, India
                </span>
              </div>
            </address>

            {/* ✅ FIX: Social Links with proper aria-labels and touch targets */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map(({ name, href, Icon, ariaLabel }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ariaLabel}
                  className="w-10 h-10 min-h-[44px] min-w-[44px] rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 group focus:outline-none focus:ring-2 focus:ring-primary"
                  style={{
                    backgroundColor: "hsl(var(--accent) / 0.5)",
                    color: "hsl(var(--muted-foreground))",
                  }}
                >
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:col-span-6 md:grid-cols-4 md:gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3
                  className="font-semibold text-xs md:text-sm uppercase tracking-wider mb-3 md:mb-4"
                  style={{ color: "hsl(var(--foreground))" }}
                >
                  {title}
                </h3>
                <ul className="space-y-2 md:space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-xs md:text-sm hover:text-primary transition-colors inline-flex items-center group py-1"
                        style={{ color: "hsl(var(--muted-foreground))" }}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ✅ FIX: Newsletter with proper label */}
          <div className="md:col-span-2">
            <h3
              id="newsletter-heading"
              className="font-semibold text-sm uppercase tracking-wider mb-4"
              style={{ color: "hsl(var(--foreground))" }}
            >
              AI Insights
            </h3>
            <p
              className="text-sm mb-4 leading-relaxed"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              Get weekly insights on enterprise AI and automation.
            </p>

            <form 
              onSubmit={handleSubscribe} 
              className="space-y-4"
              aria-labelledby="newsletter-heading"
            >
              {/* ✅ FIX: Add proper label for input */}
              <div>
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address for newsletter subscription
                </label>
                <Input
                  type="email"
                  id="newsletter-email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-accent/50 border-border focus:border-primary focus:ring-primary min-h-[44px]"
                  required
                  aria-required="true"
                  aria-invalid={subscribeStatus === 'error'}
                  aria-describedby={
                    subscribeStatus === 'success' ? 'newsletter-success' : 
                    subscribeStatus === 'error' ? 'newsletter-error' : 
                    undefined
                  }
                  disabled={loading}
                />
              </div>
              
              <Button
                type="submit"
                className="w-full btn-primary-custom hover:bg-primary/90 min-h-[44px]"
                disabled={loading}
                aria-busy={loading}
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </Button>
              
              {/* ✅ Status messages with ARIA */}
              {subscribeStatus === 'success' && (
                <p 
                  id="newsletter-success" 
                  role="status" 
                  aria-live="polite"
                  className="text-xs text-green-600"
                >
                  ✅ Successfully subscribed!
                </p>
              )}
              
              {subscribeStatus === 'error' && (
                <p 
                  id="newsletter-error" 
                  role="alert" 
                  aria-live="assertive"
                  className="text-xs text-red-600"
                >
                  ❌ Subscription failed. Please try again.
                </p>
              )}
            </form>

            <p
              className="text-xs mt-3"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              We respect your privacy. No spam.
            </p>
          </div>
        </div>

        <div
          className="my-8 md:my-12 border-t"
          style={{ borderColor: "hsl(var(--border))" }}
          aria-hidden="true"
        />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p
            className="text-center md:text-left"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            &copy; {new Date().getFullYear()} BizAI Hacks. A division of{" "}
            <Link 
              href="https://soltechtechservices.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>SOLTECH TechServices Pvt Ltd</strong>
            </Link>
          </p>

          <nav aria-label="Legal links" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link
              href="/privacypolicy"
              className="hover:text-primary transition-colors py-1"
            >
              Privacy Policy
            </Link>
            <Link
              href="/termsandconditions"
              className="hover:text-primary transition-colors py-1"
            >
              Terms of Service
            </Link>
            <Link
              href="/disclaimer"
              className="hover:text-primary transition-colors py-1"
            >
              Disclaimer
            </Link>
            <Link
              href="/cookiepolicy"
              className="hover:text-primary transition-colors py-1"
            >
              Cookies Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}