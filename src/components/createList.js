import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';

// import ant-design components
import {
    message
} from 'antd';


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
    CreateListCancel,
} from '../style/index';


// import components
import List from './list';

function CreateList(props) {

    const { handleAddList, list } = props;

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
        if (!listName) return message.warning("请输入列表名字！");
        handleAddList(listName);
        listInputEl.current.value = '';
        listInputEl.current.focus();
   }
 

    return(
        <>

            {
                list.map((item, key) => {
                    return <List key={key + item} name={item} />
                }) 
            }

           {
               createClick ? 
               (
                    <CreateListInputBox className={createClick ? inputShow : ""} id="create-input" onClick={handleStopBubble}>
                        <CreateListInput ref={listInputEl}/>
                        <CreateListButtonBox >
                            <CreateListButton onClick={handleCreateList}>添加列表</CreateListButton>
                            <CreateListCancel onClick={() => setCreateClick(false)}>×</CreateListCancel>
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