import axios from "axios";

const urlDev = "http://localhost:4000"

export const login = async(id, pwd) => {
    const body = {
        "email": id,
        "password": pwd
    }
    const headers = {
        'Accept':'application/json',
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

/*
rootroot

maximemary.pro@gmail.com

*/