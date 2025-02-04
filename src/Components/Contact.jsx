const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-200 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
      <form className="max-w-lg mx-auto p-6 bg-gray-300 rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border border-gray-400 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border border-gray-400 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 border border-gray-400 rounded-md h-32 mb-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
        ></textarea>
        <button className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
