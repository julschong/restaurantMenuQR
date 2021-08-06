import { Flex } from '@chakra-ui/layout';
import { Link, Text } from '@chakra-ui/react';
import { IoRestaurant } from 'react-icons/io5';
import Links from '../Links';
import './Header.scss';

const Header = () => {
    return (
        <Flex id="navbar" bg="#DDD">
            <Link href="/">
                <IoRestaurant id="logo" color="#A00" />
            </Link>
            <Text id="app-name">Menu</Text>
            <Links />
        </Flex>
    );
};

export default Header;
