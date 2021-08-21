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
import './ItemEdit.scss';
import { useDispatch } from 'react-redux';
import { addMenu } from '../../stores/actions/menuItemsActions';
import { useState } from 'react';

const ItemEdit = ({
    item,
    editMode,
    setEditMode,
    addMode,
    setAddItemMode,
    cat
}) => {
    const dispatch = useDispatch();
    const [name, setName] = useState(item.name);
    const [description, setDescription] = useState(item.desc);
    const [price, setPrice] = useState(item.price / 100);
    const [imgURL, setImgURL] = useState(item.imgURL);

    return (
        <>
            <Box mr={4}>
                <ImageUpload imgSrc={imgURL} setImgURL={setImgURL} />
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
                                const menuItem = {
                                    name,
                                    desc: description,
                                    imgURL,
                                    price: price * 100,
                                    categoryId: cat.id,
                                    restaurantId: 1
                                };
                                if (addMode) {
                                    dispatch(addMenu(menuItem));
                                }
                                setAddItemMode(false);
                                setEditMode(!editMode);
                            }}
                        >
                            Save
                        </Button>

                        <Button onClick={() => setEditMode(!editMode)}>
                            {editMode ? 'Cancel' : 'Edit'}
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
};

export default ItemEdit;
