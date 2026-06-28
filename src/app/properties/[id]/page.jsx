
import { getDetailsPage, getFavorites, getPropertyReviews } from '@/lib/action/property';
import ReviewSection from '@/components/ReviewSection';


const PropertyDetails = async ({params}) => {

    const {id} = await params;

    const property = await getDetailsPage(id);
    const reviews = await getPropertyReviews(id);
     let isFavorited = false;
    try {
        const favorites = await getFavorites();
        if (Array.isArray(favorites)) {
            isFavorited = favorites.some((fav) => fav.property._id.toString() === id);
        }
    } catch (err) {
        // not a tenant, or not logged in — favorites simply don't apply
    }



    return (

       <div>
        <ReviewSection property={property} reviews={reviews} isFavorited={isFavorited}></ReviewSection>
       </div>

    );

};


export default PropertyDetails;