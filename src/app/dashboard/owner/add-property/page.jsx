"use client";
import { addProperty } from "@/lib/action/property";
import { redirect } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const AddProperty = () => {

    const onSubmit = async (e) =>{
        e.preventDefault()
        const formData = new FormData(e.target)
        const amenities = formData.getAll("amenities");
        const data = Object.fromEntries(formData.entries())
        
        const property ={
            ...data,
            amenities
        }
        const result = await addProperty(property)
        toast.success("Property added successfully!")
        redirect("/dashboard/owner/my-properties")
        //console.log(result)
    }

    return (
       <section className="min-h-screen bg-base-200 py-10 px-5">

            <div className="max-w-5xl mx-auto bg-base-300 border border-violet-400/20 rounded-3xl p-8 shadow-xl">


                <h1 className="text-3xl md:text-4xl font-bold text-violet-300 mb-2">
                    Add Property
                </h1>



                <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">


                    <div className="md:col-span-2">

                        <label className="text-white font-medium">
                            Property Title
                        </label>

                        <input
                            type="text"
                            name="title"
                            placeholder="Enter property title"
                            className="input w-full mt-2 bg-base-200 border-violet-400/30 text-white"
                        />

                    </div>



                    <div className="md:col-span-2">

                        <label className="text-white font-medium">
                            Description
                        </label>

                        <textarea
                            name="description"
                            placeholder="Describe your property"
                            className="textarea w-full mt-2 bg-base-200 border-violet-400/30 text-white h-32"
                        />

                    </div>



  <div>

    <label className="text-white font-medium">
        Location
    </label>

    <select
        name="location"
        defaultValue=""
        className="select w-full mt-2 bg-base-200 border-violet-400/30 text-white"
    >

        <option value="" disabled>
            Select Division
        </option>

        <option>Dhaka</option>
        <option>Chattogram</option>
        <option>Rajshahi</option>
        <option>Khulna</option>
        <option>Barishal</option>
        <option>Sylhet</option>
        <option>Rangpur</option>
        <option>Mymensingh</option>

    </select>

</div>



                    <div>

                        <label className="text-white font-medium">
                            Property Type
                        </label>

                        <select
                            name="propertyType"
                            className="select w-full mt-2 bg-base-200 border-violet-400/30 text-white"
                        >

                            <option>House</option>
                            <option>Office</option>
                            <option>Apartment</option>
                            <option>Villa</option>

                        </select>

                    </div>



                    <div>

                        <label className="text-white font-medium">
                            Rent Price
                        </label>

                        <input
                            type="number"
                            name="rentPrice"
                            placeholder="Enter amount"
                            className="input w-full mt-2 bg-base-200 border-violet-400/30 text-white"
                        />

                    </div>




                    <div>

                        <label className="text-white font-medium">
                            Rent Type
                        </label>

                        <select
                            name="rentType"
                            className="select w-full mt-2 bg-base-200 border-violet-400/30 text-white"
                        >

                            <option>Monthly</option>
                            <option>Weekly</option>
                            <option>Daily</option>

                        </select>

                    </div>




                    <div>

                        <label className="text-white font-medium">
                            Bedrooms
                        </label>

                        <input
                            type="number"
                            name="bedrooms"
                            placeholder="Number of bedrooms"
                            className="input w-full mt-2 bg-base-200 border-violet-400/30 text-white"
                        />

                    </div>




                    <div>

                        <label className="text-white font-medium">
                            Bathrooms
                        </label>

                        <input
                            type="number"
                            name="bathrooms"
                            placeholder="Number of bathrooms"
                            className="input w-full mt-2 bg-base-200 border-violet-400/30 text-white"
                        />

                    </div>




                    <div>

                        <label className="text-white font-medium">
                            Property Size
                        </label>

                        <input
                            type="number"
                            name="size"
                            placeholder="In sqft"
                            className="input w-full mt-2 bg-base-200 border-violet-400/30 text-white"
                        />

                    </div>





                    {/* Amenities Dropdown */}

                   <div>

    <label className="text-white font-medium">
        Amenities
    </label>


    <div className="mt-3 bg-base-200 border border-violet-400/30 rounded-xl p-4 space-y-3">


        <label className="flex items-center gap-3 text-violet-200 cursor-pointer">

            <input
                type="checkbox"
                name="amenities"
                value="WiFi"
                className="checkbox checkbox-sm"
            />

            WiFi

        </label>



        <label className="flex items-center gap-3 text-violet-200 cursor-pointer">

            <input
                type="checkbox"
                name="amenities"
                value="Parking"
                className="checkbox checkbox-sm"
            />

            Parking

        </label>



        <label className="flex items-center gap-3 text-violet-200 cursor-pointer">

            <input
                type="checkbox"
                name="amenities"
                value="Swimming Pool"
                className="checkbox checkbox-sm"
            />

            Swimming Pool

        </label>



        <label className="flex items-center gap-3 text-violet-200 cursor-pointer">

            <input
                type="checkbox"
                name="amenities"
                value="Balcony"
                className="checkbox checkbox-sm"
            />

            Balcony

        </label>



        <label className="flex items-center gap-3 text-violet-200 cursor-pointer">

            <input
                type="checkbox"
                name="amenities"
                value="Security"
                className="checkbox checkbox-sm"
            />

            Security

        </label>


    </div>

</div>





                    <div className="md:col-span-2">

                        <label className="text-white font-medium">
                            Property Image
                        </label>

                        <input
                            type="url"
                            name="image"
                            placeholder="https://example.com/image.jpg"
                            className="input w-full mt-2 bg-base-200 border-violet-400/30 text-white"
                        />

                    </div>





                    <div className="md:col-span-2">

                        <label className="text-white font-medium">
                            Extra Features
                        </label>

                        <textarea
                            name="extraFeatures"
                            placeholder="Additional details..."
                            className="textarea w-full mt-2 bg-base-200 border-violet-400/30 text-white"
                        />

                    </div>





                    <div>

                        <label className="text-white font-medium">
                            Owner Name
                        </label>

                        <input
                            type="text"
                            name="ownerName"
                            placeholder="Owner name"
                            className="input w-full mt-2 bg-base-200 border-violet-400/30 text-white"
                        />

                    </div>




                    <div>

                        <label className="text-white font-medium">
                            Owner Contact Email
                        </label>

                        <input
                            type="email"
                            name="ownerEmail"
                            placeholder="owner@email.com"
                            className="input w-full mt-2 bg-base-200 border-violet-400/30 text-white"
                        />

                    </div>




                    <div>

                        <label className="text-white font-medium">
                            Status
                        </label>

                        <input
                            name="status"
                            value="Pending"
                            readOnly
                            className="input w-full mt-2 bg-base-200 border-violet-400/30 text-violet-300"
                        />

                    </div>




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