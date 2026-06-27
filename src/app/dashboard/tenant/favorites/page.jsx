import { getFavorites } from '@/lib/action/property';
import React from 'react';

const FavoritesPage = async () => {
    const favorites = await getFavorites();
    return (
        <div>
            <div>{favorites.map((favorite)=>(</div>
        </div>))};
    );
};

export default FavoritesPage;