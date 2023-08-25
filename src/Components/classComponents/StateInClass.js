import React, { Component } from 'react'

export default class StateInClass extends Component {
    constructor(){
        super()
        // this.state = {
        //     data: "Tarun"
        // }
        this.state = {
            data: 0
        }
    }
    handleCount = () => {
            this.setState({data: this.state.data+1})
    }
  render() {
    return (
      <div>
        {/* <h1>{this.state.data}</h1> */}
        <h1>{this.state.data}</h1>
        <button onClick={this.handleCount}>Click me</button>
      </div>
    )
  }
}
