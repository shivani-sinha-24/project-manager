import React from 'react'
import './HomeCarousel.css'
import caoruselArray from '../../data/CarouselData'
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const HomeCarousel = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 }, // xl screen
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1199.99, min: 992 }, // lg screen
      items: 4,
    },
    mobile: {
      breakpoint: { max: 991.99, min: 768 }, //md screen
      items: 3,
    },
    mobile: {
      breakpoint: { max: 767.99, min: 375 }, //sm screen
      items: 2,
    },
    mobile: {
      breakpoint: { max: 374.99, min: 100 },  //xs screen
      items: 1,
    },

  };
  return (
    <div className='home-carousel'>
      <Carousel 
        arrows={false}
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {
          caoruselArray?.length>0 &&
          caoruselArray?.map(item=>
            <div className="carousel-card"  style={{backgroundColor:item?.backgroundColor}}>
              <div className="card-logo">
                <img src={item?.logo} alt="" />
              </div>
              <div className="card-details">
                <p className="p1">{item?.name}</p>
                <p className="p2">{item.detail}</p>
              </div>
              <div className="card-bottom">
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          )
        }
      </Carousel>
    </div>
  )
}

export default HomeCarousel
