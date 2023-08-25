import React, { Component } from 'react'

export default class PropsInClass extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         name : this.props.name
    //     }
    // }
    
  render() {
    console.log(this.props.name)
    return (
      <div>
        <h1>Props in class</h1>
        <h1>{this.props.name}</h1>
      </div>
    )
  }
}

