// src/app/page.js
"use client";

import { motion } from "framer-motion";
import { BookOpen, Brain, Calendar } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-blue-50 to-white text-gray-900 min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 shadow-sm bg-white sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-blue-600">UniLearn NG</h1>
        <div className="space-x-6 hidden md:flex">
          <a href="#features" className="hover:text-blue-600">Features</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-6 relative overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-gray-900"
        >
          Smarter Learning for Nigerian Students 🎓
        </motion.h2>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Access your syllabus, past questions, lecture notes, and AI chatbot — all in one app.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700">
            Get Started 🚀
          </button>
          <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-50">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <h3 className="text-3xl font-bold text-center mb-12">Why UniLearn?</h3>
        <div className="grid md:grid-cols-3 gap-8 px-8 max-w-6xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <BookOpen className="h-10 w-10 text-blue-600 mb-4" />
            <h4 className="text-xl font-semibold mb-2">📚 Full Syllabus</h4>
            <p className="text-gray-600">Instant access to complete syllabuses for every Nigerian university course.</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <Brain className="h-10 w-10 text-blue-600 mb-4" />
            <h4 className="text-xl font-semibold mb-2">📝 Past Questions</h4>
            <p className="text-gray-600">AI-generated past questions to prepare smarter and faster for exams.</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <Calendar className="h-10 w-10 text-blue-600 mb-4" />
            <h4 className="text-xl font-semibold mb-2">🤖 AI Study Bot</h4>
            <p className="text-gray-600">Chat with an AI tutor anytime you’re stuck on a topic or concept.</p>
          </motion.div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-20 text-center px-6">
        <h3 className="text-3xl font-bold mb-6">Ready to Learn Smarter?</h3>
        <p className="text-gray-600 mb-8">Join thousands of Nigerian students who are already studying better.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 w-80"
          />
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700">
            Join Now 🎉
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-blue-600 text-white py-10 mt-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© {new Date().getFullYear()} UniLearn. All Rights Reserved.</p>
          <div className="space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Support</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
