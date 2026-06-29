import { deleteFavorite, getFavorites } from '@/lib/action/property';
import React from 'react';
import { Table } from '@heroui/react';
import RemoveFavoriteModal from '@/components/RemoveFavoriteModal';

const FavoritesPage = async () => {
    const favorites = await getFavorites();
    console.log(favorites)
    return (
        <div className="min-h-screen bg-base-200 p-6">
            <div>
      <h2 className="text-3xl font-bold text-violet-300 mb-6">
        My Favorites
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
                              Type
                            </Table.Column>
            
            
                            <Table.Column>
                              Rent Price
                            </Table.Column>
            
            
                            <Table.Column>
                              Location
                            </Table.Column>


                          
            
            
                            <Table.Column>
                              Action
                            </Table.Column>
            
            
                          </Table.Header>
            
            
            
            
            
                          <Table.Body>
            
            
                            {favorites.map((favorite, index)=>(
            
            
                              <Table.Row
                                key={favorite._id}
                                className="!bg-base-300 hover:!bg-base-200 transition border-none"
                              >
            
            
            
                                <Table.Cell className="!bg-base-300 border-none">
            
                                  <span className="text-violet-200">
                                    {index + 1}
                                  </span>
            
                                </Table.Cell>
            
            
            
            
            
                                <Table.Cell className="!bg-base-300 border-none">
            
                                  <p className="font-semibold text-white">
                                    {favorite.property.title}
                                  </p>
            
                                </Table.Cell>
            
            
                                    <Table.Cell className="!bg-base-300 border-none">
            
                               <p className="font-semibold text-white">{favorite.property.propertyType}</p>
            
                                </Table.Cell>
            
            
                                <Table.Cell className="!bg-base-300 border-none">
            
                                  <span className="text-violet-200">
                                    $ {favorite.property.rentPrice} <span className="text-[10px] text-gray-400">/{favorite.property.rentType}</span>
                                  </span>
            
                                </Table.Cell>
            
            
            
            
            
                            
            
            
            
            
            
                                <Table.Cell className="!bg-base-300 border-none">
            
                              <p className="font-semibold text-white">{favorite.property.location}</p> 
            
                                </Table.Cell>
            
            
                                 
            
            
                                <Table.Cell className="!bg-base-300 border-none">
            
                                 
    <RemoveFavoriteModal propertyId = {favorite.property._id}></RemoveFavoriteModal>

            
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

export default FavoritesPage;