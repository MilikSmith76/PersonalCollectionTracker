import { JSX } from 'react';

import type { FormFieldProps } from '@/interfaces';

import { FormFieldTypes } from '@/utils';

import ComboFormField from './comboFormField';
import RadioFormField from './radioFormField';
import SelectFormField from './selectFormField';
import SwitchFormField from './switchFormField';
import TextFormField from './textFormField';

const FormField = (props: FormFieldProps): JSX.Element => {
    const isTextField = props.fieldType == FormFieldTypes.TEXT;

    return (
        <>
            {(props.fieldType == undefined || isTextField) && (
                <TextFormField {...props} />
            )}
            {props.fieldType == FormFieldTypes.RADIO && (
                <RadioFormField {...props} />
            )}
            {props.fieldType == FormFieldTypes.COMBO && (
                <ComboFormField {...props} />
            )}
            {props.fieldType == FormFieldTypes.SELECT && (
                <SelectFormField {...props} />
            )}
            {props.fieldType == FormFieldTypes.SWITCH && (
                <SwitchFormField {...props} />
            )}
        </>
    );
};

export default FormField;
