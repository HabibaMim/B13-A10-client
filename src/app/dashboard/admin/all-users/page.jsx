import AdminUsersTable from '@/components/admin/AdminUsersTable';
import { getAdminUsers } from '@/lib/action/property';
import React from 'react';

const AllUsers = async () => {
    const users = await getAdminUsers();
    return (
        <div>
            <AdminUsersTable users={users}></AdminUsersTable>
        </div>
    );
};

export default AllUsers;