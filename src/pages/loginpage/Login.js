import React, { useEffect, useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { replace, useFormik } from "formik";
import * as Yup from 'yup'
import { userLogin } from '../../redux/auth/AuthAction';
import axios from "axios";
import { useDispatch } from 'react-redux';
import { useGoogleLogin, googleLogout } from '@react-oauth/google';
import { getListItems, getLists } from '../../redux/lists/ListAction';
import jwt_decode from "jwt-decode";
const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
  });

  useEffect(
    () => {
      setProfile(null);
      if (user) {
        axios
          .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: 'application/json'
            }
          })
          .then((res) => {
            console.log(res.data);
            setProfile(res.data);
            
          })
          .catch((err) => console.log(err));
      }
    },
    [user]
  );

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ''
    },
    validationSchema,
    onSubmit: values => {
      dispatch(userLogin(values));
    }
  })
  const authenticate = sessionStorage.getItem("accessToken");

  useEffect(() => {
    if (authenticate) {
      // navigate('/', { replace: false });
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
            <div style={{ color: 'red', marginBottom: '10px' }}>{formik.errors.email}</div>
          }
          <input type="password" placeholder="Password" name='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.errors.password && formik.touched.password &&
            <div style={{ color: 'red', marginBottom: '10px' }}>{formik.errors.password}</div>
          }
          <button type="submit" onClick={e => { e.preventDefault(); formik.handleSubmit() }}>Log In</button>
        </form>
        <div style={{ marginTop: "10px", display: "flex", justifyContent: "center" }}>
          {/* {profile ? (
            <button onClick={logOut}>Log out</button>
          ) : ( */}
            <button onClick={() => login()}>Sign in with Google 🚀 </button>
          {/* )} */}
        </div>
        <p>Don't have an account? <Link to={'/register'}>Sign Up</Link></p>
      </div>
    </div>
  )
}

export default Login
