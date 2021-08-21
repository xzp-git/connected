import * as types from "../actions/actions-types";

function counter(state={number:0},action) {
    switch (action.type) {
        case types.ADD:
            return {number:state.number+1}
        default:
            return state
    }
}

export default counter