


import { fetchFeaturedProperties } from '@/lib/action/property';
import React from 'react';
import FeaturedPropertiesClient from './FeaturedPropertiesClient';

const FeaturedProperties = async () => {

    const properties = await fetchFeaturedProperties();

    return (

        <section className="min-h-screen bg-base-200 py-12 px-5">

<FeaturedPropertiesClient properties={properties}></FeaturedPropertiesClient>
           


        </section>

    );
};

export default FeaturedProperties;