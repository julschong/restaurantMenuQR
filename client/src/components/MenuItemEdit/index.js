import { Image } from '@chakra-ui/image';
import { Input } from '@chakra-ui/input';
import { Flex } from '@chakra-ui/layout';
import {
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper
} from '@chakra-ui/number-input';
import { Textarea } from '@chakra-ui/textarea';

import './menuItemEdit.scss';
import { Box } from '@chakra-ui/react';
import { useRef, useState } from 'react';

const MenuItemEdit = ({ item, i }) => {
    const [bg, setBG] = useState('');
    const ref = useRef();

    return (
        <Flex
            ref={ref}
            className="item-edit-container"
            onMouseEnter={() => {
                console.log('enter');
                setBG('blue.50');
            }}
            onMouseLeave={() => setBG('')}
            bg={bg}
        >
            <Image
                className="item-img"
                fallbackSrc="/asset/Blank_image.jpg"
                borderRadius="lg"
                width={{ md: 60 }}
                height={{ md: 60 }}
                src={item.imgURL}
                alt={item.name}
                mr={3}
            />
            <Flex direction="column" width="500px" flexGrow={1}>
                <Box className="field-box">
                    <label>Name: </label>
                    <Input type="text" defaultValue={item.name} />
                </Box>
                <Box className="field-box">
                    <label>Description: </label>
                    <Textarea
                        type="text"
                        defaultValue={item.desc}
                        maxLength={1024}
                        resize="none"
                    />
                </Box>
                <Box className="field-box">
                    <label>Price: </label>
                    <NumberInput defaultValue={(item.price / 100).toFixed(2)}>
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </Box>
            </Flex>
        </Flex>
    );
};

export default MenuItemEdit;
