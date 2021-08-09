import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import { Flex, Spacer } from '@chakra-ui/layout';

import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import MenuItemView from './MenuItemView/index';

const CategoryView = ({ menuItems, cat }) => {
    const [active, setActive] = useState(true);

    return (
        <Box>
            <Flex align="flex-end">
                <header className="category-title">{cat.name}</header>
                <Spacer />
                {active ? (
                    <BiChevronDown
                        size={50}
                        onClick={() => setActive(!active)}
                        cursor="pointer"
                    />
                ) : (
                    <BiChevronUp
                        size={50}
                        onClick={() => setActive(!active)}
                        cursor="pointer"
                    />
                )}
            </Flex>
            <hr className="divider" />
            {active &&
                menuItems
                    .filter((items) => items.categoryId === cat.id)
                    .map((item, i) => (
                        <MenuItemView
                            item={item}
                            i={i}
                            key={`${item.name}${i}`}
                        />
                    ))}
        </Box>
    );
};

export default CategoryView;
