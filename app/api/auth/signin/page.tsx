"use client"
import { signIn } from 'next-auth/react'
import Image from 'next/image';
import React, { useState } from 'react'

const SignInPage = () => {

    const [user, setUser] = useState({ email: '', password: '' });

    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await signIn("credentials", { email: user.email, password: user.password, redirect: true, callbackUrl: "/" });

        try {
            const result = await signIn('credentials', { email: user.email, password: user.password, redirect: true, callbackUrl: "/" });
            if (result?.error) {
                throw new Error(result.error);
            }
        } catch (error) {

        }
    }

    const handleGoogleSignIn = () => {
        signIn('google', { redirect: true, callbackUrl: "/" });
    };
    const handleGithubSignIn = () => {
        signIn('github', { redirect: true, callbackUrl: "/" });
    };
    const handleFacebookSignIn = () => {
        signIn('facebook', { redirect: true, callbackUrl: "/" });
    };

    return (
        <div className='flex items-center justify-center bg-gray-900  h-[100vh]'>
            <>
                <div className="min-h-screen bg-gray-900 py-6 flex flex-col justify-center sm:py-12">
                    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-180 sm:rounded-3xl animate-spin" style={{ animationDuration: '30s' }}></div>
                        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:py-10 sm:p-20">
                            <div className="max-w-md mx-auto">
                                <div>
                                    <h1 className="text-2xl font-semibold text-black ">
                                        Login with Superior Codelabs AI
                                    </h1>
                                </div>
                                <div className="divide-y divide-gray-200 text-center">
                                    <div className="">
                                        <form className='py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7' onSubmit={submitForm}>
                                            <div className="relative">
                                                <input
                                                    autoComplete="off"
                                                    id="email"
                                                    name="email"
                                                    type="text"
                                                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                                                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                                    placeholder="Email address"
                                                />
                                                <label
                                                    htmlFor="email"
                                                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                                >
                                                    Email Address
                                                </label>
                                            </div>
                                            <div className="relative">
                                                <input
                                                    autoComplete="off"
                                                    id="password"
                                                    name="password"
                                                    type="password"
                                                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                                                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                                    placeholder="Password"
                                                />
                                                <label
                                                    htmlFor="password"
                                                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                                >
                                                    Password
                                                </label>
                                            </div>
                                            <div className="relative">
                                                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-300 to-blue-600 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 w-full">
                                                    <span className="relative px-2 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0 text-black hover:text-white w-full">
                                                        Submit
                                                    </span>
                                                </button>
                                            </div>
                                        </form>
                                        <div className="flex flex-col gap-5">
                                            <button className='flex group justify-start items-center py-1 border gap-2 bg-white rounded-md text-black  hover:bg-gradient-to-r hover:from-gray-700 hover:via-gray-900 hover:to-black' onClick={handleGoogleSignIn}>
                                                <span className='flex w-[45%] justify-end me-2'><Image src="/google.png" alt="Google image" width={30} height={30} /></span>
                                                <span className='text-sm font-bold group-hover:invert'> Google  </span>
                                            </button>

                                            <button className='flex group justify-start items-center py-1 border gap-2 bg-white rounded-md text-black  hover:bg-gradient-to-r hover:from-gray-700 hover:via-gray-900 hover:to-black' onClick={handleGithubSignIn}>
                                                <span className='flex w-[45%] justify-end group-hover:invert me-2'><Image src="/github.png" alt="Github image" width={30} height={30} /></span>
                                                <span className='text-sm font-bold group-hover:invert'> Github </span>
                                            </button>

                                            <button className='flex group justify-start items-center py-1 border gap-2 bg-white rounded-md text-black  hover:bg-gradient-to-r hover:from-gray-700 hover:via-gray-900 hover:to-black' onClick={handleFacebookSignIn}>
                                                <span className='flex w-[45%] justify-end me-2 '><Image src="/facebook.png" alt="Github image" width={30} height={30} /></span>
                                                <span className='text-sm font-bold group-hover:invert'> Facebook </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default SignInPage;