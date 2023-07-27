import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { useFormik } from "formik";
import * as Yup from 'yup'

const Login = () => {

  const validationSchema = Yup.object().shape({
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
      console.log(values)
    }
  })
  
  return (
    <div className='login-page'>
      <div className="container">
        <h1>Log In to Asana</h1>
        <form onSubmit={formik.handleSubmit}>
        <input type="email" placeholder="Email" name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.errors.email && formik.touched.email &&
            <div style={{color:'red',marginBottom:'10px'}}>{formik.errors.email}</div>
          }
          <input type="password" placeholder="Password" name='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.errors.password && formik.touched.password &&
            <div style={{color:'red',marginBottom:'10px'}}>{formik.errors.password}</div>
          }
          <button type="submit" onClick={e=>{e.preventDefault();formik.handleSubmit()}}>Log In</button>
        </form>
        <p>Don't have an account? <Link to={'/register'}>Sign Up</Link></p>
      </div>
    </div>
  )
}

export default Login
