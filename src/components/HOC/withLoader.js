import React, { Component } from "react"
const withLoader = (propValue) => (WrappedComponent) => {
    return class WithLoader extends Component {
        render() {
            return  this.props[propValue].length === 0
            ? <h1><br/></h1>
            : <WrappedComponent {...this.props} />
        }
    }
}
export default withLoader