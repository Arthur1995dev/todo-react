import React from "react";
import initialState from "./initialState";
import ACTIONS from "./ACTIONS";


export const Reducer = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.SET_COUNT:
            return {
                ...state,
                tasksCount: state.tasksCount + 1
            }
    }
}

export default reducer;