import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import logo1 from "../../Images/logo1.png";
import logo2 from "../../Images/logo2.png";
import logo3 from "../../Images/logo3.png";

function CardCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100" src={logo1} alt="First slide" />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={logo2} alt="Second slide" />

          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={logo3} alt="Third slide" />

          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default CardCarousel;
