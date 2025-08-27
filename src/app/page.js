"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyh2AVXeILjCZSmEc_GIypC7YXn6i1fj6g6wALhGz98wxzHTCLKiyPjirQPgi8ikd1isw/exec",
        {
          method: "POST",
          body: JSON.stringify({ email }),
        }
      );
      setSubmitted(true);
      setEmail("");
    } catch (error) {
      console.error("Error saving email:", error);
    }
  };

  return (
    <main className="min-h-screen bg-[#F2F4EC] text-[#203649] font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-[#D9DFCC]">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Smarter Learning for Nigerian Students 🎓
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          Access your syllabus, past questions, lecture notes, and AI chatbot —
          all in one app.
        </p>
        <a
          href="#join"
          className="px-6 py-3 rounded-full bg-[#435739] text-white text-lg font-medium shadow-md hover:bg-[#2E354E] transition"
        >
          Get Started 🚀
        </a>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 text-center bg-[#F2F4EC]">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Why UniLearn?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">📚 Full Syllabus</h3>
            <p>Instant access to complete syllabuses for every Nigerian university course.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">📝 Past Questions</h3>
            <p>AI-generated past questions to prepare smarter and faster for exams.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">🤖 AI Study Bot</h3>
            <p>Chat with an AI tutor anytime you’re stuck on a topic or concept.</p>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section id="join" className="py-20 px-6 text-center bg-[#A7B194] text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Learn Smarter?
        </h2>
        <p className="text-lg mb-6">
          Join thousands of Nigerian students who are already studying better.
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-4 py-3 rounded-lg w-full sm:w-auto flex-grow text-black"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-[#203649] text-white font-medium shadow-md hover:bg-[#2E354E] transition"
            >
              Join Now 🎉
            </button>
          </form>
        ) : (
          <p className="text-lg font-semibold mt-4">
            ✅ Thank you! We’ll keep you updated.
          </p>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-[#203649] text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} UniLearn. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
