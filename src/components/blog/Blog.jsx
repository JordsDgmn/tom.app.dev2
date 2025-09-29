import img1 from "../../assets/images/blog/blog-1.jpg";
import img2 from "../../assets/images/blog/blog-2.jpg";
import img3 from "../../assets/images/blog/blog-3.jpg";
import img4 from "../../assets/images/blog/blog-4.jpg";
import img5 from "../../assets/images/blog/blog-5.jpg"; 
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import MonoBlog from "./MonoBlog";
import "swiper/css";
import "swiper/css/pagination";
import "./blog.css";


const custom_breakpoints = {
  640: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 15,
  },
  1220: {
    slidesPerView: 4,
    spaceBetween: 24,
  },
};

const blogData = [
  {
    id: 1,
    image: img1,
    date: "4 December, 2024",
    comments: 246,
    title: "Recognizing his active involvement and valuable insights during our User Acceptance Testing phase.",
    link: "/Achievements.html",
  },
  {
    id: 2,
    image: img2,
    date: "9 December, 2024",
    comments: 246,
    title: "We sincerely thank Our Lady of Fatima University (OLFU) for inviting Mr. Tom Oliver Chua",
    link: "/Achievements.html",
  },
  {
    id: 3,
    image: img3,
    date: "23 June, 2025",
    comments: 246,
    title: "Being honored by Our Lady of Fatima University for their outstanding contributions",
    link: "/Achievements.html",
  },
  {
    id: 4,
    image: img4,
    date: "09 July, 2025",
    comments: 246,
    title: "We extend our gratitude to the university for recognizing Supsoft Technologies and Mr. Tom Oliver Chua",
    link: "/Achievements.html",
  },
  {
    id: 5,
    image: img5,
    date: "22 Oct, 2020",
    comments: 246,
    title: "We thank FEU Institute of Technology for the privilege of having Mr/ as a Plenary Speaker at 'Technofair and Pitch Presentation Day 2.",
    link: "/Achievements.html",
  }
];

const Blog = () => {
  return (
    <div className="content py-25 px-2 relative" id="blog">
      <div className="max-w-135 text-center mx-auto pb-17.5">
        <p className="section-title pb-6 text-white">Achievements</p>
        <p className="text-xs xs:text-[16px] md:text-lg text-white">
          Explore my portfolio to see highlights of my achievements in design, 
          development, and contributions to industry innovations.
        </p>
      </div>
      <Swiper
        grabCursor={true}
        breakpoints={custom_breakpoints}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {blogData?.map((data, index) => (
          <SwiperSlide
            key={index}
            className="mb-10" /* pagination margin bottom to 40px */
            style={{ backgroundColor: "rgba(0,0,0,0)" }}
          >
            <MonoBlog data={data} key={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Blog;

