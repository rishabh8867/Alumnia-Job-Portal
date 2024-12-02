import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { bannerData1, bannerData2 } from "../constants/data";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const secondslider = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

export default function AlumniHighlights() {
  return (
    <>
      <div className="main-div p-3">
        <div className="child-div mb-8">
          <Carousel
            showDots={true}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            customTransition="all 1s ease-in-out"
            transitionDuration={1000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          >
            {bannerData1.map((items) => (
              <div className="second" key={items.id}>
                <img
                  src={items.url}
                  alt="img"
                  className="w-full h-[26rem] rounded-md object-cover"
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="bottom">
        <Carousel
            showDots={false}
            responsive={secondslider}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            customTransition="all 1s ease-in-out"
            transitionDuration={2000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          >
            {bannerData2.map((items) => (
              <div className="second md:mr-5 overflow-hidden " key={items.id}>
                <img
                  src={items.url}
                  alt="img"
                  className="w-full h-52 rounded-lg object-cover"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}
