import React, { Component } from 'react'

export class Welcome extends Component {
    render() {
        return (
            <div>
             <h1>Class Welcome {this.props.name} a.k.a {this.props.heroName}</h1>   
            </div>
        )
    }
}

export default Welcome
