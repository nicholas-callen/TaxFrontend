import axios from "axios";

const getTaxAmount = async(income, status) =>{

    try{
        const {data: response} = await axios.get("http://localhost:8080/calculate",{params: {income,status}});
        console.log(response)
        return response
    } catch(err){
        console.log(err);

    }
}

export default getTaxAmount;