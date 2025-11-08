// src/app/terms/page.tsx
import { FileText, Mail, MapPin, Calendar, Shield, AlertCircle, Lock, Users, Scale, Ban, XCircle } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container max-w-4xl px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" 
            style={{ backgroundColor: 'hsl(var(--accent))' }}>
            <FileText className="w-4 h-4" style={{ color: 'hsl(var(--primary))' }} />
            <span className="text-sm font-semibold" style={{ color: 'hsl(var(--primary))' }}>Legal</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
            Terms & Conditions
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
              Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using 
              the <strong>SoltechTech Services Pvt Ltd</strong> website (the "Website") operated by SoltechTech Services Pvt Ltd 
              ("us", "we", or "our"). These Terms apply to all visitors, users, and others who access or use the Website.
            </p>
          </div>

          {/* 1. Acceptance of Terms */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" 
                style={{ backgroundColor: 'hsl(var(--accent))' }}>
                <Shield className="w-5 h-5" style={{ color: 'hsl(var(--primary))' }} />
              </div>
              <h2 className="text-2xl font-bold">1. Acceptance of Terms</h2>
            </div>
            <p style={{ color: 'hsl(var(--muted-foreground))' }}>
              By accessing or using the Website, you agree to comply with and be bound by these Terms and Conditions 
              and our Privacy Policy. If you disagree with any part of the Terms, please do not use our Website.
            </p>
          </section>

          {/* 2. Services Provided */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" 
                style={{ backgroundColor: 'hsl(var(--accent))' }}>
                <FileText className="w-5 h-5" style={{ color: 'hsl(var(--primary))' }} />
              </div>
              <h2 className="text-2xl font-bold">2. Services Provided</h2>
            </div>
            <p style={{ color: 'hsl(var(--muted-foreground))' }}>
              SoltechTech Services Pvt Ltd provides a range of technology consulting services, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3" style={{ color: 'hsl(var(--muted-foreground))' }}>
              <li>IT Infrastructure solutions</li>
              <li>Artificial Intelligence (AI) solutions</li>
              <li>Internet of Things (IoT) solutions</li>
              <li>Cybersecurity services</li>
              <li>Telecommunications consulting</li>
              <li>Surveillance and security technology solutions</li>
              <li>Industry-specific tech solutions</li>
            </ul>
            <p className="mt-3" style={{ color: 'hsl(var(--muted-foreground))' }}>
              These Terms apply to all services provided through the Website.
            </p>
          </section>

          {/* 3. Intellectual Property Rights */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" 
                style={{ backgroundColor: 'hsl(var(--accent))' }}>
                <Lock className="w-5 h-5" style={{ color: 'hsl(var(--primary))' }} />
              </div>
              <h2 className="text-2xl font-bold">3. Intellectual Property Rights</h2>
            </div>
            <p style={{ color: 'hsl(var(--muted-foreground))' }}>
              All content on the Website, including text, graphics, logos, images, and software, is the property 
              of SoltechTech Services Pvt Ltd and is protected by Indian and international copyright laws.
            </p>
            <p className="mt-3 font-semibold" style={{ color: 'hsl(var(--muted-foreground))' }}>
              You may not copy, distribute, modify, or reproduce any content from the Website without prior written consent.
            </p>
          </section>

          {/* 4. User Obligations */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" 
                style={{ backgroundColor: 'hsl(var(--accent))' }}>
                <Users className="w-5 h-5" style={{ color: 'hsl(var(--primary))' }} />
              </div>
              <h2 className="text-2xl font-bold">4. User Obligations</h2>
            </div>
            <p style={{ color: 'hsl(var(--muted-foreground))' }}>
              By using our Website, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3" style={{ color: 'hsl(var(--muted-foreground))' }}>
              <li>Provide accurate and current information when prompted (e.g., in forms or subscription sign-ups)</li>
              <li>Refrain from using the Website for any unlawful purpose</li>
              <li>Comply with all applicable local, state, and national laws regarding the use of the Website</li>
            </ul>
          </section>

          {/* 5. Prohibited Uses */}
          <section className="mb-10 p-6 rounded-lg border-2 border-blue-200" 
            style={{ backgroundColor: 'hsl(var(--accent) / 0.5)' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" 
                style={{ backgroundColor: 'hsl(var(--background))' }}>
                <Ban className="w-5 h-5" style={{ color: 'hsl(var(--primary))' }} />
              </div>
              <h2 className="text-2xl font-bold">5. Prohibited Uses</h2>
            </div>
            <p style={{ color: 'hsl(var(--muted-foreground))' }}>
              You agree not to use the Website to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3" style={{ color: 'hsl(var(--muted-foreground))' }}>
              <li>Engage in illegal activities or solicit others to perform or participate in illegal activities</li>
              <li>Violate any intellectual property rights of others</li>
              <li>Attempt to gain unauthorized access to our systems or networks</li>
              <li>Transmit harmful code, such as viruses or malware, through the Website</li>
            </ul>
          </section>

          {/* 6. Limitation of Liability */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" 
                style={{ backgroundColor: 'hsl(var(--accent))' }}>
                <Shield className="w-5 h-5" style={{ color: 'hsl(var(--primary))' }} />
              </div>
              <h2 className="text-2xl font-bold">6. Limitation of Liability</h2>
            </div>
            <p style={{ color: 'hsl(var(--muted-foreground))' }}>
              To the fullest extent permitted by law, SoltechTech Services Pvt Ltd will not be liable for any:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3" style={{ color: 'hsl(var(--muted-foreground))' }}>
              <li>Indirect, incidental, special, or consequential damages</li>
              <li>Loss of profits or revenue, loss of data, or business interruption</li>
              <li>Errors or omissions in the content</li>
            </ul>
            <p className="mt-4 font-semibold" style={{ color: 'hsl(var(--muted-foreground))' }}>
              Your use of the Website is at your own risk, and we make no guarantees about the accuracy or 
              reliability of the content.
            </p>
          </section>

          {/* 7. Disclaimers */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" 
                style={{ backgroundColor: 'hsl(var(--accent))' }}>
                <AlertCircle className="w-5 h-5" style={{ color: 'hsl(var(--primary))' }} />
              </div>
              <h2 className="text-2xl font-bold">7. Disclaimers</h2>
            </div>
            <p style={{ color: 'hsl(var(--muted-foreground))' }}>
              The Website and all content are provided on an "as-is" and "as-available" basis. We do not guarantee:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3" style={{ color: 'hsl(var(--muted-foreground))' }}>
              <li>The uninterrupted availability of the Website</li>
              <li>That the Website is free of errors or viruses</li>
              <li>The accuracy, completeness, or timeliness of the content</li>
            </ul>
          </section>

          {/* 8. Privacy Policy */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" 
                style={{ backgroundColor: 'hsl(var(--accent))' }}>
                <Lock className="w-5 h-5" style={{ color: 'hsl(var(--primary))' }} />
              </div>
              <h2 className="text-2xl font-bold">8. Privacy Policy</h2>
            </div>
            <p style={{ color: 'hsl(var(--muted-foreground))' }}>
              Your use of the Website is also governed by our{" "}
              <Link href="/privacy" className="text-primary hover:underline font-semibold">
                Privacy Policy
              </Link>, which is incorporated by reference into these Terms. By using the Website, 
              you consent to our data collection and use practices as outlined in the Privacy Policy.
            </p>
          </section>

          {/* 9. Termination */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" 
                style={{ backgroundColor: 'hsl(var(--accent))' }}>
                <XCircle className="w-5 h-5" style={{ color: 'hsl(var(--primary))' }} />
              </div>
              <h2 className="text-2xl font-bold">9. Termination</h2>
            </div>
            <p style={{ color: 'hsl(var(--muted-foreground))' }}>
              We reserve the right to terminate or suspend access to our Website, at our sole discretion, for any reason, 
              including if you violate these Terms and Conditions. Upon termination, your right to use the Website will 
              immediately cease.
            </p>
          </section>

          {/* 10. Governing Law */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" 
                style={{ backgroundColor: 'hsl(var(--accent))' }}>
                <Scale className="w-5 h-5" style={{ color: 'hsl(var(--primary))' }} />
              </div>
              <h2 className="text-2xl font-bold">10. Governing Law</h2>
            </div>
            <p style={{ color: 'hsl(var(--muted-foreground))' }}>
              These Terms and Conditions are governed by and construed in accordance with the laws of <strong>India</strong>, 
              without regard to its conflict of law principles. Any disputes arising from these Terms shall be subject to 
              the exclusive jurisdiction of the courts in <strong>Vapi, Gujarat</strong>.
            </p>
          </section>

          {/* 11. Modifications */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" 
                style={{ backgroundColor: 'hsl(var(--accent))' }}>
                <FileText className="w-5 h-5" style={{ color: 'hsl(var(--primary))' }} />
              </div>
              <h2 className="text-2xl font-bold">11. Modifications</h2>
            </div>
            <p style={{ color: 'hsl(var(--muted-foreground))' }}>
              SoltechTech Services Pvt Ltd reserves the right to update, change, or replace any part of these Terms and 
              Conditions at its discretion. Updates will be posted on this page, and the "Effective Date" will be updated 
              accordingly.
            </p>
            <p className="mt-3" style={{ color: 'hsl(var(--muted-foreground))' }}>
              We encourage you to review this page periodically for any changes. Your continued use of the Website following 
              any modifications constitutes acceptance of those changes.
            </p>
          </section>

          {/* 12. Contact Information */}
          <section className="mb-10 p-6 rounded-lg border-2" style={{ borderColor: 'hsl(var(--border))' }}>
            <h2 className="text-2xl font-bold mb-6">12. Contact Information</h2>
            <p className="mb-4" style={{ color: 'hsl(var(--muted-foreground))' }}>
              For any questions regarding these Terms and Conditions, please contact us at:
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

          {/* Agreement Notice */}
          <section className="text-center p-8 rounded-lg" style={{ backgroundColor: 'hsl(var(--accent))' }}>
            <Shield className="w-12 h-12 mx-auto mb-4" style={{ color: 'hsl(var(--primary))' }} />
            <p className="text-lg font-semibold mb-2">Agreement to Terms</p>
            <p style={{ color: 'hsl(var(--muted-foreground))' }}>
              By using this website, you acknowledge that you have read, understood, and agree to be bound by 
              these Terms and Conditions.
            </p>
          </section>

         

        </div>
      </div>
    </div>
  );
}