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
        return err.response
    }    
}

export const signup = async(body) => {
    console.log('SIGNUP');
    console.log(body);
    try{
        const response = await axios.post(`${urlDev}/users/create`, body, headers);
        return response;
    }catch(err){
        return err.response;
    }  
}

export const getAllParties = async (token) => {
    try {
        const response = await axios.get(`${urlDev}/parties`, {headers: {'Authorization': token, ...headers}});
        return response.data;
    } catch (err) {
        console.log(err.response);
        return;
    }
}

export const getLoggedInUser = async (token) => {
    try {
        const response = await axios.get(`${urlDev}/user`, {headers: {"Authorization": token, ...headers}})
        return response.data;
    } catch (err) {
        console.log(err.response);
        return;
    }
}

export const searchUser = async (searchValue) => {
    try{
        const response = await axios.get(`${urlDev}/users/${searchValue}`, headers);
        return response;
    }catch(err){
        return err.response;
    }
}

export const createParty = async (jwt, body) => {
    try {
        const response = await axios.post(`${urlDev}/parties/create`, body, {headers: {"Authorization": jwt, ...headers}})
        return response;
    } catch (err) {
        return err.response;
    }
}