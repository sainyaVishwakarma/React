import { Component } from "react";

export default class SquareC extends Component{
    constructor(){
        super()
        this.num=0
         this.textreceiver = this.textreceiver.bind(this)
         this.state ={sqr:0}
    }

    textreceiver(e){
        this.num=e.target.value
        let sq= this.num * this.num
        this.setState({sqr:sq})
    }

    render(){
        return <div>
           Number: <input type="number" onBlur={this.textreceiver}></input>
            <p>Square of {this.num} is {this.state.sqr}</p>
        </div>
    }
}