import { Box, Button } from '@chakra-ui/react';
import ImageUpload from './../ImageUpload/index';
import { Flex } from '@chakra-ui/layout';
import { Input } from '@chakra-ui/input';
import { Textarea } from '@chakra-ui/textarea';
import {
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper
} from '@chakra-ui/number-input';
import { useDispatch } from 'react-redux';
import { addMenu } from '../../stores/actions/menuItemsActions';
import { useEffect, useRef, useState } from 'react';

const AddMenuItem = ({ addMode, setAddItemMode, cat }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [imgURL, setImgURL] = useState('');

    const [bg, setBG] = useState('');
    const ref = useRef();

    const [saving, setSaving] = useState(false);

    useEffect(() => {
        return () => {
            if (saving) {
                setTimeout(() => {
                    const menuItem = {
                        name,
                        desc: description,
                        imgURL,
                        price: price * 100,
                        categoryId: cat.id,
                        restaurantId: 1
                    };
                    if (imgURL.length > 0) {
                        dispatch(addMenu(menuItem));
                    }
                    setAddItemMode(false);
                });
            }
        };
    }, [
        cat.id,
        description,
        dispatch,
        imgURL,
        name,
        price,
        saving,
        setAddItemMode,
        addMode
    ]);

    return (
        <Flex
            ref={ref}
            className="item-edit-container animate__animated animate__fadeIn"
            onMouseEnter={() => {
                setBG('blue.50');
            }}
            onMouseLeave={() => setBG('')}
            bg={bg}
        >
            <Box mr={4}>
                <ImageUpload
                    imgSrc={imgURL}
                    setImgURL={setImgURL}
                    saving={saving}
                    setAddItemMode={setAddItemMode}
                />
            </Box>
            <Flex direction="column" minWidth="200px" flexGrow={1}>
                <Box className="field-box">
                    <label>Name: </label>
                    <Input
                        type="text"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                </Box>
                <Box className="field-box">
                    <label>Description: </label>
                    <Textarea
                        className="desc-textbox"
                        type="text"
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                        maxLength={1024}
                    />
                </Box>

                <Flex className="menu-item-edit-container">
                    <Box className="field-box" width="50%">
                        <label>Price: </label>
                        <NumberInput
                            value={price}
                            onChange={(e) => {
                                setPrice(e);
                            }}
                            step={1}
                            precision={2}
                        >
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </Box>
                    <Flex className="menu-item-edit-button-group">
                        <Button
                            colorScheme="teal"
                            onClick={() => {
                                setSaving(true);
                            }}
                        >
                            Save
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default AddMenuItem;
