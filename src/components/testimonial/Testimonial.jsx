import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import TestimonialTemplate from "./TestimonialTemplate";
import "./testimonial.css";

const testimonialData = [
  {

    quote: `Joining seminars has never been this easy! I love how I can register with just a few clicks and receive my certificate instantly`,
    name: "Anthony A. Seromines",
    designation: "Marketing Professional",
  },
  {

    quote: `Joining seminars has never been this hassle-free! I love how I can register quickly and receive my certificate without any complications.`,
    name: "Katrina O. Jimenez",
    designation: "HR Manager",
  },
  {

    quote: `No more filling out long forms every time I join a seminar! This platform saves so much time and effort.`,
    name: "James Vincent A. Morcillo",
    designation: "IT Specialist",
  },

  {

    quote: `The automatic certification feature is a game-changer. No more waiting for days to receive my certificate!
`,
    name: "Paul Jasper L. Gaza",
    designation: "Educator",
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

