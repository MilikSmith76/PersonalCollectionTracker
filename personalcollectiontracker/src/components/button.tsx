import type { ButtonProps } from '@headlessui/react';

import { Button } from '@headlessui/react';
import { JSX } from 'react';

const DEFAULT_BUTTON_COLOR: string = 'sky';

interface AppButtonProps extends ButtonProps {
    classNameExtension?: string;
    color?: string;
    icon?: JSX.Element;
    text?: string;
}

const AppButton = ({
    className,
    classNameExtension,
    color,
    icon,
    text,
    ...buttonProps
}: AppButtonProps): JSX.Element => {
    const altClassName =
        color || classNameExtension
            ? `m-2 rounded bg-${color ?? DEFAULT_BUTTON_COLOR}-600 px-4 py-2 hover:bg-${color ?? DEFAULT_BUTTON_COLOR}-500 ${classNameExtension}`
            : '';

    return (
        <Button
            className={
                className ??
                (altClassName
                    ? altClassName
                    : 'm-2 rounded bg-sky-600 px-4 py-2 hover:bg-sky-500')
            }
            {...buttonProps}
        >
            {icon ?? ''}{text}
        </Button>
    );
};

export default AppButton;
