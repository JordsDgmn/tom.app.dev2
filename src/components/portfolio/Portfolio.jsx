import { useState } from "react";
import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/Q-Vin.png";
import card2 from "../../assets/images/portfolio-images/UnionDigital.png";
import card3 from "../../assets/images/portfolio-images/StaySafe.png";
import card4 from "../../assets/images/portfolio-images/CauyanCity.png";
import card5 from "../../assets/images/portfolio-images/GoManila.png";
import card6 from "../../assets/images/portfolio-images/CebuPacific.png";
import card7 from "../../assets/images/portfolio-images/Q-VinFull.png";
import card8 from "../../assets/images/portfolio-images/UnionDigitalFull.png";
import card9 from "../../assets/images/portfolio-images/StaySafeFull.png";
import card10 from "../../assets/images/portfolio-images/CauyanCityFull.png";
import card11 from "../../assets/images/portfolio-images/GoManilaFull.png";
import card12 from "../../assets/images/portfolio-images/CebuPacificFull.png";
import card13 from "../../assets/images/portfolio-images/OtherProject1.png";
import card14 from "../../assets/images/portfolio-images/OtherProject2.png";
import card15 from "../../assets/images/portfolio-images/OtherProject3.png";

const projectData = [
  {
    id: 1,
    image: card1,
    modalImage: card7,
    category: "Mobile App",
    title: "Q-Vin Mobile App",
    description:
      "Simplify fleet management and compliance with UseQ-VIN.",
    modalDescription:
      "UseQ-VIN empowers you to track, manage, and recover your fleet with ease. From ensuring regulatory compliance to providing instant asset location, it simplifies every aspect of fleet management. Whether you’re focused on improving efficiency, reducing downtime, or keeping your operations secure, UseQ-VIN gives you the visibility and control you need to run your fleet smarter and more effectively.",
    link: "#!",
  },
  {
    id: 2,
    image: card2,
    modalImage: card8,
    category: "Mobile App",
    title: "UnionDigital Bank",
    description:
      "HASSLE-FREE SECURITY Transact safely and quickly with our biometrics and in-app OTP.",
    modalDescription: "Enjoy hassle-free security with our advanced system. Every transaction is protected through fast and reliable biometric authentication, combined with in-app one-time passwords (OTP) for an extra layer of safety. With these safeguards, you can transact quickly, confidently, and without worry.",
    link: "#!",
  },
  {
    id: 3,
    image: card3,
    modalImage: card9,
    category: "Mobile App",
    title: "Stay Safe PH",
    description:
      "StaySafe: The Philippines’ official DILG and IATF contact tracing app with Bluetooth-powered exposure notifications.",
    modalDescription: "StaySafe is the Department of the Interior and Local Government (DILG) and Inter-Agency Task Force on Emerging Infectious Diseases’ official contact tracing mobile app with Google-Apple Exposure Notification (GAEN) feature via Bluetooth in the Philippines",
    link: "#!",
  },
  {
    id: 4,
    image: card4,
    modalImage: card10,
    category: "Mobile App",
    title: "Cauayan City Connect",
    description:
      "Cauayan Connect: A unified app linking citizens, industries, and government in Cauayan.",
    modalDescription: "Cauayan Connect app is a system developed by MultiSys Technologies which serves as a comprehensive solution that caters the needs of not just the entities but also the citizens of Cauayan. It connects all the industry players in the local unit to the government to its citizens.",
    link: "#!",
  },
  {
    id: 5,
    image: card5,
    modalImage: card11,
    category: "Mobile App",
    title: "Go Manila",
    description:
      "GO! MANILA: Convenient city services and global payment access in one secure app.",
    modalDescription: "GO! MANILA Mobile App - Official mobile app of the City Government of Manila that aims to provide fast, effective and convenient manner of various services to the public. A more secure and cost-effective means to access a full range of payments and financial services that will reach not only the constituents of the City but globally.",
    link: "#!",
  },
  {
    id: 6,
    image: card6,
    modalImage: card12,
    category: "Mobile App",
    title: "Cebu Pacific Booking App",
    description:
      "Fly smarter with the Philippines’ low-cost carrier app.",
    modalDescription: "A mobile application that allows users to book flights, manage their bookings, and access various travel-related features for the Philippine low-cost carrier.",
    link: "#!",
  },
  {
    id: 7,
    image: card13,
    modalImage: card13,
    category: "Mobile App",
    title: "Other Projects",
    description:
      "Here are some other works I've done",
    modalDescription: [
    { title: "Japan Remit Finance", text: "Fast, secure, and reliable international money transfers from Japan to the Philippines and beyond." },
    { title: "Pomodoro App", text: "Balance work and rest using the Pomodoro technique." },
    { title: "IP Address Tracker", text: "Track locations and gain network insights with ease." },
  ],
  },
  {
    id: 8,
    image: card14,
    modalImage: card14,
    category: "Mobile App",
    title: "Other Projects",
    description:
      "Here are some other works I've done",
    modalDescription: [
    { title: "Shortly", text: "More than just short links—turn long URLs into smart, trackable, and shareable short links."},
    { title: "New-Life", text: "Keep your family close and their memory closer by preserving cherished moments and honoring loved ones in a secure digital space." },
    { title: "DLL & Sons", text: "Providing trusted, professional, and reliable services tailored to meet client needs with quality and care." },
  ],
  },
  {
    id: 9,
    image: card15,
    modalImage: card15,
    category: "Mobile App",
    title: "Other Projects",
    description:
      "Here are some other works I've done",
    modalDescription: [
    { title: "Jewel & Nickles", text: "A jewelry brand that combines elegance and modern design, offering timeless pieces for every occasion."},
    { title: "UMI Collections", text: "A fashion and lifestyle brand that highlights unique, stylish, and curated apparel for modern wearers." },
    { title: "LA Photography", text: "A creative photography service capturing memorable moments with professional quality and artistic vision." },
  ],
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here's a selection of my recent work, showcasing my skills in
            creating user-centric and visually appealing interfaces.
          </p>
        </div>
      </div>

      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <div key={index} onClick={() => setSelectedProject(data)}>
              <Projects data={data} />
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-xl shadow-lg p-6 w-[90%] max-w-lg relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>

            <img
              src={selectedProject.modalImage}
              alt={selectedProject.title}
              className="mx-auto rounded-lg mb-6 w-full max-h-[80vh] object-contain"
            />
            <h2 className="text-xl font-bold mb-2">{selectedProject.title}</h2>
            {Array.isArray(selectedProject.modalDescription) ? (
                selectedProject.modalDescription.map((item, i) => (
                  <p key={i}>
                    <strong>{item.title}:</strong> {item.text}
                  </p>
                ))
              ) : (
                <p>{selectedProject.modalDescription}</p>
              )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
