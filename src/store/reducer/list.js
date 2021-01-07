import actionStatics from '../action/actionStatic'

// Storage ··· get data from localStorage
const getListArray = () => {
    const list = window.localStorage.getItem("react-trello-list");
    console.log(list);
    if (!list) {
        window.localStorage.setItem("react-trello-list", []);

        return [];
    }

    return list.split(",");
}

// Storage ··· set data from localStorage
const setListArray = newList => {
    window.localStorage.setItem("react-trello-list", newList);
}


// default state
const defaultState = {
    list: getListArray(),
}







// list reducer funtion
const list = (state = defaultState, action) => {

    if (action.type === actionStatics.ADDLIST) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(action.listName);
        console.log(newState.list, newState);
        setListArray(newState.list);
        console.log(newState);
        return newState
    }

    return state;
}


export default list;