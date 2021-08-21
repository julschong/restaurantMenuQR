import { Flex } from '@chakra-ui/layout';

import './menuItem.scss';
import { useRef, useState } from 'react';
import ItemEdit from '../ItemEdit';
import ItemView from '../ItemView';

const MenuItem = ({ item, i, cat }) => {
    const [bg, setBG] = useState('');
    const ref = useRef();
    const [editMode, setEditMode] = useState();

    return (
        <Flex
            ref={ref}
            className="item-edit-container animate__animated animate__fadeIn"
            onMouseEnter={() => {
                setBG('blue.50');
            }}
            onMouseLeave={() => setBG('')}
            bg={bg}
        >
            {editMode ? (
                <ItemEdit
                    item={item}
                    editMode={editMode}
                    setEditMode={setEditMode}
                    cat={cat}
                />
            ) : (
                <ItemView
                    item={item}
                    editMode={editMode}
                    setEditMode={setEditMode}
                />
            )}
        </Flex>
    );
};

export default MenuItem;
