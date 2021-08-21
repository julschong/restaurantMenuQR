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

const ItemEdit = ({ item, editMode, setEditMode }) => {
    return (
        <>
            <Box mr={4}>
                <ImageUpload imgSrc={item.imgURL} />
            </Box>
            <Flex direction="column" minWidth="200px" flexGrow={1}>
                <Box className="field-box">
                    <label>Name: </label>
                    <Input type="text" defaultValue={item.name} />
                </Box>
                <Box className="field-box">
                    <label>Description: </label>
                    <Textarea
                        className="desc-textbox"
                        type="text"
                        defaultValue={item.desc}
                        maxLength={1024}
                    />
                </Box>

                <Flex className="menu-item-edit-container">
                    <Box className="field-box" width="50%">
                        <label>Price: </label>
                        <NumberInput
                            defaultValue={item.price / 100}
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
                            onClick={() => setEditMode(!editMode)}
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
