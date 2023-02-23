/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import axios, {type AxiosResponse} from 'axios';
import type LoginResponse from '../Interfaces/Types/LoginResponse';
import {type UserLogin} from '../Interfaces/Types/UserLogin';

export const api = axios.create({
	baseURL: `${import.meta.env.VITE_PROTOCOL}://${import.meta.env.VITE_BASE_URL}`,
	headers: {
		'Access-Control-Allow-Origin': '*',
	},
});

export const get = async (path: string) => {
	const url = `${path}`;
	try {
		const response: AxiosResponse = await api.get(url);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export const login = async (path: string, body: UserLogin) => {
	const url = `${path}`;
	try {
		const result: AxiosResponse<LoginResponse> = await api.post(url, body);
		return result.data;
	} catch (error) {
		console.log(error);
	}
};

