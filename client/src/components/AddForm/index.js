import { Button, Grid, useToast } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import { useHistory } from 'react-router';
import FormField from '../FormField';
import { useDispatch } from 'react-redux';
import { addRestaurants } from './../../stores/actions/restaurantsActions';
import {
    validateName,
    validatePhone,
    validateAddress,
    validateURL,
    validateDesc
} from './formValidate';

const AddForm = () => {
    const history = useHistory();
    const toast = useToast();

    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={{
                name: '',
                phone: '',
                address: '',
                url: '',
                description: ''
            }}
            onSubmit={(values, actions) => {
                dispatch(addRestaurants(values));
                toast({
                    title: 'Restaurant added',
                    description:
                        'You can start adding menu items and choose your background on the Menu!',
                    isClosable: true
                });
                setTimeout(() => {
                    // alert(JSON.stringify(values, null, 2));
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

                    <FormField
                        mt={4}
                        fieldName="url"
                        validate={validateURL}
                        label="Image URL"
                        placeholder="URL"
                        type="url"
                    />

                    <FormField
                        mt={4}
                        fieldName="description"
                        validate={validateDesc}
                        label="Description"
                        placeholder="Description"
                        type="text"
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
                    </Grid>
                </Form>
            )}
        </Formik>
    );
};

export default AddForm;
