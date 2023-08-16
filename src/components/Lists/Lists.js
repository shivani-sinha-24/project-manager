import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { toast } from 'react-toastify';
import ListItem from '../ListItem/ListItem';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { creatListItem } from '../../redux/lists/ListAction';

const List = ({ list, setListItemAdded, setListsArray, listsArray, setIsListItemOpen, index, IsListItemOpen, setListItem }) => {
  const [showListItemForm, setShowListItemForm] = useState(false);
  const [listItemsArray, setListItemsArray] = useState([]);
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch()

  const grid = 4;


  
  const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'none',
    color:isDraggingOver&&'black',
    padding: grid,
    // width: 300
  });

  const formik = useFormik({
    initialValues: {
      name: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('list item name is required'),
    }),
    onSubmit: (values) => {
      setListsArray([
        ...listsArray?.slice(0, index),
        { ...(listsArray?.[index]), items: [...(listsArray?.[index]?.items), { id: String(Number(new Date())), name: values?.name }] },
        ...listsArray?.slice(index + 1)
      ]);
      formik.resetForm();
      dispatch(creatListItem({name:values.name,list_id:list._id}))
      setShowListItemForm(false);
      setListItemAdded(true);
    }
  });
  return (
    <>
      <div className="list-title">{list.name}</div>
      <Droppable droppableId={String(list?._id)}>
        {(provided, snapshot) => (
          <div ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
            {/* {listItemsArray?.length > 0 &&
            listItemsArray.map((item, index) => ( */}
            {list?.items?.length > 0 &&
              list.items.map((item, index) => (
                <Draggable key={item} draggableId={String(item)} index={index}>
                  {(provided, snapshot) => (
                    <ListItem
                      provided={provided}
                      snapshot={snapshot}
                      item={item}
                      setIsListItemOpen={setIsListItemOpen}
                      setListItem={setListItem}
                      list={list}
                      listsArray={listsArray}
                      setListsArray={setListsArray}
                    />
                  )}
                </Draggable>
              ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      {showListItemForm ? (
        <form action="" onSubmit={formik.handleSubmit}>
          <input
            autoFocus
            type="text"
            name="name"
            style={formik.errors.name && { border: ' 1px solid red' }}
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.errors.name && <div style={{ color: 'red' }}>{formik.errors.name}</div>}
          <div className="buttons">
            <button type='submit' onClick={(e) => { e.preventDefault(); formik.handleSubmit(); }}>Add Item</button>
            <i className="fa-solid fa-xmark close-form" onClick={() => setShowListItemForm(false)} />
          </div>
        </form>
      ) : (
        <div className="child add-item" onClick={() => setShowListItemForm(true)}>
          <span className="material-symbols-rounded">add</span>Add list item
        </div>
      )}
    </>
  );
};

export default List;
