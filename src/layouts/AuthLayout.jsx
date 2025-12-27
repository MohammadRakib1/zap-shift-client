import React from 'react';
import { Outlet } from 'react-router';
import authImg from '../assets/benefit/authImage.png';
import ProFastLogo from '../pages/shared/ProFastLogo/ProFastLogo';

const AuthLayout = () => {
    return (
        <div className="px-6 py-12 md:p-12">
            <div className="max-w-6xl mx-auto">
                <ProFastLogo />

                <div className="hero-content flex flex-col-reverse lg:flex-row-reverse gap-8 lg:gap-12 items-center">

                    {/* Image Section – hidden on mobile */}
                    <div className="flex-1 hidden md:flex justify-center lg:justify-end">
                        <img
                            src={authImg}
                            className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg shadow-2xl"
                            alt="Authentication"
                        />
                    </div>

                    {/* Outlet Section */}
                    <div className="flex-1 w-full">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AuthLayout;