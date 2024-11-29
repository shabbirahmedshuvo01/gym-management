import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p className="text-sm">
            We offer a state-of-the-art gym with expert trainers and a variety
            of fitness classes to help you achieve your fitness goals. Join our
            community and start your journey today!
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul>
            <li>
              <Link href="#home" className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="#classes" className="hover:text-gray-400">
                Classes
              </Link>
            </li>
            <li>
              <Link href="#schedule" className="hover:text-gray-400">
                Schedule
              </Link>
            </li>
            <li>
              <Link href="#membership" className="hover:text-gray-400">
                Membership
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <form action="#" method="POST" className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:border-blue-500"
              rows="4"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-8 text-center">
        <a
          href="#"
          className="inline-block mx-2 text-white hover:text-gray-400 transition"
        >
          <FaFacebookF />
        </a>
        <a
          href="#"
          className="inline-block mx-2 text-white hover:text-gray-400 transition"
        >
          <FaTwitter />
        </a>
        <a
          href="#"
          className="inline-block mx-2 text-white hover:text-gray-400 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="#"
          className="inline-block mx-2 text-white hover:text-gray-400 transition"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-sm text-gray-400">
        <p>&copy; 2024 Gym Class Scheduling System. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
