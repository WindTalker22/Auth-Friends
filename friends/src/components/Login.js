import React, { useState } from "react"
import { Form, Field, Formik, ErrorMessage } from "formik"
import * as Yup from "yup"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Login = ({ values, errors, touched, status }) => {
  const [message, setMessage] = useState([])

  const { push } = useHistory()
  //Submits ----
  const handleSubmit = (values, { setStatus, resetForm }) => {
    console.log("submitted")
    axios
      .post(`http://localhost:5000/api/login`, values)
      .then(res => {
        setMessage([...message, values])
        setStatus(res.data)
        resetForm()
        console.log(setStatus, `success`)
        localStorage.setItem("token", res.data.payload)
        push("/FriendsList")
      })
      .catch(err => console.log(err.response))
      .finally()
  }
  // Checking Validations !! ----
  const SignupSchema = () =>
    Yup.object().shape({
      name: Yup.string().min(3, `Name Too Short!`),
      email: Yup.string()
        .email("Invalid email")
        .required("Email Required"),
      password: Yup.string().required(`Password required`),
      terms: Yup.bool()
        .test(
          "consent",
          "You have to agree with our Terms and Conditions!",
          value => value === true
        )
        .required(`You have to agree with Terms of Service!`)
    })
  // Return STARTS HERE  - -------------
  return (
    <div>
      <h1>My Form</h1>
      <Formik
        initialValues={{ username: ``, password: `` }}
        // validationSchema={SignupSchema}
        // validate={validate}
        onSubmit={handleSubmit}
      >
        {({ values }) => {
          return (
            <Form className="formbody">
              <Field
                className="formFields"
                name="username"
                type="text"
                placeholder="Username"
              />
              <ErrorMessage name="username" component="div" className="red" />
              {/* <Field
                className="formFields"
                name="email"
                type="text"
                placeholder="email"
              />
              <ErrorMessage name="email" component="div" className="red" /> */}
              <Field
                className="formFields"
                name="password"
                type="password"
                placeholder="Password"
              />
              <ErrorMessage name="password" component="div" className="red" />
              {/* <label htmlFor="terms">
                <Field
                  id="terms"
                  type="checkbox"
                  name="terms"
                  checked={values.terms}
                ></Field>
                Agree with Terms of Service
              </label> */}
              &nbsp;
              <input type="submit" />
            </Form>
          )
        }}
      </Formik>
      {/* Map starts here !!!!! */}
      <div>
        {message.map(e => (
          <div>
            <p>{e.name}</p>
            <p>{e.email}</p>
            <p>{e.terms}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Login
