// src/app/page.js
"use client";

import { motion } from "framer-motion";
import { BookOpen, FileText, Bot, Rocket } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* ====== Header ====== */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="UniLearn logo" className="h-12 w-12 md:h-14 md:w-14" />
            <span className="text-2xl md:text-3xl font-extrabold bg-clip-gradient">
              UniLearn
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#join"
              className="hidden md:inline-block px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Log in
            </a>

            <a
              href="#plans"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold shadow-md hover:shadow-lg transition"
            >
              Join Now
            </a>
          </div>
        </div>
      </header>

      {/* ====== Hero ====== */}
      <section className="relative overflow-hidden">
        {/* soft gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900 max-w-4xl mx-auto"
          >
            Smarter learning for <span className="bg-clip-gradient">Nigerian students</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto"
          >
            Access syllabuses, past questions, lecture notes and an AI tutor — all in one
            app designed for your campus success.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex justify-center gap-4"
          >
            <a
              href="#plans"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:scale-[1.02] transition"
            >
              Get Started <Rocket className="w-4 h-4" />
            </a>

            <a
              href="#features"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-gray-200 text-slate-800 shadow-sm hover:bg-gray-50 transition"
            >
              Learn more
            </a>
          </motion.div>
        </div>

        {/* decorative blob (subtle) */}
        <div className="pointer-events-none absolute -right-40 -bottom-20 h-72 w-72 rounded-full bg-purple-200 opacity-30 blur-3xl animate-blob" />
      </section>

      {/* ====== Features (3 cards) ====== */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Built for better grades</h2>
          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-10">
            Core tools students use to study efficiently — organized, searchable and powered by AI.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard icon={<BookOpen className="w-6 h-6 text-indigo-600" />} title="Full syllabus" desc="Course-by-course syllabuses and session outlines, always up to date." />
            <FeatureCard icon={<FileText className="w-6 h-6 text-indigo-600" />} title="Past questions" desc="Curated archive + AI generated practice questions that match your course." />
            <FeatureCard icon={<Bot className="w-6 h-6 text-indigo-600" />} title="AI study bot" desc="Ask questions and get clear explanations, examples and exam-style prompts." />
          </div>
        </div>
      </section>

      {/* ====== Plans ====== */}
      <section id="plans" className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Plans that work for students</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <PlanCard name="Free" price="₦0" highlight={false} features={["Limited syllabus access","Sample past questions","Basic AI answers"]} cta="Start Free" />
            <PlanCard name="Pro" price="₦1,500 / month" highlight={true} features={["Full syllabus library","Unlimited past questions","Advanced AI tutor","Lecture notes access"]} cta="Go Pro" />
            <PlanCard name="Campus" price="Custom" highlight={false} features={["Multi-student access","Faculty packages","Admin dashboard","Priority support"]} cta="Contact Us" />
          </div>
        </div>
      </section>

      {/* ====== Join / CTA ====== */}
      <section id="join" className="py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-xl font-semibold mb-3">Ready to learn smarter?</h3>
          <p className="text-slate-600 mb-6">Join the waitlist and we’ll notify you when UniLearn arrives at your campus.</p>
          <form className="mx-auto max-w-md flex gap-2">
            <input aria-label="email" type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-l-lg border border-gray-200 focus:ring-2 focus:ring-indigo-400 outline-none" />
            <button type="submit" className="px-5 py-3 rounded-r-lg bg-indigo-600 text-white font-semibold">Join Now</button>
          </form>
        </div>
      </section>

      {/* ====== Footer ====== */}
      <footer className="bg-white border-t border-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-slate-600">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 justify-center">
              <img src="/logo.svg" alt="UniLearn" className="h-8 w-8" />
              <span className="font-semibold">UniLearn</span>
            </div>
            <p className="text-sm">© {new Date().getFullYear()} UniLearn. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ====== small components ====== */

function FeatureCard({ icon, title, desc }) {
  return (
    <motion.div whileHover={{ y: -6 }} className="bg-white rounded-xl p-6 shadow-sm border border-gray-50">
      <div className="flex items-center gap-3 mb-3">{icon}<h4 className="text-lg font-semibold">{title}</h4></div>
      <p className="text-slate-600">{desc}</p>
    </motion.div>
  );
}

function PlanCard({ name, price, features = [], cta = "Choose", highlight = false }) {
  return (
    <div className={`p-6 rounded-xl shadow-sm border ${highlight ? "border-indigo-600 bg-white scale-105 shadow-md" : "bg-white border-gray-100"}`}>
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-semibold">{name}</h4>
        <div className="text-right">
          <div className="text-2xl font-bold">{price}</div>
        </div>
      </div>

      <ul className="text-slate-700 mb-6 space-y-2">
        {features.map((f, i) => <li key={i}>• {f}</li>)}
      </ul>

      <button className={`w-full px-4 py-2 rounded-md font-semibold ${highlight ? "bg-indigo-600 text-white" : "bg-gray-100 text-slate-800"}`}>{cta}</button>
    </div>
  );
}
