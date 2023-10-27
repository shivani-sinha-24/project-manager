import React, { useEffect, useState } from 'react'
import './HomepageTestimoial.css'
import t2 from '../../assets/logos/testimonial-2.jpeg'

const HomepageTestimoial = () => {

  const marketing ='https://assets.asana.biz/transform/9445b1c7-9e68-42c4-a1f7-164b2a853317/homepagev2-image1-2x-EN';
  const product='https://assets.asana.biz/transform/79bf11ff-f341-4da0-ae70-a93de79e469b/homepagev2-image2-2x-EN';
  const it='https://assets.asana.biz/transform/6c95be55-2d73-405f-9b4e-85450240c78b/homepagev2-image3-2x-EN';
  const operations='https://assets.asana.biz/transform/e118c8ce-887f-4445-949f-305a7ec4ddf6/homepagev2-image4-2x-EN';
  const sales='https://assets.asana.biz/transform/a79665bc-49dc-4b14-a244-bf98ff221df2/homepagev2-image5-2x-EN';

  const [testNum,setTestNum] = useState(1)

  // Use an object to map testNum to the corresponding image URL
  const imageMap = {
    1: marketing,
    2: product,
    3: it,
    4: operations,
    5: sales,
  };

  // Set the initial image URL based on the default testNum
  const [imgLink, setImgLink] = useState(imageMap[testNum]);

  // Update the imgLink whenever testNum changes
  useEffect(() => {
    setImgLink(imageMap[testNum]);
  }, [testNum]);

   // Function to increase testNum and reset to 1 after reaching 5
   const decreaseTestNum = () => {
    setTestNum((prevTestNum) => (prevTestNum === 1 ? 5 : prevTestNum - 1));
  };

    // Function to increase testNum and reset to 1 after reaching 5
    const increaseTestNum = () => {
      setTestNum((prevTestNum) => (prevTestNum === 5 ? 1 : prevTestNum + 1));
    };
  
    // Set up the interval to change testNum every 5 seconds
    useEffect(() => {
      const intervalId = setInterval(increaseTestNum, 5000);
  
      // Clear the interval when the component unmounts
      return () => clearInterval(intervalId);
    }, []);

  return (
    <div className='homepage-testimoial'>
      <div className="homepage-testimoial-left">
        <div className="top">
          The best platform for cross-functional work
        </div>
        <hr />
        <div className="middle">
        Want to drive efficiency across your organization? My Project Manager is flexible and easy for all teams to use, so you can deliver quality work together, faster.
        </div>
        <div className="bottom">
          <button className='btn1'>Get Started</button>
          <button className='btn2'>See how it works</button>
        </div>
      </div>
      <div className="homepage-testimoial-right">
        <div className="top">
          <div className='marketing' onClick={()=>setTestNum(1)} style={{backgroundColor:testNum==1 && '#F06A6A'}}>Marketing</div>
          <div className='product' onClick={()=>setTestNum(2)} style={{backgroundColor:testNum==2 && 'rgb(241, 189, 108)'}}>Product</div>
          <div className='it' onClick={()=>setTestNum(3)} style={{backgroundColor:testNum==3 && 'rgb(158, 231, 227)'}}>IT</div>
          <div className='operations' onClick={()=>setTestNum(4)} style={{backgroundColor:testNum==4 && '#796eff'}}>Operations</div>
          <div className='sales' onClick={()=>setTestNum(5)} style={{backgroundColor:testNum==5 && 'rgb(93, 162, 131)'}}>Sales</div>
        </div>
        <div className="middle">
          <img src={imgLink} alt="" />
        </div>
        <div className="bottom">
        <i className="fa-solid fa-arrow-left" onClick={()=>decreaseTestNum()}></i>
        <i className="fa-solid fa-arrow-right" onClick={()=>increaseTestNum()}></i>
        </div>
        <div className="img-md-sm-xs">
          <img src={t2} alt="" />
        </div>
      </div>
    </div>
  )
}

export default HomepageTestimoial
