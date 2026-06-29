"use client";
import Image from 'next/image';
import React from 'react';
import banner from "../../public/assets/banner.jpg";
import { motion } from "motion/react"
import PropertySearch from './SearchProperty';

const Banner = () => {
    return (
        <div className="flex justify-center">

           

            
            <motion.div 
            
            initial={{opacity:0, y:30}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.8}}
            
            className="relative w-full h-[400px] lg:h-[650px]">

                <Image
                    src={banner}
                    alt="banner"
                    fill
                    className="object-cover"
                />

                
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

                
                <div className="absolute inset-0 flex flex-col justify-start px-5 sm:px-8 md:px-16 text-purple-300">
                    <div className='mt-[20px] mb-[130px]'>
                    <PropertySearch></PropertySearch>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-xl leading-tight">
                        Find Your Perfect Place, Easily & Securely
                    </h1>

                    <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-200 max-w-lg">
                       Discover rental properties, connect with trusted owners, and book your next home with confidence. A secure platform that makes renting very simple and easy.
                    </p>

                 

                </div>

            </motion.div>

        </div>
    );
};

export default Banner;