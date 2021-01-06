import React, { useEffect, useState } from 'react';

import {
    CreateListBox,
    CreateListInputBox,
    CreateListInput,
} from '../style/index';

function CreateList() {

    const [createClick, setCreateClick] = useState(false);
    const [inputShow, setInputShow] = useState("");

    useEffect(() => {

        if (createClick) {
            setInputShow("show");
        } else {
            setInputShow("")
        }
        document.addEventListener('click', e => {


            const inputBox = document.querySelector("#create-input");
            const listBox = document.querySelector("#create-list");
           
            if (e.target !== inputBox) {
                setCreateClick(false);
            }
        })
    }, [createClick]);

   

   const handleClickCreate = e => {
        e.nativeEvent.stopImmediatePropagation();
        setCreateClick(true)
   }

   const handleStopBubble = e => {
        e.nativeEvent.stopImmediatePropagation();

   }

    return(
        <>
           {
               createClick ? 
               (
                    <CreateListInputBox className={createClick ? inputShow : ""} id="create-input">
                        <CreateListInput onClick={handleStopBubble}/>
                    </CreateListInputBox>
               ) : 
               (
                    <CreateListBox onClick={handleClickCreate} id="create-list">
                        + 添加列表
                    </CreateListBox>
                )
           }
        </>
    )

}


export default CreateList;