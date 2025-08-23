import { Field, Label, Switch } from '@headlessui/react';
import { JSX } from 'react';
import { Field as FinalField } from 'react-final-form';

import type { FormFieldProps } from '@/interfaces';

const SwitchFormField = ({ label, name }: FormFieldProps): JSX.Element => (
    <FinalField name={name}>
        {({ input }) => (
            <Field>
                <Label className='block'>{label}</Label>
                <Switch
                    checked={input.checked}
                    className='group mt-1 inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-emerald-600'
                    onBlur={input.onBlur}
                    onChange={input.onChange}
                    onFocus={input.onFocus}
                >
                    <span className='size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6' />
                </Switch>
            </Field>
        )}
    </FinalField>
);

export default SwitchFormField;
