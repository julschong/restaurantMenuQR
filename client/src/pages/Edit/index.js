import { useParams, useHistory } from 'react-router-dom';
import { Container, Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/image';
import { IoIosArrowBack } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { VscLoading } from 'react-icons/vsc';

import './edit.scss';
import { Flex } from '@chakra-ui/layout';
import { PATHS } from './../../components/Links/index';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Category from '../../components/Category';

const Edit = () => {
    const { id } = useParams();
    const history = useHistory();

    const restaurant = useSelector(
        (state) =>
            state.restaurants.restaurants.filter((rest) => rest.id === id)[0]
    );

    const [menuItems, setMenu] = useState(null);
    const [categories, setCategories] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3003/menu').then((res) => {
            setMenu(res.data.filter((el) => el.restaurantId === id));
        });

        axios.get('http://localhost:3003/category').then((res) => {
            setCategories(res.data.filter((el) => el.restaurantId === id));
        });
    }, [id]);

    if (!restaurant || !menuItems || !categories) {
        return (
            <div className="loading">
                <VscLoading className="load-icon" size="10%" />
            </div>
        );
    }

    return (
        <Container maxW="container.xl">
            <IoIosArrowBack
                cursor="pointer"
                size={40}
                onClick={() => history.push(PATHS.HOME)}
                style={{ flexShrink: 0 }}
            />
            <Flex direction="column" width="100%">
                <Text
                    fontWeight="bold"
                    textTransform="uppercase"
                    fontSize="3xl"
                    letterSpacing="wide"
                    color="teal.600"
                    fontFamily="Roboto Slab"
                >
                    {restaurant.name}
                </Text>
                {categories.map((cat, i) => {
                    return (
                        <Category
                            menuItems={menuItems}
                            cat={cat}
                            key={`${cat.name}${i}`}
                        />
                    );
                })}

                {/* <ImageUpload /> */}
            </Flex>
        </Container>
    );
};

export default Edit;
