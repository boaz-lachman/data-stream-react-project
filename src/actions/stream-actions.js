import ActionTypes from "./action-types";

export const itemListUpdate = (prevData, newData) => {
    console.log(prevData);
    let newItems = prevData && prevData.length !== 0 ? [...prevData] : [];
    let foundItem = newItems.find((item) => {
        return item.name === newData.name
    });
    if(foundItem) {
        newItems = newItems.map((item) => {
            if(item.name === newData.name){
                return newData;
            }else{
                return item;
            }
        })
    }else{
        newItems.push(newData);
    }
    return({type: ActionTypes.UPDATE_DATA, payload: newItems})
};


export const filterUpdate = (newFilter) => {
  return({type: ActionTypes.CHANGE_FILTER, payload: newFilter})
};