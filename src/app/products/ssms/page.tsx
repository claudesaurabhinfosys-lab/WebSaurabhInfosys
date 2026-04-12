import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SSMS — School Management System India | ₹999/Year | Saurabh Infosys",
  description: "SSMS is a complete school ERP covering admissions, attendance, fee collection, exam results & parent portal. Launch price ₹999/year. Trusted by schools across India.",
  keywords: ["school management system India", "school ERP India", "school software India", "student management system", "fee management school India", "SSMS school software", "school app India", "education software India"],
  alternates: { canonical: "https://saurabhinfosys.com/products/ssms" },
  openGraph: { title: "SSMS School Management System — ₹999/Year", description: "Complete school ERP: admissions, fees, attendance, results, parent portal. Starting ₹999/year.", url: "https://saurabhinfosys.com/products/ssms", type: "website" },
  twitter: { card: "summary_large_image", title: "SSMS School ERP | Saurabh Infosys", description: "Complete school management system for Indian schools. Launch price ₹999/year." },
};

const features = [
  {
    icon: "🎓",
    title: "Student Admissions",
    desc: "Streamline the entire admission workflow — applications, documents, and enrollment in one place.",
  },
  {
    icon: "📋",
    title: "Attendance Tracking",
    desc: "Daily attendance for every class with automated alerts to parents for absences.",
  },
  {
    icon: "💳",
    title: "Fee Collection",
    desc: "Collect fees online or offline, generate receipts, and track dues with automated reminders.",
  },
  {
    icon: "📝",
    title: "Exam Results",
    desc: "Publish marksheets, report cards, and rankings digitally for students and parents.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Parent Portal",
    desc: "Parents get a dedicated portal to track their child's attendance, fees, and results anytime.",
  },
  {
    icon: "👩‍🏫",
    title: "Staff Management",
    desc: "Manage teacher profiles, salaries, leave records, and timetables with ease.",
  },
  {
    icon: "🚌",
    title: "Transport Tracking",
    desc: "Live GPS tracking of school buses with route management and parent notifications.",
  },
  {
    icon: "💬",
    title: "WhatsApp Notifications",
    desc: "Instant WhatsApp alerts for attendance, fees, results, and school announcements.",
  },
];

const includedFeatures = [
  "Unlimited students & staff",
  "Fee management & online payments",
  "Parent & student portal",
  "Exam & result management",
  "WhatsApp + SMS notifications",
  "Transport & GPS tracking",
  "Free setup & onboarding",
  "Priority support",
];

export default function SSMSPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-block bg-accent/10 text-accent font-dm font-semibold text-sm px-4 py-1.5 rounded-full mb-6 uppercase tracking-wide">
            School Management System
          </div>
          <h1 className="font-syne text-5xl md:text-6xl font-bold text-ink leading-tight mb-6">
            Run your school smarter
            <br />
            with SSMS
          </h1>
          <p className="font-dm text-ink-light text-lg md:text-xl max-w-2xl mx-auto mb-8">
            A complete school operations platform — from admissions to exams,
            fees to transport — built for Indian schools of every size.
          </p>
          <div className="mb-10">
            <span className="font-syne text-3xl font-bold text-accent">
              ₹999/year
            </span>
            <span className="font-dm text-ink-light text-sm ml-2">
              — Launch price
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://sms.saurabhinfosys.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-white font-syne font-semibold text-base px-8 py-4 rounded-lg hover:bg-accent-dark transition-colors"
            >
              Start Free Trial
            </a>
            <a
              href="https://wa.me/918735001217"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-ink text-white font-syne font-semibold text-base px-8 py-4 rounded-lg hover:bg-ink/80 transition-colors"
            >
              <span>💬</span> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Target users */}
      <section className="bg-card py-8">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-dm text-ink-light text-sm text-center mb-4 uppercase tracking-wide">
            Built for
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {["Private Schools", "Coaching Institutes", "Tutoring Centers"].map(
              (label) => (
                <span
                  key={label}
                  className="font-dm text-sm font-medium bg-bg text-ink border border-ink/10 px-5 py-2 rounded-full"
                >
                  {label}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-bg py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-syne text-4xl font-bold text-ink mb-4">
              Everything your school needs
            </h2>
            <p className="font-dm text-ink-light text-lg max-w-xl mx-auto">
              One platform to manage every aspect of your school — no more
              juggling spreadsheets and WhatsApp groups.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-card rounded-2xl p-6 border border-ink/5"
              >
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-syne text-lg font-semibold text-ink mb-2">
                  {f.title}
                </h3>
                <p className="font-dm text-ink-light text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-card py-24">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-syne text-4xl font-bold text-ink mb-4">
              Simple, honest pricing
            </h2>
            <p className="font-dm text-ink-light text-lg">
              One plan. Everything included. No hidden fees.
            </p>
          </div>
          <div className="bg-ink rounded-3xl p-8 md:p-10 text-center">
            <p className="font-dm text-white/60 text-sm uppercase tracking-widest mb-3">
              Annual Plan
            </p>
            <div className="mb-2">
              <span className="font-syne text-6xl font-bold text-white">
                ₹999
              </span>
              <span className="font-dm text-white/60 text-lg ml-2">/year</span>
            </div>
            <p className="font-dm text-accent font-semibold text-sm mb-8">
              Everything included
            </p>
            <ul className="text-left space-y-3 mb-10">
              {includedFeatures.map((item) => (
                <li key={item} className="flex items-center gap-3 font-dm text-white/80 text-sm">
                  <span className="text-accent font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="https://sms.saurabhinfosys.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-accent text-white font-syne font-semibold text-base py-4 rounded-xl hover:bg-accent-dark transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-bg py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-5xl mb-6">💬</div>
          <blockquote className="font-dm text-ink text-xl md:text-2xl leading-relaxed mb-8">
            &ldquo;SSMS transformed how we manage our school. Fee collection
            used to take a week — now it&apos;s done in a day. Parents love the
            portal and our staff has saved hours every week.&rdquo;
          </blockquote>
          <p className="font-syne font-semibold text-ink text-base">
            Rahul Sharma
          </p>
          <p className="font-dm text-ink-light text-sm mt-1">
            Principal, DPS Ahmedabad
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-ink py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-syne text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to modernise your school?
          </h2>
          <p className="font-dm text-white/60 text-lg mb-10 max-w-xl mx-auto">
            Start your free trial today — no credit card required. Our team
            will help you get set up within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://sms.saurabhinfosys.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-white font-syne font-semibold text-base px-8 py-4 rounded-lg hover:bg-accent-dark transition-colors"
            >
              Start Free Trial
            </a>
            <a
              href="https://wa.me/918735001217"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white/10 text-white font-syne font-semibold text-base px-8 py-4 rounded-lg hover:bg-white/20 transition-colors"
            >
              <span>💬</span> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
