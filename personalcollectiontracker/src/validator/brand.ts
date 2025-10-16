import type { ValidationErrors } from 'final-form';

import type { BrandInput } from '@/__generated__/graphql';

import { FORM_REQUIRED_FEILD_ERROR } from '@/utils';

const brandValidator = (
    value: Record<keyof BrandInput, string>
): ValidationErrors => {
    const errors: ValidationErrors = {};

    if (!value.name) {
        errors.name = FORM_REQUIRED_FEILD_ERROR;
    }

    if (!value.logoUrl) {
        errors.logoUrl = FORM_REQUIRED_FEILD_ERROR;
    }

    return errors;
};

export default brandValidator;
