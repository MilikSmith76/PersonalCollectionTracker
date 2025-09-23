import { JSX } from 'react';

import { getValue } from '@/utils';

import Button from '../button';

interface TableDataRowProps<DataType> {
    dataRow: DataType;
    dataTypeName: string;
    labels: string[];
    row: number;
}

const TableDataRow = <DataType,>({
    dataRow,
    dataTypeName,
    labels,
    row,
}: TableDataRowProps<DataType>): JSX.Element => (
    <tr
        className={row != labels.length - 1 ? 'border-b-2 border-gray-500' : ''}
        key={`table-row-${row}-${dataTypeName}`}
    >
        {labels.map((label, col) => (
            <td
                className='p-[10]'
                key={`table-data-${row}-${col}-${dataTypeName}`}
            >
                {getValue<string>(dataRow, label)}
            </td>
        ))}
        <td>
            <Button text='Edit' />
            <Button text='Delete' />
        </td>
    </tr>
);

export default TableDataRow;
