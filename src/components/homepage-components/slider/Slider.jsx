import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from "../sectiontitle/SectionTitle";
import "./slider.css";
import { useState } from "react";
import Card from "../card/Card";

export default function Slider({ title, objectsArray }) {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3, // Keep this as 3
      slidesToScroll: 1,
      prevArrow: null,
      nextArrow: null,
      responsive: [
        {
          breakpoint: 1536,
          settings: {
            slidesToShow: 3, // Keep this as 3
            slidesToScroll: 1,
            dots: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
          },
        },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
            },
        },
      ],
      customPaging: function (i) {
        const isActiveDot = i === currentSlide;
        const activeWidth = `w-${isActiveDot ? 10 * 3 : 5}`; // 3 slides
        return (
          <div
            className={`h-2 rounded-full transition-all duration-300 ${activeWidth} ${
              isActiveDot
                ? "bg-violet-950 hover:bg-violet-950 focus:bg-violet-950 focus:outline-violet-500 focus:outline-2 focus:outline-offset-2"
                : "bg-violet-200 hover:bg-violet-400 focus:bg-violet-400 focus:outline-violet-300 focus:outline-2 focus:outline-offset-2"
            }`}
          />
        );
      },
      dotsClass: "slick-dots", 
      prevArrowClassName: "slick-prev text-black",
      nextArrowClassName: "slick-next text-black",
      afterChange: (index) => setCurrentSlide(index),
    };

  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <SectionTitle title={title} />
          <Carousel {...settings} className="container mx-auto pb-8">
            {objectsArray.map((object,index) => (
              // <div
              //   key={object.name}
              //   className="text-left py-3 px-6 group relative overflow-hidden"
              // >
              //   <div className="relative
              //   lg:h-[30rem] lg:aspect-h-1 lg:aspect-w-1
              //   sm:h-64 sm:aspect-h-1 sm:aspect-w-2
              //   w-full rounded-lg bg-white group-hover:opacity-75">
              //     <img
              //       src={object.imageSrc}
              //       alt={object.imageAlt}
              //       className="h-full w-full rounded-lg object-cover object-center"
              //     />
              //   </div>
              //   <p className="pt-6 text-xl text-gray-900">
              //     {object.name}
              //   </p>
              //   <MdOutlineButton>
              //     <a href={object.href}>
              //       <span className="absolute inset-0" />
              //           獲取報價
              //     </a>
              //   </MdOutlineButton>
              // </div>
              // <div key={object.name} >
                <Card
                  key={index}
                  name={object.name} 
                  description={object.description}
                  imageSrc={object.imageSrc}
                  imageAlt={object.imageAlt}
                  href={object.href}
                  />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}