import React, { useState } from 'react'
import { useFormik } from "formik";
import * as Yup from 'yup';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { creatListItem } from '../../redux/lists/ListAction';

const List = ({list,setListItemAdded,setListsArray,listsArray, index}) => {
  const [showListItemForm,setListItemForm] = useState(false)
  // const [listItemsArray,setListItemsArray] = useState([])
  const dispatch = useDispatch()
  // console.log('list :',list);


  const [loader, setLoader] = useState(false)
  
  const grid = 8;

  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging ? 'lightgreen' : 'grey',

    // styles we need to apply on draggables
    ...draggableStyle
  });

  const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'none',
    padding: grid,
    // width: 300
  });

  const formik = useFormik({
    initialValues: {
      name:''
    },
    validationSchema:Yup.object({
        name : Yup.string().required('list item name is required'),
    }),
    onSubmit: (values)=>{
      setListsArray([
        ...listsArray?.slice(0, index),
        { ...(listsArray?.[index]), items:[...(listsArray?.[index]?.items), {id: String(Number(new Date())), name: values?.name}] },
        ...listsArray?.slice(index+1)
      ])
      setListItemForm(false)
      setListItemAdded(true)
      formik.resetForm()
      // dispatch(creatListItem({}))
      toast.success('List Item added Successfully')
    }
    })
  return (
    <>
      <div className="list-title">{list.name}</div>
        <Droppable droppableId={list?.id}>
          {(provided, snapshot) => (
            <div ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
                {
                  list.items.length > 0 
                  &&
                  list.items.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div>
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={getItemStyle( snapshot.isDragging, provided.draggableProps.style )}
                          >
                            {item.name}
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                {provided.placeholder}
            </div>
          )}
        </Droppable>
      {showListItemForm?
      <form action="" onSubmit={formik.handleSubmit}>
        <input 
          autoFocus 
          type="text" 
          name='name' 
          style={formik.errors.name && {border:" 1px solid red"}} 
          value={formik.values.name} 
          onChange={formik.handleChange}
        />
        {
          formik.errors.name 
          &&
          <div style={{color:"red"}}>{formik.errors.name}</div>
        }
        <div className="buttons">
          <button onClick={(e)=>{e.preventDefault();formik.handleSubmit()}}>Add Item</button>
          <i className="fa-solid fa-xmark close-form" onClick={()=>setListItemForm(false)} />
        </div>
      </form>
      :
      <div 
        className='child add-item'
        onClick={()=>setListItemForm(true)}
      >
        <span className="material-symbols-rounded">add</span>Add list item
      </div>
      }
    </>
  )
}

export default List
