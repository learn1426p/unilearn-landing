"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Brain, Calendar } from "lucide-react";

const APPS_SCRIPT_URL = "PASTE_YOUR_GOOGLE_APPS_SCRIPT_URL_HERE"; // <-- replace

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | ok | error

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    setStatus("sending");
    try {
      const res = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("ok");
      setEmail("");
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Gradient backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-400 via-fuchsia-400 to-rose-400 opacity-30" />

        {/* Animated blobs */}
        <div className="pointer-events-none absolute -top-16 -left-16 h-72 w-72 rounded-full bg-fuchsia-400 opacity-30 blur-3xl animate-blob" />
        <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-indigo-400 opacity-30 blur-3xl animate-blob animation-delay-2000" />
        <div className="pointer-events-none absolute top-20 right-24 h-64 w-64 rounded-full bg-rose-400 opacity-30 blur-3xl animate-blob animation-delay-4000" />

        {/* Optional video background (put /public/hero.mp4 if you have one) */}
        {/* <video
          className="absolute inset-0 h-full w-full object-cover opacity-20"
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        /> */}

        {/* Content */}
        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <img src="/unilearn-logo.svg" alt="UniLearn" className="h-9 w-9" />
            <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-rose-600 bg-clip-text text-transparent">
              UniLearn
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="hover:opacity-80">Features</a>
            <a href="#about" className="hover:opacity-80">About</a>
            <a href="#cta" className="hover:opacity-80">Get access</a>
          </div>
          <a
            href="#cta"
            className="rounded-xl bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
          >
            Get Started
          </a>
        </nav>

        <header className="relative z-10 mx-auto max-w-6xl px-6 pb-20 pt-10 text-center md:pt-24">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold leading-tight md:text-6xl"
          >
            Smarter learning for{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-rose-600 bg-clip-text text-transparent">
              Nigerian students
            </span>
          </motion.h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-700">
            Access syllabuses, AI-generated past questions, lecture notes, and an AI tutor —
            everything you need to study better in one app.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#cta"
              className="rounded-2xl bg-indigo-600 px-6 py-3 text-white shadow-lg hover:bg-indigo-700"
            >
              Start free
            </a>
            <a
              href="#features"
              className="rounded-2xl border border-black/10 bg-white/70 px-6 py-3 text-gray-900 hover:bg-white"
            >
              See features
            </a>
          </div>

          {/* Hero “screens” card */}
          <div className="mx-auto mt-14 max-w-4xl rounded-3xl border border-white/40 bg-white/60 p-2 shadow-xl glass">
            <img
              src="/hero-poster.jpg"
              alt="UniLearn preview"
              className="h-[360px] w-full rounded-2xl object-cover"
            />
          </div>
        </header>
      </section>

      {/* FEATURES */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold">Why UniLearn?</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-gray-600">
          Designed for Nigerian universities with the tools that actually help you pass.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Feature
            icon={<BookOpen className="h-6 w-6" />}
            title="Full Syllabus"
            text="Up-to-date syllabuses and complete lecture notes, course by course."
          />
          <Feature
            icon={<Brain className="h-6 w-6" />}
            title="AI Exam Prep"
            text="AI generates past questions & explanations tailored to your courses."
          />
          <Feature
            icon={<Calendar className="h-6 w-6" />}
            title="Stay Organized"
            text="Keep tabs on classes, assignments and exam dates in one place."
          />
        </div>
      </section>

      {/* ABOUT / TRUST */}
      <section id="about" className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold">Built for real students</h3>
              <p className="mt-3 text-gray-700">
                UniLearn focuses on what boosts grades: clear syllabuses, concise notes,
                and an AI tutor that explains exactly what you’re stuck on.
              </p>
              <ul className="mt-6 space-y-2 text-gray-700">
                <li>• Federal & state universities coverage</li>
                <li>• Course-specific past questions</li>
                <li>• Mobile-first, fast and reliable</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-black/10 bg-white p-2 shadow-lg">
              <img
                src="/students-grid.jpg"
                alt="Students using UniLearn"
                className="h-[320px] w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA / EMAIL */}
      <section id="cta" className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-indigo-500 via-fuchsia-500 to-rose-500 opacity-20" />
        <div className="relative mx-auto max-w-4xl rounded-3xl border border-black/10 bg-white/80 p-8 shadow-xl">
          <h3 className="text-center text-2xl font-bold">
            Ready to learn smarter?
          </h3>
          <p className="mt-2 text-center text-gray-700">
            Join the waitlist — we’ll notify you when UniLearn launches at your campus.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-6 flex max-w-xl flex-col items-center gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full flex-1 rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-xl bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700 sm:w-auto"
            >
              {status === "sending" ? "Submitting..." : "Join Now"}
            </button>
          </form>

          {status === "ok" && (
            <p className="mt-3 text-center text-green-600">
              Thanks! You’re on the list. 🎉
            </p>
          )}
          {status === "error" && (
            <p className="mt-3 text-center text-rose-600">
              Oops — try again in a moment.
            </p>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/5 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <div className="flex items-center gap-3">
            <img src="/unilearn-logo.svg" alt="UniLearn" className="h-7 w-7" />
            <span className="font-semibold">UniLearn</span>
          </div>
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} UniLearn. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-700">
            <a href="#" className="hover:opacity-80">Privacy</a>
            <a href="#" className="hover:opacity-80">Terms</a>
            <a href="#" className="hover:opacity-80">Support</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:shadow-lg">
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
        {icon}
      </div>
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="mt-1 text-gray-700">{text}</p>
    </div>
  );
}
