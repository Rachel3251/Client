import React from "react";
import { Formik,Form,Field,ErrorMessage } from "formik";
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape(
  {
  userName: Yup.string().required('name is required'),
  password: Yup.string().required('password is required')
  }
)

export default ({ tokenCb }) => {
  const login = async(values) => {
    console.log(values);
  }
  return (
    <>
    JSON.parse(this.user)
    </>
    // <Formik
    //   initialValues={{ userName: '', password: '' }}
    //   onSubmit={login}
    //   validationSchema={LoginSchema}
    // >
    //   <Form>
    //     <h1>Login</h1>
    //     <div className="form-group">
    //       <Field
    //       placeholder="name"
    //       className="form-control" 
    //       type="text"
    //       name="userName" />
    //       <ErrorMessage
    //         className="alert alert-danger"
    //         component="div"
    //         name="userName" />
    //     </div>
    //     <div className="form-group">
    //       <Field
    //       placeholder="password"
    //       className="form-control" 
    //       type="password"
    //       name="password" />
    //       <ErrorMessage
    //         className="alert alert-danger"
    //         component="div"
    //         name="password" />
    //     </div>
    //     <div className="form-group">
    //       <button className="btn btn-primery" type="submit">ok</button>
    //       </div>
    //   </Form>
    // </Formik>
  )
}





























// import './App.css';

// function Login() {
//   return (
//     <div className="Login">
//       <h1>Login</h1>
//       <form>
//       <input type="text" placeholder="UserName" name="UserName"/>
//       <input type="text" placeholder="Password" name="Password"/>
//       <input type="submit" value="okay"/>
//       </form>
//     </div>
//   );
// }

// export default Login;







