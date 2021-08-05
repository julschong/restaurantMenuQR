import { Flex } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/react';
import { IoRestaurant } from 'react-icons/io5';
import Links from '../Links';
import './Header.scss';

const Header = () => {
    return (
        <Flex id="navbar" bg="#DDD">
            <IoRestaurant id="logo" color="#A00" />
            <Text id="app-name">Menu</Text>
            <Links />
        </Flex>
    );
};

export default Header;
