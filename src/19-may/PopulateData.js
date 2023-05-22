import axios from "axios";
import { Component } from "react";

export default class PopulateData extends Component{
    constructor(){
        super()
        this.state={optionarr:[]}
        
    }

    componentDidMount(){
        axios.get("./shopstock.json").then((res)=>{
            let arr=res.data
            let temp= arr.map((e,index)=>{return <option key={index}>{e.id}</option>})
            this.setState({optionarr:temp}
            )
        })
    }
 render(){
    return <div>
        <select >{this.state.optionarr}</select>
        <p ></p>
    </div>
 }
}