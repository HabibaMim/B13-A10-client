import { getBookings } from '@/lib/action/property';
import { Table } from '@heroui/react';
import React from 'react';

const MyBookings = async () => {

    const bookings = await getBookings();

    console.log("Bookings fetched:", JSON.stringify(bookings, null, 2));

    
const getBookingStatusBadge = (status) => {
    if (status === "Approved") {
        return <span className="badge badge-success text-white">Approved</span>;
    }
    if (status === "Rejected") {
        return <span className="badge badge-error text-white">Rejected</span>;
    }
    return <span className="badge badge-warning text-black">Pending</span>;
};

const getPaymentStatusBadge = (status) => {
    if (status === "Paid") {
        return <span className="badge badge-success text-white">Paid</span>;
    }
    return <span className="badge badge-warning text-black">Pending</span>;
};

    return (
       <div className="min-h-screen bg-base-200 p-6">
              <div>
      <h2 className="text-3xl font-bold text-violet-300 mb-6">
        My Bookings
      </h2>
      </div>
         <Table className="bg-base-300 border border-violet-400/20 rounded-3xl shadow-xl p-6 overflow-hidden">
            
            
            
                      <Table.ScrollContainer>
            
            
                        <Table.Content
                          aria-label="Property table"
                          className="min-w-[700px] bg-base-300 border-none"
                        >
            
            
            
                          <Table.Header className="bg-base-300">
            
            
                            <Table.Column isRowHeader>
                              No.
                            </Table.Column>
            
            
                            <Table.Column>
                              Property Title
                            </Table.Column>
            
             <Table.Column>
                              Location
                            </Table.Column>
            
                            <Table.Column>
                              Rent Price
                            </Table.Column>
            
            


                          
            
            
                            <Table.Column>
                              Booking Status
                            </Table.Column>
            
                <Table.Column>
                              Payment Status
                            </Table.Column>
            
                          </Table.Header>
            
            
            
            
            
                          <Table.Body>
            
            
                            {bookings.map((booking, index)=>(
            
            
                              <Table.Row
                                key={booking._id}
                                className="!bg-base-300 hover:!bg-base-200 transition border-none"
                              >
            
            
            
                                <Table.Cell className="!bg-base-300 border-none">
            
                                  <span className="text-violet-200">
                                    {index + 1}
                                  </span>
            
                                </Table.Cell>
            
            
            
            
            
                                <Table.Cell className="!bg-base-300 border-none">
            
                                  <p className="font-semibold text-white">
                                    {booking.property.title}
                                  </p>
            
                                </Table.Cell>
            
            
                                    <Table.Cell className="!bg-base-300 border-none">
            
                               <p className="font-semibold text-white">{booking.property.location}</p>
            
                                </Table.Cell>
            
            
                                <Table.Cell className="!bg-base-300 border-none">
            
                                  <span className="text-violet-200">
                                    $ {booking.property.rentPrice} <span className="text-[10px] text-gray-400">/{booking.property.rentType}</span>
                                  </span>
            
                                </Table.Cell>
            
            
            
            
            
                            
            
            
            
            
            
                                <Table.Cell className="!bg-base-300 border-none">
            
                              <p className="font-semibold text-white">{getPaymentStatusBadge(booking.paymentStatus)}</p> 
            
                                </Table.Cell>

                                     <Table.Cell className="!bg-base-300 border-none">
            
                              <p className="font-semibold text-white">{getBookingStatusBadge(booking.bookingStatus)}</p> 
            
                                </Table.Cell>
            
            
                                 
            
            
                            
            
            
            
            
                              </Table.Row>
            
            
                            ))}
            
            
                          </Table.Body>
            
            
            
                        </Table.Content>
            
            
            
                      </Table.ScrollContainer>
            
            
            
                    </Table>
       </div>
    );
};

export default MyBookings;