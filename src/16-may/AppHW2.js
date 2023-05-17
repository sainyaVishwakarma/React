import Trial2 from './Trial2'

export default function AppHW2(){

    let arr=[50,"ss",22,30]
    let product1={
        productname:"pen",
        productcost:80
    }

    function b(){
        console.log("b is called")
    }
    return <div>
        <Trial2 func={b} n={40} flag={true} str1={"saket"} arr={arr}  ></Trial2>
    </div>
}