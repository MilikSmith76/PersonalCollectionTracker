import { JSX } from 'react';

import { getTableHeaderValue, getValue } from '@/utils';

import Button from './button';

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
                {getValue(dataRow, label)}
            </td>
        ))}
        <td>
            <Button text='Edit' />
            <Button text='Delete' />
        </td>
    </tr>
);

const Table = <DataType,>({
    data,
    labels,
}: TableProps<DataType>): JSX.Element => {
    const dataTypeName: string = typeof data;

    return (
        <div className='mr-auto ml-auto w-2/3 overflow-hidden rounded-xl bg-gray-400'>
            <table className='w-full table-fixed border-collapse text-left'>
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
