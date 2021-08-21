import { Flex } from '@chakra-ui/layout';

import './menuItem.scss';
import { useRef, useState } from 'react';
import ItemEdit from '../ItemEdit';
import ItemView from '../ItemView';
import { Button } from '@chakra-ui/react';

const MenuItem = ({ item, i }) => {
    const [bg, setBG] = useState('');
    const ref = useRef();
    const [editMode, setEditMode] = useState(false);

    return (
        <Flex
            ref={ref}
            className="item-edit-container"
            onMouseEnter={() => {
                setBG('blue.50');
            }}
            onMouseLeave={() => setBG('')}
            bg={bg}
        >
            {editMode ? <ItemEdit item={item} /> : <ItemView item={item} />}
            <Button
                className="menu-item-edit"
                onClick={() => setEditMode(!editMode)}
            >
                Edit
            </Button>
        </Flex>
    );
};

export default MenuItem;
