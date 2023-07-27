import React, { useEffect, useState } from 'react'
import './DashBoard.css'
import axios from 'axios'
import TopNav from '../../components/TopNav/TopNav'
import RightMenu from '../../components/RightMenu/RightMenu'
import MainContent from '../../components/MainContent/MainContent'
import LeftMenu from '../../components/LeftMenu/LeftMenu'
import ShowLeftMenu from '../../components/ShowLeftMenu/ShowLeftMenu'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getListItems, getLists } from '../../redux/lists/ListAction'
import { useSelector } from 'react-redux'

const DashBoard = ({ bgImgUrl,setBgImgUrl,projects,lists}) => {
  const [showRightMenu,setShowRightMenu] = useState(false)
  const [showLeftMenu,setShowLeftMenu] = useState(false)
  const [editBackground,setEditBackground] = useState(false)
  const [isOpen,setIsOpen] = useState(false)
  const [ listItem,setListItem] = useState({})
  const [imgsArray,setImgsArray] = useState([])
  const params = useParams()
  const dispatch = useDispatch()

  const projectDetails = projects.filter(project=>project._id==params.id)
  
  const getImages = async () => {
    axios.get(`${process.env.REACT_APP_UNSPLASH_APP_DUMMY_DASHBOARD_API_URL}`)
    .then(res=>{
      let imagesArray = []
      res?.data?.map(data=>{
        imagesArray.push(data?.urls?.full)
      }); 
      setImgsArray(imagesArray)  
    })
    .catch(err=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    // getImages()   //Remove this line of comment to get dimages for background change
    dispatch(getLists());
    dispatch(getListItems())
  }, [])

  const dashboardStyle={
    width: showLeftMenu || showRightMenu ? "80%" : "100%", 
    margin: '0', 
    padding: '0',
    backgroundImage: `url(${bgImgUrl})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
  }
  
  return (
    <div className='dashboard'>
      <div className="left-side-menu" style={{width: showLeftMenu  ? "20%" : "0%"} }>
        <LeftMenu setShowLeftMenu={setShowLeftMenu} projects={projects} />
      </div>
      <div className="center" style={dashboardStyle}>
        <ShowLeftMenu showRightMenu={showRightMenu} setShowRightMenu={setShowRightMenu} showLeftMenu={showLeftMenu} setShowLeftMenu={setShowLeftMenu} />
        <TopNav 
          showRightMenu={showRightMenu}
          project={projectDetails[0]} 
          setShowRightMenu={setShowRightMenu}
          showLeftMenu={showLeftMenu}
          setShowLeftMenu={setShowLeftMenu}
        />  
        <MainContent
           projects={projects} 
           showLeftMenu={showLeftMenu} 
           setShowLeftMenu={setShowLeftMenu} 
           isOpen={isOpen} 
           setIsOpen={setIsOpen} 
           setListItem={setListItem} 
           listItem={listItem} 
           imagesArray={imgsArray}
           lists={lists && lists}
          /> 
      </div>
        <div className="right-side-menu" style={{width: showRightMenu  ? "20%" : "0%"} }>
            <RightMenu 
              showRightMenu={showRightMenu} 
              setShowRightMenu={setShowRightMenu} 
              editBackground={editBackground}
              setEditBackground={setEditBackground}
              imgsArray={imgsArray}
              setBgImgUrl={setBgImgUrl}
            />
        </div>
    </div>
  )
}

export default DashBoard