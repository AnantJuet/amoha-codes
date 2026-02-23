
// ====================================================================================================
import { useState, type FC, type ChangeEvent, type FormEvent } from "react";
import { API } from "../../api";

// Types for company data
interface Company {
  company: string;
  image: string;
  link: string;
}

interface AppProps {
  darkMode: boolean;
}

interface CareerFormData {
  fullName: string;
  email: string;
  stream: string;
  resume: File | null;
}

// --- Service-Based Companies Data ---
const serviceBasedCompanies: Company[] = [
  { company: "Tata Consultancy Services (TCS)", image: "tcs.png", link: "https://ibegin.tcsapps.com/candidate/" },
  { company: "Accenture", image: "accenture.png", link: "https://www.accenture.com/us-en/careers/jobsearch" },
  { company: "Cognizant", image: "cognizant.png", link: "https://careers.cognizant.com/global-en/" },
  { company: "Infosys", image: "infosys.png", link: "https://www.infosys.com/careers" },
  { company: "Wipro", image: "wipro.png", link: "https://careers.wipro.com/" },
  { company: "IBM", image: "IBM.png", link: "https://www.ibm.com/employment/" },
  { company: "Capgemini", image: "capgemini.png", link: "https://www.capgemini.com/careers/" },
  { company: "HCL Technologies", image: "HCL.png", link: "https://www.hcltech.com/careers" },
  { company: "DXC Technology", image: "dxc.png", link: "https://careers.dxc.com/global/en/home" },
  { company: "Tech Mahindra", image: "techmahindra.png", link: "https://careers.techmahindra.com/Currentopportunity.aspx#Advance" },
  { company: "Oracle", image: "Oracle.png", link: "https://careers.oracle.com/en/sites/jobsearch/jobs?location=United%20States&locationId=300000000149325" },
  { company: "Atos", image: "Atos.png", link: "https://atos.net/en/careers" },
];

// --- Product-Based Companies Data ---
const productBasedCompanies: Company[] = [
  { company: "Google", image: "Gooogle.png", link: "https://careers.google.com/" },
  { company: "Apple", image: "Apple.png", link: "https://www.apple.com/careers/" },
  { company: "Microsoft", image: "Microsoftt.png", link: "https://careers.microsoft.com/" },
  { company: "Amazon", image: "Amazonn.png", link: "https://www.amazon.jobs/" },
  { company: "Facebook(Meta)", image: "Facebook.png", link: "https://www.metacareers.com/" },
  { company: "Tesla", image: "Tesla.png", link: "https://www.tesla.com/careers" },
  { company: "Netflix", image: "Netflix.png", link: "https://jobs.netflix.com/" },
  { company: "Adobe", image: "Adobe.png", link: "https://careers.adobe.com/" },
  { company: "Salesforce", image: "Salesforce.png", link: "https://www.salesforce.com/company/careers/" },
  { company: "Snap Inc", image: "Snap.png", link: "https://www.snap.com/en-US/jobs/" },
  { company: "Spotify", image: "Spotify.png", link: "https://www.spotifyjobs.com/" },
  { company: "Uber", image: "Uber.png", link: "https://www.uber.com/global/en/careers/" },
];

// --- Reusable Company Card Component ---
interface CompanyCardProps {
  company: Company;
  darkMode: boolean;
}

