import React from 'react'
import './HomeCarousel.css'
import caoruselArray from '../../data/CarouselData'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const HomeCarousel = () => {

  // Function to split the array into chunks of equal length for lg screen
  const splitArrayIntoChunks = (arr, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  };

  // Split the array into four arrays of equal lengths
  const chunkSize = Math.ceil(caoruselArray.length / 4);
  const arrayOfArrays = splitArrayIntoChunks(caoruselArray, chunkSize);

  // arrayOfArrays will now contain four arrays, each with an equal or almost equal number of elements.
  // You can access each array as follows:
  const firstArray = arrayOfArrays[0];
  const secondArray = arrayOfArrays[1];
  const thirdArray = arrayOfArrays[2];
  const fourthArray = arrayOfArrays[3];

  // Function to split the array into chunks of equal length for md screen
  const splitArrayIntoChunksMd = (arr, chunkSizeMd) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSizeMd) {
      chunks.push(arr.slice(i, i + chunkSizeMd));
    }
    return chunks;
  };

  // Split the array into four arrays of equal lengths
  const chunkSizeMd = Math.ceil(caoruselArray.length / 7);
  const arrayOfArraysMd = splitArrayIntoChunksMd(caoruselArray, chunkSizeMd);

  // arrayOfArraysMd will now contain four arrays, each with an equal or almost equal number of elements.
  // You can access each array as follows:
  const firstArrayMd = arrayOfArraysMd[0];
  const secondArrayMd = arrayOfArraysMd[1];
  const thirdArrayMd = arrayOfArraysMd[2];
  const fourthArrayMd = arrayOfArraysMd[3];
  const fifthArrayMd = arrayOfArraysMd[4];
  const sixthArrayMd = arrayOfArraysMd[5];
  const seventhArrayMd = arrayOfArraysMd[6];

  // Function to split the array into chunks of equal length for sm screen
  const splitArrayIntoChunksSm = (arr, chunkSizeSm) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSizeSm) {
      chunks.push(arr.slice(i, i + chunkSizeSm));
    }
    return chunks;
  };

  // Split the array into four arrays of equal lengths
  const chunkSizeSm = Math.ceil(caoruselArray.length / 10);
  const arrayOfArraysSm = splitArrayIntoChunksSm(caoruselArray, chunkSizeSm);

  // arrayOfArraysSm will now contain four arrays, each with an equal or almost equal number of elements.
  // You can access each array as follows:
  const firstArraySm = arrayOfArraysSm[0];
  const secondArraySm = arrayOfArraysSm[1];
  const thirdArraySm = arrayOfArraysSm[2];
  const fourthArraySm = arrayOfArraysSm[3];
  const fifthArraySm = arrayOfArraysSm[4];
  const sixthArraySm = arrayOfArraysSm[5];
  const seventhArraySm = arrayOfArraysSm[6];
  const eigthArraySm = arrayOfArraysSm[7];
  const ninethArraySm = arrayOfArraysSm[8];
  const tenthArraySm = arrayOfArraysSm[9];

  // Function to split the array into chunks of equal length for sm screen
  const splitArrayIntoChunksXs = (arr, chunkSizeXs) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSizeXs) {
      chunks.push(arr.slice(i, i + chunkSizeXs));
    }
    return chunks;
  };

  // Split the array into four arrays of equal lengths
  const chunkSizeXs = Math.ceil(caoruselArray.length / 20);
  const arrayOfArraysXs = splitArrayIntoChunksXs(caoruselArray, chunkSizeXs);

  // arrayOfArraysXs will now contain four arrays, each with an equal or almost equal number of elements.
  // You can access each array as follows:
  const firstArrayXs = arrayOfArraysXs[0];
  const secondArrayXs = arrayOfArraysXs[1];
  const thirdArrayXs = arrayOfArraysXs[2];
  const fourthArrayXs = arrayOfArraysXs[3];
  const fifthArrayXs = arrayOfArraysXs[4];
  const sixthArrayXs = arrayOfArraysXs[5];
  const seventhArrayXs = arrayOfArraysXs[6];
  const eigthArrayXs = arrayOfArraysXs[7];
  const ninethArrayXs = arrayOfArraysXs[8];
  const tenthArrayXs = arrayOfArraysXs[9];
  const eleventhArrayXs = arrayOfArraysXs[10];
  const twelvethArrayXs = arrayOfArraysXs[11];
  const thirteenthArrayXs = arrayOfArraysXs[12];
  const fourteenthArrayXs = arrayOfArraysXs[13];
  const fifteenthArrayXs = arrayOfArraysXs[14];
  const sixteenthArrayXs = arrayOfArraysXs[15];
  const seventeenthArrayXs = arrayOfArraysXs[16];
  const eigtheenthArrayXs = arrayOfArraysXs[17];
  const ninetennthArrayXs = arrayOfArraysXs[18];
  const twentythArrayXs = arrayOfArraysXs[19];
  return (
    <div className='home-carousel'>
      <div className="lg">
      <Carousel 
        autoPlay={true}
        infiniteLoop={true}
        showArrows={false}
        stopOnHover={true}
        transitionTime={30000}
        interval={30001}
        renderIndicator={false}
        showStatus={false}
        swipeable={true}
      >
        <div className="slides">
        <div className="carousel-container">  
          {
            firstArray?.length>0 &&
            firstArray?.map(item=>
              <div className="carousel-card">
                <div className="card-logo">
                  <img src={item?.logo} alt="" />
                </div>
                <div className="card-details">
                  <p className="p1">{item?.name}</p>
                  <p className="p2">{item.detail}</p>
                </div>
                <div className="card-bottom">
                  <i class="fa-solid fa-arrow-up"></i>
                </div>
              </div>
              )
            }
        </div>
        </div>
        <div className="slides">
        <div className="carousel-container">  
        {
          secondArray?.length>0 &&
          secondArray?.map(item=>
            <div className="carousel-card">
              <div className="card-logo">
                <img src={item?.logo} alt="" />
              </div>
              <div className="card-details">
                <p className="p1">{item?.name}</p>
                <p className="p2">{item.detail}</p>
              </div>
              <div className="card-bottom">
                <i class="fa-solid fa-arrow-up"></i>
              </div>
            </div>
            )
          }
        </div>
        </div>
        <div className="slides">
        <div className="carousel-container">  
        {
          thirdArray?.length>0 &&
          thirdArray?.map(item=>
            <div className="carousel-card">
              <div className="card-logo">
                <img src={item?.logo} alt="" />
              </div>
              <div className="card-details">
                <p className="p1">{item?.name}</p>
                <p className="p2">{item.detail}</p>
              </div>
              <div className="card-bottom">
                <i class="fa-solid fa-arrow-up"></i>
              </div>
            </div>
            )
          }
        </div>
        </div>
        <div className="slides">
        <div className="carousel-container">  
        {
          fourthArray?.length>0 &&
          fourthArray?.map(item=>
            <div className="carousel-card">
              <div className="card-logo">
                <img src={item?.logo} alt="" />
              </div>
              <div className="card-details">
                <p className="p1">{item?.name}</p>
                <p className="p2">{item.detail}</p>
              </div>
              <div className="card-bottom">
                <i class="fa-solid fa-arrow-up"></i>
              </div>
            </div>
            )
          }
        </div>
        </div>
      </Carousel>
      </div>
      <div className="md">
      <Carousel 
        autoPlay={true}
        infiniteLoop={true}
        showArrows={false}
        stopOnHover={true}
        transitionTime={30000}
        interval={30001}
        renderIndicator={false}
        showStatus={false}
        swipeable={true}
      >
        <div className="slides">
        <div className="carousel-container">  
          {
            firstArrayMd?.length>0 &&
            firstArrayMd?.map(item=>
              <div className="carousel-card">
                <div className="card-logo">
                  <img src={item?.logo} alt="" />
                </div>
                <div className="card-details">
                  <p className="p1">{item?.name}</p>
                  <p className="p2">{item.detail}</p>
                </div>
                <div className="card-bottom">
                  <i class="fa-solid fa-arrow-up"></i>
                </div>
              </div>
              )
            }
        </div>
        </div>
        <div className="slides">
        <div className="carousel-container">  
        {
          secondArrayMd?.length>0 &&
          secondArrayMd?.map(item=>
            <div className="carousel-card">
              <div className="card-logo">
                <img src={item?.logo} alt="" />
              </div>
              <div className="card-details">
                <p className="p1">{item?.name}</p>
                <p className="p2">{item.detail}</p>
              </div>
              <div className="card-bottom">
                <i class="fa-solid fa-arrow-up"></i>
              </div>
            </div>
            )
          }
        </div>
        </div>
        <div className="slides">
        <div className="carousel-container">  
        {
          thirdArrayMd?.length>0 &&
          thirdArrayMd?.map(item=>
            <div className="carousel-card">
              <div className="card-logo">
                <img src={item?.logo} alt="" />
              </div>
              <div className="card-details">
                <p className="p1">{item?.name}</p>
                <p className="p2">{item.detail}</p>
              </div>
              <div className="card-bottom">
                <i class="fa-solid fa-arrow-up"></i>
              </div>
            </div>
            )
          }
        </div>
        </div>
        <div className="slides">
        <div className="carousel-container">  
        {
          fourthArrayMd?.length>0 &&
          fourthArrayMd?.map(item=>
            <div className="carousel-card">
              <div className="card-logo">
                <img src={item?.logo} alt="" />
              </div>
              <div className="card-details">
                <p className="p1">{item?.name}</p>
                <p className="p2">{item.detail}</p>
              </div>
              <div className="card-bottom">
                <i class="fa-solid fa-arrow-up"></i>
              </div>
            </div>
            )
          }
        </div>
        </div>
        
        <div className="slides">
        <div className="carousel-container">  
        {
          fifthArrayMd?.length>0 &&
          fifthArrayMd?.map(item=>
            <div className="carousel-card">
              <div className="card-logo">
                <img src={item?.logo} alt="" />
              </div>
              <div className="card-details">
                <p className="p1">{item?.name}</p>
                <p className="p2">{item.detail}</p>
              </div>
              <div className="card-bottom">
                <i class="fa-solid fa-arrow-up"></i>
              </div>
            </div>
            )
          }
        </div>
        </div>
        
        <div className="slides">
        <div className="carousel-container">  
        {
          sixthArrayMd?.length>0 &&
          sixthArrayMd?.map(item=>
            <div className="carousel-card">
              <div className="card-logo">
                <img src={item?.logo} alt="" />
              </div>
              <div className="card-details">
                <p className="p1">{item?.name}</p>
                <p className="p2">{item.detail}</p>
              </div>
              <div className="card-bottom">
                <i class="fa-solid fa-arrow-up"></i>
              </div>
            </div>
            )
          }
        </div>
        </div>
        
        <div className="slides">
        <div className="carousel-container">  
        {
          seventhArrayMd?.length>0 &&
          seventhArrayMd?.map(item=>
            <div className="carousel-card">
              <div className="card-logo">
                <img src={item?.logo} alt="" />
              </div>
              <div className="card-details">
                <p className="p1">{item?.name}</p>
                <p className="p2">{item.detail}</p>
              </div>
              <div className="card-bottom">
                <i class="fa-solid fa-arrow-up"></i>
              </div>
            </div>
            )
          }
        </div>
        </div>
      </Carousel>
      </div>
      <div className="sm">
      <Carousel 
        autoPlay={true}
        infiniteLoop={true}
        showArrows={false}
        stopOnHover={true}
        transitionTime={30000}
        interval={30001}
        renderIndicator={false}
        showStatus={false}
        swipeable={true}
      >
        <div className="slides">
        <div className="carousel-container">  
          {
            firstArraySm?.length>0 &&
            firstArraySm?.map(item=>
              <div className="carousel-card">
                <div className="card-logo">
                  <img src={item?.logo} alt="" />
                </div>
                <div className="card-details">
                  <p className="p1">{item?.name}</p>
                  <p className="p2">{item.detail}</p>
                </div>
                <div className="card-bottom">
                  <i class="fa-solid fa-arrow-up"></i>
                </div>
              </div>
              )
            }
        </div>
        </div>
        <div className="slides">
        <div className="carousel-container">  
        {
          secondArraySm?.length>0 &&
          secondArraySm?.map(item=>
            <div className="carousel-card">
              <div className="card-logo">
                <img src={item?.logo} alt="" />
              </div>
              <div className="card-details">
                <p className="p1">{item?.name}</p>
                <p className="p2">{item.detail}</p>
              </div>
              <div className="card-bottom">
                <i class="fa-solid fa-arrow-up"></i>
              </div>
            </div>
            )
          }
        </div>
        </div>
        <div className="slides">
        <div className="carousel-container">  
        {
          thirdArraySm?.length>0 &&
          thirdArraySm?.map(item=>
            <div className="carousel-card">
              <div className="card-logo">
                <img src={item?.logo} alt="" />
              </div>
              <div className="card-details">
                <p className="p1">{item?.name}</p>
                <p className="p2">{item.detail}</p>
              </div>
              <div className="card-bottom">
                <i class="fa-solid fa-arrow-up"></i>
              </div>
            </div>
            )
          }
        </div>
        </div>
        <div className="slides">
        <div className="carousel-container">  
        {
          fourthArraySm?.length>0 &&
          fourthArraySm?.map(item=>
            <div className="carousel-card">
              <div className="card-logo">
                <img src={item?.logo} alt="" />
              </div>
              <div className="card-details">
                <p className="p1">{item?.name}</p>
                <p className="p2">{item.detail}</p>
              </div>
              <div className="card-bottom">
                <i class="fa-solid fa-arrow-up"></i>
              </div>
            </div>
            )
          }
        </div>
        </div>
        
        <div className="slides">
        <div className="carousel-container">  
        {
          fifthArraySm?.length>0 &&
          fifthArraySm?.map(item=>
            <div className="carousel-card">
              <div className="card-logo">
                <img src={item?.logo} alt="" />
              </div>
              <div className="card-details">
                <p className="p1">{item?.name}</p>
                <p className="p2">{item.detail}</p>
              </div>
              <div className="card-bottom">
                <i class="fa-solid fa-arrow-up"></i>
              </div>
            </div>
            )
          }
        </div>
        </div>
        
        <div className="slides">
        <div className="carousel-container">  
        {
          sixthArraySm?.length>0 &&
          sixthArraySm?.map(item=>
            <div className="carousel-card">
              <div className="card-logo">
                <img src={item?.logo} alt="" />
              </div>
              <div className="card-details">
                <p className="p1">{item?.name}</p>
                <p className="p2">{item.detail}</p>
              </div>
              <div className="card-bottom">
                <i class="fa-solid fa-arrow-up"></i>
              </div>
            </div>
            )
          }
        </div>
        </div>
        
        <div className="slides">
        <div className="carousel-container">  
        {
          seventhArraySm?.length>0 &&
          seventhArraySm?.map(item=>
            <div className="carousel-card">
              <div className="card-logo">
                <img src={item?.logo} alt="" />
              </div>
              <div className="card-details">
                <p className="p1">{item?.name}</p>
                <p className="p2">{item.detail}</p>
              </div>
              <div className="card-bottom">
                <i class="fa-solid fa-arrow-up"></i>
              </div>
            </div>
            )
          }
        </div>
        </div>
        
        <div className="slides">
        <div className="carousel-container">  
        {
          eigthArraySm?.length>0 &&
          seventhArraySm?.map(item=>
            <div className="carousel-card">
              <div className="card-logo">
                <img src={item?.logo} alt="" />
              </div>
              <div className="card-details">
                <p className="p1">{item?.name}</p>
                <p className="p2">{item.detail}</p>
              </div>
              <div className="card-bottom">
                <i class="fa-solid fa-arrow-up"></i>
              </div>
            </div>
            )
          }
        </div>
        </div>
        
        <div className="slides">
        <div className="carousel-container">  
        {
          ninethArraySm?.length>0 &&
          ninethArraySm?.map(item=>
            <div className="carousel-card">
              <div className="card-logo">
                <img src={item?.logo} alt="" />
              </div>
              <div className="card-details">
                <p className="p1">{item?.name}</p>
                <p className="p2">{item.detail}</p>
              </div>
              <div className="card-bottom">
                <i class="fa-solid fa-arrow-up"></i>
              </div>
            </div>
            )
          }
        </div>
        </div>
        
        <div className="slides">
        <div className="carousel-container">  
        {
          tenthArraySm?.length>0 &&
          tenthArraySm?.map(item=>
            <div className="carousel-card">
              <div className="card-logo">
                <img src={item?.logo} alt="" />
              </div>
              <div className="card-details">
                <p className="p1">{item?.name}</p>
                <p className="p2">{item.detail}</p>
              </div>
              <div className="card-bottom">
                <i class="fa-solid fa-arrow-up"></i>
              </div>
            </div>
            )
          }
        </div>
        </div>
      </Carousel>
      </div>
      <div className="xs">
      <Carousel 
        autoPlay={true}
        infiniteLoop={true}
        showArrows={false}
        stopOnHover={true}
        transitionTime={30000}
        interval={30001}
        renderIndicator={false}
        showStatus={false}
        swipeable={true}
      >
        <div className="slides">
        <div className="carousel-container">  
          {
            firstArrayXs?.length>0 &&
            firstArrayXs?.map(item=>
              <div className="carousel-card">
                <div className="card-logo">
                  <img src={item?.logo} alt="" />
                </div>
                <div className="card-details">
                  <p className="p1">{item?.name}</p>
                  <p className="p2">{item.detail}</p>
                </div>
                <div className="card-bottom">
                  <i class="fa-solid fa-arrow-up"></i>
                </div>
              </div>
              )
            }
        </div>
        </div>
        <div className="slides">
        <div className="carousel-container">  
        {
          secondArrayXs?.length>0 &&
          secondArrayXs?.map(item=>
            <div className="carousel-card">
              <div className="card-logo">
                <img src={item?.logo} alt="" />
              </div>
              <div className="card-details">
                <p className="p1">{item?.name}</p>
                <p className="p2">{item.detail}</p>
              </div>
              <div className="card-bottom">
                <i class="fa-solid fa-arrow-up"></i>
              </div>
            </div>
            )
          }
        </div>
        </div>
        <div className="slides">
        <div className="carousel-container">  
        {
          thirdArrayXs?.length>0 &&
          thirdArrayXs?.map(item=>
            <div className="carousel-card">
              <div className="card-logo">
                <img src={item?.logo} alt="" />
              </div>
              <div className="card-details">
                <p className="p1">{item?.name}</p>
                <p className="p2">{item.detail}</p>
              </div>
              <div className="card-bottom">
                <i class="fa-solid fa-arrow-up"></i>
              </div>
            </div>
            )
          }
        </div>
        </div>
        <div className="slides">
        <div className="carousel-container">  
        {
          fourthArrayXs?.length>0 &&
          fourthArrayXs?.map(item=>
            <div className="carousel-card">
              <div className="card-logo">
                <img src={item?.logo} alt="" />
              </div>
              <div className="card-details">
                <p className="p1">{item?.name}</p>
                <p className="p2">{item.detail}</p>
              </div>
              <div className="card-bottom">
                <i class="fa-solid fa-arrow-up"></i>
              </div>
            </div>
            )
          }
        </div>
        </div>   
        <div className="slides">
        <div className="carousel-container">  
        {
          fifthArrayXs?.length>0 &&
          fifthArrayXs?.map(item=>
            <div className="carousel-card">
              <div className="card-logo">
                <img src={item?.logo} alt="" />
              </div>
              <div className="card-details">
                <p className="p1">{item?.name}</p>
                <p className="p2">{item.detail}</p>
              </div>
              <div className="card-bottom">
                <i class="fa-solid fa-arrow-up"></i>
              </div>
            </div>
            )
          }
        </div>
        </div>
        <div className="slides">
        <div className="carousel-container">  
        {
          sixthArrayXs?.length>0 &&
          sixthArrayXs?.map(item=>
            <div className="carousel-card">
              <div className="card-logo">
                <img src={item?.logo} alt="" />
              </div>
              <div className="card-details">
                <p className="p1">{item?.name}</p>
                <p className="p2">{item.detail}</p>
              </div>
              <div className="card-bottom">
                <i class="fa-solid fa-arrow-up"></i>
              </div>
            </div>
            )
          }
        </div>
        </div>        
        <div className="slides">
        <div className="carousel-container">  
        {
          seventhArrayXs?.length>0 &&
          seventhArrayXs?.map(item=>
            <div className="carousel-card">
              <div className="card-logo">
                <img src={item?.logo} alt="" />
              </div>
              <div className="card-details">
                <p className="p1">{item?.name}</p>
                <p className="p2">{item.detail}</p>
              </div>
              <div className="card-bottom">
                <i class="fa-solid fa-arrow-up"></i>
              </div>
            </div>
            )
          }
        </div>
        </div>       
        <div className="slides">
        <div className="carousel-container">  
        {
          eigthArrayXs?.length>0 &&
          seventhArrayXs?.map(item=>
            <div className="carousel-card">
              <div className="card-logo">
                <img src={item?.logo} alt="" />
              </div>
              <div className="card-details">
                <p className="p1">{item?.name}</p>
                <p className="p2">{item.detail}</p>
              </div>
              <div className="card-bottom">
                <i class="fa-solid fa-arrow-up"></i>
              </div>
            </div>
            )
          }
        </div>
        </div>       
        <div className="slides">
        <div className="carousel-container">  
        {
          ninethArrayXs?.length>0 &&
          ninethArrayXs?.map(item=>
            <div className="carousel-card">
              <div className="card-logo">
                <img src={item?.logo} alt="" />
              </div>
              <div className="card-details">
                <p className="p1">{item?.name}</p>
                <p className="p2">{item.detail}</p>
              </div>
              <div className="card-bottom">
                <i class="fa-solid fa-arrow-up"></i>
              </div>
            </div>
            )
          }
        </div>
        </div>        
        <div className="slides">
        <div className="carousel-container">  
        {
          tenthArrayXs?.length>0 &&
          tenthArrayXs?.map(item=>
            <div className="carousel-card">
              <div className="card-logo">
                <img src={item?.logo} alt="" />
              </div>
              <div className="card-details">
                <p className="p1">{item?.name}</p>
                <p className="p2">{item.detail}</p>
              </div>
              <div className="card-bottom">
                <i class="fa-solid fa-arrow-up"></i>
              </div>
            </div>
            )
          }
        </div>
        </div>
        <div className="slides">
        <div className="carousel-container">  
          {
            eleventhArrayXs?.length>0 &&
            eleventhArrayXs?.map(item=>
              <div className="carousel-card">
                <div className="card-logo">
                  <img src={item?.logo} alt="" />
                </div>
                <div className="card-details">
                  <p className="p1">{item?.name}</p>
                  <p className="p2">{item.detail}</p>
                </div>
                <div className="card-bottom">
                  <i class="fa-solid fa-arrow-up"></i>
                </div>
              </div>
              )
            }
        </div>
        </div>
        <div className="slides">
        <div className="carousel-container">  
        {
          twelvethArrayXs?.length>0 &&
          twelvethArrayXs?.map(item=>
            <div className="carousel-card">
              <div className="card-logo">
                <img src={item?.logo} alt="" />
              </div>
              <div className="card-details">
                <p className="p1">{item?.name}</p>
                <p className="p2">{item.detail}</p>
              </div>
              <div className="card-bottom">
                <i class="fa-solid fa-arrow-up"></i>
              </div>
            </div>
            )
          }
        </div>
        </div>
        <div className="slides">
        <div className="carousel-container">  
        {
          thirteenthArrayXs?.length>0 &&
          thirteenthArrayXs?.map(item=>
            <div className="carousel-card">
              <div className="card-logo">
                <img src={item?.logo} alt="" />
              </div>
              <div className="card-details">
                <p className="p1">{item?.name}</p>
                <p className="p2">{item.detail}</p>
              </div>
              <div className="card-bottom">
                <i class="fa-solid fa-arrow-up"></i>
              </div>
            </div>
            )
          }
        </div>
        </div>
        <div className="slides">
        <div className="carousel-container">  
        {
          fourteenthArrayXs?.length>0 &&
          fourteenthArrayXs?.map(item=>
            <div className="carousel-card">
              <div className="card-logo">
                <img src={item?.logo} alt="" />
              </div>
              <div className="card-details">
                <p className="p1">{item?.name}</p>
                <p className="p2">{item.detail}</p>
              </div>
              <div className="card-bottom">
                <i class="fa-solid fa-arrow-up"></i>
              </div>
            </div>
            )
          }
        </div>
        </div>   
        <div className="slides">
        <div className="carousel-container">  
        {
          fifteenthArrayXs?.length>0 &&
          fifteenthArrayXs?.map(item=>
            <div className="carousel-card">
              <div className="card-logo">
                <img src={item?.logo} alt="" />
              </div>
              <div className="card-details">
                <p className="p1">{item?.name}</p>
                <p className="p2">{item.detail}</p>
              </div>
              <div className="card-bottom">
                <i class="fa-solid fa-arrow-up"></i>
              </div>
            </div>
            )
          }
        </div>
        </div>
        <div className="slides">
        <div className="carousel-container">  
        {
          sixteenthArrayXs?.length>0 &&
          sixteenthArrayXs?.map(item=>
            <div className="carousel-card">
              <div className="card-logo">
                <img src={item?.logo} alt="" />
              </div>
              <div className="card-details">
                <p className="p1">{item?.name}</p>
                <p className="p2">{item.detail}</p>
              </div>
              <div className="card-bottom">
                <i class="fa-solid fa-arrow-up"></i>
              </div>
            </div>
            )
          }
        </div>
        </div>        
        <div className="slides">
        <div className="carousel-container">  
        {
          seventeenthArrayXs?.length>0 &&
          seventeenthArrayXs?.map(item=>
            <div className="carousel-card">
              <div className="card-logo">
                <img src={item?.logo} alt="" />
              </div>
              <div className="card-details">
                <p className="p1">{item?.name}</p>
                <p className="p2">{item.detail}</p>
              </div>
              <div className="card-bottom">
                <i class="fa-solid fa-arrow-up"></i>
              </div>
            </div>
            )
          }
        </div>
        </div>       
        <div className="slides">
        <div className="carousel-container">  
        {
          eigtheenthArrayXs?.length>0 &&
          eigtheenthArrayXs?.map(item=>
            <div className="carousel-card">
              <div className="card-logo">
                <img src={item?.logo} alt="" />
              </div>
              <div className="card-details">
                <p className="p1">{item?.name}</p>
                <p className="p2">{item.detail}</p>
              </div>
              <div className="card-bottom">
                <i class="fa-solid fa-arrow-up"></i>
              </div>
            </div>
            )
          }
        </div>
        </div>       
        <div className="slides">
        <div className="carousel-container">  
        {
          ninetennthArrayXs?.length>0 &&
          ninetennthArrayXs?.map(item=>
            <div className="carousel-card">
              <div className="card-logo">
                <img src={item?.logo} alt="" />
              </div>
              <div className="card-details">
                <p className="p1">{item?.name}</p>
                <p className="p2">{item.detail}</p>
              </div>
              <div className="card-bottom">
                <i class="fa-solid fa-arrow-up"></i>
              </div>
            </div>
            )
          }
        </div>
        </div>        
        <div className="slides">
        <div className="carousel-container">  
        {
          twentythArrayXs?.length>0 &&
          twentythArrayXs?.map(item=>
            <div className="carousel-card">
              <div className="card-logo">
                <img src={item?.logo} alt="" />
              </div>
              <div className="card-details">
                <p className="p1">{item?.name}</p>
                <p className="p2">{item.detail}</p>
              </div>
              <div className="card-bottom">
                <i class="fa-solid fa-arrow-up"></i>
              </div>
            </div>
            )
          }
        </div>
        </div>
      </Carousel>
      </div>
    </div>
  )
}

export default HomeCarousel
