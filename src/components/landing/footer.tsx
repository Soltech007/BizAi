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
    { name: "AI Calling Agent", href: "/products/ai-calling-agent" },
    { name: "AI Automation Chatbot", href: "/products/ai-chatbot" },
  ],
  Services: [
    { name: "Consultation", href: "/services/consultation" },
    { name: "Training", href: "/services/training" },
    { name: "Implementation", href: "/services/implementation" },
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact" },
    { name: "Partnerships", href: "/partnerships" },
  ],
  Resources: [
    { name: "Blog", href: "/blog" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Affiliate", href: "/affiliate" },
    { name: "FAQs", href: "/faq" },
  ],
};

const socialLinks = [
  { name: "Twitter", href: "#", Icon: Twitter },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/bizaihacks/",
    Icon: Linkedin,
  },
  { name: "Instagram", href: "#", Icon: FaInstagram },
  {
    name: "Facebook",
    href: "https://www.facebook.com/bizaihacks/",
    Icon: FaFacebook,
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    setLoading(true);
    const loadingToast = toast.success(" Subscribing..", {
      position: "top-center",
      icon: "✅",
      style: {
          background: `btn-primary-custom`,
        marginTop: "50px",
        color: `hsl(var(--foreground))`,
        borderRadius: "8px",
      },
    });

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Subscribed successfully 🎉", {
          position: "top-center",
          icon: "✅",
          style: {
            background: `btn-primary-custom`,
            color: `hsl(var(--foreground))`,
            marginTop: "50px",
            borderRadius: "8px",
          },
        });
        setEmail("");
      } else {
        toast.error(data.error || "Failed to subscribe");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
      toast.dismiss(loadingToast);
    }
  };

  return (
    <footer
      className="border-t"
      style={{
        backgroundColor: "hsl(var(--background))",
        borderColor: "hsl(var(--border))",
      }}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          {/* Left: Logo + Info */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
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
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-sm">
                <Phone
                  className="h-4 w-4"
                  style={{ color: "hsl(var(--primary))" }}
                />
                <a
                  href="tel:+919023506084"
                  className="hover:text-primary transition-colors"
                  style={{ color: "hsl(var(--muted-foreground))" }}
                >
                  +91 90235 06084
                </a>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <Mail
                  className="h-4 w-4"
                  style={{ color: "hsl(var(--primary))" }}
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
                  className="h-4 w-4 mt-0.5"
                  style={{ color: "hsl(var(--primary))" }}
                />
                <span style={{ color: "hsl(var(--muted-foreground))" }}>
                  Vibrant Park, Survey No. 182 <br /> Near NH 8 GIDC Phase 1,{" "}
                  <br />
                  Vapi, Gujarat - 396195, India
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 group"
                  style={{
                    backgroundColor: "hsl(var(--accent) / 0.5)",
                    color: "hsl(var(--muted-foreground))",
                  }}
                >
                  <Icon className="w-4 h-4" />
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
                        className="text-xs md:text-sm hover:text-primary transition-colors inline-flex items-center group"
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

          {/* Newsletter */}
          <div className="md:col-span-2">
            <h3
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

            <form onSubmit={handleSubscribe} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-accent/50 border-border focus:border-primary focus:ring-primary"
                id="new"
              />
              <Button
                type="submit"
                className="w-full btn-primary-custom hover:bg-primary/90 mt-3"
                disabled={loading}
                id="news"
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </Button>
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
        />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p
            className="text-center md:text-left"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            &copy; {new Date().getFullYear()} BizAI Hacks. A division of{" "}
            <Link href="https://soltechtechservices.com">
              <strong>SOLTECH TechServices Pvt Ltd</strong>.
            </Link>
          </p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link
              href="/privacypolicy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/termsandconditions"
              className="hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/disclaimer"
              className="hover:text-primary transition-colors"
            >
              Disclaimer
            </Link>
            <Link
              href="/cookiepolicy"
              className="hover:text-primary transition-colors"
            >
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
