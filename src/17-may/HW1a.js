import { useState } from "react"
export default function HW1a(){
            let[u,cal1]=useState("")
            let[l,cal2]=useState("")
            let[t,cal3]=useState("")

    let v=""
    function texthandler(e){
        v=e.target.value
        
    }
   
    function casehandler(e)
    {

     switch(e)
     {
         case 'uc' :cal1(v.toUpperCase());break;
         case 'lc' :cal2(v.toLowerCase());break;
         case 'tc' :cal3(v.charAt(0).toUpperCase().concat(v.substring(1).toLowerCase()));break;
         default : break
     }     
    }
    return <div>
        <input type="text" onBlur={texthandler}/>
        <br></br>
        Uppercase <input type="checkbox" value="uc"  onChange={(e)=>{casehandler(e.target.value)}}/>
        <br></br>
        Lowercase <input type="checkbox"  value="lc" onChange={(e)=>{casehandler(e.target.value)}}/>
        <br></br>
        Titlecase <input type="checkbox"  value="tc" onChange={(e)=>{casehandler(e.target.value)}}/>
        <p>Uppercase={u}</p>
        <p>lowercase={l}</p>
        <p>Titlecase={t}</p>
    </div>
}