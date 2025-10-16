enum FormFieldTypes {
    COMBO,
    TEXT,
    RADIO,
    SELECT,
    SWITCH,
}

const BAD_REQUEST = 400;

const GRAPHQL_CLIENT_NAME = 'personal-collection-tracker-client';

const GRAPHQL_POLL_INTERVAL = 300000;

const FORM_REQUIRED_FEILD_ERROR = 'This field is required';

export {
    BAD_REQUEST,
    FORM_REQUIRED_FEILD_ERROR,
    FormFieldTypes,
    GRAPHQL_CLIENT_NAME,
    GRAPHQL_POLL_INTERVAL,
};
