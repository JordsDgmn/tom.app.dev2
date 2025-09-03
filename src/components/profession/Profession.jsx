import Roles from "./Roles";
import { Link } from "react-scroll";

const rolesData = [
  {
    id: 1,
    title: "Application Architecture & Leadership",
    description:
      "I design scalable systems and RESTful APIs, set best practices, lead agile sprints, code reviews, and CI/CD with Azure DevOps/GitHub Actions. Focus on quality, performance, security, and usability across teams.",
  },
  {
    id: 2,
    title: "Mobile App Development (Android · iOS · Flutter/KMM)",
    description:
      "I build high-quality Android (Kotlin) and iOS (SwiftUI) apps, plus cross-platform with Flutter/KMM. Integrate Firebase, analytics, payments, and deploy to Google Play/App Store with robust testing and release pipelines.",
  },
  {
    id: 3,
    title: "Web, APIs, Cloud & DevOps",
    description:
      "I develop modern web apps (Laravel/Node/React), secure APIs, and manage cloud infra on AWS, Azure, and IBM Cloud (NGINX, PostgreSQL/MySQL, S3/EC2). Automate deployments and monitoring with container-ready setups.",
  },
  {
    id: 4,
    title: "Developer Team Lead",
    description:
      "Spearheaded the end-to-end development of transformative AI solutions, most notably an AI-powered digital platform for Mitsubishi Bank. Led cross-functional teams in requirements gathering, architecture design, model development, ensuring scalability, security, and compliance with financial industry standards.",
  },
  {
    id: 5,
    title: "App Deployment",
    description:
      "We provide end-to-end app deployment services across AWS, DigitalOcean, and Hostinger for web applications, as well as Google Play and the Apple App Store for mobile applications.",
  },
  {
    id: 6,
    title: "Project Manager",
    description:
      "Successfully managed the full project lifecycle of innovative AI initiatives, overseeing planning, execution, and delivery of an AI digital platform for Mitsubishi Bank that enhanced operational efficiency and elevated customer experience.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I help companies ship reliable products end-to-end—from systems
            design to mobile and web delivery—grounded in secure architectures,
            elegant UX, and measurable business value.
          </p>

        </div>

        <Link
          href="#contact"
          to={"contact"}
          smooth={true}
          duration={900}
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </Link>

      </div>
      <div className="flex flex-wrap gap-2 w-auto max-h-[400px] overflow-y-auto">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
