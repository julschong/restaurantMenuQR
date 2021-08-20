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
import { useCallback, useEffect, useRef, useState } from 'react';
import PictureUpload from '../PictureUpload';
import ImageUpload from './../ImageUpload/index';

const MenuItemEdit = ({ item, i }) => {
    const [bg, setBG] = useState('');
    const [active, setActive] = useState(false);
    const ref = useRef();

    const mouseClick = useCallback((e) => {
        if (!e.path.includes(ref.current)) {
            setActive(false);
        }
    }, []);

    useEffect(() => {
        window.addEventListener('click', mouseClick);
        return () => {
            window.removeEventListener('click', mouseClick);
        };
    }, [mouseClick]);

    const [pictures, setPictures] = useState();

    const onDrop = (picture) => {
        setPictures([...pictures, picture]);
    };

    return (
        <Flex
            ref={ref}
            className="item-edit-container"
            onMouseEnter={() => {
                setBG('blue.50');
            }}
            onMouseLeave={() => setBG('')}
            bg={bg}
            onClick={(e) => setActive(true)}
        >
            <Box mr={4}>
                {/* <Image
                    className="item-img"
                    fallbackSrc="/asset/Blank_image.jpg"
                    borderRadius="lg"
                    src={item.imgURL}
                    alt={item.name}
                    objectFit="cover"
                /> */}
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
                <Box className="field-box" width="50%">
                    <label>Price: </label>
                    <NumberInput defaultValue={item.price / 100} precision={2}>
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </Box>
                {/* <Spacer />
                    <Button colorScheme="teal" width="100%">
                        Save
                    </Button>
                    <Button colorScheme="gray" width="100%">
                        Cancel
                    </Button> */}
            </Flex>
        </Flex>
    );
};

export default MenuItemEdit;
