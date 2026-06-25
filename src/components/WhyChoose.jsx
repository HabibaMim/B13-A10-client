 "use client";
import React from 'react';
import { ShieldCheck, Home, CreditCard, Users, Star, LayoutDashboard } from "lucide-react";

const WhyChooseUs = () => {
    const benefits = [
        {
            icon: <Home size={32} />,
            title: "Wide Range of Properties",
            description:
                "Explore different rental options and find a place that matches your needs, budget, and lifestyle."
        },
        {
            icon: <ShieldCheck size={32} />,
            title: "Secure & Trusted Platform",
            description:
                "Enjoy a safer rental experience with secure authentication, verified users, and transparent processes."
        },
        {
            icon: <CreditCard size={32} />,
            title: "Easy Online Payments",
            description:
                "Make reservation payments smoothly with a convenient and secure online payment system."
        },
        {
            icon: <Users size={32} />,
            title: "Connect With Owners",
            description:
                "A simple way for tenants and property owners to communicate and build reliable rental relationships."
        },
        {
            icon: <LayoutDashboard size={32} />,
            title: "Easy Property Management",
            description:
                "Owners can manage listings, bookings, and rental activities from one organized platform."
        },
        {
            icon: <Star size={32} />,
            title: "Reviews & Transparency",
            description:
                "Make better decisions with user reviews and a transparent rental marketplace."
        }
    ];

    return (
        <section className="py-16 px-[60px] bg-base-200">

            <div className=" mx-auto px-5">


                <div className="text-center mb-12">

                    <h2 className="text-3xl md:text-4xl font-bold text-violet-300">
                        Why Choose Us?
                    </h2>

                </div>



                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


                    {benefits.map((item, index) => (

                        <div
                            key={index}
                            className="bg-base-300 border border-violet-400/20 rounded-2xl p-6 shadow-lg hover:border-violet-400/50 transition"
                        >

                            <div className="text-violet-300 mb-4">
                                {item.icon}
                            </div>


                            <h3 className="text-xl font-semibold text-violet-300 mb-2">
                                {item.title}
                            </h3>


                            <p className="text-violet-200 text-sm leading-relaxed">
                                {item.description}
                            </p>


                        </div>

                    ))}


                </div>


            </div>

        </section>
    );
};

export default WhyChooseUs;