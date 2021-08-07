import { Box, Image, Text, Button, ButtonGroup } from '@chakra-ui/react';
import { useState } from 'react';
import './container.scss';
import { useHistory } from 'react-router';
import { Flex } from '@chakra-ui/layout';

const RestaurantContainer = ({ el }) => {
    const [bg, setBg] = useState(() => '');

    const history = useHistory();

    return (
        <>
            <Box
                className="restaurant-cell"
                p={4}
                display={{ md: 'flex' }}
                bg={bg}
                onMouseEnter={() => setBg('blue.50')}
                onMouseLeave={() => setBg('')}
            >
                <Box flexShrink={0}>
                    <Image
                        borderRadius="lg"
                        width={{ md: 60 }}
                        height={{ md: 60 }}
                        src={el.url}
                        alt={el.name}
                    />
                </Box>
                <Flex
                    className="restaurant-content-container"
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    direction="column"
                >
                    <Text
                        fontWeight="bold"
                        textTransform="uppercase"
                        fontSize="2xl"
                        letterSpacing="wide"
                        color="teal.600"
                        fontFamily="Roboto Slab"
                    >
                        {el.name}
                    </Text>
                    <Text mt={2} color="gray.500">
                        {el.phone}
                    </Text>
                    <Text mt={2} color="gray.500">
                        {el.address}
                    </Text>
                    <Text mt={2} color="gray.500">
                        {el.description.length > 250
                            ? el.description.substring(0, 250) + '. . .'
                            : el.description}
                    </Text>
                    <ButtonGroup className="button-group" width="15%">
                        <Button
                            colorScheme="teal"
                            className="edit-link"
                            flexGrow={1}
                            onClick={() => history.push('/edit')}
                        >
                            View
                        </Button>
                        <Button
                            colorScheme="gray"
                            className="edit-link"
                            onClick={() => history.push('/edit')}
                            ml={6}
                        >
                            Edit
                        </Button>
                    </ButtonGroup>
                </Flex>
            </Box>
        </>
    );
};

export default RestaurantContainer;
