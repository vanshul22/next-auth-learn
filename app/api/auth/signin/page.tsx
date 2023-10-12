"use client"
import { signIn } from 'next-auth/react'
import React, { useState } from 'react'

const signInPage = () => {

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

    return (
        <div>
            <form onSubmit={submitForm}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input className='text-black' type="text" id='email' onChange={(e) => setUser({ ...user, email: e.target.value })} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input className='text-black' type="password" id='password' onChange={(e) => setUser({ ...user, password: e.target.value })} />
                </div>
                <button type="submit">Login</button>
            </form>

            <button onClick={handleGoogleSignIn}>Sign in with Google</button>

        </div>
    )
}

export default signInPage;