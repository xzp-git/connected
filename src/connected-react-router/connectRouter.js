import { LOCATION_CHANGE } from "./action-types";


function   connectRouter(history) {
    
    const initialState = {
        location:history.location,
        action:history.action
    }
    return function (state = initialState, action) {
        if (action.type === LOCATION_CHANGE) {
            return{...state,...action.payload}
        }else{
            return state
        }
    }
}

export default connectRouter