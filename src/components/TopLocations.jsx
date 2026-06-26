import Image from "next/image";
import React from "react";
import img1 from "../../public/assets/img1.jpg"
import img2 from "../../public/assets/img2.jpg"
import img3 from "../../public/assets/img3.jpg"
import img4 from "../../public/assets/img4.jpg"

const TopLocations = () => {
    return (

        <section className="py-16 px-[60px] bg-base-200">

            <div className="mx-auto px-5">


                <div className="text-center mb-12">

                    <h2 className="text-3xl md:text-4xl font-bold text-violet-300">
                        Top Locations
                    </h2>

                    <p className="text-violet-200 mt-3">
                        Explore popular locations and discover rental properties in your preferred area.
                    </p>

                </div>



                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">



                    {/* Dhaka */}

                    <div className="card bg-base-300 border border-violet-400/20 shadow-xl overflow-hidden rounded-2xl hover:border-violet-400/50 transition">

                        <figure className="h-48">

                            <Image
                                src={img1}
                                width={500}
                                height={300}
                                alt="Dhaka"
                                className="w-full h-full object-cover"
                            />

                        </figure>


                        <div className="card-body">

                            <h3 className="text-xl font-semibold text-violet-300">
                                Dhaka
                            </h3>

                            <ul className="list-disc list-inside text-violet-200 text-sm space-y-1">

                                <li>Apartments</li>
                                <li>Family homes</li>
                                <li>Student rentals</li>

                            </ul>


                            <button className="mt-3 text-white bg-violet-500 hover:bg-violet-600 rounded-lg py-2 transition">
                                Explore Properties
                            </button>

                        </div>

                    </div>





                    {/* Chittagong */}

                    <div className="card bg-base-300 border border-violet-400/20 shadow-xl overflow-hidden rounded-2xl hover:border-violet-400/50 transition">

                        <figure className="h-48">

                            <Image
                                src={img2}
                                alt="Chittagong"
                                width={500}
                                height={300}
                                className="w-full h-full object-cover"
                            />

                        </figure>


                        <div className="card-body">

                            <h3 className="text-xl font-semibold text-violet-300">
                                Chittagong
                            </h3>

                            <ul className="list-disc list-inside text-violet-200 text-sm space-y-1">

                                <li>City apartments</li>
                                <li>Sea-side stays</li>
                                <li>Modern homes</li>

                            </ul>


                            <button className="mt-3 text-white bg-violet-500 hover:bg-violet-600 rounded-lg py-2 transition">
                                Explore Properties
                            </button>

                        </div>

                    </div>





                    {/* Sylhet */}

                    <div className="card bg-base-300 border border-violet-400/20 shadow-xl overflow-hidden rounded-2xl hover:border-violet-400/50 transition">

                        <figure className="h-48">

                            <Image
                                src={img3}
                                alt="Sylhet"
                                width={500}
                                height={300}
                                className="w-full h-full object-cover"
                            />

                        </figure>


                        <div className="card-body">

                            <h3 className="text-xl font-semibold text-violet-300">
                                Sylhet
                            </h3>

                            <ul className="list-disc list-inside text-violet-200 text-sm space-y-1">

                                <li>Peaceful residential areas</li>
                                <li>Family-friendly properties</li>
                                <li>Comfortable living spaces</li>

                            </ul>


                            <button className="mt-3 text-white bg-violet-500 hover:bg-violet-600 rounded-lg py-2 transition">
                                Explore Properties
                            </button>

                        </div>

                    </div>





                    {/* Cox's Bazar */}

                    <div className="card bg-base-300 border border-violet-400/20 shadow-xl overflow-hidden rounded-2xl hover:border-violet-400/50 transition">

                        <figure className="h-48">

                            <Image
                                src={img4}
                                alt="Cox's Bazar"
                                width={500}
                                height={300}
                                className="w-full h-full object-cover"
                            />

                        </figure>


                        <div className="card-body">

                            <h3 className="text-xl font-semibold text-violet-300">
                                Rajshahi
                            </h3>

                            <ul className="list-disc list-inside text-violet-200 text-sm space-y-1">

                                <li>Vacation rentals</li>
                                <li>Short-term stays</li>
                                <li>Beachside homes</li>

                            </ul>


                            <button className="mt-3 text-white bg-violet-500 hover:bg-violet-600 rounded-lg py-2 transition">
                                Explore Properties
                            </button>

                        </div>

                    </div>



                </div>


            </div>

        </section>

    );
};

export default TopLocations;