import { useState, useEffect } from "react";


const useForm= validation =>{
    
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        password2:"",
    });

    const [errors, setErrors] = useState({});
    const [submittingValue, setSubmittingValue] = useState(false);

    const handleChange = e=>{
        setValues({
            ...values,
            [e.target.name]: e.target.values,
        });
       };

       const handleSubmit = e =>{
        e.preventDefault();

        setErrors(validation(values));
        setSubmittingValue(true);
    }

    return {handleChange,values,handleSubmit, errors};
}

export default useForm;