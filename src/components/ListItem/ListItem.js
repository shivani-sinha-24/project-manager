import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getListItems } from '../../redux/lists/ListAction';
import { useSelector } from 'react-redux';

const ListItem = ({ list, item, setListItem, setIsOpen, provided, snapshot, setListsArray, listsArray }) => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [itemName, setItemName] = useState(item.name);

  const dispatch= useDispatch()
  const listItem = useSelector((state)=>state?.lists?.listItems?.filter(listItem=>listItem._id==item))
  
  useEffect(()=>{
    dispatch(getListItems())
  },[])

    const grid = 5;
    
    const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    // color: isDragging &&'black',
    color: 'var(--list-container-list-item-text)',
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,
    borderRadius: grid,


    // change background colour if dragging
    background: isDragging ? 'lightgreen' : 'grey',

    // styles we need to apply on draggables
    ...draggableStyle
  });

  const handlePencilClick = (value) => {
    setShowEditForm(value);
  };

  const handleListItemClick = (item) => {
    setListItem(item);
    setIsOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Find the index of the List in the listsArray
    const listIndex = listsArray.findIndex((element) => element._id === list._id);
    if (listIndex !== -1) {
      // Find the index of the item in the items array
      console.log(listsArray[listIndex].items);
      const itemIndex = listsArray[listIndex].items.findIndex((itemObj) => itemObj === item);

      if (itemIndex !== -1) {
        // Create a copy of the listsArray
        const updatedListsArray = [...listsArray];

        // Update the name of the item
        updatedListsArray[listIndex].items[itemIndex].name = itemName;
        
        // Update the state with the updated listsArray
        setListsArray(updatedListsArray);
      }
    }

    setShowEditForm(false);
  };

  return (
    <div className="list-name">
      <div
        onClick={() => handleListItemClick(listItem[0])}
        className={!showEditForm?'visible child1':'hidden child1'}
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
      >
        {/* <span onClick={() => handleListItemClick(item)}>{item.name}</span> */}
        <span>{listItem[0]?.name}</span>
        {/* <span className="pencil material-symbols-rounded" onClick={() => handlePencilClick(true)}> */}
        <span className="pencil material-symbols-rounded" >
          edit
        </span>
      </div>
      <div className={showEditForm?'visible':'hidden'}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            autoFocus
            name="name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <button>save</button>
          <button onClick={() => handlePencilClick(false)}>cancel</button>
        </form>
      </div>
    </div>
  )
}

export default ListItem;
