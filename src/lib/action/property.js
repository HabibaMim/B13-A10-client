"use server";
import { headers } from "next/headers";
import { auth } from "../auth";
import { revalidatePath } from "next/cache";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

// Shared helper — fetches a fresh token and attaches it to every protected request
const authFetch = async (url, options = {}) => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    });

    return fetch(url, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            ...options.headers
        }
    });
};


export const addProperty = async (property) => {
    const res = await authFetch(`${baseURL}/owner/properties`, {
        method: 'POST',
        body: JSON.stringify(property)
    });
    return res.json();
};

export const getOwnerProperty = async () => {
    const res = await authFetch(`${baseURL}/owner/properties`)
    const data = await res.json();
    return data;
}

export const getAdminProperty = async () => {
    const res = await authFetch(`${baseURL}/admin/properties`)
    const data = await res.json();
    return data;
}

export const updateAdminProperty = async (id, formData) => {
    const raw = Object.fromEntries(formData.entries());
    const amenities = formData.getAll('amenities');

    const modifiedData = {
        ...raw,
        rentPrice: Number(raw.rentPrice),
        bedrooms: Number(raw.bedrooms),
        bathrooms: Number(raw.bathrooms),
        size: Number(raw.size),
        amenities: amenities
    };

    const res = await authFetch(`${baseURL}/admin/properties/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(modifiedData),
    });

    if (!res.ok) {
        console.error("Update failed:", res.status);
        return;
    }

    const result = await res.json();
    revalidatePath("/dashboard/admin/all-properties");
    return result;
};

export const updateOwnerProperty = async (id, formData) => {
    const raw = Object.fromEntries(formData.entries());
    const amenities = formData.getAll('amenities');

    const modifiedData = {
        ...raw,
        rentPrice: Number(raw.rentPrice),
        bedrooms: Number(raw.bedrooms),
        bathrooms: Number(raw.bathrooms),
        size: Number(raw.size),
        amenities: amenities
    };

    const res = await authFetch(`${baseURL}/owner/properties/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(modifiedData),
    });

    if (!res.ok) {
        console.error("Update failed:", res.status);
        return;
    }

    const result = await res.json();
    revalidatePath("/dashboard/owner/my-properties");
    return result;
};

//delete function

export const deleteAdminProperty = async (id) => {
   
    const res = await authFetch(`${baseURL}/admin/properties/${id}`, {
        method: "DELETE"
       
    });
    const data = await res.json();
    if (!res.ok) return;
    revalidatePath("/dashboard/admin/all-properties");
    return data;
}

export const deleteOwnerProperty = async (id) => {
   
    const res = await authFetch(`${baseURL}/owner/properties/${id}`, {
        method: "DELETE"
       
    });
    const data = await res.json();
    if (!res.ok) return;
    revalidatePath("/dashboard/owner/my-properties");
    return data;
}

export const handleApproval = async (id, status) => {
    const res = await authFetch(`${baseURL}/admin/properties/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ status })
    });

    if (!res.ok) {
        console.error("Approval update failed:", res.status);
        return;
    }

    const data = await res.json();
    revalidatePath("/dashboard/admin/all-properties");
    return data;
};

export const getApprovedProperty = async () => {
    const res = await fetch(`${baseURL}/properties?status=Approved`)
    const data = await res.json();
    return data;
}

export const fetchFeaturedProperties = async() =>{
    const res = await fetch(`${baseURL}/featured`)
    const data =await res.json();
    return data || [];
}

export const getDetailsPage = async(id)=>{
    const res = await authFetch(`${baseURL}/properties/${id}`)
    const data =await res.json();
    return data || {};
}

//reviews

export const submitReview = async (id, formData) => {
    const raw = Object.fromEntries(formData.entries());

    const res = await authFetch(`${baseURL}/properties/${id}/reviews`, {
        method: 'POST',
        body: JSON.stringify(raw)
    });

    if (!res.ok) {
        console.error("Review submit failed:", res.status);
        return;
    }

    const data = await res.json();
    revalidatePath(`/properties/${id}`);
    return data;
};

export const getPropertyReviews = async (id) => {
    const res = await fetch(`${baseURL}/properties/${id}/reviews`);
    const data = await res.json();
    return data;
};

export const getFeaturedReviews = async () => {
    const res = await fetch(`${baseURL}/reviews/featured`);
    const data = await res.json();
    return data;
};

//favorites

export const toggleFavorite = async (propertyId) => {
    const res = await authFetch(`${baseURL}/favorites/${propertyId}`, {
        method: 'PATCH'
    });

    if (!res.ok) {
        console.error("Toggle favorite failed:", res.status);
        return;
    }

    const data = await res.json();
    return data;
};

export const getFavorites = async () => {
    const res = await authFetch(`${baseURL}/favorites`);
    const data = await res.json();
    return data;
};

export const deleteFavorite = async (id) => {
    const res = await authFetch(`${baseURL}/favorites/${id}`, {
        method: "DELETE"
    });

    if (!res.ok) {
        console.error("Delete favorite failed:", res.status);
        return;
    }

    const data = await res.json();
    revalidatePath("/dashboard/tenant/favorites");
    return data;
};

//all users for admin page

export const getAdminUsers = async () => {
    const res = await authFetch(`${baseURL}/admin/users`)
    const data = await res.json();
    return data;
}

export const handleUserRole = async (id, role) => {
    const res = await authFetch(`${baseURL}/admin/users/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ role })
    });

    if (!res.ok) {
        console.error("Role update failed:", res.status);
        return;
    }

    const data = await res.json();
    revalidatePath("/dashboard/admin/all-users");
    return data;
};

//booking


export const addBooking = async (id, formData) => {
    const raw = Object.fromEntries(formData.entries());

    const res = await authFetch(`${baseURL}/bookings/${id}`, {
        method: "POST",
        body: JSON.stringify(raw)
    });

    if (!res.ok) {
        console.error("Booking failed:", res.status);
        return;
    }

    const data = await res.json();
    return data;
};

export const getBookings = async () => {
    const res = await authFetch(`${baseURL}/bookings`);

    if (!res.ok) {
        console.error("Failed to fetch bookings:", res.status);
        return [];
    }

    const data = await res.json();
    return data;
};

export const getAdminBookings = async () => {
    const res = await authFetch(`${baseURL}/admin/bookings`);

    if (!res.ok) {
        console.error("Failed to fetch bookings:", res.status);
        return [];
    }

    const data = await res.json();
    return data;
};

export const getOwnerBookings = async () => {
    const res = await authFetch(`${baseURL}/owner/bookings`);

    if (!res.ok) {
        console.error("Failed to fetch bookings:", res.status);
        return [];
    }

    const data = await res.json();
    return data;
};

export const handleBookingRequest = async (id, bookingStatus) => {
    const res = await authFetch(`${baseURL}/owner/bookings/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ bookingStatus })
    });

    if (!res.ok) {
        console.error(" Booking status update failed:", res.status);
        return;
    }

    const data = await res.json();
    revalidatePath("/dashboard/owner/booking-requests");
    return data;
};

//stripe payment

export const paymentStatusUpdate = async (id) => {
    const res = await authFetch(`${baseURL}/bookings/${id}/payment`, {
        method: "PATCH",
    });

    if (!res.ok) {
        console.error("Payment status update failed:", res.status);
        return;
    }

    const data = await res.json();
    return data;
};