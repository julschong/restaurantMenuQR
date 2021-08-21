import { useParams, useHistory } from 'react-router-dom';
import { Container, Text } from '@chakra-ui/react';
import { IoIosArrowBack } from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';
import { VscLoading } from 'react-icons/vsc';

import './edit.scss';
import { Flex } from '@chakra-ui/layout';
import { PATHS } from './../../components/Links/index';
import { useEffect, useState } from 'react';
import Category from '../../components/Category';
import { getMenus, reloadMenu } from './../../stores/actions/menuItemsActions';
import {
    getCategories,
    reloadCategory
} from './../../stores/actions/categoryActions';

const Edit = () => {
    const { id } = useParams();
    const history = useHistory();

    const restaurant = useSelector(
        (state) =>
            state.restaurants.restaurants.filter((rest) => rest.id === id)[0]
    );
    const [pageLoad, setLoad] = useState(false);

    const dispatch = useDispatch();
    const menus = useSelector((state) => state.menus);
    const categories = useSelector((state) => state.categories);

    useEffect(() => {
        dispatch(getCategories(id));
        dispatch(getMenus(id));
        setLoad(true);
    }, [id, dispatch]);

    if (!restaurant || menus.loading || categories.loading || !pageLoad) {
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
                onClick={() => {
                    history.push(PATHS.HOME);
                    dispatch(reloadCategory());
                    dispatch(reloadMenu());
                }}
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
                {categories.categories.map((cat, i) => {
                    return (
                        <Category
                            menuItems={menus.menus}
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
