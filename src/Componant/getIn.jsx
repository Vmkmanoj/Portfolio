import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const GetInTouch = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "manojkumar13", // Replace with your EmailJS service ID
        "template_kzcqf9o", // Replace with your EmailJS template ID
        form.current,
        "CqfGWMMGUdafG330w" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setIsSent(true);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section className="bg-transparent py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Get In Touch</h2>
        <p className="text-lg text-gray-600 mb-8">
          Feel free to reach out to me via this form. I’ll get back to you as soon as possible!
        </p>
        <form ref={form} onSubmit={sendEmail} className="bg-transparent p-8 shadow-md rounded-lg">
          <div className="mb-4">
            <label className="block text-left text-gray-700 mb-2 font-medium">
              Your Name
            </label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full  p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-left text-gray-700 mb-2 font-medium">
              Your Email
            </label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-left text-gray-700 mb-2 font-medium">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded text-white ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
        {isSent && (
          <p className="text-green-600 font-medium mt-4">
            Your message has been sent successfully!
          </p>
        )}
      </div>
    </section>
  );
};

export default GetInTouch;
