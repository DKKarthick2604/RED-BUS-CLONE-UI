/**
* CREATED BY    : Karthick D K 
* CREATED DATE  : 20 JUNE 2023
* MODIFIED BY   : Karthick D K
* MODIFIED DATE : 20 JUNE 2023
* DESCRIPTION   : This file includes all the helper functions
**/

export class Helper {
    setCookie(name: any, value: any, daysToExpire: any = 1) {
        const expires = daysToExpire
            ? new Date(Date.now() + daysToExpire * 24 * 60 * 60 * 1000).toUTCString()
            : '';
        document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires};path=/`;
    }
    getCookie(name: any) {
        const cookies = document.cookie.split(';').map((cookie) => cookie.trim());
        for (const cookie of cookies) {
            const [cookieName, cookieValue] = cookie.split('=');
            if (cookieName === name) {
                return decodeURIComponent(cookieValue);
            }
        }
        return null; 
    }
}