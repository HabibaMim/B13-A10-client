"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { toggleFavorite } from "@/lib/action/property";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const FavoriteButton = ({ propertyId, initialFavorited = false }) => {
    const router =useRouter();
    const [favorited, setFavorited] = useState(initialFavorited);
    const [loading, setLoading] = useState(false);

    const onClick = async () => {
        if (favorited || loading) return;

        setLoading(true);
        const result = await toggleFavorite(propertyId);

        if (result) {
            setFavorited(result.favorited);
            toast.success("Added To Favorites!");
               router.refresh();
        } else {
            toast.error("Something went wrong. Must be a tenant to favorite properties.");
        }
        setLoading(false);
    };

    return (
        <button
            onClick={onClick}
            disabled={favorited || loading}
            className="flex-1 flex justify-center items-center gap-2 bg-violet-500 hover:bg-violet-600 text-white py-3 rounded-xl font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
        >
            <Heart
                size={20}
                className={favorited ? "text-red-500 fill-red-500" : "text-white"}
            />
            {favorited ? "Favorited" : "Favorite"}
        </button>
    );
};

export default FavoriteButton;