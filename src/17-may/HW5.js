import React, { useState } from "react"
import GradComponent from './GradComponent'
import UGComponent from './UGComponent'
import PGComponent from './PGComponent'
export default function HW5(){
    let[choice,setchoice]=useState("")
    return <div>
        Name:<input type="text"/><br></br>
        <br></br>
        Email:<input type="text"/>
        <br></br>
        <br></br>
        <select  onChange={(e)=>(setchoice(e.target.value))}>
            <option>select</option>
            <option value="ug" >UG</option>
            <option value="pg" >PG</option>
            <option value="graduate" >Graduate</option>
        </select>       
        
       {choice==="graduate"?<GradComponent></GradComponent>:""}
       {choice==="ug"?<UGComponent></UGComponent>:""}
       {choice==="pg"?<PGComponent></PGComponent>:""}


    </div>
}