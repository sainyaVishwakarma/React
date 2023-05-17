
export default function Trial1(props)
{

    
    if(props.func !== undefined){
        props.func()
    }
    return <div>
        <p>{props.num}</p>
        <p>{props.str}</p>
        <p>{props.arr1[2]}</p>
        <p>productcost::{props.point.productcost}</p>
        <p>{props.flag?"true":"false"}</p>
    </div>

}