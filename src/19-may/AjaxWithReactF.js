import axios from 'axios'
import { useState } from 'react'
export default function AjaxWithReactF(){
    let[arr,setarr]=useState([])
    function rows(){
   return  arr.map((e)=>{return <tr>
    <th>{e.first_name.concat(" ",e.last_name)}</th>
    <th>{e.email}</th>
    <th><img src={e.avatar} width="100" height="100"></img></th>
    </tr>})
    }
    function handler(){
        axios.get("https://reqres.in/api/users?page=2").then((res)=>{
            console.log(res)
            setarr(res.data.data)
        })
    }
    return <div>
        <input type="button" value="getdata" onClick={handler}></input>
        <table border="2">
            <thead>
                <tr>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>IMAGE</th>
                </tr>
            </thead>
            <tbody>
                {rows()}
            </tbody>
        </table>
    </div>
}