import { deleteOwnerProperty } from '@/lib/action/property';
import { AlertDialog, Button } from '@heroui/react';
import React from 'react';

const DeleteOwnerModal = ({propertyId}) => {

    const handleDelete = async () =>{
        "use server";
        await deleteOwnerProperty(propertyId);
    }
    return (
        <div>
            <AlertDialog>
      
<Button className="btn btn-sm btn-error text-white border-none">
                
                  Delete
                </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete this property?</AlertDialog.Heading>
            </AlertDialog.Header>
         
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
        </div>
    );
};

export default DeleteOwnerModal;