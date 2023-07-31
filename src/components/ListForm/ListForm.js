import React from 'react';
import { useFormik } from "formik";
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { creatList } from '../../redux/lists/ListAction';
import { useParams } from 'react-router-dom';

const ListForm = ({setListsArray,listsArray,setShowListForm}) => {
    const params = useParams()
    console.log('params :',params);
    const dispatch = useDispatch() 
    const listObj = {}
    const formik = useFormik({
        initialValues: {
            listname:'',
            project_id:params.id
        },
        validationSchema:Yup.object({
            listname : Yup.string().required('list name is required'),
        }),
        onSubmit: (values)=>{
            toast.success('List added Successfully')
            setListsArray([...listsArray,{'name':values.listname,'id': String(Number(new Date())),'items':[]}])
            dispatch(creatList({name:values.listname, project_id:params.id}))
            setShowListForm(false)
        }
    })

  return (
    <div>
        <form className='child' onSubmit={formik.handleSubmit}>
            <input autoFocus type="text" name='listname' style={formik.errors.listname && {border:" 1px solid red"}} value={formik.values.listname} onChange={formik.handleChange}/>
            {formik.errors.listname && (
                <div style={{color:"red"}}>{formik.errors.listname}</div>
            )}
            <div className="buttons">
            <button type='submit' onClick={(e)=>{e.preventDefault();formik.handleSubmit()}}>Add List</button>
            <i className="fa-solid fa-xmark close-form" onClick={()=>setShowListForm(false)}></i>
            </div>
        </form>
    </div>
  )
}

export default ListForm