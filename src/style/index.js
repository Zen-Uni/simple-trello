import styled from 'styled-components';
import bgImg from '../static/img/bg.jpg';

// container style
export const Container = styled.div`
    height: 100vh;
    width: 100%;
    background-image: url(${bgImg});
    background-position: center;
    background-repeat:no-repeat;
    background-size: cover;
    overflow-y:hidden;
    box-sizing: border-box;
    padding: 3vh 3vw;
`;


// create list box  .. unclick status
export const CreateListBox = styled.div`
    height: 40px;
    width: 260px;
    background-color: rgba(10, 10, 10, .6);
    border-radius: 3px;
    cursor: pointer;
    color: white;
    font-size: 18px;
    box-sizing: border-box;
    line-height: 40px;
    padding: 0px 5px;
    transition: all .4s ease;
    &:hover {
        background-color: rgba(10, 10, 10, .8);
    }
`;


// create list box .. click status, can input list name
export const CreateListInputBox = styled.div`
    height: 70px;
    width: 260px;
    background-color: whitesmoke;
    border-radius: 3px;
    transform: scaleY(0);
    transform-origin: top;
    transition: all .3s ease;
    box-sizing: border-box;
    padding: 2px 3px;

    &.show  {
        transform: scaleY(1);
    }
`;

export const CreateListInput = styled.input`
    position: relative;
    height: 35px;
    width: 100%;
    font-size: 17px;
    box-sizing: border-box;
    padding: 3px 5px;
`

export const CreateListButtonBox = styled.div`
    position: relative;
    height: 30px;
    width: 100%;
    box-sizing: border-box;
    padding: 1px 0px;
`
export const CreateListButton = styled.div`
    position: relative;
    height: 30px;
    width: 100px;
    background-color: #4fc08d;
    border-radius: 1px;
    color: white;
    text-align: center;
    line-height: 30px;
    margin: 0px 3px 0px 0px;
    cursor: pointer;
    float: left;
`
export const CreateListCancle = styled.div`
    float: left;
    height: 30px;
    width: 30px;
    cursor: pointer;
    font-size: 40px;
    text-align: center;
    line-height: 22.5px;
`