import { Table } from "@heroui/react";
import UpdatePropertyOwner from "./UpdatePropertyOwner";

export default function ProductTable({ properties }) {

  const getStatusBadge = (status) => {

    if (status === "Approved") {
      return (
        <span className="badge badge-success text-white">
          Approved
        </span>
      );
    }

    if (status === "Rejected") {
      return (
        <span className="badge badge-error text-white">
          Rejected
        </span>
      );
    }

    return (
      <span className="badge badge-warning text-black">
        Pending
      </span>
    );

  };


  return (
    <section className="min-h-screen bg-base-200 p-6">


      <h2 className="text-3xl font-bold text-violet-300 mb-6">
        My Properties
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
                  Property Title
                </Table.Column>


                <Table.Column>
                  Rent Price
                </Table.Column>


                <Table.Column>
                  Update
                </Table.Column>


                <Table.Column>
                  Delete
                </Table.Column>


                <Table.Column>
                  Status
                </Table.Column>


              </Table.Header>





              <Table.Body>


                {properties.map((property, index) => (


                  <Table.Row
                    key={property._id}
                    className="!bg-base-300 hover:!bg-base-200 transition border-none"
                  >



                    <Table.Cell className="!bg-base-300 border-none">

                      <span className="text-violet-200">
                        {index + 1}
                      </span>

                    </Table.Cell>





                    <Table.Cell className="!bg-base-300 border-none">

                      <p className="font-semibold text-white">
                        {property.title}
                      </p>

                    </Table.Cell>





                    <Table.Cell className="!bg-base-300 border-none">

                      <span className="text-violet-200">
                        ৳ {property.rentPrice} <span className="text-[10px] text-gray-400">/{property.rentType}</span>
                      </span>

                    </Table.Cell>





                    <Table.Cell className="!bg-base-300 border-none">

                      <UpdatePropertyOwner property={property}></UpdatePropertyOwner>

                    </Table.Cell>





                    <Table.Cell className="!bg-base-300 border-none">

                      <button
                        className="btn btn-sm btn-error text-white border-none"
                      >
                        Delete
                      </button>

                    </Table.Cell>





                    <Table.Cell className="!bg-base-300 border-none">

                      {getStatusBadge(property.status)}

                    </Table.Cell>





                  </Table.Row>


                ))}


              </Table.Body>



            </Table.Content>



          </Table.ScrollContainer>



        </Table>



      </div>



    </section>
  );
}