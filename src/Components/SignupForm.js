
import React from 'react';
import useForm from "./useForm";
import validation from './validation';
import "./RegistrationForm.css";

const SignupForm = ({submitForm}) => {

    const {handleChange, values, handleSubmit , errors} = useForm(submitForm, validation);
    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Signup for really kool surprises</h1>

                <div className="form-inputs">
                    <label htmlFor="username" className="form-label">
                        Username
                    </label>
                    <input 
                    id="username" 
                    type="text" 
                    className="form-input" 
                    name="username"  
                    placeholder="Enter your username" 
                    value={values.username} 
                    onChange={handleChange}/>
                    {errors.username && <p>{errors.username}</p>}
                </div>

                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input 
                    id="email" 
                    type="text" 
                    className="form-input" 
                    name="Email"  
                    placeholder="Enter your Email"
                    value={values.email} 
                    onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>

                <div className="form-inputs">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input 
                    id="password" 
                    type="text" 
                    className="form-input" 
                    name="password"  
                    placeholder="Enter your password"
                    value={values.password} 
                    onChange={handleChange}    
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>

                <div className="form-inputs">
                    <label htmlFor="password2" className="form-label">
                        password2
                    </label>
                    <input 
                    id="password2" 
                    type="password" 
                    className="form-input" 
                    name="password2"  
                    placeholder="Enter your password2"
                    value={values.password2} 
                    onChange={handleChange}
                    />
                    {errors.password2 && <p>{errors.password2}</p>}
                </div>

                <button type="submit" className="form-input-button">SignUp</button>

                <span className="form-input-login">Already have an account? Click <a href="#">Here</a></span>
            </form>
        </div>
    )
}

export default SignupForm
