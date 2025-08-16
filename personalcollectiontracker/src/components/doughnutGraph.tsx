'use client';
import {
    ArcElement,
    ChartData,
    Chart as ChartJS,
    ChartOptions,
    Legend,
    Tooltip,
} from 'chart.js';
import { JSX } from 'react';
import { Doughnut } from 'react-chartjs-2';

const labels: string[] = ['Jun', 'Jul', 'Aug'];

const data: ChartData<'doughnut', number[], string> = {
    datasets: [
        {
            backgroundColor: ['blue', 'red', 'yellow'],
            data: [10, 11, 12],
            label: 'Totals',
        },
    ],
    labels,
};

const options: ChartOptions<'doughnut'> = {
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            color: 'white',
            display: true,
            font: {
                size: 20,
            },
            text: 'Doughnut Graph Chart',
        },
    },
    responsive: true,
};

const DoughnutGraph = (): JSX.Element => {
    ChartJS.register(ArcElement, Tooltip, Legend);

    return (
        <div className='max mr-auto ml-auto flex h-[25vw] w-1/2 flex-col items-center gap-4 rounded-lg border-2 border-white p-[20] text-center'>
            <Doughnut
                data={data}
                datasetIdKey='doughNutGraph'
                options={options}
            />
        </div>
    );
};

export default DoughnutGraph;
