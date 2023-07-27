import React from 'react'

const AddListCard = ({showListForm,setShowListForm}) => {
  return (
    <div className='child add-list' onClick={()=>setShowListForm(true)}>
      <span className="material-symbols-rounded">add</span>Add list card
    </div>
  )
}

export default AddListCard
