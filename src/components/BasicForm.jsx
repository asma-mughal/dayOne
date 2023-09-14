import { useFormik } from 'formik'
import React from 'react'
//1. Formik handle state management.

const BasicForm = () => {
    const formik  = useFormik({
        initialValues : {
            email:"",
            age:"",
            password:"",
            confirmPassword:""
        }
    })
    console.log(formik)
  return (
    <div>
      <form autoComplete="off">
      <label htmlFor="email">Email</label>
      <input id="email" type="email" placeholder="Enter your email"
      value={formik.values.email}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      />
      <label htmlFor="age">Age</label>
      <input id="age" type="number" placeholder="Enter your Age"
      value={formik.values.age}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      />
      <label htmlFor="password">Password</label>
      <input id="password" type="password" placeholder="Enter your password"
      value={formik.values.password}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      />
         <label htmlFor="confPass">Confirm Password</label>
      <input id="confPassword" type="password" placeholder="Confirm password"
      value={formik.values.confirmPassword}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      />
      <button type='submit'>Submit</button>
    </form>
    </div>
  )
}

export default BasicForm
