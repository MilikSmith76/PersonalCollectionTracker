import { JSX } from 'react';

import { getTableHeaderValue } from '@/utils';

interface TableHeadRowProps {
    dataTypeName: string;
    labels: string[];
}

const TableHeadRow = ({
    dataTypeName,
    labels,
}: TableHeadRowProps): JSX.Element => (
    <thead>
        <tr className='border-b-2 border-gray-500 bg-gray-600'>
            {labels.map((label) => (
                <th
                    className='p-[10]'
                    key={`table-head-${label}-${dataTypeName}`}
                >
                    {getTableHeaderValue(label)}
                </th>
            ))}
            <th className='p-[10]' key={`table-head-actions-${dataTypeName}`}>
                Actions
            </th>
        </tr>
    </thead>
);

export default TableHeadRow;
