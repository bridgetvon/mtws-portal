import React, { useState } from 'react';
import '../Login/Login.css';

const Login = (props) => {
  
  const [formState, setFormState] = useState({ email: '', password: '' });

 // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  
 // submit form
  const handleFormSubmit = async (event) => {
    // event.preventDefault();

    // try {
    //   const { data } = await login({
    //     variables: { ...formState },
    //   });
    //   console.log(data)
    //   Auth.login(data.login.token);
      
    // } catch (e) {
    //   console.error(e);
    // }

    // // clear form values
    // setFormState({
    //   email: '',
    //   password: '',
    // });
  };


  return (
      
    <main id="form-box" className="flex-row justify-center mb-4">
        <div className="card" id="login-card">
          <h4 className="header">Login</h4>
          <div className="card-body">
            <form onSubmit={handleFormSubmit}>
              <input
                className="form-input"
                placeholder="Email"
                name="email"
                type="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="******"
                name="password"
                type="password"
                id="password"
                value={formState.password}
                onChange={handleChange}
              />
              <button id="login-btn" className="btn d-block w-50" type="submit">
                Submit
              </button>
            </form>            
          </div>       
        </div>     
    </main>
  );
};

export default Login;