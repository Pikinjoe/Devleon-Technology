"use client";

import BlogNav from "@/components/BlogNav";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/stateful-button";
import { contacts } from "@/data";
import Link from "next/link";
import { useState, useEffect } from "react";
import { BiChevronsRight } from "react-icons/bi";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          date: new Date().toLocaleString("en-US", {
            timeZone: "Africa/Lagos",
          }), // WAT
        },
        PUBLIC_KEY
      );
      setStatus("Thank you! We'll get back to you soon.");
      setFormData({ name: "", email: "", phone: "", message: "" });
      console.log("Email sent successfully!");
    } catch (error) {
      setStatus("Error submitting form. Please try again.");
      console.error("Error sending email:", error);
    }
  };
  return (
    <div className="min-h-screen ">
      <BlogNav />
      <div className="relative antialiased bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:bg-none dark:bg-black text-black dark:text-cyan-200">
        <div className="w-11/12 mx-auto py-14">
          <div className="flex flex-col lg:text-center">
            <h1 className="mb-3 font-bold text-2xl md:text-4xl">
              Connect with Devleon Technology
            </h1>
            <p className="font-medium text-black/80 dark:text-cyan-100">
              Ready to transform your business with innovative IT, security, or
              green energy solutions? Fill out the form below or reach out
              directly. Our team in Abuja is here to help!
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-blue-950 p-8 rounded-2xl shadow-xl">
              <h2 className="text-2xl font-semibold text-cyan-100 mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label htmlFor="name" className="font-medium text-cyan-50">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    aria-label="Full Name"
                    className="w-full mt-2 p-3 rounded-lg bg-black/50 text-cyan-100 border border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="font-medium text-cyan-50">
                    Email Address{" "}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    aria-label="Email Address"
                    className="w-full mt-2 p-3 rounded-lg bg-black/50 text-cyan-100 border border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="font-medium text-cyan-50">
                    Phone Number{" "}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                    aria-label="Phone Number"
                    className="w-full mt-2 p-3 rounded-lg bg-black/50 text-cyan-100 border border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="font-medium text-cyan-50">
                    Phone Number{" "}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project or inquiry"
                    rows="5"
                    aria-label="Message"
                    className="w-full mt-2 p-3 rounded-lg bg-black/50 text-cyan-100 border border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-cyan-500 text-black font-semibold rounded-lg hover:ring-cyan-300 mt-4 w-full md:w-fit ring-offset-blue-950"
                  aria-label="Submit Contact Form"
                >
                  Send Message
                </Button>
                {status && (
                  <p className="mt-4 text-center text-cyan-50">{status}</p>
                )}
              </form>
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="text-3xl font-semibold mb-6">
                Get in Touch
              </h1>

              {contacts.map((contact) => (
                <div
                  className="flex items-center gap-4 text-black/80 dark:text-cyan-100 font-semibold"
                  key={contact.name}
                >
                  <BiChevronsRight />
                  <Link
                    href={contact.link}
                    className="cursor-pointer hover:scale-110"
                  >
                    {contact.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
