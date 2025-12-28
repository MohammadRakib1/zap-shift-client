import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../firebase/hooks/useAuth";
import { Link } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser } = useAuth();

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="flex items-center justify-center px-4">
            <div className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-white shadow-lg rounded-2xl p-6 sm:p-8">

                {/* Title */}
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
                    Register an Account
                </h2>
                <p className="text-gray-600 text-center mt-1 mb-6">
                    Register with Profast
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full border border-gray-300 rounded-xl p-3 text-base focus:outline-none focus:ring-2 focus:ring-green-400"
                    />

                    <input
                        type="email"
                        {...register('email', { required: true })}
                        placeholder="Email"
                        className="w-full border border-gray-300 rounded-xl p-3 text-base focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                    {
                        errors.email?.type === 'required' && <p className="text-red-600">Email is required</p>
                    }

                    <input
                        type="password"
                        {...register('password', { required: true, minLength: 6 })}
                        placeholder="Password"
                        className="w-full border border-gray-300 rounded-xl p-3 text-base focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                    {
                        errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>
                    }

                    {
                        errors.password?.type === 'minLength' && <p className='text-red-600'>Password Must be 6 characters or longer</p>
                    }

                    <button className="w-full bg-lime-400 hover:bg-lime-500 text-white font-semibold p-3 rounded-xl mt-2 transition">
                        Register
                    </button>
                </form>

                {/* Login link */}
                <p className="text-center mt-5 text-gray-600 text-sm">
                    Already have an account? <Link to='/login' className="text-blue-600 hover:underline font-medium">Login</Link>
                </p>

                {/* OR separator */}
                {/* <div className="flex items-center my-6">
                    <div className="flex-grow h-px bg-gray-300"></div>
                    <span className="px-3 text-gray-500 text-sm">Or</span>
                    <div className="flex-grow h-px bg-gray-300"></div>
                </div> */}

                {/* Google signup */}
                <SocialLogin></SocialLogin>
                {/* <button className="w-full border border-gray-300 flex items-center justify-center gap-2 p-3 rounded-xl hover:bg-gray-100 transition">
                    <FcGoogle size={24} />
                    <span className="font-medium">Register with Google</span>
                </button> */}
            </div>
        </div>
    );
};

export default Register;