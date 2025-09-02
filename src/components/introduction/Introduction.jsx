import person from "../../assets/images/person.png";
import "./introduction.css";
import InformationSummary from "./InformationSummary";
import { Link } from "react-scroll";

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
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Hello, I’m
            <span className="text-nowrap shrink-0 inline-block w-full">
              Tom Oliver Chua
            </span>

            {/* Tagline */}
            <p className="text-sm xxs:text-base lg:text-[18px] mt-2 text-gray-500">
              ICT Head · Solutions Architect · Full-Stack Developer
            </p>

          </p>
             {/* Direct from Resume pdf: */}
          {/* <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            Innovative and results-driven ICT leader with a strong background in{" "}
            <span className="bg-highlight">application architecture</span>,{" "}
            <span className="bg-highlight">backend & mobile development</span>,
            and <span className="bg-highlight">AI-powered solutions</span>.
            Led the AI Digital Platform for a major Japanese bank at IBM, and
            ship cross-platform apps using Kotlin/SwiftUI/Flutter with secure,
            scalable REST APIs on AWS · Azure · IBM Cloud.
          </p> */}

            {/* resume pdf + canva resume + summarized: */}
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            I build user-centric systems for web and mobile, combining
            <span className="bg-highlight"> application architecture</span>, 
            <span className="bg-highlight"> backend &amp; mobile development</span>, and 
            <span className="bg-highlight"> AI</span> to deliver secure, scalable products.
            I lead teams and ship reliably from idea to launch.
          </p>


                    
          <p className="text-center lg:text-start">
            <Link
              className="btn-primary btn btn-xs xxs:btn-lg text-white"
              href="#contact"
              to={"contact"}
              smooth={true}
              duration={900}
            >
              Say Hello!
            </Link>
          </p>

        </div>
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div
        className={`max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative`}
      >
        <img
          className={`shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl`}
          src={person}
          alt="person"
        />
      </div>
    </div>
  );
};

export default Introduction;
