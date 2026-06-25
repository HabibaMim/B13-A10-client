"use client";

import React from "react";

const AddProperty = () => {

    const onSubmit = async (e) =>{
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.

    }

    return (

        <section className="min-h-screen bg-base-200 py-10 px-5">


            <div className="max-w-5xl mx-auto bg-base-300 border border-violet-400/20 rounded-3xl p-8 shadow-xl">


                <h1 className="text-3xl md:text-4xl font-bold text-violet-300 mb-2">
                    Add Property
                </h1>


                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">



                    {/* Property Title */}

                    <div className="md:col-span-2">

                        <label className="text-white font-medium">
                            Property Title
                        </label>

                        <input
                            type="text"
                            placeholder="Enter property title"
                            className="input w-full mt-2 bg-base-200 border-violet-400/30 text-white"
                        />

                    </div>




                    {/* Description */}

                    <div className="md:col-span-2">

                        <label className="text-white font-medium">
                            Description
                        </label>

                        <textarea
                            placeholder="Describe your property"
                            className="textarea w-full mt-2 bg-base-200 border-violet-400/30 text-white h-32"
                        />

                    </div>




                    {/* Location */}

                    <div>

                        <label className="text-white font-medium">
                            Location
                        </label>

                        <input
                            type="text"
                            placeholder="City / Area"
                            className="input w-full mt-2 bg-base-200 border-violet-400/30 text-white"
                        />

                    </div>




                    {/* Property Type */}

                    <div>

                        <label className="text-white font-medium">
                            Property Type
                        </label>

                        <select className="select w-full mt-2 bg-base-200 border-violet-400/30 text-white">

                            <option>House</option>
                            <option>Office</option>
                            <option>Apartment</option>
                            <option>Villa</option>

                        </select>

                    </div>




                    {/* Rent */}

                    <div>

                        <label className="text-white font-medium">
                            Rent Price
                        </label>

                        <input
                            type="number"
                            placeholder="Enter amount"
                            className="input w-full mt-2 bg-base-200 border-violet-400/30 text-white"
                        />

                    </div>




                    {/* Rent Type */}

                    <div>

                        <label className="text-white font-medium">
                            Rent Type
                        </label>

                        <select className="select w-full mt-2 bg-base-200 border-violet-400/30 text-white">

                            <option>Monthly</option>
                            <option>Weekly</option>
                            <option>Daily</option>

                        </select>

                    </div>




                    {/* Bedrooms */}

                    <div>

                        <label className="text-white font-medium">
                            Bedrooms
                        </label>

                        <input
                            type="number"
                            placeholder="Number of bedrooms"
                            className="input w-full mt-2 bg-base-200 border-violet-400/30 text-white"
                        />

                    </div>




                    {/* Bathrooms */}

                    <div>

                        <label className="text-white font-medium">
                            Bathrooms
                        </label>

                        <input
                            type="number"
                            placeholder="Number of bathrooms"
                            className="input w-full mt-2 bg-base-200 border-violet-400/30 text-white"
                        />

                    </div>




                    {/* Property Size */}

                    <div>

                        <label className="text-white font-medium">
                            Property Size
                        </label>

                        <input
                            type="text"
                            placeholder="Example: 1200 sqft"
                            className="input w-full mt-2 bg-base-200 border-violet-400/30 text-white"
                        />

                    </div>




                    {/* Amenities */}

                    <div>

                        <label className="text-white font-medium">
                            Amenities
                        </label>

                        <input
                            type="text"
                            placeholder="WiFi, Parking, Balcony..."
                            className="input w-full mt-2 bg-base-200 border-violet-400/30 text-white"
                        />

                    </div>




                    

                   {/* Property Image */}

<div className="md:col-span-2">

    <label className="text-white font-medium">
        Property Image
    </label>

    <input
        type="url"
        placeholder="https://example.com/image.jpg"
        className="input w-full mt-2 bg-base-200 border-violet-400/30 text-white"
    />

</div>





                    {/* Extra Features */}

                    <div className="md:col-span-2">

                        <label className="text-white font-medium">
                            Extra Features
                        </label>

                        <textarea
                            placeholder="Additional details..."
                            className="textarea w-full mt-2 bg-base-200 border-violet-400/30 text-white"
                        />

                    </div>




                    {/* Owner Name */}

                    <div>

                        <label className="text-white font-medium">
                            Owner Name
                        </label>

                        <input
                            type="text"
                            placeholder="Owner name"
                            className="input w-full mt-2 bg-base-200 border-violet-400/30 text-white"
                        />

                    </div>




                    {/* Owner Email */}

                    <div>

                        <label className="text-white font-medium">
                            Owner Contact Email
                        </label>

                        <input
                            type="email"
                            placeholder="owner@email.com"
                            className="input w-full mt-2 bg-base-200 border-violet-400/30 text-white"
                        />

                    </div>




                    {/* Status */}

                    <div>

                        <label className="text-white font-medium">
                            Status
                        </label>

                        <input
                            value="Pending"
                            readOnly
                            className="input w-full mt-2 bg-base-200 border-violet-400/30 text-violet-300"
                        />

                    </div>




                    {/* Submit */}

                    <div className="md:col-span-2 pt-4">

                        <button
                            type="submit"
                            className="w-full bg-violet-500 hover:bg-violet-600 text-white py-3 rounded-xl transition font-semibold"
                        >
                            Add Property
                        </button>

                    </div>



                </form>


            </div>


        </section>

    );
};


export default AddProperty;