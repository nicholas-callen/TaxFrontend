import axios from "axios";
import { useState } from "react";

function getRequest() {

    const[response, setResponse] = useState('')
    const getRequest = async => {

        axios.get("http://localhost:8080/")
        .then(res => {
            console.log(res.data)
            setResponse(res.data)
        }).catch(err=>{
            console.log(err)
        })
    }

    return (
    <div className="button">
        <button onClick={getRequest}>GET REQUEST BUTTON</button>
        <div>
            {response.data}
        </div>
    </div>
    );

}

export default getRequest;