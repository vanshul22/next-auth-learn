"use client"
import React from 'react'
import { signIn, signOut, useSession } from "next-auth/react";

const IsLogin = () => {
    const { data: session, status, update } = useSession()


    if (status === "authenticated") {
        return (
            <>
                <p>Signed in as {session?.user?.email}</p>
                <img src={session?.user?.image as string} />
                <p>Signed in as {session?.user?.name}</p>
                <button onClick={() => signOut()}>Sign out</button>
            </>
        );
    } else {
        return (
            <div>
                <p>Not signed in</p>
                <button onClick={() => signIn()}>Sign in</button>
            </div>
        );
    }
}

export default IsLogin;