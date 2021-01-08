import React, { useState } from 'react';

// import components
import CreateItem from './createItem';

// import style components
import {
    ListBox,
    ListTabBox,
    ListTabConfigBox,
    AddListItem,
} from '../style/index';

function List(props) {

    const { name } = props;

    const [ createItem, setCreateItem ] = useState(false)

    const handleCancelItem = () => {
        setCreateItem(() => false);
    }


    return(
        <ListBox>
            <ListTabBox>
                {name}
                <ListTabConfigBox>···</ListTabConfigBox>
            </ListTabBox>
            
            {
                createItem ? <CreateItem handleCancelItem={handleCancelItem}/> : <AddListItem onClick={() => setCreateItem(true)}>+添加一张卡片</AddListItem>
            }
            
            
        </ListBox>
    )
}


export default List;