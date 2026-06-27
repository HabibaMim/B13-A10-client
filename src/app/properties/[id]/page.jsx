
import { getDetailsPage, getPropertyReviews } from '@/lib/action/property';
import ReviewSection from '@/components/ReviewSection';


const PropertyDetails = async ({params}) => {

    const {id} = await params;

    const property = await getDetailsPage(id);
    const reviews = await getPropertyReviews(id);
    




    return (

       <div>
        <ReviewSection property={property} reviews={reviews}></ReviewSection>
       </div>

    );

};


export default PropertyDetails;