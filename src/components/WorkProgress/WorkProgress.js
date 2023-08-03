import React, { useEffect, useState } from 'react'
import './WorkProgress.css'
import accor1 from '../../assets/logos/accor1.jpeg'
import accor2 from '../../assets/logos/acor2.jpeg'
import accor3 from '../../assets/logos/accor3.jpeg'
import accor4 from '../../assets/logos/accor4.jpeg'

const WorkProgress = () => {

  const [accorNum,setAccorNum] = useState(1)

  // Use an object to map accorNum to the corresponding image URL
  const imageMap = {
    1: accor1,
    2: accor2,
    3: accor3,
    4: accor4,
  };

  // Set the initial image URL based on the default accorNum
  const [imgLink, setImgLink] = useState(imageMap[accorNum]);

  // Update the imgLink whenever accorNum changes
  useEffect(() => {
    setImgLink(imageMap[accorNum]);
  }, [accorNum]);
  
  // Function to increase AccorNum and reset to 1 after reaching 5
  const increaseAccorNum = () => {
    setAccorNum((prevAccorNum) => (prevAccorNum === 4 ? 1 : prevAccorNum + 1));
  };

  // Set up the interval to change AccorNum every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(increaseAccorNum, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='work-progress'>
        <div className="work-progress-left">
          <div className="work-progress-left-top">
            <p className='p1'>STREAMLINE YOUR WORK AND PROCESSES</p>
            <p className='p2'>Prioritize revenue-driving work</p>
            <p className='p3'>Dousoft helps you organize complex work across teams to drive business outcomes.</p>
          </div>
          <div className="work-progress-left-bottom">
            <div className="accordian acor1" style={{borderTop:accorNum==1 && '5px solid #4573D2'}} >
              <div className="accordian-heading" onClick={()=>{setAccorNum(1)}}>
                <p className='p1'>Automate your workflows</p>
                {
                  accorNum!=1
                  ?
                  <i className="fa-solid fa-chevron-down"></i>
                  :
                  <i className="fa-solid fa-chevron-up"></i>
                }
              </div>
              {
                accorNum == 1 &&
                <>
                  <p className='p2'>Put tasks on autopilot like assigning work, setting due dates, and more.</p>
                  <p className='p3'>Get Started <i className="fa-solid fa-arrow-right" onClick={()=>{}}></i> </p>
                  <div 
                    className="images-of-accordian-md" 
                    style={{backgroundImage: `url(${imgLink})`, backgroundSize: '100% 100%', backgroundPosition: 'center',}}
                  >
                  </div>
                </>
            }
            </div>
            <div className="accordian acor2" style={{borderTop:accorNum==2 && '5px solid #F1BD6C'}} >
              <div className="accordian-heading" onClick={()=>{setAccorNum(2)}}>
                <p className='p1'>Streamline your reports</p>
                {
                  accorNum!=2
                  ?
                  <i className="fa-solid fa-chevron-down"></i>
                  :
                  <i className="fa-solid fa-chevron-up"></i>
                }
              </div>
              {
                accorNum == 2 &&
                <>
                  <p className='p2'>Get real-time insights into progress for any workstream.</p>
                  <p className='p3'>Get Started <i className="fa-solid fa-arrow-right" onClick={()=>{}}></i> </p>
                  <div 
                    className="images-of-accordian-md" 
                    style={{backgroundImage: `url(${imgLink})`, backgroundSize: '100% 100%', backgroundPosition: 'center',}}
                  >
                  </div>
                </>
            }
            </div>
            <div className="accordian acor3" style={{borderTop:accorNum==3 && '5px solid #938CE1'}} >
              <div className="accordian-heading" onClick={()=>{setAccorNum(3)}}>
                <p className='p1'>Manage your intakes</p>
                {
                  accorNum!=3
                  ?
                  <i className="fa-solid fa-chevron-down"></i>
                  :
                  <i className="fa-solid fa-chevron-up"></i>
                }
              </div>
              {
                accorNum == 3 &&
                <>
                  <p className='p2'>Make it easy to collect information and triage incoming requests.</p>
                  <p className='p3'>Get Started <i className="fa-solid fa-arrow-right" onClick={()=>{}}></i> </p>
                  <div 
                    className="images-of-accordian-md" 
                    style={{backgroundImage: `url(${imgLink})`, backgroundSize: '100% 100%', backgroundPosition: 'center',}}
                  >
                  </div>
                </>
            }
            </div>
            <div className="accordian acor4" style={{borderTop:accorNum==4 && '5px solid #F06A6A'}} >
              <div className="accordian-heading" onClick={()=>{setAccorNum(4)}}>
                <p className='p1'>Connect work to purpose</p>
                {
                  accorNum!=4
                  ?
                  <i className="fa-solid fa-chevron-down"></i>
                  :
                  <i className="fa-solid fa-chevron-up"></i>
                }
              </div>
              {
                accorNum == 4 &&
                <>
                  <p className='p2'>Manage risks and dependencies on company goals for better collaboration with leadership.</p>
                  <p className='p3'>Get Started <i className="fa-solid fa-arrow-right" onClick={()=>{}}></i> </p>
                  <div 
                    className="images-of-accordian-md" 
                    style={{backgroundImage: `url(${imgLink})`, backgroundSize: '100% 100%', backgroundPosition: 'center',}}
                  >
                  </div>
                </>
            }
            </div>
          </div>
        </div>
        <div className="work-progress-right">
          <div 
            className="images-of-accordian" 
            style={{backgroundImage: `url(${imgLink})`, backgroundSize: '100% 100%', backgroundPosition: 'center',}}
          >
          </div>
        </div>
    </div>
  )
}

export default WorkProgress
