import react from 'react'
export default class Login2 extends react.Component{
    constructor(){
        super()
        this.user=this.uname
        this.pwd=this.password
        this.handler=this.handler.bind(this)
    }
    render(){

        handler(e)
        {
             this.user=e.target.uname
             this.pwd=e.target.password
            if((this.user=="xxx" && this.pwd=="123")||(this.user=="rrr" && this.pwd=="13") || (this.user=="xeex" && this.pwd=="23")){
                console.log("successful")
            }else{
                console.log("failed")
            }
        }

        return <div>
            <input type="text" value="uname" ></input>
            <br></br>
            <br></br>
            <input type="text" value="password"></input>
            <br></br>
            <br></br>
            <button onClick={this.handler()}>OK</button>
        </div>
    }
}