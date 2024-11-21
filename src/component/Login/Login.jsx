import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../Provider/AuthProvider';


const Login = (props) => {

    const {userLogin, SetUser}= useContext(AuthContext);

     const handelLogIn =(e)=>{
          e.preventDefault();
          const form = e.target ;
          const email = form.email.value;
          const password = form.password.value;
          userLogin(email,password)
          .then((result) => {
             
            const user = result.user;
            SetUser(user);
            
          })
          .catch((error) => {
            alert(error.code)
          });
     };

    return (

        <div className="hero bg-base-200 min-h-screen flex items-center justify-center">
            <div className="card bg-base-100 w-full  max-w-sm shrink-0 shadow-2xl">
                <h1 className='font-bold text-xl text-center mt-5'>Login your account</h1>
                <form onSubmit={handelLogIn}  className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password"  type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-2">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <div className="divider">OR</div>
                <div className="form-control px-6">
                    <button className="btn btn-outline btn-secondary">
                    <span> <FaGoogle /> </span> Continue with Google 
                    </button>
                </div>
                <div className="text-center mt-4 mb-7">
                    <p className="text-sm">
                        Don't have an account?
                        <NavLink
                            to="/auth/registration"
                            className="text-blue-500 link link-hover"
                        >
                            Register now
                        </NavLink>

                    </p>
                </div>
            </div>
        </div>

    );
};

export default Login;