import Marquee from "react-fast-marquee";
const commonLogoClass = "h-24 sm:h-32 md:h-40 object-contain mt-13"; // adjust size
import image1 from '../../assets/CVSU.png';
import image2 from '../../assets/PUP.png';
import image3 from '../../assets/FEU.png';
import image4 from '../../assets/OLFU.jpg';
import image5 from '../../assets/PLM.jpg';

const brandLogos = [
  <>
    <img
      src={image1}
      alt="CVSU"
      className={commonLogoClass}
    />
  </>,
  <>
    <img
      src={image2}
      alt="PUP"
      className={commonLogoClass}
    />
  </>,
  <>
    <img
      src={image3}
      alt="FEU"
      className={commonLogoClass}
    />
  </>,
  <>
    <img
      src={image4}
      alt="OLFU"
      className={commonLogoClass}
    />
  </>,
  <>
    <img
      src={image5}
      alt="PLM"
      className={commonLogoClass}
    />
  </>,
];


const HappyClients = () => {
  return (
    <div className="content py-10 md:py-25 flex flex-col items-center px-2">
      <div className="max-w-144.25 text-center ">
        <p className="section-title mb-6">Happy Clients</p>
        <p className="text-[14px] sm:text-lg text-soft-dark font-normal">
          I've had the pleasure of working with a diverse range of companies,
          from startups to established brands.
        </p>
      </div>
      <Marquee pauseOnHover gradient={false}>
        {brandLogos.map((logo, i) => (
          <div key={i} className="mx-15">
            {logo}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default HappyClients;
