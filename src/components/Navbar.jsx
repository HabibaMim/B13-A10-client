"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from "../../public/assets/logo.png"
import { Avatar } from '@heroui/react';
import { authClient, signOut, useSession } from '@/lib/auth-client';
import { usePathname, useRouter } from 'next/navigation';

import { MdOutlineLogout } from 'react-icons/md';

const Navbar = () => {
const {data:session, isPending} = useSession();
    const router =useRouter()
//console.log(session)

const pathName = usePathname()
if(pathName.includes('dashboard')){
    return null;
}

    const handleSignout = async () => {
        await signOut();
        router.push('/')
    }
   return (
    <div>

        <div className="navbar shadow-sm bg-base-300 border-b border-violet-400/20">

            <div className="navbar-start">

                <div className="dropdown">

                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-violet-200">

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">

                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />

                        </svg>

                    </div>


                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-300 rounded-box z-1 mt-3 w-52 p-2 shadow border border-violet-400/20"
                    >

                        <li className="font-semibold text-violet-200">
                            <Link href="/">Home</Link>
                        </li>

                        <li className="font-semibold text-violet-200">
                            <Link href="/rooms">All Properties</Link>
                        </li>

                        {!isPending && session && <>
                            <li className="font-semibold text-violet-200">
                                <Link href="/dashboard">Dashboard</Link>
                            </li>
                            
                        </>}

                    </ul>

                </div>


                <Image 
                    src={logo} 
                    className="sm:block hidden h-[55px] w-[75px]" 
                    alt="logo"
                />

            </div>


            <div className="navbar-center hidden lg:flex">

                <ul className="menu menu-horizontal px-1">

                    <li className="font-semibold text-[17px] text-violet-200">
                        <Link href="/">Home</Link>
                    </li>


                    <li className="font-semibold text-[17px] text-violet-200">
                        <Link href="/rooms">All Properties</Link>
                    </li>


                    {!isPending && session && <>

                        <li className="font-semibold text-[17px] text-violet-200">
                            <Link href="/dashboard">Dashboard</Link>
                        </li>

                    </>}


                </ul>

            </div>


            <div className="navbar-end space-x-[15px]">


                {!isPending && !session ? 

                <div className="flex gap-[10px]">


                    <Link 
                        href="/login" 
                        className="btn bg-violet-500 hover:bg-violet-600 text-white"
                    >
                        Login
                    </Link>


                    <Link 
                        href="/register" 
                        className="btn bg-violet-500 hover:bg-violet-600 text-white"
                    >
                        Register
                    </Link>


                </div>


                :


                <div className="flex items-center justify-between gap-[10px]">


                    <div className="dropdown">


                        <div tabIndex={0} role="button" className="btn rounded-full m-1 bg-base-200 border border-violet-400/20">


                            <Avatar>

                                <Avatar.Image 
                                    alt="image" 
                                    src={session?.user?.image} 
                                    referrerPolicy="no-referrer" 
                                />

                                <Avatar.Fallback>
                                    {session?.name?.charAt(0)}
                                </Avatar.Fallback>

                            </Avatar>


                            <span className="text-violet-200 font-medium">
                                {session?.user?.name}
                            </span>


                        </div>


                        <ul 
                            tabIndex="-1" 
                            className="dropdown-content menu  bg-neutral/80 backdrop-blur-md rounded-box z-10 w-52 p-2 shadow border border-violet-400/20"
                        >


                            <li className="p-0">


                                <div className="flex flex-col items-start w-full px-3 py-2 gap-0">


                                    <p className="text-violet-200 font-semibold leading-tight">
                                        Welcome Back!
                                    </p>


                                    <p className="text-gray-400 text-[13px] text-sm leading-tight">
                                        {session?.user?.email}
                                    </p>


                                </div>


                            </li>



                            <li>

                                <Link 
                                    className="text-violet-200" 
                                    href=''
                                >
                                    Dashboard
                                </Link>

                            </li>



                            <li>

                                <button 
                                    onClick={handleSignout} 
                                    className="text-violet-200 font-semibold w-full"
                                >

                                    <MdOutlineLogout /> LogOut

                                </button>

                            </li>


                        </ul>


                    </div>

<div>
    <button 
                       onClick={handleSignout} 
                        className="btn bg-violet-500 hover:bg-violet-600 text-white"
                    >
                        Logout
                    </button>

</div>

                </div>

                }


            </div>

        </div>

    </div>
);
};

export default Navbar;