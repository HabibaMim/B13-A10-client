"use client";
import { deleteFavorite } from "@/lib/action/property";
import { AlertDialog, Button } from "@heroui/react";

const RemoveFavoriteModal = ({propertyId}) => {

    const handleDelete = async () =>{
        
        await deleteFavorite(propertyId);
    }
    return (
        <div>
            <AlertDialog>
      
<Button className="btn btn-sm btn-error text-white border-none">
                
                  Remove
                </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Remove From Favorites?</AlertDialog.Heading>
            </AlertDialog.Header>
         
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Remove
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
        </div>
    );
};

export default RemoveFavoriteModal;