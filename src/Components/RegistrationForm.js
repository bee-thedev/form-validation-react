import React,{useState} from 'react'
import SignupForm from './SignupForm';
import SubmissionSuccess from './SubmissionSuccess';
import "./RegistrationForm.css";
import img2 from "./Images/img2.svg";

const RegistrationForm = () => {

    const [submittingValue, setSubmittingValue] = useState(false);

    const submitForm =()=>{
        setSubmittingValue(true);
    }
    return (
        <React.Fragment>
            <div className='form-container'>
                <span className='close-button'>×</span>
                <div className='form-content-left'>
                     <img className='form-img' src={img2} alt='spaceship' />
                </div>
                    {!submittingValue ?  <SignupForm submitForm={submitForm} /> : <SubmissionSuccess />}
             </div>
        </React.Fragment>
    )
}

export default RegistrationForm;
