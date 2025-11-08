// src/app/disclaimer/page.tsx
import { AlertTriangle, Mail, MapPin, Calendar, Scale, Shield, Link2, FileWarning } from "lucide-react";
import Link from "next/link";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container max-w-4xl px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" 
            style={{ backgroundColor: 'hsl(var(--accent))' }}>
            <AlertTriangle className="w-4 h-4" style={{ color: 'hsl(var(--primary))' }} />
            <span className="text-sm font-semibold" style={{ color: 'hsl(var(--primary))' }}>Legal</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
            Disclaimer
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
              The information provided by <strong>SoltechTech Services Pvt Ltd</strong> ("Company", "we", "our", or "us") 
              on <a href="https://soltechtechservices.com" className="text-primary hover:underline">https://soltechtechservices.com</a> (the "Website") 
              is for general informational purposes only. All information on the Website is provided in good faith; however, 
              we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, 
              validity, reliability, availability, or completeness of any information on the Website.
            </p>
          </div>

          {/* Professional Advice Disclaimer */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" 
                style={{ backgroundColor: 'hsl(var(--accent))' }}>
                <FileWarning className="w-5 h-5" style={{ color: 'hsl(var(--primary))' }} />
              </div>
              <h2 className="text-2xl font-bold">Professional Advice Disclaimer</h2>
            </div>
            <p style={{ color: 'hsl(var(--muted-foreground))' }}>
              The Website may contain information related to technology solutions, IT consulting, cybersecurity, 
              artificial intelligence, telecommunications, and related services. Such content is intended for 
              informational and promotional purposes only and should not be construed as professional or legal advice.
            </p>
            <p className="mt-3 font-semibold" style={{ color: 'hsl(var(--muted-foreground))' }}>
              You should consult with a qualified professional for any specific advice or service-related guidance.
            </p>
          </section>

          {/* Third-Party Content and Links */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" 
                style={{ backgroundColor: 'hsl(var(--accent))' }}>
                <Link2 className="w-5 h-5" style={{ color: 'hsl(var(--primary))' }} />
              </div>
              <h2 className="text-2xl font-bold">Third-Party Content and Links</h2>
            </div>
            <p style={{ color: 'hsl(var(--muted-foreground))' }}>
              The Website may contain (or you may be sent through the Website) links to other websites or content 
              belonging to or originating from third parties. We do not:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3" style={{ color: 'hsl(var(--muted-foreground))' }}>
              <li>Monitor or check such external links for accuracy, adequacy, or completeness</li>
              <li>Endorse or assume responsibility for the information or content of any third-party websites</li>
            </ul>
            <p className="mt-3 font-semibold" style={{ color: 'hsl(var(--muted-foreground))' }}>
              Use of any third-party links is at your own risk.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-10 p-6 rounded-lg border-2 border-blue-200" 
            style={{ backgroundColor: 'hsl(var(--accent) / 0.5)' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" 
                style={{ backgroundColor: 'hsl(var(--background))' }}>
                <Shield className="w-5 h-5" style={{ color: 'hsl(var(--primary))' }} />
              </div>
              <h2 className="text-2xl font-bold">Limitation of Liability</h2>
            </div>
            <p style={{ color: 'hsl(var(--muted-foreground))' }}>
              Under no circumstance shall SoltechTech Services Pvt Ltd, its directors, employees, or affiliates 
              be held liable for any:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3" style={{ color: 'hsl(var(--muted-foreground))' }}>
              <li>Direct, indirect, incidental, special, or consequential damages</li>
              <li>Errors or omissions in the content</li>
              <li>Losses or damages arising from the use of the Website or reliance on any information provided</li>
            </ul>
            <p className="mt-4 font-bold text-base" style={{ color: 'hsl(var(--foreground))' }}>
              Your use of the Website and reliance on any information is solely at your own risk.
            </p>
          </section>

          {/* No Warranties */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" 
                style={{ backgroundColor: 'hsl(var(--accent))' }}>
                <AlertTriangle className="w-5 h-5" style={{ color: 'hsl(var(--primary))' }} />
              </div>
              <h2 className="text-2xl font-bold">No Warranties</h2>
            </div>
            <p style={{ color: 'hsl(var(--muted-foreground))' }}>
              The Website is provided on an "as-is" and "as-available" basis. We do not warrant that:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3" style={{ color: 'hsl(var(--muted-foreground))' }}>
              <li>The Website will be available at all times</li>
              <li>It will be free from errors, viruses, or harmful components</li>
              <li>The results from using the Website will meet your expectations</li>
            </ul>
          </section>

          {/* Copyright & Intellectual Property */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" 
                style={{ backgroundColor: 'hsl(var(--accent))' }}>
                <FileWarning className="w-5 h-5" style={{ color: 'hsl(var(--primary))' }} />
              </div>
              <h2 className="text-2xl font-bold">Copyright & Intellectual Property</h2>
            </div>
            <p style={{ color: 'hsl(var(--muted-foreground))' }}>
              All content, including text, graphics, logos, and software, is the intellectual property of 
              SoltechTech Services Pvt Ltd unless otherwise stated.
            </p>
            <p className="mt-3 font-semibold" style={{ color: 'hsl(var(--muted-foreground))' }}>
              Unauthorized use, reproduction, or distribution is strictly prohibited.
            </p>
          </section>

          {/* Jurisdiction */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" 
                style={{ backgroundColor: 'hsl(var(--accent))' }}>
                <Scale className="w-5 h-5" style={{ color: 'hsl(var(--primary))' }} />
              </div>
              <h2 className="text-2xl font-bold">Jurisdiction</h2>
            </div>
            <p style={{ color: 'hsl(var(--muted-foreground))' }}>
              This Disclaimer shall be governed by the laws of India, and any disputes shall be subject to 
              the exclusive jurisdiction of the courts located in <strong>Vapi, Gujarat</strong>.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-10 p-6 rounded-lg border-2" style={{ borderColor: 'hsl(var(--border))' }}>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <p className="mb-4" style={{ color: 'hsl(var(--muted-foreground))' }}>
              If you have any questions or concerns about this disclaimer, you can contact us at:
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

          {/* Important Notice */}
          <section className="text-center p-8 rounded-lg" style={{ backgroundColor: 'hsl(var(--accent))' }}>
            <AlertTriangle className="w-12 h-12 mx-auto mb-4" style={{ color: 'hsl(var(--primary))' }} />
            <p className="text-lg font-semibold mb-2">Important Notice</p>
            <p style={{ color: 'hsl(var(--muted-foreground))' }}>
              By using this website, you acknowledge that you have read and understood this Disclaimer 
              and agree to be bound by its terms.
            </p>
          </section>

         

        </div>
      </div>
    </div>
  );
}