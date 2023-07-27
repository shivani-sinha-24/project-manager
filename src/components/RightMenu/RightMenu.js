import React from 'react'
import './RightMenu.css'

const RightMenu = ({showRightMenu,setShowRightMenu,editBackground,setEditBackground,imgsArray,setBgImgUrl}) => {
  return (
    <div className="right-menu">
        {
            editBackground
            ? 
            <>
                <div className="heading">
                    <div className="heading-name">Change Background</div> 
                    {/* <i className="fa-solid fa-xmark" onClick={()=>{setEditBackground(false)}}>
                        </i>  */}
                    <span className="material-symbols-rounded" onClick={()=>{setEditBackground(false)}}>arrow_forward_ios</span>
                </div>
               <div className="bottom-scroll">
                {imgsArray?.length>0&&
                imgsArray.map((img,index)=>{
                return(
                    <img key={index} className='bg-images' src={img} alt="" onClick={e=>setBgImgUrl(e.target.src)}/>
                )
                })}
            
               </div>

            </>
            :
            <>
                <div className="heading">
                    <div className="heading-name">Menu</div> 
                    <i className="fa-solid fa-xmark" onClick={()=>{setShowRightMenu(false)}}></i>
                </div>
                <div className="bottom-scroll">
                    <div className="menu">
                        <div className="sub-menu">
                            <div className="sub-menu-icon"><span className="material-symbols-rounded">side_navigation</span></div>
                            <div className="sub-menu-text"><p>About this board</p><p>Add a description to your board</p></div>
                        </div>
                        <div className="sub-menu" onClick={()=>{setEditBackground(true)}}>
                            <div className="sub-menu-icon"><span className="material-symbols-rounded">wallpaper</span></div>
                            <div className="sub-menu-text">Change Background</div>
                        </div>
                        <div className="sub-menu">
                            <div className="sub-menu-icon"><span className="material-symbols-rounded">nfc</span></div>
                            <div className="sub-menu-text">Custom Fields</div>
                        </div>
                        {/* <div className="sub-menu">
                            <div className="sub-menu-icon"><i className="fa-regular fa-note-sticky fa-lg"></i></div>
                            <div className="sub-menu-text">stickers</div>
                        </div> */}
                        
                        <div className="sub-menu">
                            <div className="sub-menu-icon"><span className="material-symbols-rounded">sticky_note</span></div>
                            <div className="sub-menu-text">Stickers</div>
                        </div>
                        <div className="sub-menu">
                            <div className="sub-menu-icon">
                                <span className="material-symbols-rounded">more_horiz</span>
                            </div>
                            <div className="sub-menu-text">More</div>
                        </div>
                    </div>
                    <div className="menu">
                        <div className="sub-menu">
                            <div className="sub-menu-icon">
                                <span className="material-symbols-rounded">flash_on</span>
                            </div>
                            <div className="sub-menu-text"><p>Automation</p><p>Automate cards and more</p></div>
                        </div>
                    </div>
                    <div className="menu">
                        <div className="sub-menu">
                            <div className="sub-menu-icon">
                                <span className="material-symbols-rounded">lists</span>
                            </div>
                            <div className="sub-menu-text">Activities</div>
                        </div>
                    </div>
                </div>
            </>
    }
    </div>
  )
}

export default RightMenu