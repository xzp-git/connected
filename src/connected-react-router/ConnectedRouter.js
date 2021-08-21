import React from "react";
import { connect, ReactReduxContext } from "react-redux";
import { Router } from "react-router-dom";
import { locationChange } from "./actions";

class ConnectedRouter extends React.Component{
    componentDidMount(){
        this.props.history.listen((location,action) =>{
            this.props.dispatch(locationChange(location,action))
        })
    }
    render(){
        const {history, children} = this.props
        return (
            <Router history = {history}>
                {children}
            </Router>
        )
    }
}

export default connect(state=>state)(ConnectedRouter)