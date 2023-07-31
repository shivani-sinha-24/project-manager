import React, { useEffect } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { replace, useFormik } from "formik";
import * as Yup from 'yup'
import { userLogin } from '../../redux/auth/AuthAction';
import { useDispatch } from 'react-redux';
import { getListItems, getLists } from '../../redux/lists/ListAction';

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });
  const formik = useFormik({
    initialValues:{
      email: '',
      password: ''
    },
    validationSchema,
    onSubmit:values=>{
      dispatch(userLogin(values));
      navigate('/', {replace:false});
    }
  })
  const authenticate = sessionStorage.getItem("accessToken");

  useEffect(() => {
    if (authenticate) {
      navigate('/', { replace: false });
      dispatch(getLists())
      dispatch(getListItems())
    }
  }, [authenticate, navigate]);
  
  return (
    <div className='login-page'>
      <div className="container">
        <h1>Log In to Dousoft</h1>
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
