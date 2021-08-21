import { Flex } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/react';
import { IoRestaurant } from 'react-icons/io5';
import Links from '../Links';
import './header.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PATHS } from './../Links/index';

const Header = () => {
    const [currentPage, setCurrentPage] = useState('');

    useEffect(() => {
        setCurrentPage(document.location.pathname);
    }, []);

    return (
        <header>
            <Flex id="navbar" bg="#112">
                <Link
                    to={PATHS.HOME}
                    id="brand-container"
                    onClick={() => {
                        setCurrentPage(PATHS.HOME);
                    }}
                >
                    <Flex>
                        <IoRestaurant id="logo" color="#A00" />
                        <Text
                            id="app-name"
                            userSelect="none"
                            fontFamily="'MonteCarlo',cursive"
                            fontWeight="bold"
                        >
                            Menu
                        </Text>
                    </Flex>
                </Link>
                <Links
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </Flex>
        </header>
    );
};

export default Header;
