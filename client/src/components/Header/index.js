import { Flex } from '@chakra-ui/layout';
import { Link, Text } from '@chakra-ui/react';
import { IoRestaurant } from 'react-icons/io5';
import Links from '../Links';
import './Header.scss';

const Header = () => {
    return (
        <header>
            <Flex id="navbar" bg="#DDD">
                <Link href="/" id="brand-container">
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
