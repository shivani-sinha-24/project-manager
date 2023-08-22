import React, { useState } from 'react';
import './HRHomepage.css';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import hrImg from '../../assets/logos/istockphoto-1018103648-612x612.jpg'
import axios from 'axios';
import { toast } from 'react-toastify';
import logo from '../../assets/logos/icon Dousoft It Solution Pvt Ltd Logo.png'

const HRHomepage = () => {
  const [showLeftMenu, setShowLeftMenu] = useState(false);
  const [showForm, setShowForm] = useState(false); // Add state for showing the form

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    event: Yup.string().required('Event is required'),
    message: Yup.string().required('Message is required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      event: '',
      message: '',
    },
    validationSchema,
    onSubmit: (values) => {
      const plainTextMessage = convertHtmlToPlainText(values.message);
      const updatedValues = { ...values, message: plainTextMessage };
      axios.post(`${process.env.REACT_APP_API_URL}/emailEmp`,updatedValues)
        .then(res=>{console.log(res?.data);toast.success(res?.data?.message)})
        .catch(err=>{console.log(err)})
    },
  });

  
  // Function to convert HTML to plain text
  const convertHtmlToPlainText = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };

  return (
    <div className="hr-homepage">
      <div className="container">
        <div
          className="left-side-menu"
          style={{ width: showLeftMenu ? '20%' : '0%', background: '', minHeight: '100%' }}
        >
          {showLeftMenu && (
            <div className="menu-container">
              <div className="top">
                <i className={`fa-solid fa-xl fa-flip ${showLeftMenu ? 'fa-bars' : 'fa-bars'}`} onClick={() => setShowLeftMenu(!showLeftMenu)}></i>
                <Link to={`/`} >
                <img src={logo} alt="" />
                </Link>
              </div>
              <Link to={'/employee'} className="menu-item">
                Employees
              </Link>
              <Link to={'/employee/form'} className="menu-item">
                Add Employee
              </Link>
              <div className="menu-item" onClick={()=>setShowForm(!showForm)}>
                Send mail
              </div>
              {/* Add other menu items here */}
            </div>
          )}
        </div>
        <div className="center" style={{width: showLeftMenu ? '80%' : '100%'}}>
          <div className="hr-top">
            {
              !showLeftMenu &&
              <i className={`fa-solid fa-xl fa-flip ${showLeftMenu ? 'fa-x' : 'fa-bars'}`} onClick={() => setShowLeftMenu(!showLeftMenu)}></i>
            }
          </div>
          <div className="hr-bottom">
            {showForm ? (
              <div className="mail-form">
                  <h2>Send Special Event Email</h2>
                  <form onSubmit={formik.handleSubmit}>
                      <div>
                      <label htmlFor="name">Name:</label>
                      <input
                          type="text"
                          id="name"
                          name="name"
                          value={formik.values.name}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                      />
                      {formik.touched.name && formik.errors.name && (
                          <div style={{color:'red'}}>{formik.errors.name}</div>
                      )}
                      </div>
                      <div>
                      <label htmlFor="email">Email:</label>
                      <input
                          type="text"
                          id="email"
                          name="email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                      />
                      {formik.touched.email && formik.errors.email && (
                          <div style={{color:'red'}}>{formik.errors.email}</div>
                      )}
                      </div>
                      <div>
                      <label htmlFor="event">Event:</label>
                      <input
                          type="text"
                          id="event"
                          name="event"
                          value={formik.values.event}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                      />
                      {formik.touched.event && formik.errors.event && (
                          <div style={{color:'red'}}>{formik.errors.event}</div>
                      )}
                      </div>
                      <div>
                      <label htmlFor="message">Message:</label>
                      <ReactQuill
                          value={formik.values.message}
                          onChange={(value) => formik.setFieldValue('message', value)}
                      />
                      {formik.touched.message && formik.errors.message && (
                          <div style={{color:'red'}}>{formik.errors.message}</div>
                      )}
                      </div>
                      <button type="submit">Send Email</button>
                  </form>
              </div>
            ) : ( 
              <div className="welcome-page">
                  <div className="welcome-content">
                    <h1>Welcome to the HR Portal</h1>
                    <p>Manage employee information, send emails, and more.</p>
                    <div className="action-buttons">
                    <button className="get-started-button">Get Started</button>
                    <button className="learn-more-button">Learn More</button>
                    </div>
                  </div>
                  <div className="welcome-image">
                    <img src={hrImg} alt="HR Illustration" />
                  </div>
              </div>
            )} 
            </div>
        </div>
      </div>
    </div>
  );
};

export default HRHomepage;
