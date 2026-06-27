import { getDetailsPage } from '@/lib/action/property';
import Image from 'next/image';
import React from 'react';
import { 
    MapPin, 
    Home, 
    Ruler, 
    BedDouble, 
    Bath, 
    Heart, 
    CalendarCheck,
    Star,
    Sparkles
} from "lucide-react";


const PropertyDetails = async ({params}) => {

    const {id} = await params;

    const property = await getDetailsPage(id);


    return (

        <section className="min-h-screen bg-base-200 py-8 px-5">


            <div className="max-w-7xl mx-auto">


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">





                    {/* LEFT SIDE */}

                    <div>


                        {/* Image */}

                        <div className="relative h-[450px] w-full rounded-3xl overflow-hidden">


                            <Image

                                src={property.image}

                                alt="property image"

                                fill

                                className="object-cover"

                            />


                        </div>






                        {/* Review Section */}

                        <div className="mt-6">


                            <div className="flex items-center gap-2 mb-4">


                                <Star className="text-violet-300"/>


                                <h2 className="text-2xl font-bold text-violet-300">

                                    Add Review

                                </h2>


                            </div>






                            <div className="flex gap-3 items-start">



                                {/* Rating */}

                                <select

                                    defaultValue=""

                                    className="select w-28 h-12 bg-base-300 border-violet-400/30 text-white"

                                >

                                    <option value="" disabled>
                                        ⭐
                                    </option>


                                    <option value="1">
                                        1 ⭐
                                    </option>


                                    <option value="2">
                                        2 ⭐⭐
                                    </option>


                                    <option value="3">
                                        3 ⭐⭐⭐
                                    </option>


                                    <option value="4">
                                        4 ⭐⭐⭐⭐
                                    </option>


                                    <option value="5">
                                        5 ⭐⭐⭐⭐⭐
                                    </option>


                                </select>








                                {/* Review Text */}


                                <textarea

                                    placeholder="Write your review..."

                                    className="textarea flex-1 h-32 bg-base-300 border-violet-400/30 text-white"

                                />


                            </div>







                            <button

                                className="mt-4 w-full bg-violet-500 hover:bg-violet-600 text-white py-3 rounded-xl font-semibold"

                            >

                                Submit Review

                            </button>



                        </div>



                    </div>









                    {/* RIGHT SIDE DETAILS */}


                    <div className="space-y-6">





                        <div>


                            <h1 className="text-4xl font-bold text-violet-300">

                                {property.title}

                            </h1>



                            <div className="flex items-center gap-2 text-violet-200 mt-3">

                                <MapPin size={18}/>

                                {property.location}

                            </div>


                        </div>









                        <div className="flex items-center justify-between">



                            <div className="flex items-center gap-2">


                                <Home className="text-violet-300"/>


                                <span className="text-white">

                                    {property.propertyType}

                                </span>


                            </div>





                            <div>


                                <p className="text-violet-300 text-sm">

                                    Rent

                                </p>



                                <p className="text-white text-2xl font-bold">

                                    ৳{property.rentPrice}

                                    <span className="text-sm">

                                        /{property.rentType}

                                    </span>


                                </p>


                            </div>



                        </div>









                        {/* Quick Info */}


                        <div className="grid grid-cols-3 gap-3">



                            <div className="bg-base-300 rounded-xl p-3 text-center">


                                <BedDouble className="mx-auto text-violet-300"/>


                                <p className="text-white">

                                    {property.bedrooms}

                                </p>


                            </div>







                            <div className="bg-base-300 rounded-xl p-3 text-center">


                                <Bath className="mx-auto text-violet-300"/>


                                <p className="text-white">

                                    {property.bathrooms}

                                </p>


                            </div>








                            <div className="bg-base-300 rounded-xl p-3 text-center">


                                <Ruler className="mx-auto text-violet-300"/>


                                <p className="text-white">

                                    {property.size} sqft

                                </p>


                            </div>


                        </div>









                        {/* Description */}


                        <div>


                            <h2 className="text-xl font-semibold text-white">

                                Description

                            </h2>



                            <p className="text-violet-200 mt-2">

                                {property.description}

                            </p>


                        </div>









                        {/* Amenities */}


                        <div>


                            <h2 className="text-xl font-semibold text-white mb-3">

                                Amenities

                            </h2>



                            <div className="flex flex-wrap gap-2">



                                {property.amenities?.map((amenity,index)=>(


                                    <span

                                        key={index}

                                        className="badge badge-outline border-violet-400/40 text-violet-300"

                                    >

                                        {amenity}


                                    </span>


                                ))}


                            </div>


                        </div>









                        {/* Extra Features */}


                        <div>



                            <div className="flex items-center gap-2 mb-2">


                                <Sparkles className="text-violet-300"/>


                                <h2 className="text-xl font-semibold text-white">

                                    Extra Features

                                </h2>


                            </div>





                            <p className="text-violet-200">

                                {property.extraFeatures}

                            </p>



                        </div>









                        {/* Buttons */}



                        <div className="flex gap-4">



                            <button

                                className="flex-1 flex justify-center items-center gap-2 bg-violet-500 hover:bg-violet-600 text-white py-3 rounded-xl font-semibold"

                            >

                                <Heart size={20}/>

                                Favorite


                            </button>






                            <button

                                className="flex-1 flex justify-center items-center gap-2 bg-violet-700 hover:bg-violet-800 text-white py-3 rounded-xl font-semibold"

                            >

                                <CalendarCheck size={20}/>

                                Book


                            </button>


                        </div>






                    </div>



                </div>



            </div>



        </section>

    );

};


export default PropertyDetails;