import { useState } from "react"
export default function HW3(){
            let[u,cal1]=useState("")
            let[l,cal2]=useState("")
            let[t,cal3]=useState("")

    let v=""
    function texthandler(e){
        v=e.target.value
    }
    function upperhandler(){
        console.log(v.toUpperCase())
        let uc=v.toUpperCase()
        cal1(uc)
    }
    function lowerhandler(){
        console.log(v.toLowerCase())
        let lc=v.toLowerCase()
        cal2(lc)
    }
    function titlehandler(){
        let w=v.charAt(0).toUpperCase()
        let x=v.substring(1).toLowerCase()
        console.log(w.concat(x))
        let tc=w.concat(x)
        cal3(tc)
    }
    return <div>
        <input type="text" onBlur={texthandler}/>
        <br></br>
        Uppercase <input type="radio" name="case" onChange={upperhandler}/>
        <br></br>
        Lowercase <input type="radio" name="case" onChange={lowerhandler}/>
        <br></br>
        Titlecase <input type="radio"  name="case" onChange={titlehandler}/>
        <p>Uppercase={u}</p>
        <p>lowercase={l}</p>
        <p>Titlecase={t}</p>
    </div>
}