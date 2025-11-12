// src/app/cookie-policy/page.tsx
import { Cookie, Mail, MapPin, Calendar, Shield, Settings, CheckCircle, FileText, Link2 } from "lucide-react";
import Link from "next/link";

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container max-w-4xl px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" 
            style={{ backgroundColor: 'hsl(var(--accent))' }}>
            <Cookie className="w-4 h-4" style={{ color: 'hsl(var(--primary))' }} />
            <span className="text-sm font-semibold" style={{ color: 'hsl(var(--primary))' }}>Legal</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
            Cookie Policy
          </h1>
          
          <div className="flex items-center justify-center gap-2 text-sm" 
            style={{ color: 'hsl(var(--muted-foreground))' }}>
            <Calendar className="w-4 h-4" />
            <span>Effective Date: April 23, 2025</span>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none">
          
          {/* Introduction */}
          <div className="mb-12 p-6 rounded-lg border-2" style={{ borderColor: 'hsl(var(--border))' }}>
            <p className="text-lg leading-relaxed" style={{ color: 'hsl(var(--muted-foreground))' }}>
              This Cookie Policy explains how <strong>SoltechTech Services Pvt Ltd</strong> ("we", "our", "us") uses cookies and 
              similar technologies to recognize you when you visit our website{" "}
              <a href="https://soltechtechservices.com" className="text-primary hover:underline">https://soltechtechservices.com</a> (the "Website").
              It explains what these technologies are and why we use them, as well as your rights to control our use of them.
            </p>
          </div>

          {/* 1. What Are Cookies? */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" 
                style={{ backgroundColor: 'hsl(var(--accent))' }}>
                <Cookie className="w-5 h-5" style={{ color: 'hsl(var(--primary))' }} />
              </div>
              <h2 className="text-2xl font-bold">1. What Are Cookies?</h2>
            </div>
            <p style={{ color: 'hsl(var(--muted-foreground))' }}>
              Cookies are small data files placed on your device when you visit a website. These cookies help us improve 
              your user experience by storing information about your preferences, activities, and browsing behavior. 
              Cookies may be either:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3" style={{ color: 'hsl(var(--muted-foreground))' }}>
              <li><strong>First-party cookies:</strong> Set by the website you’re visiting.</li>
              <li><strong>Third-party cookies:</strong> Set by third-party services integrated into the website 
                (e.g., Google Analytics, Facebook Pixel).</li>
            </ul>
          </section>

          {/* 2. How We Use Cookies */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" 
                style={{ backgroundColor: 'hsl(var(--accent))' }}>
                <FileText className="w-5 h-5" style={{ color: 'hsl(var(--primary))' }} />
              </div>
              <h2 className="text-2xl font-bold">2. How We Use Cookies</h2>
            </div>
            <p style={{ color: 'hsl(var(--muted-foreground))' }}>
              We use cookies for various purposes, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3" style={{ color: 'hsl(var(--muted-foreground))' }}>
              <li><strong>Essential Cookies:</strong> Necessary for the Website to function properly. They allow basic 
                functions like page navigation and access to secure areas.</li>
              <li><strong>Performance Cookies:</strong> Collect information about how visitors use the Website, 
                helping us improve its functionality.</li>
              <li><strong>Functionality Cookies:</strong> Remember your preferences (e.g., language or region) to provide 
                a more personalized experience.</li>
              <li><strong>Advertising Cookies:</strong> Deliver targeted advertisements based on user interests, 
                improving ad relevance.</li>
            </ul>
          </section>

          {/* 3. Types of Cookies We Use */}
           <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" 
                style={{ backgroundColor: 'hsl(var(--accent))' }}>
                <FileText className="w-5 h-5" style={{ color: 'hsl(var(--primary))' }} />
              </div>
              <h2 className="text-2xl font-bold">3. Types of Cookies We Use</h2>
            </div>
           
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-1">Strictly Necessary Cookies</h3>
                <p className="text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>Essential for the Website’s operation.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Analytical/Performance Cookies</h3>
                <p className="text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>Track user activity to gather insights.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Targeting/Advertising Cookies</h3>
                <p className="text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>Help display relevant ads based on your interests.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Functional Cookies</h3>
                <p className="text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>Remember preferences and provide enhanced features.</p>
              </div>
            </div>
          </section>

          {/* 4. Third-Party Cookies */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" 
                style={{ backgroundColor: 'hsl(var(--accent))' }}>
                <Link2 className="w-5 h-5" style={{ color: 'hsl(var(--primary))' }} />
              </div>
              <h2 className="text-2xl font-bold">4. Third-Party Cookies</h2>
            </div>
            <p style={{ color: 'hsl(var(--muted-foreground))' }}>
              We may use third-party services, such as Google Analytics or social media integration (Facebook, LinkedIn), 
              that place cookies on your device. These cookies are governed by the third party’s privacy policies. 
              We do not control these cookies.
            </p>
          </section>

          {/* 5. How to Control Cookies */}
          <section className="mb-10 p-6 rounded-lg border-2 border-blue-200" style={{ backgroundColor: 'hsl(var(--accent) / 0.5)' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" 
                style={{ backgroundColor: 'hsl(var(--background))' }}>
                <Settings className="w-5 h-5" style={{ color: 'hsl(var(--primary))' }} />
              </div>
              <h2 className="text-2xl font-bold">5. How to Control Cookies</h2>
            </div>
            <p style={{ color: 'hsl(var(--muted-foreground))' }}>
              You can control and manage cookies in the following ways:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3" style={{ color: 'hsl(var(--muted-foreground))' }}>
              <li><strong>Browser Settings:</strong> Most browsers allow you to refuse or delete cookies stored 
                on your device. You can change browser settings to alert you when cookies are being sent.</li>
              <li><strong>Opt-Out Tools:</strong> Use tools provided by third-party services to opt-out of 
                certain cookies (e.g., Google Analytics, Facebook Pixel).</li>
              <li><strong>Cookie Management Tools:</strong> We may provide a pop-up consent banner on our Website 
                to accept or reject cookies.</li>
            </ul>
            <p className="mt-4 font-semibold" style={{ color: 'hsl(var(--muted-foreground))' }}>
              Please note that disabling cookies may affect the functionality of the Website.
            </p>
          </section>

          {/* 6. Your Consent */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" 
                style={{ backgroundColor: 'hsl(var(--accent))' }}>
                <CheckCircle className="w-5 h-5" style={{ color: 'hsl(var(--primary))' }} />
              </div>
              <h2 className="text-2xl font-bold">6. Your Consent</h2>
            </div>
            <p style={{ color: 'hsl(var(--muted-foreground))' }}>
              By continuing to use our Website, you consent to our use of cookies as described in this Cookie Policy. 
              If you do not accept the use of cookies, you can change your browser settings or stop using the Website.
            </p>
          </section>

          {/* 7. Changes to This Cookie Policy */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" 
                style={{ backgroundColor: 'hsl(var(--accent))' }}>
                <FileText className="w-5 h-5" style={{ color: 'hsl(var(--primary))' }} />
              </div>
              <h2 className="text-2xl font-bold">7. Changes to This Cookie Policy</h2>
            </div>
            <p style={{ color: 'hsl(var(--muted-foreground))' }}>
              We may update this Cookie Policy from time to time to reflect changes in technology or legal requirements. 
              We will notify you of any significant changes by posting an updated version on this page with the 
              revised “Effective Date.”
            </p>
          </section>

          {/* 8. Contact Us */}
          <section className="mb-10 p-6 rounded-lg border-2" style={{ borderColor: 'hsl(var(--border))' }}>
            <h2 className="text-2xl font-bold mb-6">8. Contact Us</h2>
            <p className="mb-4" style={{ color: 'hsl(var(--muted-foreground))' }}>
              If you have any questions about this Cookie Policy or how we use cookies, please contact us at:
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5" style={{ color: 'hsl(var(--primary))' }} />
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:contact@bizaihacks.com" className="text-primary hover:underline">
                    contact@bizaihacks.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5" style={{ color: 'hsl(var(--primary))' }} />
                <div>
                  <p className="font-semibold mb-1">Address</p>
                  <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--muted-foreground))' }}>
                   Vibrant  Park,  Survey No. 182 <br /> Near NH 8 GIDC Phase 1, <br/>
                 Vapi, Gujarat - 396195, India
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}