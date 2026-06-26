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
    revalidatePath("/admin/all-properties");
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
    revalidatePath("/owner/my-properties");
    return result;
};

//delete function

export const deleteAdminProperty = async (id) => {
   
    const res = await authFetch(`${baseURL}/admin/properties/${id}`, {
        method: "DELETE"
       
    });
    const data = await res.json();
    if (!res.ok) return;
    revalidatePath("/admin/all-properties");
    return data;
}

export const deleteOwnerProperty = async (id) => {
   
    const res = await authFetch(`${baseURL}/owner/properties/${id}`, {
        method: "DELETE"
       
    });
    const data = await res.json();
    if (!res.ok) return;
    revalidatePath("/owner/my-properties");
    return data;
}