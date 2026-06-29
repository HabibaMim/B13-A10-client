import { getCompletedPayments } from '@/lib/action/property';
import { Table } from '@heroui/react';
import React from 'react';

export const dynamic = 'force-dynamic';

const Transactions = async () => {
    const bookings = await getCompletedPayments();

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
        All Transactions
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
                              User's Name
                            </Table.Column>

                              <Table.Column>
                              
Contact Number
                            </Table.Column>
            
                            <Table.Column>
                              Property Title
                            </Table.Column>
            
            
            
                            <Table.Column>
                            Booking Date
                            </Table.Column>
            
            


                          
            
            
                        
                <Table.Column>
                              Booking State
                            </Table.Column>

                             <Table.Column>
                               Paid Amount
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
                                    {booking.userName}
                                  </p>
            
                                </Table.Cell>

                                
                                     <Table.Cell className="!bg-base-300 border-none">
            
                              <p className="font-semibold text-white">{booking.contactNumber}</p> 
            
                                </Table.Cell>
            
            
                                <Table.Cell className="!bg-base-300 border-none">
            
                                  <p className="font-semibold text-white">
                                    {booking.propertyTitle}
                                  </p>
            
                                </Table.Cell>
            
            
                              
            
            
                                
                  <Table.Cell className="!bg-base-300 border-none">
            
                               <p className="font-semibold text-white">{new Date(booking.bookedAt).toLocaleDateString("en-GB")}</p>
            
                                </Table.Cell>
            
            
            
                            
            
            
            
            
            
                              

                                     <Table.Cell className="!bg-base-300 border-none">
            
                              <p className="font-semibold text-white">{getBookingStatusBadge(booking.bookingStatus)}</p> 
            
                                </Table.Cell>

                                
            
            
                                 <Table.Cell className="!bg-base-300 border-none">
            
                                  <span className="text-violet-200">
                                    $ {booking.rentPriceId}</span>
                                  
            
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

export default Transactions;