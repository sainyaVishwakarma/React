import  { Component } from 'react'
export default class Trial2 extends Component{
    constructor(props){

        super(props)
        this.num1=props.n
        this.str=props.str1
        this.arr1=props.arr
        // this.product=props.product1
        this.f=props.flag
        // if(props.func !== undefined){
        //     props.func()
        }
    
  
    render()
    {
        return <div>
        <p>{this.num1}</p>
        <p>{this.str}</p>
        <p>{this.arr1[2]}</p>
        {/* <p>productcost::{this.point.props.productcost}</p> */}
        <p>{this.f?"hello":"hiiii"}</p>
        </div>
    }
}