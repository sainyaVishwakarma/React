import react from 'react'
export default class Login extends react.Component{
    render(){
       

        return <div>
            <input type="text" value="uname" ></input>
            <br></br>
            <br></br>
            <input type="password" value="password"></input>
            <br></br>
            <br></br>
            <button>OK</button>
        </div>
    }
}