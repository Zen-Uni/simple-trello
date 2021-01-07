import actionStatics from './actionStatic';

export const addList = listName => {
    return {
        type: actionStatics.ADDLIST,
        listName,
    }
}