// src/app/page.js
"use client";

import { motion } from "framer-motion";
import { BookOpen, Brain, Calendar } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-purple-50 via-pink-50 to-white text-gray-900 min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 shadow-sm bg-white/80 backdrop-blur-md fixed w-full z-50">
        <h1 className="text-2xl font-bold text-purple-600">UniLearn</h1>
        <div className="space-x-6 hidden md:flex">
          <a href="#" className="hover:text-purple-600">Home</a>
          <a href="#features" className="hover:text-purple-600">Features</a>
          <a href="#about" className="hover:text-purple-600">About</a>
          <a href="#contact" className="hover:text-purple-600">Contact</a>
        </div>
        <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-xl hover:opacity-90">
          Get Started
        </button>
      </nav>

      {/* Hero Section with Video Background */}
      <section className="relative text-center py-32 px-6">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/student-bg.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        {/* Hero content */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            Smarter Learning for Students 🎓
          </h2>
          <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
            Access syllabuses, past questions, lecture notes, and AI chatbot — all in one app.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-xl hover:opacity-90">
              Get Started 🚀
            </button>
            <button className="bg-white/80 text-purple-600 px-6 py-3 rounded-xl hover:bg-white">
              Learn More
            </button>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-r from-purple-100 via-pink-50 to-blue-50">
        <h3 className="text-3xl font-bold text-center mb-12 text-purple-700">Why UniLearn?</h3>
        <div className="grid md:grid-cols-3 gap-8 px-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
            <BookOpen className="h-10 w-10 text-purple-600 mb-4" />
            <h4 className="text-xl font-semibold mb-2">📚 Full Syllabus</h4>
            <p className="text-gray-600">Instant access to complete syllabuses for every Nigerian university course.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
            <Brain className="h-10 w-10 text-pink-600 mb-4" />
            <h4 className="text-xl font-semibold mb-2">🤖 AI Study Bot</h4>
            <p className="text-gray-600">Chat with an AI tutor anytime you’re stuck on a topic or concept.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
            <Calendar className="h-10 w-10 text-blue-600 mb-4" />
            <h4 className="text-xl font-semibold mb-2">📝 Past Questions</h4>
            <p className="text-gray-600">AI-generated past questions to prepare smarter and faster for exams.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <h3 className="text-3xl font-bold mb-4">Ready to Learn Smarter?</h3>
        <p className="mb-6 text-lg">Join thousands of students who are already studying better with UniLearn.</p>
        <div className="flex justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-xl text-gray-800 w-72"
          />
          <button className="bg-pink-500 px-6 py-3 rounded-xl hover:opacity-90">
            Join Now 🎉
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-gray-200 py-10 mt-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© {new Date().getFullYear()} UniLearn. All Rights Reserved.</p>
          <div className="space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Support</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
