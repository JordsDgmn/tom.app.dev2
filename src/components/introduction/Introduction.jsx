import person from "../../assets/images/person.png";
import "./introduction.css";
import InformationSummary from "./InformationSummary";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";

// Information summary data
const informationSummaryData = [
  {
    id: 1,
    title: "Experience",
    description: "10 Y.",
  },
  {
    id: 2,
    title: "Projects Completed",
    description: "25+",
  },
  {
    id: 3,
    title: "Happy Clients",
    description: "20",
  },
];

const Introduction = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = ["ICT Head", "Solutions Architect", "Full-Stack Developer"];
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    
    if (currentIndex < currentTitle.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentTitle.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentIndex(0);
        setDisplayedText("");
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, titleIndex, titles]);

  return (
    <div
      className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen px-4 lg:px-8 py-16"
      id="introduction"
    >
      {/* Left Content */}
      <div className="space-y-8 lg:order-1">
        <div className="space-y-4">
          <p className="text-lg text-white font-medium">I'm</p>
          <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
            Tom Oliver Chua
          </h1>
          <p className="text-lg lg:text-xl text-blue-300 font-medium h-8 flex items-center">
            {displayedText}
            <span className="animate-pulse ml-1">|</span>
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-base lg:text-lg text-white leading-relaxed max-w-lg">
            I build user-centric systems for web and mobile, combining
            <strong> application architecture</strong>, 
            <strong> backend & mobile development</strong>, and 
            <strong> AI</strong> to deliver secure, scalable products.
          </p>
          <p className="text-base lg:text-lg text-white leading-relaxed max-w-lg bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg">
            I lead teams and ship reliably from idea to launch.
          </p>
        </div>

        <div className="flex items-start">
          <a
            href="/Tom Oliver Chua Resume.pdf"
            download="Tom Oliver Chua Resume.pdf"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-block"
          >
            Download CV
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 pt-8">
          {informationSummaryData.map((item) => (
            <div key={item.id} className="text-center lg:text-left">
              <div className="text-2xl lg:text-3xl font-bold text-white">
                {item.description}
              </div>
              <div className="text-sm text-gray-200 mt-1">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image */}
      <div className="lg:order-2 relative hero-image-container">
        <div className="relative max-w-md mx-auto lg:max-w-none w-full">
          {/* Decorative background elements */}
          <div className="absolute -top-4 -right-4 w-72 h-72 bg-yellow-300 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute top-10 -left-4 w-32 h-32 bg-orange-300 rounded-full opacity-30 blur-2xl"></div>
          
          <img
            className="relative z-10 hero-image"
            src={person}
            alt="Tom Oliver Chua"
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
