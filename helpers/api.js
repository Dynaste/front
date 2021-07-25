import axios from "axios";

const urlDev = "http://localhost:4000";

const headers = {
    'Content-Type':'application/json'
  }

export const login = async(body) => {
    console.log('LOGIN');
    console.log(body);
    try{
        const response = await axios.post(`${urlDev}/login`, body, headers);
        console.log(response);

        return response;
    }catch(err){
        return err
    }    
}

export const signup = async(body) => {
    console.log('SIGNUP');
    console.log(body);
    // try{
    //     const response = await axios.post(`${urlDev}/users`, body, headers);
    //     console.log(response);

    //     return response;
    // }catch(err){
    //     return err
    // }  
}