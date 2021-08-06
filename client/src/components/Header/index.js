import { Flex } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/react';
import { IoRestaurant } from 'react-icons/io5';
import Links from '../Links';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Flex id="navbar" bg="#DDD">
                <Link to="/" id="brand-container">
                    <Flex>
                        <IoRestaurant id="logo" color="#A00" />
                        <Text id="app-name">Menu</Text>
                    </Flex>
                </Link>
                <Links />
            </Flex>
        </header>
    );
};

export default Header;
