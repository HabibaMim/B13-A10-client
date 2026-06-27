import { Table } from '@heroui/react';
import React from 'react';
import RoleSelect from './Roleselect';

const AdminUsersTable = ({users}) => {
    return (
        <div>
             <div>
                         <section className="min-h-screen bg-base-200 p-6">
                        
                        
                              <h2 className="text-3xl font-bold text-violet-300 mb-6">
                                All Users
                              </h2>
                        
                        
                        
                              <div className="bg-base-300 border border-violet-400/20 rounded-3xl shadow-xl p-6 overflow-hidden">
                        
                        
                        
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
                                          Name
                                        </Table.Column>
                        
                        
                                        <Table.Column>
                                          Email
                                        </Table.Column>
                        
                        
                                        <Table.Column>
                                          Role
                                        </Table.Column>
                        
                        
                                        <Table.Column>
                                          Action
                                        </Table.Column>
            
            
                        
                        
                                      </Table.Header>
                        
                        
                        
                        
                        
                                      <Table.Body>
                        
                        
                                        {users.map((user, index) => (
                        
                        
                                          <Table.Row
                                            key={user._id}
                                            className="!bg-base-300 hover:!bg-base-200 transition border-none"
                                          >
                        
                        
                        
                                            <Table.Cell className="!bg-base-300 border-none">
                        
                                              <span className="text-violet-200">
                                                {index + 1}
                                              </span>
                        
                                            </Table.Cell>
                        
                        
                        
                        
                        
                                            <Table.Cell className="!bg-base-300 border-none">
                        
                                              <p className="font-semibold text-white">
                                                {user.name}
                                              </p>
                        
                                            </Table.Cell>
                        
                        
                        
                        
                        
                                            <Table.Cell className="!bg-base-300 border-none">
                        
                                              <span className="text-violet-200">
                                                {user.email}
                                              </span>
                        
                                            </Table.Cell>
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                                            <Table.Cell className="!bg-base-300 border-none">
                        <span className="text-violet-200">
                                                {user.role}
                                              </span>
                        
                                            </Table.Cell>
                        
                        
                                              <Table.Cell className="!bg-base-300 border-none">
                        
                                             <span className="text-violet-200">
                                            <RoleSelect userId={user._id} currentRole={user.role} />
                                              </span>
                                            </Table.Cell>
                        
                        
                                          
                        
                        
                        
                        
                        
                                          </Table.Row>
                        
                        
                                        ))}
                        
                        
                                      </Table.Body>
                        
                        
                        
                                    </Table.Content>
                        
                        
                        
                                  </Table.ScrollContainer>
                        
                        
                        
                                </Table>
                        
                        
                        
                              </div>
                        
                        
                        
                            </section>
                    </div>
        </div>
    );
};

export default AdminUsersTable;