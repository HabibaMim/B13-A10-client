"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { toggleFavorite } from "@/lib/action/property";
import toast from "react-hot-toast";

const FavoriteButton = ({ propertyId, initialFavorited = false }) => {
    const [favorited, setFavorited] = useState(initialFavorited);

    const onClick = async () => {
 
        const result = await toggleFavorite(propertyId);
        
        if (result) {
            setFavorited(result.favorited);
            toast.success("Added To Favorites!")
        }
    };

    return (
        <button onClick={onClick}  className="flex-1 flex justify-center items-center gap-2 bg-violet-500 hover:bg-violet-600 text-white py-3 rounded-xl font-semibold">
            <Heart size={20}
                className={favorited ? "text-red-500 fill-red-500" : "text-violet-300"}
            />Favorite
        </button>
    );
};

export default FavoriteButton;