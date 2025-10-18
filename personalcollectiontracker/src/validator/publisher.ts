import type { ValidationErrors } from 'final-form';

import type { PublisherInput } from '@/__generated__/graphql';

import { FORM_REQUIRED_FEILD_ERROR } from '@/utils';

const publisherValidator = (
    value: Record<keyof PublisherInput, string>
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

export default publisherValidator;
