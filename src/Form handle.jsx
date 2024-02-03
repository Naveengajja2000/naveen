import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';

function StudentRegistration(){
    var studentForm = useFormik({
        initialValues:{
            fristname:'',
            lastname:'',
            age:''
        },
       validationSchema:Yup.object({
          firstname:Yup.string().required('')
       }),
       onSubmit:(values)=>{
         console.log(values)
       }   
    })
    
    return (
        <div>
            <h1>StudentRegistration</h1>
            <form onSubmit={studentForm.handleSubmit}>
               
                <input className={studentForm.touched.fristname && studentForm.errors.fristname?'container form-group form-control is-invalid':'form-control'} type="text" name='firstname' onChange={studentForm.handleChange} onBlur={studentForm.handleBlur} placeholder="firstname"/>
                <br/>
                
                <input className={studentForm.touched.fristname && studentForm.errors.fristname?'container form-group form-control is-invalid':'form-control'} type="text" name='lastname' onChange={studentForm.handleChange} onBlur={studentForm.handleBlur} placeholder="lastname"/>
                <br/>
                
                <input className={studentForm.touched.fristname && studentForm.errors.fristname?'container form-group form-control is-invalid':'form-control'} type="text" name='age' onChange={studentForm.handleChange} onBlur={studentForm.handleBlur} placeholder="age"/>
                <br/>
                <br/>
                <button type="onsubmit">Register</button>
            </form>
        </div>
    )
}

export default StudentRegistration