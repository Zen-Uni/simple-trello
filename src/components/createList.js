import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';

// inject actions
import {
    addList,
} from '../store/action'

import {
    CreateListBox,
    CreateListInputBox,
    CreateListInput,
    CreateListButtonBox,
    CreateListButton,
    CreateListCancle,
    ListBox,
} from '../style/index';

function CreateList(props) {

    const { handleAddList, list } = props;
    console.log(list);

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
        const listName = listInputEl.current.value;
        handleAddList(listName);
        listInputEl.current.value = '';
        listInputEl.current.focus();
   }
 

    return(
        <>

            {
                list.map((item, key) => {
                    return <ListBox key={key + item}>{item}</ListBox>
                }) 
            }

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

const stateToProps = state => {
    return {   
        list: state.list.list
    }
}

const dispatchToProps = dispatch => {
    return {
        handleAddList(listName) {
            const action = addList(listName);
            dispatch(action);
        }
    }
}

export default connect(stateToProps, dispatchToProps)(CreateList);