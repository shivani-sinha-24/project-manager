import React from 'react'
import './ShareModal.css'
import { useFormik } from "formik";
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const ShareModal = ({isShareOpen,setIsShareOpen,}) => {
  
  const params = useParams()
  
  const formik = useFormik({
    initialValues: {
      email:''
    },
    validationSchema:Yup.object({
      email : Yup.string().email(),
    }),
    onSubmit: (values)=>{
      values = {...values, url: window.location.href, Project_id:params?.id}
      values?.email && axios.post(`${process.env.REACT_APP_API_URL}/share`,values)
      .then(res=>{
        res?.status==200 && toast.success(res?.data?.message)
        setIsShareOpen(false)
      })
      .catch(err=>console.log(err))
    }
    })
  
  return (
    <div className='share-modal'>
      <div className="share-modal-section">
        <div className="share-modal-section-top">
          <i className="fa-solid fa-x" onClick={()=>setIsShareOpen(false)}></i>
        </div>
        <form action="" onSubmit={formik?.handleSubmit}>
          <label htmlFor="email"> Email</label>
          <input
            type="email"
            name="email"
            id="email"onBlur={formik?.handleBlur}
            value={formik?.values?.email} 
            onChange={formik.handleChange}
            placeholder="Reciever's email address"
          />
          {
            formik.errors.email && formik?.touched?.email &&
            <div style={{color:formik.errors.email? 'red':'black'}}>{formik.errors.email}</div>
          }
          <button
            disabled={formik?.values?.email?false:true} 
            onClick={()=> formik?.handleSubmit}
          >
            Share
          </button>
        </form>
      </div>
    </div>
  )
}

export default ShareModal
