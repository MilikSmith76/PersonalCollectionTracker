'use client';
import {
    BubbleDataPoint,
    CategoryScale,
    ChartData,
    Chart as ChartJS,
    ChartOptions,
    Legend,
    LinearScale,
    LineElement,
    Point,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';
import { JSX } from 'react';
import { Line } from 'react-chartjs-2';

const labels: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
];

export const data: ChartData<
    'line',
    (number | [number, number] | Point | BubbleDataPoint | null)[],
    unknown
> = {
    datasets: [
        {
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgb(255, 99, 132)',
            data: labels.map(() => 9),
            label: 'Dataset 1',
        },
        {
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            borderColor: 'rgb(53, 162, 235)',
            data: labels.map(() => 10),
            label: 'Dataset 2',
        },
    ],
    labels,
};

export const options: ChartOptions<'line'> = {
    maintainAspectRatio: false,
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
            text: 'Chart.js Line Chart',
        },
    },
    responsive: true,
};

const LinebarGraph = (): JSX.Element => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    return (
        <div className='max mr-auto ml-auto flex h-[25vw] w-1/2 items-center gap-4 rounded-lg border-2 border-white p-[20] text-center'>
            <Line data={data} datasetIdKey='linebarGraph' options={options} />
        </div>
    );
};

export default LinebarGraph;
