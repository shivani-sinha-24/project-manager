import React from 'react';
import './HomeImages.css';
import card1 from '../../assets/logos/card1.webp'
import card2 from '../../assets/logos/card2.webp'
import card3 from '../../assets/logos/card3.webp'

const HomeImages = () => {
  const cards = [
    {
      name: 'Start with a template',
      image:card1,
      details: 'See template',
    },
    {
      name: 'See Asana in action',
      image:card2,
      details: 'View demo',
    },
    {
      name: 'Talk with our sales team',
      image:card3,
      details: 'Contact sales',
    },
  ];

  return (
    <div className="home-images">
      <div className="home-images-top">
        <p className="p1">Get started easily</p>
        <p className="p2">
          Whether you want to start with a pre-built template for marketing,
          operations, product, learn more from a demo, or talk to our support
          team, Asana can help with that.
        </p>
      </div>
      <div className="home-images-bottom">
        {cards?.length > 0 &&
          cards?.map((card, index) => (
            <div className="img-card" key={index}>
              <div className="img-card-top" >
                <img src={card?.image} alt="" />
              </div>
              <div className="img-card-bottom">
              <p className="name">{card?.name}</p>
              <div className="detail">
                <span>{card?.details}</span>
                <i className="fa-solid fa-arrow-right fa-xs"></i>
              </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomeImages;
