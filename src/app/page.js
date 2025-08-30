// src/app/page.js
"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-pink-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          {/* Logo + Brand */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.svg"
              alt="UniLearn logo"
              className="h-10 w-10 md:h-12 md:w-12"
            />
            <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              UniLearn
            </span>
          </div>

          {/* CTA */}
          <a
            href="#join"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold shadow-md hover:shadow-lg transition"
          >
            Join Now
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative text-center py-24 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight max-w-4xl mx-auto"
        >
          Smarter Learning for Nigerian Students{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            🎓
          </span>
        </motion.h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Access syllabuses, past questions, lecture notes, and AI-powered study
          tools — all in one app built for Nigerian universities.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href="#plans"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold shadow-md hover:shadow-lg transition"
          >
            Get Started 🚀
          </a>
        </div>
      </section>

      {/* Plans / Pricing */}
      <section id="plans" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Choose Your Plan
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Free */}
            <div className="p-8 border rounded-2xl shadow-sm hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-4">Free Plan</h3>
              <p className="text-gray-600 mb-6">Basic access for all students</p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>📚 Limited syllabuses</li>
                <li>📝 Sample past questions</li>
                <li>🤖 Basic AI tutor access</li>
              </ul>
              <button className="w-full px-5 py-2.5 rounded-xl bg-gray-200 text-gray-800 font-semibold">
                Start Free
              </button>
            </div>

            {/* Pro */}
            <div className="p-8 border-2 border-indigo-600 rounded-2xl shadow-md hover:shadow-xl transition transform scale-105">
              <h3 className="text-xl font-bold mb-4 text-indigo-600">
                Pro Plan
              </h3>
              <p className="text-gray-600 mb-6">
                Best for serious learners 🚀
              </p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>📚 Full syllabus library</li>
                <li>📝 Unlimited past questions</li>
                <li>🤖 Advanced AI tutor</li>
                <li>📖 Lecture notes access</li>
              </ul>
              <button className="w-full px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold shadow-md">
                Go Pro
              </button>
            </div>

            {/* Campus */}
            <div className="p-8 border rounded-2xl shadow-sm hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-4">Campus Plan</h3>
              <p className="text-gray-600 mb-6">
                For universities & student groups
              </p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>👥 Multi-student access</li>
                <li>📚 Faculty-wide syllabuses</li>
                <li>📝 Bulk past questions</li>
                <li>📖 Admin + analytics</li>
              </ul>
              <button className="w-full px-5 py-2.5 rounded-xl bg-indigo-50 text-indigo-700 font-semibold">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section id="join" className="py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Learn Smarter?
        </h2>
        <p className="mt-4 text-gray-600">
          Join thousands of Nigerian students who already study better with
          UniLearn.
        </p>
        <form className="mt-8 flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-l-xl border border-gray-300 focus:outline-none w-64"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-r-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold"
          >
            Join Now 🎉
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-gray-100 border-t">
        <p className="text-gray-600">
          © {new Date().getFullYear()} UniLearn. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}
