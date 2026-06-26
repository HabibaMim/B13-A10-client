"use server";
import { headers } from "next/headers";
import { auth } from "../auth";

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