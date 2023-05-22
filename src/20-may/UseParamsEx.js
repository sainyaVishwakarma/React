import { useParams } from "react-router-dom";

export default function UseParamsEx()
{

        let parameters = useParams()

        return <div>
            Welcome {parameters.n1}
            <br></br>
            Welcome {parameters.n2}
        </div>



}