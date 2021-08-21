import { Box, AspectRatio, Text, Image } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/layout';
import './ItemView.scss';

const ItemView = ({ item }) => {
    console.log(item);
    return (
        <>
            <Box mr={4}>
                <AspectRatio minW={200} maxW="50%" ratio={4 / 3}>
                    <Image
                        src={item.imgURL}
                        alt={item.name}
                        objectFit="cover"
                    />
                </AspectRatio>
            </Box>
            <Flex
                direction="column"
                minWidth="200px"
                flexGrow={1}
                justifyContent="space-between"
            >
                <Text type="text" className="dish-name-view">
                    {item.name}
                </Text>
                <Text className="dish-desc-view" type="text">
                    {item.desc}
                </Text>
                <Text className="dish-price-view">
                    ${(item.price / 100).toFixed(2)}
                </Text>
            </Flex>
        </>
    );
};

export default ItemView;
