"use client";
import { handleBookingRequest } from '@/lib/action/property';
import React from 'react';

const BookingStatusSelect = ({bookingId}) => {

    return (
        <div>
            
            
                                 
    <div className="flex gap-2">
        <button onClick={()=> handleBookingRequest(bookingId, "Approved")} className="btn btn-success btn-sm text-white border-none">Approve</button>
        <button onClick={()=> handleBookingRequest(bookingId, "Rejected")}  className="btn btn-error btn-sm text-white border-none">Reject</button>
    </div>

            
                                
        </div>
    );
};

export default BookingStatusSelect;