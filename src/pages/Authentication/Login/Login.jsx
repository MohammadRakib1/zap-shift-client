
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
    }

    return (
        <div className="flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 sm:p-8">
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-extrabold text-gray-900">Welcome Back</h1>
                    <p className="text-sm text-gray-500">Login with Profast</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            {...register('email')}
                            placeholder="Email"
                            className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-green-300"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            {...register('password', { required: true, minLength: 6 })}
                            placeholder="Password"
                            className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-green-300"
                        />
                        {
                            errors.password?.type === 'required' && <p className='text-red-600'>Password is required</p>
                        }
                        {
                            errors.password?.type === 'minLength' && <p className='text-red-600'>Password Must be 6 characters or longer</p>
                        }
                    </div>
                    <div className="flex items-center justify-between text-sm">
                        <a href="#" className="text-green-600 hover:underline">Forget Password?</a>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#CAEB66] hover:bg-lime-400 transition rounded-lg py-2 font-semibold text-gray-900"
                    >
                        Login
                    </button>
                    <p className="text-center text-sm text-gray-500">
                        Don’t have any account? <Link to='/register' className="text-green-600 hover:underline font-medium">Register</Link>
                    </p>

                    <SocialLogin></SocialLogin>

                    {/* <div className="flex items-center justify-center gap-2 text-gray-500 py-2">
                        <span className="w-full border-t"></span>
                        Or
                        <span className="w-full border-t"></span>
                    </div>
                    <button
                        type="button"
                        className="w-full flex items-center justify-center gap-2 border rounded-md py-2 hover:bg-gray-50"
                    >
                        Login with Google
                    </button> */}
                </form>
            </div>
        </div>
    );
};

export default Login;