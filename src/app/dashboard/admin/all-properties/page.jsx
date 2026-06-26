import AdminPropertyTable from '@/components/admin/AdminPropertyTable';
import { getAdminProperty } from '@/lib/action/property';
import React from 'react';

const AllProperties = async () => {
    const properties = await getAdminProperty();
    return (
        <div>
            <AdminPropertyTable properties={properties}></AdminPropertyTable>
        </div>
    );
};

export default AllProperties;