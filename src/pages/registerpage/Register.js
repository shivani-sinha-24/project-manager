import React from 'react'
import './Register.css'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from "formik";
import * as Yup from 'yup'
import { useDispatch } from 'react-redux';
import { userRegister } from '../../redux/auth/AuthAction';
import axios from 'axios';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues:{
      fullName: '',
      email: '',
      password: ''
    },
    validationSchema,
    onSubmit:values=>{
      dispatch(userRegister(values));
      setTimeout(()=>{
        axios.get(`${process.env.REACT_APP_API_URL}/user/${values?.email}`)
        .then(res=>{
          if(res?.status==200){
            if(res?.data?.invitation){
              // navigate(`/${res?.data?.invitation?.project_id}`)
              navigate(`/${res?.data?.invitation?.project_id}/invitation/${res?.data?.user?._id}`)
            }else{
              navigate('/projects/new');
            }
          }
        })
        .catch(err=>console.log(err))
      },100)
    }
  })
  
  return (
    <div className="register-page">
      <div className="container">
        <h1>Sign Up for Dousoft</h1>
        <form onSubmit={formik.handleSubmit}>
          <input type="text" placeholder="Full Name" name='fullName' value={formik.values.fullName} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.errors.fullName && formik.touched.fullName &&
            <div style={{color:'red',marginBottom:'10px'}}>{formik.errors.fullName}</div>
          }
          <input type="email" placeholder="Email" name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.errors.email && formik.touched.email &&
            <div style={{color:'red',marginBottom:'10px'}}>{formik.errors.email}</div>
          }
          <input type="password" placeholder="Password" name='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.errors.password && formik.touched.password &&
            <div style={{color:'red',marginBottom:'10px'}}>{formik.errors.password}</div>
          }
          <button type="submit" onClick={e=>{e.preventDefault();formik.handleSubmit()}}>Sign Up</button>
        </form>
        <p>Already have an account? <Link to={`/login`}>Log In</Link></p>
      </div>
    </div>
  )
}

export default Register
