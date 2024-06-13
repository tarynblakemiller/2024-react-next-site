import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

// Define the type for the carousel data
type CustomCarouselProps = {
  data: {
    image: string;
    alt: string;
  }[];
};

const CustomCarousel: React.FC<CustomCarouselProps> = ({ data }) => {
  return (
    <div>
      <div>
        <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
          {data.map((item, index) => (
            <div style={{ maxWidth: "100%", height: "auto" }} key={index}>
              <Image src={item.image} alt={item.alt} width={200} height={300} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CustomCarousel;
