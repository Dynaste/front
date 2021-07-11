import axios from "axios";

const urlDev = "http://localhost:4000"

export const login = async(body) => {
    console.log('POST CALL');
    console.log(body)
   
    const headers = {
        'Content-Type':'application/json'
      }

    try{
        const response = await axios.post(`${urlDev}/login`, body, headers);
        console.log(response);

        return response;
    }catch(err){
        return err
    }    
}