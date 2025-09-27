const Contact = () => {
    return (
        <section id="contact" className="py-16 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

            <form className="max-w-xl mx-auto space-y-4">
                <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg text-black" />
                <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg text-black" />
                <textarea placeholder="Your Message" rows="4" className="w-full p-3 rounded-lg text-black"></textarea>
                <button type="submit" className="px-6 py-3 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-300">Send Message</button>
            </form>

            <div className="mt-10">
                <p>Email: <a href="mailto:0112cs221147@gmail.com" className="underline">0112cs221147@gmail.com</a></p>
                <p>Phone: <a href="tel:+916261396410" className="underline">+91-6261396410</a></p>
                <p className="mt-2">
                    <a href="https://linkedin.com/in/tushartandekar" className="underline">LinkedIn</a> |{" "}
                    <a href="https://github.com/CS147-Tushar" className="underline">GitHub</a>
                </p>
            </div>
        </section>
    );
};

export default Contact;
