import { useParams, useHistory } from 'react-router-dom';
import { Container } from '@chakra-ui/react';
import { Image } from '@chakra-ui/image';
import { IoIosArrowBack } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { VscLoading } from 'react-icons/vsc';

import './edit.scss';
import { Flex } from '@chakra-ui/layout';
import { PATHS } from './../../components/Links/index';
import ImageUpload from './../../components/ImageUpload/index';

const Edit = () => {
    const { id } = useParams();
    const history = useHistory();

    const restaurant = useSelector(
        (state) =>
            state.restaurants.restaurants.filter((rest) => rest.id === id)[0]
    );

    console.log(restaurant);
    if (!restaurant) {
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
                    <h2 className="title">{restaurant.name}</h2>
                    <ImageUpload />
                </Flex>
            </Flex>
        </Container>
    );
};

export default Edit;
