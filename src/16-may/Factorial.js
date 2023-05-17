import { Component } from "react"

export default class  Factorial extends Component
{
    constructor(props){
        super(props)
        this.n=props.num1
    }
    calcfact(){
        let fact=1
        for(let i=1;i<=this.n;i++){
            fact=fact*i
        }
        return fact
    }

    render(){
        return <div>
            <p>Factorial of {this.n} is {this.calcfact()}</p>
        </div>
    }
}