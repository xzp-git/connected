import { CALL_HISTORY_METHOD } from "./action-types";


function routerMiddleware(history) {
    return function (middlewareAPI) {
        return function (next) {
            return function (action) {
                if (action.type !== CALL_HISTORY_METHOD) {
                    return next(action)
                }
                const {payload:{method,args}} = action
                history[method](...args)
            }
        }
    }
}
export default routerMiddleware