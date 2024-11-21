import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../Provider/AuthProvider';

const Registration = (props) => {
   
    const {createNewUser, SetUser}= useContext(AuthContext);


     const handelSubmit =(e) =>{
        e.preventDefault ();
        const form = new FormData(e.target);
        const name = form.get("name")
        const photo = form.get("photo")
        const email = form.get("email")
        const password = form.get("password")
        
        createNewUser (email,password)
        .then((result) => {
            
            const user = result.user;
            SetUser(user);
            console.log(user)
            
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
           
          });


     };



    return (

        <div className="hero bg-base-200 min-h-screen flex items-center justify-center ">
            <div className="card bg-base-100 w-full  max-w-sm shrink-0 shadow-2xl mt-11">
                <h1 className='font-bold text-xl text-center mt-5'>Registration your account</h1>
                <form onSubmit={handelSubmit} className="card-body">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            name="name"
                            type="text"
                            placeholder="Enter your name"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    <div className="form-control mt-4">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            name="photo"
                            type="url"
                            placeholder="Enter photo URL"
                            className="input input-bordered"
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                      
                        <input   name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                       
                        <input  name="password" type="password" placeholder="password" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-2">
                        <button className="btn btn-primary">Registration</button>
                    </div>
                </form>
                <div className="divider">OR</div>
                <div className="form-control px-6">
                    <button className="btn btn-outline btn-secondary">
                        <span> <FaGoogle /> </span>   Continue with Google
                    </button>
                </div>
                <div className="text-center mt-4 mb-7">
                    <p className="text-sm">
                        Already have an account?
                        <NavLink
                            to="/auth/login"
                            className="text-blue-500 link link-hover"
                        >
                            Login Now
                        </NavLink>

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Registration;