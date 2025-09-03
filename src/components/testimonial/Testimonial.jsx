import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import TestimonialTemplate from "./TestimonialTemplate";
import "./testimonial.css";
import testimonial1 from "../../assets/images/Testimonial1.png"
import testimonial2 from "../../assets/images/Testimonial2.png"
import testimonial3 from "../../assets/images/Testimonial3.png"
import testimonial4 from "../../assets/images/Testimonial4.png"
import testimonial5 from "../../assets/images/Testimonial5.jpeg"
import testimonial6 from "../../assets/images/Testimonial6.jpeg"

const testimonialData = [
  {
    quote: `Joining seminars has never been this easy! I love how I can register with just a few clicks and receive my certificate instantly`,
    name: "Anthony A. Seromines",
    designation: "Marketing Professional",
    avatar: testimonial1,
  },
  {
    quote: `Joining seminars has never been this hassle-free! I love how I can register quickly and receive my certificate without any complications.`,
    name: "Katrina O. Jimenez",
    designation: "HR Manager",
    avatar: testimonial3,
  },
  {
    quote: `No more filling out long forms every time I join a seminar! This platform saves so much time and effort.`,
    name: "James Vincent A. Morcillo",
    designation: "IT Specialist",
    avatar: testimonial2,
  },
  {
    quote: `The automatic certification feature is a game-changer. No more waiting for days to receive my certificate!`,
    name: "Paul Jasper L. Gaza",
    designation: "Educator",
    avatar: testimonial4,
  },
  {
    quote: `I highly recommend Tom Oliver Chua! I had the pleasure of working with them on Nihongo N5 class and was consistently impressed by his ability to create innovative translation strategies. He is a true asset to any team.`,
    name: "Adrian Bascafra",
    designation: "Senior Application Developer",
    avatar: testimonial5,
  },
  {
    quote: `I had the opportunity to work with Tom for two months as a junior mobile developer on our team. During this time, he demonstrated a strong willingness to learn and consistently showed improvement in his development skills. While still early in his career, his ability to take direction well and quickly implement feedback stood out. He approached challenges with enthusiasm and showed steady progress in his technical capabilities. His receptiveness to mentorship and dedication to growth make him a promising developer who would be an asset to teams looking for motivated junior talent.`,
    name: "Bill Schrickel",
    designation: "Senior Software Developer at Cleveland Clinic",
    avatar: testimonial6,
  },
];


const Testimonial = () => {
  return (
    <div className="flex mx-auto justify-center px-2 max-w-218 pb-10 md:pb-25">
      <div className="w-full h-full cursor-grab">
        <p className="section-title mb-6 text-center">Testimonial</p>
        <Swiper
          id="testimonialSwiper"
          spaceBetween={30}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialTemplate testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;

