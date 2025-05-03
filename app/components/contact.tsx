"use client";
import React, { useRef, useState, useEffect } from "react";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  // Clear status message after 3 seconds if it's a success message
  useEffect(() => {
    if (status === "Message sent successfully!") {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 5000); // 5 seconds

      // Cleanup timer on component unmount or status change
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <section
      className="px-5 md:px-20 h-fit relative z-20 md:mb-15"
      id="message"
    >
      <div className="pb-10">
        <h1 className="text-lg md:text-4xl font-orbitron font-semibold">
          Shoot a Message
        </h1>
        <div className="h-[2px] w-15 md:w-30 rounded-md mt-2 md:mt-4 bg-white"></div>
      </div>
      <div className="flex justify-center items-center mt-5 md:mt-10">
        <form
          className="w-[700px] flex flex-col gap-10 font-inter"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="text-md md:text-xl font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="border-2 border-purple-900/70 px-3 py-3 md:py-4 rounded-md mt-3 shadow-md shadow-purple-800/50"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-md md:text-xl font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="border-2 border-purple-900/70 px-3 py-3 md:py-4 rounded-md mt-3 shadow-md shadow-purple-800/50"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-md md:text-xl font-medium">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="resize-none border-2 border-purple-900/70 px-3 py-3 md:py-4 rounded-md mt-3 shadow-md shadow-purple-800/50"
              placeholder="Enter your message"
              required
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              disabled={loading}
              className="button-hover w-full px-4 py-2 text-[16px] md:text-xl rounded-sm font-orbitron font-medium cursor-pointer uppercase hover:scale-105 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
          {status && (
            <p className="mx-auto text-sm text-green-500 border border-green-500 bg-green-500/10 rounded-sm py-2 w-fit px-3">
              {status}
            </p>
          )}
        </form>
      </div>
      <div className="w-[600px] rounded-full h-[400px] bg-purple-600 blur-2xl -rotate-45 absolute -left-[400px] bottom-[200px] opacity-40 -z-20"></div>
    </section>
  );
}
