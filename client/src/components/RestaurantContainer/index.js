import { Box, Image, Link, Text } from '@chakra-ui/react';
import './container.scss';

const RestaurantContainer = ({ el }) => {
    return (
        <Box className="restaurant-cell" p={4} display={{ md: 'flex' }}>
            <Box flexShrink={0}>
                <Image
                    borderRadius="lg"
                    width={{ md: 80 }}
                    src={el.url}
                    alt={el.name}
                />
            </Box>
            <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                <Text
                    fontWeight="bold"
                    textTransform="uppercase"
                    fontSize="sm"
                    letterSpacing="wide"
                    color="teal.600"
                >
                    {el.name}
                </Text>
                <Link
                    className="link"
                    mt={1}
                    display="block"
                    fontSize="lg"
                    lineHeight="normal"
                    fontWeight="semibold"
                    href="#"
                >
                    {el.url}
                </Link>
                <Text mt={2} color="gray.500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum harum ad ab. Quidem repellendus voluptatem expedita
                    cum ducimus. Unde, nisi dolorum. Ab optio aspernatur alias!.
                </Text>
            </Box>
        </Box>
    );
};

export default RestaurantContainer;
