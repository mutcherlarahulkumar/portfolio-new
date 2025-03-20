import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({ subsets: ["latin"], weight: "700" });

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center">
        {/* Name with Handwritten Font */}
        <h2 className={`${dancingScript.className} text-3xl text-yellow-400`}>
          Rahul Kumar Mutcherla
        </h2>
        <p className="text-gray-400 text-sm mt-1">
          Full-Stack Developer | Passionate about building great experiences
        </p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://www.youtube.com/@codeNoob-vo1ox" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 text-2xl transition-all duration-300">
            <i className='bx bxl-youtube'></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400 text-2xl transition-all duration-300">
            <i className='bx bxl-instagram'></i>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-2xl transition-all duration-300">
            <i className='bx bxl-twitter'></i>
          </a>
          <a href="https://www.linkedin.com/in/rahulkumarmutcherla/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-500 text-2xl transition-all duration-300">
            <i className='bx bxl-linkedin'></i>
          </a>
          <a href="https://github.com/RahulKumarMutcherla" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 text-2xl transition-all duration-300">
            <i className='bx bxl-github'></i>
          </a>
          <a href="mailto:rahulkumarmutcherla@gmail.com" className="text-yellow-400 hover:text-yellow-300 text-2xl transition-all duration-300">
            <i className='bx bxl-gmail'></i>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm mt-6">
          &#169; {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
