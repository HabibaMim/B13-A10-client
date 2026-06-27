"use client";

import { handleUserRole } from "@/lib/action/property"; // or wherever this lives
import toast from "react-hot-toast";

const RoleSelect = ({ userId, currentRole }) => {
    const onChange = async (e) => {
        const newRole = e.target.value;
        const result = await handleUserRole(userId, newRole);

        if (result) {
            toast.success(`Role changed to ${newRole}`);
        } else {
            toast.error("Failed to update role");
        }
    };

    return (
        <select className="select"
            defaultValue={currentRole}
            onChange={onChange}
        >
            <option value="tenant">tenant</option>
            <option value="owner">owner</option>
            <option value="admin">admin</option>
        </select>
    );
};

export default RoleSelect;