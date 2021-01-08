import React from 'react';

// import style components
import {
    AddListItemInput,
    AddListItemButtonBox,
    AddListItemButton,
    AddListItemCancel,
} from '../style/index';

function CreateItem(props) {

    const { handleCancelItem } = props;

    return (
        <>
            <AddListItemInput/>
            <AddListItemButtonBox>
                <AddListItemButton>添加卡片</AddListItemButton>
                <AddListItemCancel onClick={handleCancelItem}>×</AddListItemCancel>
            </AddListItemButtonBox>
        </>
    )
}


export default CreateItem;