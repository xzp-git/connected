
import { CALL_HISTORY_METHOD, LOCATION_CHANGE } from "./action-types";

export function push(path) {
    return{
        type:CALL_HISTORY_METHOD,
        payload:{
            method:'push',
            args:[path]
        }
    }
}

export function locationChange(location, action) {
    return {
        type:LOCATION_CHANGE,
        payload:{
            location,action
        }
    }
}

export default push