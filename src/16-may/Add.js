export default function  Add(props){
    let a=props.num1
    let b=props.num2
    let sum=a+b
    return <div>
        <p>sum of {a}+{b}={sum}</p>
    </div>
}