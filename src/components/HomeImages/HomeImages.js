import React, { useState } from 'react';
import './HomeImages.css';
import card1 from '../../assets/logos/card1.webp'
import card2 from '../../assets/logos/card2.webp'
import card3 from '../../assets/logos/card3.webp'
import pd from '../../assets/logos/p-d.jpeg'
import itr from '../../assets/logos/itr.jpeg'
import cp from '../../assets/logos/cp.jpeg'
import ontrack from '../../assets/logos/ontrack.jpeg'
import offtrack from '../../assets/logos/offtrack.jpeg'
import atrisk from '../../assets/logos/atrisk.jpeg'
import c1 from '../../assets/logos/c1.jpeg'
import c2 from '../../assets/logos/c2.jpeg'
import c3 from '../../assets/logos/c3.jpeg'
import c4 from '../../assets/logos/c4.jpeg'
import c5 from '../../assets/logos/c5.jpeg'
import c6 from '../../assets/logos/c6.jpeg'

const HomeImages = () => {

  const cards = [
    {
      name: 'Start with a template',
      image:card1,
      details: 'See template',
    },
    {
      name: 'See Dousoft in action',
      image:card2,
      details: 'View demo',
    },
    {
      name: 'Talk with our sales team',
      image:card3,
      details: 'Contact sales',
    },
  ];

  // dynamic work flow
  const wfs = [
    {
      img:pd
    },
    {
      img:itr
    },
    {
      img:cp
    },
  ]
  const [workFlow,setWorkFlow] = useState(1)
  const wfDetail = wfs[workFlow-1]

  // dynamic reports
  const reports = [
    {
      clr:'#5DA283',
      img:ontrack
    },
    {
      clr:'#F1BD6C',
      img:atrisk
    },
    {
      clr:'#F06A6A',
      img:offtrack
    },
  ]
  const [reportNum,setReportNum] = useState(1)
  const reportDetail = reports[reportNum-1]

  // dynamic reviews
  const reviews = [
    {
      review:`"I cannot stress how important it is to have all of our informationin one central place. We use Dousoft to capture all of our documents, notes, and next steps so we keep consistency."`,
      by:'Ashlee George// Associate Director at Impact Justice',
      img:c2
    },
    {
      review:`"We wouldn't have such a great connection with different departments if we weren't for Dousoft. I can interact with the engineers directly and establish working relationships, and that collaboration has been extremely been valuable."`,
      by:'Kyler Rose// Marketing Services Manager',
      img:c3
    },
    {
      review:`"With Dousoft, we save an estimated 50hours per week that used to be spent answering email and attending check-in meetings."`,
      by:'Jamie chappell// Creative Director',
      img:c4
    },
    {
      review:`"From the C level down to each and every individual contributor of the company, everybody uses Dousoft...It's increasing our productivity."`,
      by:'Jon Hofamnn// Director of Strategy at Viessmann',
      img:c5
    },
    {
      review:`"In government we have no shortage of challenges, but there are a lot of things we can control. There are processes that we can improve upon and refine. Tools like Dousoft are what allow us to do better."`,
      by:'Mayor Jorge Elorza// City of Providence',
      img:c6
    },
    {
      review:`"New employees can look at the Creative Requests board, and immediately understand what the entire marketing team is working on without having to ask."`,
      by:'Kerry Hoffamn// Head of Global Project Management & Ops, Marketing, ClassPass',
      img:c1
    },
  ]
  const [reviewNum,setReviewNum] = useState(1)

  const nextReview = ()=>{
    reviewNum===6?setReviewNum(1):setReviewNum(reviewNum+1)
  }
  const prevReview = ()=>{
    reviewNum===1?setReviewNum(6):setReviewNum(reviewNum-1)
  }

  const review = reviews[reviewNum-1];

  return (
    <div className="home-images">
      <div className="home-images-top">
        <p className="p1">Get started easily</p>
        <p className="p2">
          Whether you want to start with a pre-built template for marketing,
          operations, product, learn more from a demo, or talk to our support
          team, Dousoft can help with that.
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
      <div className="work-flow">
        <div className="wf-top">
          <p className="p1">WORKFLOW MANAGEMENT</p>
          <p className="p2">Customize your worlflows</p>
        </div>
        <div className="wf-middle">
          <button 
            style={{
              color : workFlow === 1 ? 'black': 'white',
              backgroundColor:workFlow === 1 ? 'white': 'black',
              border:workFlow === 1 ? 'white': '1px solid grey',
            }} 
            onClick={()=>setWorkFlow(1)}
          >PRODUCT DEVELOPMENT</button>
          <button 
            style={{
              color : workFlow === 2 ? 'black': 'white',
              backgroundColor:workFlow === 2 ? 'white': 'black',
              border:workFlow === 2 ? 'white': '1px solid grey',
            }} 
            onClick={()=>setWorkFlow(2 )}
          >IT REQUESTS</button>
          <button 
            style={{
              color : workFlow === 3 ? 'black': 'white',
              backgroundColor:workFlow === 3 ? 'white': 'black',
              border:workFlow === 3 ? 'white': '1px solid grey',
            }} 
            onClick={()=>setWorkFlow(3 )}
          >CREATIVE PRODUCTION</button>
        </div>
        <div className="wf-images">
          <img src={wfDetail?.img} alt="" />
        </div>
        <hr />
        <div className="wf-bottom">
            <p className="p1">From creative production to customer onboarding and everything in between, rum workflows that work for you.</p>
            <p className="p2"> Explore Workflow Builder <i className='fa-solid fa-arrow-right'></i></p>
            <hr className='btm-hr'/>
        </div>

      </div>
      <div className="reporting">
        <div className="reporting-top">
          <p className="p1">REPORTING</p>
          <p className="p2">Get the whole picture.Finally.</p>
          <p className="p3">Keep an eye on team's progress and workload. Get real-time charts and other visual highlights to share status, spot potential problems, and keep work on track.</p>
          <div className="buttons">
            <button onClick={()=>setReportNum(1)}
              style={{
                color:reportNum===1?reportDetail.clr:'black',
                boxShadow:reportNum===1 && '2px 2px 5px 2px rgba(0, 0, 0, 0.3)'
              }}
            >ON TRACK</button>
            <button onClick={()=>setReportNum(2)}
              style={{
                color:reportNum===2?reportDetail?.clr:'black',
                boxShadow:reportNum===2 && '2px 2px 5px 2px rgba(0, 0, 0, 0.3)'
              }}
            >AT RISK</button>
            <button onClick={()=>setReportNum(3)}
              style={{
                color:reportNum===3?reportDetail?.clr:'black',
                boxShadow:reportNum===3 && '2px 2px 5px 2px rgba(0, 0, 0, 0.3)'
              }}
            >OFF TRACK</button>
          </div>
        </div>
        <div className="reporting-bottom">
          <div className="reporting-image" style={{backgroundColor:reportDetail?.clr}}>
            <img src={reportDetail?.img} alt="" />
          </div>
        </div>
      </div>
      <div className="customers-review">
        <div className="review-top">
          <div className="top-left">logo of company</div>
          <div className="top-right">
            <i className="fa-solid fa-arrow-left" onClick={()=>prevReview()}></i>
            <i className="fa-solid fa-arrow-right" onClick={()=>nextReview()}></i>
          </div>
        </div>
        <div className="review-middle">
          <p className="p1">{review?.review}</p>
          <div className="by">
            <div className="hr"></div>
            <p className="p2">{review?.by}</p>
          </div>
          <div className="review-img">
            <img src={review?.img} alt="" />
          </div>
        </div>
        <div className="review-bottom">
            <div className="bottom-left">
              <div className="dots" onClick={()=>setReviewNum(1)} style={{backgroundColor : reviewNum===1 ? 'black': 'grey'}}></div>
              <div className="dots" onClick={()=>setReviewNum(2)} style={{backgroundColor : reviewNum===2 ? 'black': 'grey'}}></div>
              <div className="dots" onClick={()=>setReviewNum(3)} style={{backgroundColor : reviewNum===3 ? 'black': 'grey'}}></div>
              <div className="dots" onClick={()=>setReviewNum(4)} style={{backgroundColor : reviewNum===4 ? 'black': 'grey'}}></div>
              <div className="dots" onClick={()=>setReviewNum(5)} style={{backgroundColor : reviewNum===5 ? 'black': 'grey'}}></div>
              <div className="dots" onClick={()=>setReviewNum(6)} style={{backgroundColor : reviewNum===6 ? 'black': 'grey'}}></div>
            </div>
            <div className="bottom-right">
              Meet our customers <i className="fa-solid fa-arrow-right"></i>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomeImages;
