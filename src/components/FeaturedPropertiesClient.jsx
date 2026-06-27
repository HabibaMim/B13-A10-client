
"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const FeaturedPropertiesClient = ({ properties }) => {
    return (
        <motion.div
            
            
            initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.8 }}
            
            className="max-w-7xl mx-auto">


                <h1 className="text-3xl md:text-4xl font-bold text-violet-300 mb-10 text-center">
                    Featured Properties
                </h1>



                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">



                    {properties?.map((property)=>(


                        <div
                            key={property._id}
                            className="group bg-base-300 border border-violet-400/20 rounded-3xl overflow-hidden shadow-xl group"
                        >



                            {/* Image */}

                            <div className="relative h-56 w-full">

                                <Image
                                    src={property.image}
                                    alt="property image"
                                    fill
                                    className="object-cover group-hover:scale-105 transition duration-300"
                                />

                            </div>





                            {/* Content */}

                            <div className="p-6">



                                <h2 className="text-xl font-bold text-white mb-3">
                                    {property.title}
                                </h2>



                                <p className="text-violet-200 text-sm mb-5">
                                    {property.location}
                                </p>





                                <div className="grid grid-cols-2 gap-3 mb-5">



                                    <div className="bg-base-200 rounded-xl p-3">

                                        <p className="text-violet-300 text-xs">
                                            Rent
                                        </p>

                                        <p className="text-white font-semibold">
                                            ৳ {property.rentPrice}/{property.rentType}
                                        </p>

                                    </div>





                                    <div className="bg-base-200 rounded-xl p-3">

                                        <p className="text-violet-300 text-xs">
                                            Size
                                        </p>

                                        <p className="text-white font-semibold">
                                            {property.size} sqft
                                        </p>

                                    </div>












                                </div>





                                 <Link href={`/properties/${property._id}`}
                                    className="btn w-full bg-violet-500 hover:bg-violet-600 text-white py-3 rounded-xl font-semibold transition"
                                >
                                    View Details
                                </Link>




                            </div>



                        </div>


                    ))}



                </div>



            </motion.div>
    );
};

export default FeaturedPropertiesClient;