"use client";

import { useRef } from "react";
import { updateAdminProperty } from '@/lib/action/property';
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const UpdatePropertyModal = ({ property }) => {
    const modalRef = useRef(null);

    const openModal = () => modalRef.current?.showModal();
    const closeModal = () => modalRef.current?.close();
    const router = useRouter();
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const result = await updateAdminProperty(property._id, formData);
        console.log(result);
        closeModal();
        toast.success("Property information Updated!")
        router.push('/dashboard/admin/all-properties');
    };

    return (
       <div>
            {/* Trigger button */}
            <button
                onClick={openModal}
                className="bg-violet-500 hover:bg-violet-600 text-white py-2 px-5 rounded-xl transition font-semibold"
            >
                Update
            </button>

            {/* Modal */}
            <dialog ref={modalRef} className="modal">
                <div className="modal-box max-w-3xl bg-base-300 border border-violet-400/20 rounded-3xl p-8">

                    <h1 className="text-2xl md:text-3xl font-bold text-violet-300 mb-2">
                        Update Property
                    </h1>

                    <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">

                        <div className="md:col-span-2">
                            <label className="text-white font-medium">Property Title</label>
                            <input
                                type="text"
                                name="title"
                                defaultValue={property.title}
                                placeholder="Enter property title"
                                className="input w-full mt-2 bg-base-200 border-violet-400/30 text-white"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label className="text-white font-medium">Description</label>
                            <textarea
                                name="description"
                                defaultValue={property.description}
                                placeholder="Describe your property"
                                className="textarea w-full mt-2 bg-base-200 border-violet-400/30 text-white h-32"
                            />
                        </div>

                        <div>
                            <label className="text-white font-medium">Location</label>
                            <select
                                name="location"
                                defaultValue={property.location}
                                className="select w-full mt-2 bg-base-200 border-violet-400/30 text-white"
                            >
                                <option value="" disabled>Select Division</option>
                                <option>Dhaka</option>
                                <option>Chattogram</option>
                                <option>Rajshahi</option>
                                <option>Khulna</option>
                                <option>Barishal</option>
                                <option>Sylhet</option>
                                <option>Rangpur</option>
                                <option>Mymensingh</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-white font-medium">Property Type</label>
                            <select name="propertyType" defaultValue={property.propertyType} className="select w-full mt-2 bg-base-200 border-violet-400/30 text-white">
                                <option>House</option>
                                <option>Office</option>
                                <option>Apartment</option>
                                <option>Villa</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-white font-medium">Rent Price</label>
                            <input
                                type="number"
                                name="rentPrice"
                                defaultValue={property.rentPrice}
                                placeholder="Enter amount"
                                className="input w-full mt-2 bg-base-200 border-violet-400/30 text-white"
                            />
                        </div>

                        <div>
                            <label className="text-white font-medium">Rent Type</label>
                            <select name="rentType" defaultValue={property.rentType} className="select w-full mt-2 bg-base-200 border-violet-400/30 text-white">
                                <option>Monthly</option>
                                <option>Weekly</option>
                                <option>Daily</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-white font-medium">Bedrooms</label>
                            <input
                                type="number"
                                name="bedrooms"
                                defaultValue={property.bedrooms}
                                placeholder="Number of bedrooms"
                                className="input w-full mt-2 bg-base-200 border-violet-400/30 text-white"
                            />
                        </div>

                        <div>
                            <label className="text-white font-medium">Bathrooms</label>
                            <input
                                type="number"
                                name="bathrooms"
                                defaultValue={property.bathrooms}
                                placeholder="Number of bathrooms"
                                className="input w-full mt-2 bg-base-200 border-violet-400/30 text-white"
                            />
                        </div>

                        <div>
                            <label className="text-white font-medium">Property Size</label>
                            <input
                                type="number"
                                name="size"
                                defaultValue={property.size}
                                placeholder="In sqft"
                                className="input w-full mt-2 bg-base-200 border-violet-400/30 text-white"
                            />
                        </div>

                        {/* Amenities */}
                        <div>
                            <label className="text-white font-medium">Amenities</label>
                            <div className="mt-3 bg-base-200 border border-violet-400/30 rounded-xl p-4 space-y-3">

                                <label className="flex items-center gap-3 text-violet-200 cursor-pointer">
                                    <input type="checkbox" defaultChecked={property.amenities?.includes("WiFi")} name="amenities" value="WiFi" className="checkbox checkbox-sm" />
                                    WiFi
                                </label>

                                <label className="flex items-center gap-3 text-violet-200 cursor-pointer">
                                    <input type="checkbox" name="amenities" defaultChecked={property.amenities?.includes("Parking")} value="Parking" className="checkbox checkbox-sm" />
                                    Parking
                                </label>

                                <label className="flex items-center gap-3 text-violet-200 cursor-pointer">
                                    <input type="checkbox" name="amenities" defaultChecked={property.amenities?.includes("Swimming Pool")} value="Swimming Pool" className="checkbox checkbox-sm" />
                                    Swimming Pool
                                </label>

                                <label className="flex items-center gap-3 text-violet-200 cursor-pointer">
                                    <input type="checkbox" name="amenities" value="Balcony" defaultChecked={property.amenities?.includes("Balcony")} className="checkbox checkbox-sm" />
                                    Balcony
                                </label>

                                <label className="flex items-center gap-3 text-violet-200 cursor-pointer">
                                    <input type="checkbox" name="amenities" value="Security" defaultChecked={property.amenities?.includes("Security")} className="checkbox checkbox-sm" />
                                    Security
                                </label>

                            </div>
                        </div>

                        <div className="md:col-span-2">
                            <label className="text-white font-medium">Property Image</label>
                            <input
                                type="url"
                                name="image"
                                defaultValue={property.image}
                                placeholder="https://example.com/image.jpg"
                                className="input w-full mt-2 bg-base-200 border-violet-400/30 text-white"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label className="text-white font-medium">Extra Features</label>
                            <textarea
                                name="extraFeatures"
                                defaultValue={property.extraFeatures}
                                placeholder="Additional details..."
                                className="textarea w-full mt-2 bg-base-200 border-violet-400/30 text-white"
                            />
                        </div>

                        <div>
                            <label className="text-white font-medium">Owner Name</label>
                            <input
                                type="text"
                                name="ownerName"
                                defaultValue={property.ownerName}
                                placeholder="Owner name"
                                className="input w-full mt-2 bg-base-200 border-violet-400/30 text-white"
                            />
                        </div>

                        <div>
                            <label className="text-white font-medium">Owner Contact Email</label>
                            <input
                                type="email"
                                name="ownerEmail"
                                defaultValue={property.ownerEmail}
                                placeholder="owner@email.com"
                                className="input w-full mt-2 bg-base-200 border-violet-400/30 text-white"
                            />
                        </div>

                        <div>
                            <label className="text-white font-medium">Status</label>
                            <input
                                name="status"
                                defaultValue={property.status}
                                readOnly
                                className="input w-full mt-2 bg-base-200 border-violet-400/30 text-violet-300"
                            />
                        </div>

                        <div className="md:col-span-2 pt-4 flex gap-3">
                            <button
                                type="submit"
                                className="flex-1 bg-violet-500 hover:bg-violet-600 text-white py-3 rounded-xl transition font-semibold"
                            >
                                Update Property
                            </button>
                            <button
                                type="button"
                                onClick={closeModal}
                                className="flex-1 bg-base-200 hover:bg-base-100 text-white py-3 rounded-xl transition font-semibold border border-violet-400/30"
                            >
                                Cancel
                            </button>
                        </div>

                    </form>
                </div>

                {/* Click outside to close */}
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default UpdatePropertyModal;