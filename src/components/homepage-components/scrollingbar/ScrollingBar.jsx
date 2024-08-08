// react
import { Link } from 'react-router-dom';
import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// components
import scrollingimages from "./scrollingimages";

export default function ScrollingBar() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000, // Increase the speed for smoother scrolling
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Set to 0 for continuous scrolling
    cssEase: "linear", // Use linear easing for smooth scrolling
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full pb-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h1 className="pb-16 text-gray-900
            text-3xl text-center font-bold tracking-tight
            ">與各大香港工會攜手合作</h1>
          <Carousel {...settings} className="container mx-auto pb-8 h-16">
            {scrollingimages.map((image) => (
              <div
                key={image.imageSrc}
                className="px-12 relative h-full w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75"
              >
                <Link to={image.href}>
                  <img
                    src={image.imageSrc}
                    alt={image.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </Link>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
