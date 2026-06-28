"use client";

import React from "react";
import { CalendarDays, Phone, User, FileText, X } from "lucide-react";
import { addBooking } from "@/lib/action/property";
import toast from "react-hot-toast";

const BookingModal = ({propertyId}) => {

    const handleBook = async (e)=>{
        e.preventDefault();
        const formData= new FormData(e.target)

        const result = await addBooking(propertyId, formData)
        if (result) {
            toast.success("Booking initiated successfully! Complete payment to confirm.");
             e.target.reset();
        document.getElementById("booking_modal").close();
        } else {
            toast.error("Something went wrong.");
            document.getElementById("booking_modal").close();
        }
    }

    return (

        <>


            {/* Open Button */}

            <button
                className="flex-1 flex justify-center items-center gap-2 bg-violet-700 hover:bg-violet-800 text-white py-3 rounded-xl font-semibold"
                onClick={() => document.getElementById("booking_modal").showModal()}
            >

                <CalendarDays size={20}/>

                Book Property

            </button>








            {/* Modal */}


            <dialog id="booking_modal" className="modal">


                <div className="modal-box bg-base-300 border border-violet-400/20 rounded-3xl max-w-xl">





                    {/* Close */}

                    

                        <button
                         type="button"
                onClick={() => document.getElementById('booking_modal').close()}
                            className="btn btn-sm btn-circle absolute right-4 top-4 bg-violet-500 text-white border-none hover:bg-violet-600"
                        >

                            <X size={18}/>

                        </button>

                    








                    <h2 className="text-3xl font-bold text-violet-300 mb-2">

                        Book Property

                    </h2>


                  









                    <form onSubmit={handleBook} className="space-y-5">





                        {/* Move in Date */}

                        <div>

                            <label className="text-white font-medium flex items-center gap-2">

                                <CalendarDays size={18} className="text-violet-300"/>

                                Move-in Date

                            </label>


                            <input

                                type="date"

                                name="moveInDate"

                                className="input w-full mt-2 bg-base-200 border-violet-400/30 text-white"

                            />


                        </div>









                        {/* Contact Number */}


                        <div>


                            <label className="text-white font-medium flex items-center gap-2">

                                <Phone size={18} className="text-violet-300"/>

                                Contact Number

                            </label>


                            <input

                                type="text"

                                name="contactNumber"

                                placeholder="Enter phone number"

                                className="input w-full mt-2 bg-base-200 border-violet-400/30 text-white"

                            />


                        </div>









                        {/* User Info */}

<div>


    <label className="text-white font-medium flex items-center gap-2">

        <User size={18} className="text-violet-300"/>

        User Information

    </label>



    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">


        {/* Name */}

        <div>

            <label className="text-violet-200 text-sm">
                Name
            </label>

            <input

                type="text"

                name="userName"

                placeholder="Enter your name"

                className="input w-full mt-1 bg-base-200 border-violet-400/30 text-white"

            />

        </div>





        {/* Email */}

        <div>

            <label className="text-violet-200 text-sm">
                Email
            </label>


            <input

                type="email"

                name="userEmail"

                placeholder="abcd@example.com"

                className="input w-full mt-1 bg-base-200 border-violet-400/30 text-white"

            />


        </div>



    </div>


</div>








                        {/* Notes */}


                        <div>


                            <label className="text-white font-medium flex items-center gap-2">

                                <FileText size={18} className="text-violet-300"/>

                                Additional Notes

                            </label>


                            <textarea

                                name="notes"

                                placeholder="Any additional message..."

                                className="textarea w-full mt-2 h-28 bg-base-200 border-violet-400/30 text-white"

                            />


                        </div>



{/* Booking Status */}

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">


    {/* Booking Status */}

    <div>

        <label className="text-white font-medium flex items-center gap-2">

            Booking Status

        </label>


        <input

            type="text"

            name="bookingStatus"

            value="Pending"

            readOnly

            className="input w-full mt-2 bg-base-200 border-violet-400/30 text-violet-300"

        />

    </div>





    {/* Payment Status */}

    <div>

        <label className="text-white font-medium flex items-center gap-2">

            Payment Status

        </label>


        <input

            type="text"

            name="paymentStatus"

            value="Pending"

            readOnly

            className="input w-full mt-2 bg-base-200 border-violet-400/30 text-violet-300"

        />

    </div>



</div>




                        <button

                            type="submit"

                            className="w-full bg-violet-500 hover:bg-violet-600 text-white py-3 rounded-xl font-semibold transition"

                        >

                            Send Booking Request

                        </button>





                    </form>





                </div>


<button
            onClick={() => document.getElementById('booking_modal').close()}
            className="modal-backdrop"
        >
            close
        </button>
        
            </dialog>



        </>

    );

};


export default BookingModal;