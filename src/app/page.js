// src/app/page.js
"use client";

import { motion } from "framer-motion";
import { BookOpen, Brain, Calendar } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-blue-50 to-white text-gray-900 min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 shadow-sm bg-white">
        <h1 className="text-2xl font-bold text-blue-600">UniLearn NG</h1>
        <div className="space-x-6 hidden md:flex">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#features" className="hover:text-blue-600">Features</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-gray-900"
        >
          Smarter Learning for Nigerian Students
        </motion.h2>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          UniLearn NG helps you access syllabuses, stay on track with deadlines,
          and learn smarter with AI-powered study tools.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700">
            Join Now
          </button>
          <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-50">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <h3 className="text-3xl font-bold text-center mb-12">Why Choose UniLearn NG?</h3>
        <div className="grid md:grid-cols-3 gap-8 px-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg">
            <BookOpen className="h-10 w-10 text-blue-600 mb-4" />
            <h4 className="text-xl font-semibold mb-2">📚 Access Syllabuses</h4>
            <p className="text-gray-600">Get instant access to up-to-date course materials and syllabuses for your program.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg">
            <Brain className="h-10 w-10 text-blue-600 mb-4" />
            <h4 className="text-xl font-semibold mb-2">🤖 AI Study Assistant</h4>
            <p className="text-gray-600">Ask questions, get explanations, and prepare better with our AI-powered learning bot.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg">
            <Calendar className="h-10 w-10 text-blue-600 mb-4" />
            <h4 className="text-xl font-semibold mb-2">📅 Stay Organized</h4>
            <p className="text-gray-600">Track courses, assignments, and deadlines easily with reminders and schedules.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-8 max-w-5xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-6">About UniLearn NG</h3>
        <p className="text-gray-600 text-lg leading-relaxed">
          UniLearn NG is built to simplify education for Nigerian students. From
          accessing syllabuses to using AI for study help, we aim to make learning
          faster, smarter, and more accessible for everyone.
        </p>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-blue-600 text-white py-10 mt-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© {new Date().getFullYear()} UniLearn NG. All rights reserved.</p>
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
