"use client";
import React from "react";
import { Building2, PlusCircle, CalendarCheck, Users, BarChart3 } from "lucide-react";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import { motion } from "motion/react"

const ForOwners = () => {
    return (

        <motion.section
        
                 initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.8 }}
        className="py-16 px-[60px] bg-base-200">

            <div className=" mx-auto px-5">


                <div className="bg-base-300 border border-violet-400/20 rounded-3xl p-8 md:p-12 shadow-xl">


                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">


                        {/* Left Content */}

                        <div>


                            <div className="flex items-center gap-3 mb-5">

                                <Building2 
                                    size={40}
                                    className="text-violet-300"
                                />

                                <h2 className="text-3xl md:text-4xl font-bold text-violet-300">
                                    Grow Your Property Business
                                </h2>

                            </div>



                            <p className="text-violet-200 leading-relaxed mb-6">
                                List your properties, manage bookings, and connect with more
                                tenants through a simple and secure rental platform.
                            </p>



                            <button className="bg-violet-500 hover:bg-violet-600 text-white px-6 py-3 rounded-lg transition flex justify-center gap-[6px] items-center">

                                <HiOutlineArrowTopRightOnSquare />Start By Signing Up

                            </button>


                        </div>





                        {/* Right Benefits */}

                        <div className="space-y-4">


                            <div className="flex gap-4 items-center">

                                <PlusCircle
                                    size={32}
                                    className="text-violet-300"
                                />

                                <div>

                                    <h3 className="text-lg font-semibold text-white">
                                        Easy Property Listings
                                    </h3>

                                    <p className="text-violet-200 text-sm">
                                        Create and manage property listings effortlessly.
                                    </p>

                                </div>

                            </div>





                            <div className="flex gap-4 items-center">

                                <CalendarCheck
                                    size={32}
                                    className="text-violet-300"
                                />

                                <div>

                                    <h3 className="text-lg font-semibold text-white">
                                        Manage Bookings
                                    </h3>

                                    <p className="text-violet-200 text-sm">
                                        Keep track of reservations and rental requests easily.
                                    </p>

                                </div>

                            </div>





                            <div className="flex gap-4 items-center">

                                <Users
                                    size={32}
                                    className="text-violet-300"
                                />

                                <div>

                                    <h3 className="text-lg font-semibold text-white">
                                        Reach More Tenants
                                    </h3>

                                    <p className="text-violet-200 text-sm">
                                        Showcase your properties to potential renters.
                                    </p>

                                </div>

                            </div>





                            <div className="flex gap-4 items-center">

                                <BarChart3
                                    size={32}
                                    className="text-violet-300"
                                />

                                <div>

                                    <h3 className="text-lg font-semibold text-white">
                                        Track Rental Activity
                                    </h3>

                                    <p className="text-violet-200 text-sm">
                                        Monitor your property performance and activities.
                                    </p>

                                </div>

                            </div>


                        </div>


                    </div>


                </div>


            </div>


        </motion.section>

    );
};

export default ForOwners;