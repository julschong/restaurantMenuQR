import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input
} from '@chakra-ui/react';
import { Field } from 'formik';

const FormField = ({ validate, fieldName, placeholder, label, type, mt }) => {
    return (
        <Field name={fieldName} validate={validate}>
            {({ field, form }) => (
                <FormControl
                    mt={mt}
                    isInvalid={
                        form.errors[fieldName] && form.touched[fieldName]
                    }
                >
                    <FormLabel htmlFor={fieldName}>{label}</FormLabel>
                    <Input
                        {...field}
                        id={fieldName}
                        placeholder={placeholder}
                        type={type}
                    />
                    <FormErrorMessage>
                        {form.errors[fieldName]}
                    </FormErrorMessage>
                </FormControl>
            )}
        </Field>
    );
};

export default FormField;
