import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_f1efqh7", "template_mwgr8gn", form.current, {
        publicKey: "SbGZK0cudKtAWCNNM",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div className="bg-[#110f1a] text-white  p-10 py-20  flex justify-center items-center flex-col gap-10">
      <h2 className=" text-[50px]">Contact Me</h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-md mx-auto bg-zinc-900 text-white p-10 rounded-lg shadow-lg w-[40vw]"
      >
        <div className="mb-4">
          <label htmlFor="user_name" className="block  font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="user_email" className="block  font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block  font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 bg-transparent"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#c367d8] text-white px-3 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
