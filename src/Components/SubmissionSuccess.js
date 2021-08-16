import React from 'react';
import './RegistrationForm.css';
import img3 from "./Images/img3.svg";

const SubmissionSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>We have received your request!</h1>
      <img className='form-img-2' src={img3} alt='success-image' />
    </div>
  );
};

export default SubmissionSuccess;