import React, { useState } from 'react';
import './InvitationPage.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const InvitationPage = () => {
  const authenticate = sessionStorage.getItem("accessToken");
  const user = useSelector(state => state?.auth?.user);
  
  const params = useParams();
  const { id, user_id } = params;

  const navigate = useNavigate();

  const acceptInvitation = () => {
    axios.post(`${process.env.REACT_APP_API_URL}/accept-invitation`, { id, user_id })
      .then(res => {
        navigate(`/${params?.id}`);
      })
      .catch(err => toast.error(err?.response?.data?.message));
  }

  const rejectInvitation = () => {
    axios.post(`${process.env.REACT_APP_API_URL}/reject-invitation`, { id, invited_user: user?.email || sessionStorage.getItem('email') })
      .then(res => {
        navigate('/')
      })
      .catch(err => toast.error(err?.response?.data?.message));
  }

  return (
    <div className="invitation-page">
      <div className="invitation-container">
        <h1>Invitation Response</h1>
        <p>
          You have received an invitation to join the My Project Manager working team. Please respond by clicking one of the buttons below.
        </p>
        <a onClick={acceptInvitation} className="btn accept-btn">Accept</a>
        <a onClick={rejectInvitation} className="btn reject-btn">Reject</a>
      </div>
    </div>
  )
}

export default InvitationPage;
