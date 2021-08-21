import { push } from "../../connected-react-router";
import * as types from "../actions/actions-types";

const actions = {
    add(){
        return {type:types.ADD}
    },
    go(targetPath){
        return push(targetPath)
    }
}

export default actions