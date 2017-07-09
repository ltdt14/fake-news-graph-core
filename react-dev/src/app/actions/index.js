import axios from "axios";
import {
    SET_BREADCRUMB_STATE,
    FETCH_KEYWORDS
} from './types';

export function fetchKeywords() {
    let request = axios.get("/public/static-api-req/wordcloud.json");

    return {
        type: FETCH_KEYWORDS,
        payload: request
    };
}

export function setBreadcrumbState(step){
    let tip;
    switch(step){
        case 1:
            tip = 'Wähle ein Keyword aus der Wortwolke aus und lasse dir dazugehörige Ergebnisse anzeigen.';
            break;
        case 2:
            tip = 'Wähle ein Ergebisse und lass es dir visualisieren.';
            break;
        case 3:
            tip = 'Hier die Analyse.';
            break;
        default:
            tip = 'Wähle ein Keyword aus der Wortwolke aus und lasse dir dazugehörige Ergebnisse anzeigen.';
    }

    return{
        type: SET_BREADCRUMB_STATE,
        progressStep: step,
        progressTip: tip
    }
}




