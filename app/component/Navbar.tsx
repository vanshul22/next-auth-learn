// components/Navbar.js
"use client"
import Link from 'next/link';
import { signIn, signOut } from "next-auth/react";

const Navbar = () => {


    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto">
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link href="/services">Services</Link>
                    </li>
                    <li>
                        <Link href="/api/auth/signout"> Redirect Sign Out</Link>
                    </li>
                    <li>
                        <button onClick={() => signOut()}>Click signout</button>
                    </li>
                    <li>
                        <button onClick={() => signIn()}>Click signin</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