const CompanyCard: FC<CompanyCardProps> = ({ company, darkMode }) => (
  <div
    className={`w-full sm:w-80 rounded-xl shadow-md p-6 border transform transition duration-200 hover:scale-105 hover:shadow-3xl flex flex-col items-center ${darkMode
      ? "bg-gray-800 border-[#6334B9] text-white hover:shadow-[0_4px_6px_#6334B980] "
      : "bg-white border-[#6334B9] text-gray-900"
      }`}
  >
    <img
      src={company.image}
      alt={company.company}
      className={`w-full h-48 object-contain mb-4 rounded-xl border ${darkMode ? "border-gray-500" : "border-[#6334B9]"
        }`}
    />
    <h3 className={`${darkMode ? "text-white" : "text-gray-900"} text-lg font-semibold text-center`}>
      {company.company}
    </h3>
    <a
      href={company.link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full text-center font-bold px-6 py-3 rounded-lg bg-[#6334B9] text-white hover:bg-[#5028a0] transition duration-300 cursor-pointer mt-10"
    >
      Apply Now
    </a>
  </div>
);

// Main App Component
const App: FC<AppProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState<CareerFormData>({
    fullName: "",
    email: "",
    stream: "",
    resume: null,
  });
  const [resumeFileName, setResumeFileName] = useState<string>("");
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    setStatus({ type: null, message: '' });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, resume: file }));
    setResumeFileName(file ? file.name : "");
    setStatus({ type: null, message: '' });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: '' });

    if (!formData.fullName || !formData.email || !formData.stream) {
      setStatus({ type: 'error', message: 'Please fill in all required fields.' });
      setLoading(false);
      return;
    }

    try {
      const submitData = new FormData();
      submitData.append("full_name", formData.fullName);
      submitData.append("email", formData.email);
      submitData.append("stream", formData.stream);
      if (formData.resume) {
        submitData.append("resume", formData.resume);
      }

      await API.post("/career/submit", submitData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setStatus({ type: 'success', message: 'Application submitted successfully! We will review your application and get back to you.' });
      setFormData({ fullName: "", email: "", stream: "", resume: null });
      setResumeFileName("");
    } catch (err: any) {
      const message = err.response?.data?.detail || 'Failed to submit application. Please try again.';
      setStatus({ type: 'error', message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`font-sans min-h-screen transition-colors duration-500 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
    >
      <main className="max-w-6xl mx-auto px-4 md:px-8 py-8">
        {/* Apply for an Internship section */}
        <section className="my-8 md:my-16">
          <h2
            className={`${darkMode ? "text-white" : "text-gray-900"} text-3xl font-bold mb-6`}
          >
            Apply to Amoha Codes
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

          <form
            onSubmit={handleSubmit}
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-12 rounded-2xl shadow-lg transition-colors duration-500 ${darkMode ? "bg-gray-800" : "bg-white"
              }`}
          >
            <div>
              <label
                htmlFor="fullName"
                className={`block text-sm font-medium mb-1 ${darkMode ? "text-white" : "text-gray-700"
                  }`}
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter Your Full Name"
                required
                className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#6334B9] focus:outline-none transition duration-200 ${darkMode
                  ? "bg-gray-700 border-[#6334B9] text-white"
                  : "bg-purple-100 border-[#6334B9] text-gray-900"
                  }`}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className={`block text-sm font-medium mb-1 ${darkMode ? "text-white" : "text-gray-700"
                  }`}
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter Your Email Address"
                required
                className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#6334B9] focus:outline-none transition duration-200 ${darkMode
                  ? "bg-gray-700 border-[#6334B9] text-white"
                  : "bg-purple-100 border-[#6334B9] text-gray-900"
                  }`}
              />
            </div>
            <div>
              <label
                htmlFor="stream"
                className={`block text-sm font-medium mb-1 ${darkMode ? "text-white" : "text-gray-700"
                  }`}
              >
                Stream
              </label>
              <select
                id="stream"
                value={formData.stream}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#6334B9] focus:outline-none transition duration-200 ${darkMode
                  ? "bg-gray-700 border-[#6334B9] text-white"
                  : "bg-purple-100 border-[#6334B9] text-gray-900"
                  }`}
              >
                <option value="">Select Your Stream</option>
                <option value="Engineering">Engineering</option>
                <option value="Marketing">Marketing</option>
                <option value="Design">Design</option>
                <option value="Finance">Finance</option>
                <option value="Operations">Operations</option>
                <option value="Sales">Sales</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="resume"
                className={`block text-sm font-medium mb-1 ${darkMode ? "text-white" : "text-gray-700"
                  }`}
              >
                Resume
              </label>
              <div className="relative">
                <input
                  type="file"
                  id="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div
                  className={`flex items-center justify-between w-full px-4 py-3 rounded-lg border focus-within:ring-2 focus-within:ring-[#6334B9] transition duration-200 ${darkMode
                    ? "bg-gray-700 border-[#6334B9] text-white"
                    : "bg-purple-100 border-[#6334B9] text-gray-900"
                    }`}
                >
                  <span className={`${darkMode ? "text-white" : "text-[#6334B9]"} truncate`}>
                    {resumeFileName || "Upload Your Resume"}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 ${darkMode ? "text-white" : "text-[#6334B9]"}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 rounded-lg bg-[#6334B9] text-white hover:bg-[#5028a0] transition duration-300 font-bold shadow-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </section>


        {/* SERVICE-BASED COMPANIES*/}
        <section className="my-8 md:my-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <h2
              className={`${darkMode ? "text-white" : "text-gray-900"} text-3xl font-bold mb-4 md:mb-0`}
            >
              Service-Based Companies
            </h2>
          </div>

          {/* Grid of internship cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {serviceBasedCompanies.map((internship, index) => (
              <CompanyCard key={index} company={internship} darkMode={darkMode} />
            ))}
          </div>
        </section>

        {/* -------------------------------------------------------------------------------- */}

        {/* PRODUCT-BASED COMPANIES */}
        <section className="my-8 md:my-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <h2
              className={`${darkMode ? "text-white" : "text-gray-900"} text-3xl font-bold mb-4 md:mb-0`}
            >
              Product-Based Companies
            </h2>
          </div>

          {/* Grid of internship cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {productBasedCompanies.map((internship, index) => (
              <CompanyCard key={index} company={internship} darkMode={darkMode} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;

