import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import MenuItem from './../MenuItem/index';
import { Flex, Spacer } from '@chakra-ui/layout';

import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

const Category = ({ menuItems, cat }) => {
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
                        <MenuItem item={item} i={i} key={`${item.name}${i}`} />
                    ))}
        </Box>
    );
};

export default Category;
