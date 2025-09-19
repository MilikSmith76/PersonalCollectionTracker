import { JSX } from 'react';

import TableDataRow from './tableDataRow';
import TableHeadRow from './tableHeadRow';

interface TableProps<DataType> {
    data: DataType[];
    labels: string[];
}

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
