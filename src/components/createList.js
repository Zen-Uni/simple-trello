import React, { useEffect, useState, useRef } from 'react';

import {
    CreateListBox,
    CreateListInputBox,
    CreateListInput,
    CreateListButtonBox,
    CreateListButton,
    CreateListCancle,
} from '../style/index';

function CreateList() {

    const [createClick, setCreateClick] = useState(false);
    const [inputShow, setInputShow] = useState("");

    const listInputEl = useRef(null);


    useEffect(() => {

        if (createClick) {
            setInputShow("show");
            listInputEl.current.focus();
        } else {
            setInputShow("")
        }
        document.addEventListener('click', e => {
            const inputBox = document.querySelector("#create-input");
           
            if (e.target !== inputBox) {
                setCreateClick(false);
            }
        })
    }, [createClick]);
   

   const handleClickCreate = e => {
        handleStopBubble(e);
        setCreateClick(true);
   }

   const handleStopBubble = e => {
        e.nativeEvent.stopImmediatePropagation();
   }

   const handleCreateList = () => {
        // TODO: create redux, record data
   }
 

    return(
        <>
           {
               createClick ? 
               (
                    <CreateListInputBox className={createClick ? inputShow : ""} id="create-input" onClick={handleStopBubble}>
                        <CreateListInput ref={listInputEl}/>
                        <CreateListButtonBox >
                            <CreateListButton onClick={handleCreateList}>添加列表</CreateListButton>
                            <CreateListCancle onClick={() => setCreateClick(false)}>×</CreateListCancle>
                        </CreateListButtonBox>
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