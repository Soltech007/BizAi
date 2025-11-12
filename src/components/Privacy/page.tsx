// src/app/privacy/page.tsx
import { Shield, Mail, MapPin, User, Calendar } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container max-w-4xl px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" 
            style={{ backgroundColor: 'hsl(var(--accent))' }}>
            <Shield className="w-4 h-4" style={{ color: 'hsl(var(--primary))' }} />
            <span className="text-sm font-semibold" style={{ color: 'hsl(var(--primary))' }}>Legal</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
            Privacy Policy
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
              SoltechTech Services Pvt Ltd ("we", "our", "us") is committed to protecting your privacy. 
              This Privacy Policy outlines how we collect, use, and safeguard your personal information 
              in accordance with the <strong>Information Technology Act, 2000</strong> and the applicable 
              rules thereunder, as well as <strong>GDPR</strong> and other international data protection 
              regulations.
            </p>
          </div>

          {/* Information We Collect */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
              <p style={{ color: 'hsl(var(--muted-foreground))' }}>
                Name, email address, phone number, company name, job title, location, and other information 
                you provide when contacting us or using our services.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Technical Information</h3>
              <p style={{ color: 'hsl(var(--muted-foreground))' }}>
                IP address, browser type, operating system, device information, and usage data collected 
                automatically when you visit our website.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Cookies and Tracking Data</h3>
              <p style={{ color: 'hsl(var(--muted-foreground))' }}>
                We use cookies to enhance user experience, track website performance, and conduct analytics.
              </p>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <p style={{ color: 'hsl(var(--muted-foreground))' }}>
              We use the collected data for purposes including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3" style={{ color: 'hsl(var(--muted-foreground))' }}>
              <li>Providing and managing our AI services</li>
              <li>Responding to your inquiries or service requests</li>
              <li>Sending newsletters, updates, or promotional material (with your consent)</li>
              <li>Enhancing website security and functionality</li>
              <li>Conducting analytics and performance reviews</li>
              <li>Improving our AI products and services</li>
            </ul>
          </section>

          {/* Cookies Policy */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Cookies Policy</h2>
            <p style={{ color: 'hsl(var(--muted-foreground))' }}>
              We use cookies and similar tracking technologies to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3" style={{ color: 'hsl(var(--muted-foreground))' }}>
              <li>Analyze user interaction and behavior</li>
              <li>Improve website functionality and performance</li>
              <li>Deliver personalized content and recommendations</li>
              <li>Track marketing campaign effectiveness</li>
            </ul>
            <p className="mt-3" style={{ color: 'hsl(var(--muted-foreground))' }}>
              You may disable cookies through your browser settings. However, some features of the site 
              may not function properly without them.
            </p>
          </section>

          {/* Data Sharing and Disclosure */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Data Sharing and Disclosure</h2>
            <p style={{ color: 'hsl(var(--muted-foreground))' }}>
              We do not sell your personal data to third parties. However, we may share your data:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3" style={{ color: 'hsl(var(--muted-foreground))' }}>
              <li>With trusted partners and service providers who assist us in website operation, analytics, 
                or customer service (bound by confidentiality agreements)</li>
              <li>When required by law or in response to legal requests</li>
              <li>To protect our rights, users, or property</li>
              <li>With AI platform providers (IBM Watsonx, OpenAI, Eleven Labs) solely for service delivery</li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p style={{ color: 'hsl(var(--muted-foreground))' }}>
              We implement appropriate technical and organizational measures to safeguard your data, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3" style={{ color: 'hsl(var(--muted-foreground))' }}>
              <li>Secure servers with SSL/TLS encryption</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Regular security audits and penetration testing</li>
              <li>SOC2 Type II compliance measures</li>
              <li>GDPR and HIPAA compliant data handling procedures</li>
            </ul>
          </section>

          {/* Third-Party Links */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Third-Party Links</h2>
            <p style={{ color: 'hsl(var(--muted-foreground))' }}>
              Our website may contain links to third-party sites. We are not responsible for their privacy 
              practices or content. We encourage you to review their privacy policies before providing any 
              personal information.
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p style={{ color: 'hsl(var(--muted-foreground))' }}>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3" style={{ color: 'hsl(var(--muted-foreground))' }}>
              <li>Access or correct your personal information</li>
              <li>Withdraw consent (where applicable)</li>
              <li>Request deletion of your data</li>
              <li>Request data portability</li>
              <li>Object to processing of your data</li>
              <li>Lodge a complaint with a data protection authority (if applicable)</li>
            </ul>
            <p className="mt-3" style={{ color: 'hsl(var(--muted-foreground))' }}>
              To exercise any of these rights, contact us at:{" "}
              <a href="mailto:contact@bizaihacks.com" className="text-primary hover:underline">
                contact@bizaihacks.com
              </a>
            </p>
          </section>

          {/* Grievance Officer */}
          <section className="mb-10 p-6 rounded-lg border-2" style={{ borderColor: 'hsl(var(--border))' }}>
            <h2 className="text-2xl font-bold mb-2">Grievance Officer</h2>
            <p className="text-sm mb-6" style={{ color: 'hsl(var(--muted-foreground))' }}>
              As per IT Act Rules 2021
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <User className="w-5 h-5 mt-0.5" style={{ color: 'hsl(var(--primary))' }} />
                  <div>
                    <p className="font-semibold">Name</p>
                    <p style={{ color: 'hsl(var(--muted-foreground))' }}>Mayur Panchal</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 mt-0.5" style={{ color: 'hsl(var(--primary))' }} />
                  <div>
                    <p className="font-semibold">Designation</p>
                    <p style={{ color: 'hsl(var(--muted-foreground))' }}>CEO & Founder</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 mt-0.5" style={{ color: 'hsl(var(--primary))' }} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:contact@bizaihacks.com" className="text-primary hover:underline">
                      contact@bizaihacks.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
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
            </div>
          </section>

          {/* Changes to This Policy */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
            <p style={{ color: 'hsl(var(--muted-foreground))' }}>
              We may update this Privacy Policy from time to time to reflect changes in our practices 
              or for legal, operational, or regulatory reasons. Changes will be posted on this page 
              with a revised "Effective Date" at the top of this policy.
            </p>
            <p className="mt-3" style={{ color: 'hsl(var(--muted-foreground))' }}>
              We encourage you to review this Privacy Policy periodically to stay informed about how 
              we are protecting your information.
            </p>
          </section>

          {/* Consent */}
          <section className="mb-10 p-6 rounded-lg text-center" style={{ backgroundColor: 'hsl(var(--accent))' }}>
            <Shield className="w-12 h-12 mx-auto mb-4" style={{ color: 'hsl(var(--primary))' }} />
            <p className="text-lg font-semibold mb-2">Your Privacy Matters</p>
            <p style={{ color: 'hsl(var(--muted-foreground))' }}>
              By using our website and services, you consent to our Privacy Policy and the 
              collection and use of information as described herein.
            </p>
          </section>

          {/* Contact */}
          <section className="text-center p-8 rounded-lg border-2" style={{ borderColor: 'hsl(var(--border))' }}>
            <h3 className="text-2xl font-bold mb-4">Questions About Privacy?</h3>
            <p className="mb-6" style={{ color: 'hsl(var(--muted-foreground))' }}>
              If you have any questions or concerns about this Privacy Policy or our data practices, 
              please don't hesitate to contact us.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white"
              style={{ backgroundColor: 'hsl(var(--primary))' }}
            >
              <Mail className="w-4 h-4" />
              Contact Us
            </Link>
          </section>

        </div>
      </div>
    </div>
  );
}