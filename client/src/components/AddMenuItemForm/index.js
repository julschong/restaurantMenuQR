import ImageUploader from 'react-images-upload';
import { useState, useEffect } from 'react';
import { Image } from '@chakra-ui/image';
import { Flex } from '@chakra-ui/layout';
import { Form, Formik } from 'formik';
import FormField from './../FormField/index';
import { validateName } from './formValidate';
import { Grid, Button } from '@chakra-ui/react';

import './addMenuItemForm.scss';

const AddMenuItemForm = () => {
    const [picture, setPicture] = useState();
    const [preview, setPreview] = useState('');
    const [uploadButtonVisible, setVisible] = useState(false);

    const onDrop = (picture) => {
        setPicture(picture[0]);
    };

    useEffect(() => {
        if (picture) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(picture);
        } else {
            setPreview(null);
        }
    }, [picture]);

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
                // dispatch(addRestaurants(values));
                // toast({
                //     title: 'Restaurant added',
                //     description:
                //         'You can start adding menu items and choose your background on the Menu!',
                //     isClosable: true
                // });
                setTimeout(() => {
                    // alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                    // history.push('/');
                }, 1000);
            }}
        >
            {(props) => (
                <Form>
                    <Flex direction="row" align="center">
                        <Flex
                            className="image-upload-container"
                            direction="column"
                            onMouseEnter={() => setVisible(true)}
                            onMouseLeave={() => setVisible(false)}
                        >
                            <Image
                                src={preview}
                                fallbackSrc="https://images.unsplash.com/photo-1614548540093-6f7dfceed46b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400"
                            />
                            {picture && uploadButtonVisible && (
                                <button
                                    className="cancel-button"
                                    onClick={() => {
                                        setPicture(null);
                                        setPreview(null);
                                    }}
                                >
                                    X
                                </button>
                            )}
                            <ImageUploader
                                withIcon={false}
                                withLabel={false}
                                singleImage
                                buttonText={
                                    picture ? 'Replace' : 'Choose images'
                                }
                                buttonStyles={
                                    uploadButtonVisible
                                        ? null
                                        : {
                                              backgroundColor: 'transparent',
                                              color: 'transparent'
                                          }
                                }
                                onChange={onDrop}
                                imgExtension={[
                                    '.jpg',
                                    '.gif',
                                    '.png',
                                    '.gif',
                                    '.jfif'
                                ]}
                                className="file-container"
                                maxFileSize={5242880}
                            />
                        </Flex>

                        <Flex direction="column">
                            <FormField
                                mt={4}
                                fieldName="name"
                                validate={validateName}
                                label="Item Name"
                                placeholder="item name"
                                type="text"
                            />

                            <FormField
                                mt={4}
                                fieldName="description"
                                validate={validateName}
                                label="Description"
                                placeholder="Description"
                                type="text"
                            />

                            <FormField
                                mt={4}
                                fieldName="address"
                                validate={validateName}
                                label="Address"
                                placeholder="address"
                                type="address"
                            />
                        </Flex>

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
                    </Flex>
                </Form>
            )}
        </Formik>
    );
};

export default AddMenuItemForm;
