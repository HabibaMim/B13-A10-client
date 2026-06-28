import { getAdminBookings } from '@/lib/action/property';
import { Table } from '@heroui/react';
import React from 'react';

const AllBookings = async () => {
    const bookings = await getAdminBookings();
    return (
        <div>
            <Table className="bg-base-300">
            
            
            
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
                               Rent Price
                            </Table.Column>
            
                            <Table.Column>
                            Booking Date
                            </Table.Column>
            
            


                          
            
            
                            <Table.Column>
                              Booking State
                            </Table.Column>
            
                <Table.Column>
                              Payment State
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
                                    {booking.property.title}
                                  </p>
            
                                </Table.Cell>
            
            
                              
            
            
                                <Table.Cell className="!bg-base-300 border-none">
            
                                  <span className="text-violet-200">
                                    ৳ {booking.property.rentPrice} <span className="text-[10px] text-gray-400">/{booking.property.rentType}</span>
                                  </span>
            
                                </Table.Cell>
            
                  <Table.Cell className="!bg-base-300 border-none">
            
                               <p className="font-semibold text-white">{new Date(booking.bookedAt).toLocaleDateString("en-GB")}</p>
            
                                </Table.Cell>
            
            
            
                            
            
            
            
            
            
                                <Table.Cell className="!bg-base-300 border-none">
            
                              <p className="font-semibold text-white">{booking.paymentStatus}</p> 
            
                                </Table.Cell>

                                     <Table.Cell className="!bg-base-300 border-none">
            
                              <p className="font-semibold text-white">{booking.bookingStatus}</p> 
            
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

export default AllBookings;