import { useState, type ChangeEvent, type FormEvent, type FC } from 'react';
import { Mail, Phone, MapPin } from "lucide-react";
import { API } from "../../api";

// Type for form data
interface FormData {
  name: string;
  email: string;
  message: string;
}

interface AppProps {
  darkMode: boolean;
}

const App: FC<AppProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
    setStatus({ type: null, message: '' });
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: '' });

    try {
      await API.post("/contact", formData);
      setStatus({ type: 'success', message: 'Thank you for your message! We will get back to you shortly.' });
      setFormData({ name: '', email: '', message: '' });
    } catch (err: any) {
      const message = err.response?.data?.detail || 'Failed to send message. Please try again.';
      setStatus({ type: 'error', message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col font-sans transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      <main className="flex-grow max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-20">
        <div
          className={`rounded-lg p-6 lg:p-12 transition-colors duration-500 ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <div className="text-center md:text-left">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Our Organization</h2>
            <p className={`${darkMode ? "text-gray-300" : "text-purple-800"} mb-6`}>
              We're here to help! Reach out to us with any questions or feedback.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div
              className={`flex items-center justify-center md:justify-start p-4 rounded-lg text-sm sm:text-base gap-2 cursor-pointer border transition-colors duration-500 ${
                darkMode
                  ? "bg-gray-700 border-gray-500 text-white"
                  : "bg-gray-100 border-purple-800 text-black"
              }`}
            >
              <Mail className={`w-5 h-5 ${darkMode ? "text-purple-500" : "text-[#6334b9]"}`} />
              <span>amohacodes@gmail.com</span>
            </div>

            <div
              className={`flex items-center justify-center md:justify-start p-4 rounded-lg text-sm sm:text-base gap-2 cursor-pointer border transition-colors duration-500 ${
                darkMode
                  ? "bg-gray-700 border-gray-500 text-white"
                  : "bg-gray-100 border-purple-800 text-black"
              }`}
            >
              <Phone className={`w-5 h-5 ${darkMode ? "text-purple-500" : "text-[#6334b9]"}`} />
              <span>+91 9760564433</span>
            </div>

            <div
              className={`flex items-center justify-center md:justify-start p-4 rounded-lg text-sm sm:text-base gap-2 cursor-pointer border transition-colors duration-500 ${
                darkMode
                  ? "bg-gray-700 border-gray-500 text-white"
                  : "bg-gray-100 border-purple-800 text-black"
              }`}
            >
              <MapPin className={`w-5 h-5 ${darkMode ? "text-purple-500" : "text-[#6334b9]"}`} />
              <span>Delhi Road, Moradabad, 244001 India</span>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
              Contact Us
            </h2>

            {status.type && (
              <div className={`mb-6 p-4 rounded-lg ${
                status.type === 'success'
                  ? 'bg-green-100 border border-green-400 text-green-700'
                  : 'bg-red-100 border border-red-400 text-red-700'
              }`}>
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Your Name"
                    required
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#6334B9] focus:outline-none transition duration-200 ${
                      darkMode
                        ? "bg-gray-700 border-gray-500 text-white"
                        : "bg-purple-100 border-[#6334B9] text-black"
                    }`}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Your Email"
                    required
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#6334B9] focus:outline-none transition duration-200 ${
                      darkMode
                        ? "bg-gray-700 border-gray-500 text-white"
                        : "bg-purple-100 border-[#6334B9] text-black"
                    }`}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message..."
                  required
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#6334B9] focus:outline-none transition duration-200 ${
                    darkMode
                      ? "bg-gray-700 border-gray-500 text-white"
                      : "bg-purple-100 border-[#6334B9] text-black"
                  }`}
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={loading}
                  className={`font-bold py-3 px-8 rounded-lg transition duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${
                    darkMode
                      ? "bg-[#6334B9] text-white hover:bg-[#250c53]"
                      : "bg-[#6334B9] text-white hover:bg-[#250c53]"
                  }`}
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
