import Add from "./Add"
import Factorial from './Factorial'
import TrialProps from "./Trialprops"

export default function App16(){

    let obj = {xcoordinate:12,ycoordinate:20}
    let arr=[12,3,55]

    function alpha()
    {
        console.log("ALPHA IS CALLED")
    }
    return <div>
        <Add num1={12} num2={13}></Add>
        <Factorial num1={5}></Factorial>
       <TrialProps func1={alpha} flag={true} point={obj} num1={45} str={"PPP"} arr={[10,20,30]} ></TrialProps>
        <TrialProps point={obj} num1="45" arr={arr}></TrialProps>
        
    </div>
}