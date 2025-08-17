import { Button } from '@headlessui/react';
import { JSX } from 'react';

import { getTableHeaderValue, getValue } from '@/utils';

interface TableHeadRowProps {
    dataTypeName: string;
    labels: string[];
}

interface TableDataRowProps<DataType> {
    dataRow: DataType;
    dataTypeName: string;
    labels: string[];
    row: number;
}

interface TableProps<DataType> {
    data: DataType[];
    labels: string[];
}

const TableHeadRow = ({ dataTypeName, labels }: TableHeadRowProps): JSX.Element => (
    <thead>
        <tr className='bg-gray-600 border-b-2 border-gray-500'>
            {labels.map((label) => (
                <th className='p-[10]' key={`table-head-${label}-${dataTypeName}`}>
                    {getTableHeaderValue(label)}
                </th>
            ))}
            <th className='p-[10]' key={`table-head-actions-${dataTypeName}`}>
                Actions
            </th>
        </tr>
    </thead>
);

const TableDataRow = <DataType,>({
    dataRow,
    dataTypeName,
    labels,
    row,
}: TableDataRowProps<DataType>): JSX.Element => (
<tr className={ row != labels.length - 1 ? 'border-b-2 border-gray-500' : ''} key={`table-row-${row}-${dataTypeName}`}>
        {labels.map((label, col) => (
            <td className='p-[10]' key={`table-data-${row}-${col}-${dataTypeName}`}>
                {getValue(dataRow, label)}
            </td>
        ))}
        <td>
            <Button className='rounded bg-sky-600 px-4 mr-2 hover:bg-sky-500'>Edit</Button>
            <Button className='rounded bg-sky-600 px-4 hover:bg-sky-500'>Delete</Button>
        </td>
    </tr>
);

const Table = <DataType,>({
    data,
    labels,
}: TableProps<DataType>): JSX.Element => {
    const dataTypeName: string = typeof data;

    return (
        <div className='w-2/3 ml-auto mr-auto bg-gray-400 rounded-xl overflow-hidden'>
            <table className='w-full text-left table-fixed border-collapse'>
                <TableHeadRow dataTypeName={dataTypeName} labels={labels} />
                <tbody>
                    {data.map((dataRow, row) => (
                    <TableDataRow
                        dataRow={dataRow}
                        dataTypeName={dataTypeName}
                        key={`${row}-${dataTypeName}`}
                        labels={labels}
                        row={row}
                    />
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
