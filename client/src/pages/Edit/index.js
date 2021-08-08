import { useParams, useHistory } from 'react-router-dom';
import {
    Container,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Text
} from '@chakra-ui/react';
import { Image } from '@chakra-ui/image';
import { IoIosArrowBack } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { VscLoading } from 'react-icons/vsc';

import './edit.scss';
import { Flex } from '@chakra-ui/layout';
import { PATHS } from './../../components/Links/index';
import ImageUpload from './../../components/ImageUpload/index';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Edit = () => {
    const { id } = useParams();
    const history = useHistory();

    const restaurant = useSelector(
        (state) =>
            state.restaurants.restaurants.filter((rest) => rest.id === id)[0]
    );

    const [menuItems, setMenu] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3003/menu').then((res) => {
            setMenu(res.data.filter((el) => el.restaurantId === id));
        });
    }, [id]);

    console.log(menuItems);

    if (!restaurant || !menuItems) {
        return (
            <div className="loading">
                <VscLoading className="load-icon" size="10%" />
            </div>
        );
    }

    return (
        <Container maxWidth="80vw">
            <Flex>
                <IoIosArrowBack
                    cursor="pointer"
                    size={40}
                    onClick={() => history.push(PATHS.HOME)}
                />
                <Image />
                <Flex direction="column">
                    <Text fontSize="3xl" className="title">
                        {restaurant.name}
                    </Text>
                    {menuItems.map((item, i) => (
                        <Flex key={`${item.name}${i}`}>
                            <Image
                                fallbackSrc="/asset/Blank_image.jpg"
                                borderRadius="lg"
                                width={{ md: 40 }}
                                height={{ md: 40 }}
                                src={item.imgURL}
                                alt={item.name}
                                mr={3}
                            />
                            <Flex direction="column" width="500px">
                                <p>
                                    <span>Name: </span>
                                    <input
                                        type="text"
                                        defaultValue={item.name}
                                    />
                                </p>
                                <p>
                                    <span>Description: </span>
                                    <input
                                        type="text"
                                        defaultValue={item.desc}
                                    />
                                </p>
                                <p>
                                    <span>Price: </span>
                                    <NumberInput
                                        defaultValue={(
                                            item.price / 100
                                        ).toFixed(2)}
                                    >
                                        <NumberInputField />
                                        <NumberInputStepper>
                                            <NumberIncrementStepper />
                                            <NumberDecrementStepper />
                                        </NumberInputStepper>
                                    </NumberInput>
                                </p>
                            </Flex>
                        </Flex>
                    ))}
                    <ImageUpload />
                </Flex>
            </Flex>
        </Container>
    );
};

export default Edit;
