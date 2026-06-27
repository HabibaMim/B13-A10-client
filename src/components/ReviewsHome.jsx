import { getFeaturedReviews } from '@/lib/action/property';
import Image from 'next/image';
import React from 'react';

const ReviewsHome = async () => {
    const reviews = await getFeaturedReviews();
    return (

<section className="py-16 px-5 bg-base-200">


    <div className="max-w-7xl mx-auto">



        {/* Heading */}

        <div className="text-center mb-12">


            <h2 className="text-3xl md:text-4xl font-bold text-violet-300">

                Customer Reviews

            </h2>


        </div>







        {/* Reviews */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">



            {reviews?.map((review)=>(


                <div

                key={review._id}

                className="bg-base-300 border border-violet-400/20 rounded-3xl p-6 shadow-xl hover:border-violet-400/50 transition"

                >






                    {/* Profile */}


                    <div className="flex items-center gap-4 mb-5">



                        <Image

                            src={review?.tenantPhoto}

                            alt="profile image"

                            height={60}

                            width={60}

                            className="w-14 h-14 rounded-full object-cover border border-violet-400/30"

                        />





                        <div className="overflow-hidden">


                            <h3 className="text-white font-semibold truncate">

                                {review?.tenantName}

                            </h3>



                            <p className="text-violet-200 text-xs truncate">

                                {review?.tenantEmail}

                            </p>


                        </div>


                    </div>









                    {/* Rating + Date */}


                    <div className="flex justify-between items-center mb-4">


                        <div className="bg-violet-500/20 px-3 py-1 rounded-full text-yellow-400 text-sm">

                            ⭐ {review?.rating}

                        </div>



                        <p className="text-violet-200 text-xs">

                            {new Date(review?.createdAt).toLocaleDateString("en-GB", {

                                day: "numeric",

                                month: "long",

                                year: "numeric"

                            })}

                        </p>



                    </div>








                    {/* Comment */}


                    <p className="text-white text-sm leading-relaxed line-clamp-4">

                        "{review?.comment}"

                    </p>




                </div>



            ))}



        </div>



    </div>


</section>

);
};

export default ReviewsHome;