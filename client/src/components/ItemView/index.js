import { Box, AspectRatio, Text, Image, Button } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/layout';
import './ItemView.scss';

const ItemView = ({ item, editMode, setEditMode }) => {
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

                <Flex className="menu-item-view">
                    <Text className="dish-price-view">
                        ${(item.price / 100).toFixed(2)}
                    </Text>
                    <Button
                        className="menu-item-view-edit-button"
                        style={{ alignSelf: 'flex-end' }}
                        onClick={() => setEditMode(!editMode)}
                    >
                        {editMode ? 'Cancel' : 'Edit'}
                    </Button>
                </Flex>
            </Flex>
        </>
    );
};

export default ItemView;
