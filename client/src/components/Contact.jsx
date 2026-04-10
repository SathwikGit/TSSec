import { useState } from "react";
import API from "../api/config";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("transmitting request...");

    try {
      const { data } = await API.post("/contact", formData);

      if (data.success) {
        setStatus("connection established ✔");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("transmission failed ✖");
      }
    } catch (err) {
      console.error(err);
      setStatus("server unreachable ✖");
    }
  };

  return (
    <section id="contact" className="px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <h2 className="text-3xl text-green-400">Initiate Connection</h2>
          <div className="border border-gray-800 p-5 rounded-lg font-mono text-sm text-green-400">
            &gt; endpoint: secure_channel <br />
            &gt; protocol: encrypted <br />
            &gt; status: ready
          </div>
          <div className="text-gray-400 text-sm space-y-2">
            <p>
              <span className="text-green-400">email:</span>{" "}
              f20201567@hyderabad.bits-pilani.ac.in
            </p>
            <p>
              <span className="text-green-400">operator:</span> T. Sai Sathwik
            </p>
            <p>
              <span className="text-green-400">location:</span> BITS Hyderabad
            </p>
          </div>
        </div>

        <div className="border border-gray-800 p-6 rounded-xl">
          <p className="text-green-400 font-mono mb-4">&gt; transmit_message</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="name"
              required
              className="w-full p-3 bg-black border border-gray-700 focus:border-green-400 outline-none"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email"
              required
              className="w-full p-3 bg-black border border-gray-700 focus:border-green-400 outline-none"
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="subject"
              className="w-full p-3 bg-black border border-gray-700 focus:border-green-400 outline-none"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="message"
              rows="4"
              required
              className="w-full p-3 bg-black border border-gray-700 focus:border-green-400 outline-none"
            />
            <button
              type="submit"
              className="bg-green-500 px-6 py-3 rounded-lg text-black w-full"
            >
              execute
            </button>
          </form>
          {status && (
            <p className="mt-4 text-sm text-gray-400 font-mono">
              &gt; {status}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
