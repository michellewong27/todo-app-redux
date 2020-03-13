import ACTIONS from "./action";
//loadash is JS library that provides utility functions for common programming tasks
    //(helps programmers write more conside/ maintainable JS)
    // - Lodash comes with two different functions that allow you to do shallow copies and deep copies
            //These are clone & clonedeep. 
import _ from "loadash";

const defaultState = {
    items: []
};

const todoReducter = (state= defaultState, action) => {
    switch(action.type){
        case ACTIONS.Types.CREATE_ITEM: {
            console.log(action);

            let item = action.payload;
            let newItem = { id: state.items.length + 1, description: item};
            //.cloneDeep will iterate all levels of the original Obj & recursively copying all properties found
            let newState = _.cloneDeep(state);
            newState.items.push(newItem);
            return newState;
        }
        case ACTIONS.Types.DELETE_ITEM: {
            let newState = _.cloneDeep(state);
            let index = _.findIndex(newState.items, {id: action.payload});
            newState.items.splice(index,1);
            return newState;
        }
        default:
            return state;
    }
};

export default todoReducter;