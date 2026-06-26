import ProductTable from '@/components/owner/ProductTable';
import { getOwnerProperty } from '@/lib/action/property';

import React from 'react';

const MyProperties = async () => {
    const properties = await getOwnerProperty()

    console.log(properties)
    return (
        <div>
            <ProductTable properties={properties}></ProductTable>
        </div>
    );
};

export default MyProperties;