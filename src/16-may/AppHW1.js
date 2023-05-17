import Trial1 from './Trial1'

export default function AppHW1(){

    let arr1=[50,"ss",22,30]
    let product={
        productname:"pen",
        productcost:80
    }

    function a(){
        console.log("a is called")
    }
    return <div>
        <Trial1 func={a} num={77} flag={true} str={"sainya"} arr1={arr1}  point={product}></Trial1>
    </div>
}