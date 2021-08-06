import { Button, Grid, useToast } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import { useHistory } from 'react-router';
import FormField from '../FormField';

function validateName(value) {
    let error;
    if (!value) {
        error = 'Restaurant Name is required';
    }
    return error;
}

function validatePhone(value) {
    let error;
    if (!value) {
        error = 'Phone Number is required';
    }
    return error;
}

function validateAddress(value) {
    let error;
    if (!value) {
        error = 'Address is required';
    }
    return error;
}

const AddForm = () => {
    const history = useHistory();
    const toast = useToast();
    return (
        <Formik
            initialValues={{ name: '', phone: '', address: '' }}
            onSubmit={(values, actions) => {
                values.url = 'https://i.stack.imgur.com/y9DpT.jpg';
                toast({
                    title: 'Restaurant added',
                    description:
                        'You can start adding menu items and choose your background on the Menu!',
                    isClosable: true
                });
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                    history.push('/');
                }, 1000);
            }}
        >
            {(props) => (
                <Form>
                    <FormField
                        mt={4}
                        fieldName="name"
                        validate={validateName}
                        label="Restaurant Name"
                        placeholder="restaurant name"
                        type="text"
                    />

                    <FormField
                        mt={4}
                        fieldName="phone"
                        validate={validatePhone}
                        label="Phone Number"
                        placeholder="(123) 456-7890"
                        type="tel"
                    />

                    <FormField
                        mt={4}
                        fieldName="address"
                        validate={validateAddress}
                        label="Address"
                        placeholder="address"
                        type="address"
                    />

                    <Grid templateColumns="repeat(2, 1fr)" gap={1}>
                        <Button
                            mt={6}
                            colorScheme="facebook"
                            isLoading={props.isSubmitting}
                            type="submit"
                        >
                            Submit
                        </Button>
                        <Button mt={6} colorScheme="gray" type="reset">
                            Cancel
                        </Button>
                        <Button mt={6} colorScheme="gray">
                            Show Toast
                        </Button>
                    </Grid>
                </Form>
            )}
        </Formik>
    );
};

export default AddForm;
