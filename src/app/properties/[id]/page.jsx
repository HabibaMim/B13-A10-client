
import { getDetailsPage, getFavorites, getPropertyReviews } from '@/lib/action/property';
import ReviewSection from '@/components/ReviewSection';


const PropertyDetails = async ({params}) => {

    const {id} = await params;

    const property = await getDetailsPage(id);
    const reviews = await getPropertyReviews(id);
      const favorites = await getFavorites();

 const isFavorited = favorites?.some((fav) => fav.property._id.toString() === id);



    return (

       <div>
        <ReviewSection property={property} reviews={reviews} isFavorited={isFavorited}></ReviewSection>
       </div>

    );

};


export default PropertyDetails;