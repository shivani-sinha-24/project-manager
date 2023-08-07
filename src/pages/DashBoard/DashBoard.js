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
import { getListItems, getLists, getSampleProjectCard } from '../../redux/lists/ListAction'
import { useSelector } from 'react-redux'
import { getProjects } from '../../redux/project/ProjectAction'

const DashBoard = ({ bgImgUrl,setBgImgUrl}) => {
  const [showRightMenu,setShowRightMenu] = useState(false)
  const [showLeftMenu,setShowLeftMenu] = useState(false)
  const [editBackground,setEditBackground] = useState(false)
  const [isOpen,setIsOpen] = useState(false)
  const [ listItem,setListItem] = useState({})
  const [imgsArray,setImgsArray] = useState([])
  
  const params = useParams()
  const dispatch = useDispatch()

  const lists = useSelector(state=>state?.lists?.lists)?.filter(list=>list?.project_id==params?.id)
  const sampleList = useSelector(state=>state?.lists?.sampleList)

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
  },[])

  useEffect(()=>{
    dispatch(getLists(params.id));
    dispatch(getListItems())
    dispatch(getProjects())
    if(lists?.length == 0){
      dispatch(getSampleProjectCard())
    }
  }, [params?.id])

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
        <LeftMenu setShowLeftMenu={setShowLeftMenu}/>
      </div>
      <div className="center" style={dashboardStyle}>
        <ShowLeftMenu 
          showRightMenu={showRightMenu} setShowRightMenu={setShowRightMenu} 
          showLeftMenu={showLeftMenu} 
          setShowLeftMenu={setShowLeftMenu}
         />
        <TopNav 
          showRightMenu={showRightMenu}
          setShowRightMenu={setShowRightMenu}
          showLeftMenu={showLeftMenu}
          setShowLeftMenu={setShowLeftMenu}
        />  
        <MainContent
           showLeftMenu={showLeftMenu} 
           setShowLeftMenu={setShowLeftMenu} 
           isOpen={isOpen} 
           setIsOpen={setIsOpen} 
           setListItem={setListItem} 
           listItem={listItem} 
           imagesArray={imgsArray}
           lists={lists?.length>0?lists:sampleList}
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