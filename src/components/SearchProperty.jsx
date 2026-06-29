"use client";

import React from "react";
import { Search, MapPin } from "lucide-react";
import { redirect } from "next/navigation";


const PropertySearch = () => {

    const onSubmit = (e) => {

        e.preventDefault();

        const search = e.target.search.value;
        const propertyType = e.target.propertyType.value;

const minPrice = e.target.minPrice.value;
const maxPrice = e.target.maxPrice.value;


redirect(
    `/properties?status=Approved&search=${search}&propertyType=${propertyType}&minPrice=${minPrice}&maxPrice=${maxPrice}`
);
    }


    return (

        <div className="w-full max-w-6xl mx-auto bg-black/30 backdrop-blur-lg border border-white/20 shadow-xl rounded-3xl p-4">


            <form 
                onSubmit={onSubmit}
                className="grid grid-cols-1 md:grid-cols-5 gap-3"
            >


 {/* Location */}

                <div className="relative">


                    <MapPin

                        size={18}

                        className="absolute left-3 top-1/2 -translate-y-1/2 text-violet-300"

                    />


                    <input

                        type="text"

                        name="search"

                        placeholder="Search location"

                        className="input w-full h-12 pl-10 bg-base-200/70 border-violet-400/30 text-white focus:border-violet-400"

                    />


                </div>

                {/* Property Type */}

                <select

                    name="propertyType"

                    defaultValue=""

                    className="select h-12 w-full bg-base-200/70 border-violet-400/30 text-white leading-none"

                >

                    <option value="" disabled>
                        Property Type
                    </option>

                    <option value="House">
                        House
                    </option>

                    <option value="Office">
                        Office
                    </option>

                    <option value="Apartment">
                        Apartment
                    </option>

                    <option value="Villa">
                        Villa
                    </option>


                </select>





                {/* Min Price */}

                <input

                    type="number"

                    name="minPrice"

                    placeholder="Min Price"

                    className="input h-12 w-full bg-base-200/70 border-violet-400/30 text-white"

                />





                {/* Max Price */}

                <input

                    type="number"

                    name="maxPrice"

                    placeholder="Max Price"

                    className="input h-12 w-full bg-base-200/70 border-violet-400/30 text-white"

                />





               





                {/* Search Button */}

                <button

                    type="submit"

                    className="h-12 w-full flex items-center justify-center gap-2 bg-violet-500 hover:bg-violet-600 text-white rounded-xl font-semibold transition"

                >

                    <Search size={20}/>

                    Search

                </button>



            </form>


        </div>

    );

};


export default PropertySearch;