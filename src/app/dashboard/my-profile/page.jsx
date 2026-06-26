"use client";

import { useSession } from '@/lib/auth-client';
import { Avatar } from '@heroui/react';
import React from 'react';

const MyProfile = () => {

    const { data: session } = useSession();

    return (

        <section className="min-h-screen bg-base-200 py-10 px-5">


            <div className="max-w-3xl mx-auto bg-base-300 border border-violet-400/20 rounded-3xl shadow-xl p-8">


                <h1 className="text-3xl font-bold text-violet-300 mb-8">
                    My Profile
                </h1>



                <div className="flex flex-col items-center text-center gap-5">


                    <div className="">

                        <Avatar className="w-32 h-32">

                            <Avatar.Image
                                alt="profile image"
                                src={session?.user?.image}
                                referrerPolicy="no-referrer"
                            />

                            <Avatar.Fallback className="text-3xl bg-violet-500 text-white">
                                {session?.user?.name?.charAt(0)}
                            </Avatar.Fallback>

                        </Avatar>

                    </div>




                    <div>


                        <h2 className="text-2xl font-semibold text-white">
                            {session?.user?.name}
                        </h2>


                        <p className="text-violet-200 mt-1">
                            {session?.user?.email}
                        </p>


                    </div>



                </div>





                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">


                    <div className="bg-base-200 rounded-xl p-5 border border-violet-400/20">

                        <p className="text-violet-300 text-sm font-medium">
                            Name
                        </p>

                        <p className="text-white mt-1">
                            {session?.user?.name}
                        </p>

                    </div>



                    <div className="bg-base-200 rounded-xl p-5 border border-violet-400/20">

                        <p className="text-violet-300 text-sm font-medium">
                            Email
                        </p>

                        <p className="text-white mt-1">
                            {session?.user?.email}
                        </p>

                    </div>



                </div>





                <div className="mt-8 flex justify-center">


                


                </div>



            </div>


        </section>

    );
};

export default MyProfile;