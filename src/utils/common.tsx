import { ENV, PUBLIC_URL } from "./const";

export const SUPPORTED_LANGUAGES = ["en", "fr", "it"];

export function languageAwareUrl(url: string){
    const i18lgn = sessionStorage.getItem("i18nextLng");
    let prefixlgn = window.location.pathname.slice(1,3);
    if(ENV === "development"){
        prefixlgn = window.location.pathname.slice(5,7);
    }
    let result = url;
    if(SUPPORTED_LANGUAGES.includes(prefixlgn)){
        result = `${PUBLIC_URL}/${prefixlgn}${url}`;
    } else if(i18lgn !== null && SUPPORTED_LANGUAGES.includes(i18lgn)){
        result = `${PUBLIC_URL}/${i18lgn}${url}`;
    } else {
        result = `${PUBLIC_URL}${result}`;
    }
    return result;
}