import { createStore, applyMiddleware } from "redux";
import history from "../history";

import { routerMiddleware } from "../connected-react-router";

import rootReducer  from "./reducers";

const store = applyMiddleware(routerMiddleware(history))(createStore)(rootReducer)

export default store


/* 
routerMiddleware做欧阳是拦截跳转路径的action
store.dispatch会判断你是否要跳转路径，如果是的话用history.push来跳，如果不是的话next
connect-redux  store to react-router
把redux仓库和react路由进行关联
1.可以通过派发仓库动作的方法跳转路由/路径
2.路径改变后可以把最新的路径写入仓库，可以通过仓库获取到最新的 路径信息
*/