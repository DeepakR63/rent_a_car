
import axios from 'axios';
import { baseURL } from './config.js';

export function getCall(url,params=null)
{
	return axios.get(baseURL+url,{params : params});
}

export function putCall(url,body)
{
	return axios.put(baseURL+url,body);
}

export function postCall(url,body)
{
    console.log('In post');
	return axios.post(baseURL+url,body);
}

//Set the authentication details to the header part of the API request.

axios.interceptors.request.use((config) => {

    var _auth=localStorage.getItem('Auth');
	
	if( _auth ) 
	{
		config.headers['x-auth'] = _auth;
		return config;
	}
	else 
	{
		return config;
	}
	
});


