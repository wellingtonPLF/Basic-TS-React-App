export class LocalStorageUtil {

    constructor() { }
  
    getToken(token: string) {
        return localStorage.getItem(token);
    }
  
    setToken(token: string, value: string) {
        if (value != undefined){
            localStorage.setItem(token, value);
        }
    }
  
    removeToken(token: string) {
        if (token != undefined){
            localStorage.removeItem(token);
            localStorage.clear();
        }
    }
}