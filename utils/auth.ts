import Cookies from "js-cookie";
import { AccountType } from "../interfaces/user.type";

export const setCookie = (key: string, value: string) => {
	if (process.browser) {
		Cookies.set(key, value, {
			expires: 1 / 24,
		});
	}
};

export const removeCookie = (key: string) => {
	if (process.browser) {
		Cookies.remove(key);
	}
};

export const getCookieFromBrowser = (key: string) => {
	return Cookies.get(key);
};

export const getCookieFromServer = (key: string, req: any) => {
	if (!req.headers.cookie) {
		return undefined;
	}
	let token = req.headers.cookie
		.split(";")
		.find((c: any) => c.trim().startsWith(`${key}=`));
	if (!token) {
		return undefined;
	}
	let tokenValue = token.split("=")[1];
	return tokenValue;
};

export const getCookie = (key: string) => {
	if (process.browser) return getCookieFromBrowser(key);
};

export const setLocalStorage = (key: string, value: string) => {
	if (process.browser) {
		localStorage.setItem(key, JSON.stringify(value));
	}
};

export const removeLocalStorage = (key: string) => {
	if (process.browser) {
		localStorage.removeItem(key);
	}
};

export const authenticate = (response: any, next: Function) => {
	setLocalStorage("token", response.accessToken);
	setCookie("token", response.accessToken);
	next && next();
};

export const isAuth = () => {
	if (process.browser) {
		const token = getCookie("token");
		if (token) {
			return token;
		}
		return false;
	}
};

export const logout = (next?: Function) => {
	removeCookie("token");
	next && next();
};
