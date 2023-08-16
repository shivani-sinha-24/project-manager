import React, { useEffect, useState } from 'react'
import './MainContent.css'
import ListForm from '../ListForm/ListForm'
import AddListCard from '../AddListCard/AddListCard'
import List from '../Lists/Lists'
import { DragDropContext } from 'react-beautiful-dnd';
import Modal from '../../Modal/Modal'
import axios from 'axios'
import ShareModal from '../../Modal/shareModal.js/ShareModal'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getSampleProjectCard, updateMultiList, updateSingleList } from '../../redux/lists/ListAction'
import { useParams } from 'react-router-dom'

const MainContent = ({isShareOpen,setIsShareOpen,lists,setIsListItemOpen,IsListItemOpen,setListItem,listItem,projects}) => {

  const params = useParams()
  const dispatch = useDispatch()
  const sampleList = useSelector(state=>state?.lists?.sampleList)


  const [loader, setLoader] = useState(false)
  const [showListForm,setShowListForm] = useState(false)
  const [listsArray,setListsArray] =useState( lists ? [...lists ]: [])

  useEffect(() => {
    // Update the listsArray whenever the lists changes
      setListsArray(lists ? [...lists] : []);
  }, [lists]);

  const onDragEnd = result => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }
    
    const sourceList = listsArray?.find(el => el?._id === source?.droppableId)
    const sourceListIndex = listsArray?.findIndex(el => el?._id === source?.droppableId)
    const sourcelistItem = sourceList?.items?.[source.index] 
    if (source?.droppableId === destination?.droppableId) {
      const destinationListItem = sourceList?.items?.[destination.index];
      let thisListArrayItems = [...listsArray[sourceListIndex]?.items]; // Create a copy of the items array
      thisListArrayItems[source.index] = destinationListItem;
      thisListArrayItems[destination.index] = sourcelistItem;

      // Update the state by creating a new array and updating the modified list
      setListsArray(prevListsArray => {
        const newListsArray = [...prevListsArray];
        newListsArray[sourceListIndex] = { ...sourceList, items: thisListArrayItems };
        return newListsArray;
      });

      lists[0].name!='Sample List' && dispatch(updateSingleList({_id:destination?.droppableId,items:thisListArrayItems}))
  
      setLoader(true);
      setTimeout(() => setLoader(false));
      return;
    }

    const newSourceList = {
      ...sourceList, 
      items: [
        ...sourceList?.items?.slice(0, source.index),
        ...sourceList?.items?.slice(source.index + 1)   
      ]
    }
    
    const destinationList = listsArray?.find(el => el?._id === destination?.droppableId) 
    const destinationListIndex =  listsArray?.findIndex(el => el?._id === destination?.droppableId) 
    const newDestinationList = {
      ...destinationList,
      items: [
        ...destinationList?.items?.slice(0, destination.index),
        sourcelistItem,
        ...destinationList?.items?.slice(destination.index)
      ]
    }

    lists[0].name!='Sample List' && dispatch(updateMultiList({
      'newSourceList_id':newSourceList?._id ,
      'newSourceList_items':newSourceList?.items,
      'newDestinationList_id':newDestinationList?._id,
      'newDestinationList_items':newDestinationList?.items
    }))

    const newlistsArray = listsArray
    newlistsArray[sourceListIndex] = newSourceList
    newlistsArray[destinationListIndex] = newDestinationList

    setListsArray(newlistsArray)
    setLoader(true)
    setTimeout(() => setLoader(false))        
    
  };

  
  return (
    <>
    {IsListItemOpen && (
      <Modal
        projects={projects}
        setIsListItemOpen={setIsListItemOpen}
        IsListItemOpen={IsListItemOpen}
        projectId={params.id}
        listItem={listItem}
      />
    )}
    {isShareOpen && <ShareModal isShareOpen={isShareOpen} setIsShareOpen={setIsShareOpen}/>}
    <div className="lists-container">
      {/* <div className="scroll" style={{width: `${(listsArray?.length*350) + 540}px`}}> */}
      <div className="scroll" style={{width: `${(listsArray?.length*350) + 350}px`,height:'100%'}}>
        <DragDropContext onDragEnd={onDragEnd} >
          {
            listsArray?.length>0
            ?
            listsArray?.map((list,index)=>(
              <div className="child" key={list.id}>
                <List 
                  index={index} 
                  listsArray={listsArray.length?listsArray:null} 
                  setListsArray={setListsArray} 
                  list={list}
                  IsListItemOpen={IsListItemOpen}
                  setIsListItemOpen={setIsListItemOpen}
                  setListItem={setListItem}
                />
              </div>
            ))
            :
            null
          }
        </DragDropContext>
        {
          showListForm
          ?
          <ListForm 
            setListsArray={setListsArray}
            listsArray={listsArray} 
            showListForm={showListForm} 
            setShowListForm={setShowListForm}
          />
          :
          <AddListCard setShowListForm={setShowListForm} showListForm={showListForm} />
        }
      </div>
    </div>
    </>
  )
}

export default MainContent