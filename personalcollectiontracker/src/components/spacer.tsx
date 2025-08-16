import { JSX } from 'react';

interface SpacerProps {
    x?: number;
    y?: number;
}

const Spacer = ({ x = 0, y = 0 }: SpacerProps): JSX.Element => {
    const className = `ml-${x} mr-${x} mt-${y} mb-${y}`;
    return <div className={className} />;
};

export default Spacer;
