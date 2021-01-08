import styled from 'styled-components';


export const ListTabBox = styled.div`
    height: 40px;
    width: 100%;
    position: relative;
    background-color: transparent;
    box-sizing: border-box;
    padding: 0px 10px;
    font-size: 15px;
    line-height: 40px;
    /* display: flex; */
    /* justify-content: center;s */
`

export const ListTabConfigBox = styled.div`
    float: right;
    height: 35px;
    width: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 2.5px 0px;
    border-radius: 3px;
    overflow: hidden;
    &:hover {
        background-color: #ccc;
    }
`

export const AddListItem = styled.div`
    height: 35px;
    width: 100%;
    margin: 5px 0px;
    border-radius: 5px;
    line-height: 35px;
    box-sizing: border-box;
    padding: 3px 5px;
    font-size: 16px;
    &:hover {
        cursor: pointer;
        background-color: #ccc;
    }
`

export const AddListItemInput = styled.textarea`
    margin: 5px 0px;
    border-radius: 5px;
    height: 70px;
    width: 100%;
    outline: none;
    box-sizing: border-box;
    padding: 3px 5px;
    background-color: white;
    border: none;
    overflow-y: hidden;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, .3);
`

export const AddListItemButtonBox = styled.div`
    height: 30px;
    width: 100%;
`

export const AddListItemButton = styled.div`
    height: 100%;
    width: 80px;
    background-color: green;
    border-radius: 3px;
    text-align: center;
    line-height: 30px;
    color: white;
    font-size: 13px;
    cursor: pointer;
    float: left;
    transition: all .3s ease;
    &:hover {
        background-color:  #4fc08d;
    }
`

export const AddListItemCancel = styled.div`
    float: left;
    margin: 0px 5px;
    height: 100%;
    width: 30px;
    line-height: 20px;
    text-align: center;
    color: #aaa;
    font-size: 40px;
    border-radius: 5px;
    transition: all .3s ease;
    &:hover {
        background-color: #aaa;
        cursor: pointer;
        color: #777;
    }
`