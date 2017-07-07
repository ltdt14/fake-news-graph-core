import axios from "axios";
import {
    SEND_EMAIL
} from './types';

export const FETCH_GALLERYPICS = "FETCH_GALLERYPICS";

export function fetchPosts(){
    let request = axios.get("http://localhost:3600/gallerypics");

    return{
        type: FETCH_GALLERYPICS,
        payload: request
    };
}


export function sendEmail(data){
    const illegalForName = /[^A-Za-z]+$/g;
    const illegalForEmail = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/igm;
    const illegalForSubjectAndMessage = /[\b]/g;
    //form validation
    if(data.name === '' || !data.name || data.email === '' || !data.email || data.subject === '' || !data.subject){
        return{
            type: SEND_EMAIL,
            msg: 'Name, E-Mail Adresse, Betreff und Nachricht sind pflicht!',
            success: false
        }
    }
    if(data.name.length < 2){
        return{
            type: SEND_EMAIL,
            msg: 'Der eingegebene Name ist zu kurz.',
            success: false
        }
    }
    if(illegalForName.test(data.name)){
        return{
            type: SEND_EMAIL,
            msg: 'Der Name darf nur Buchstaben enthalten.',
            success: false
        }
    }
    if(!(illegalForEmail.test(data.email))){
        return{
            type: SEND_EMAIL,
            msg: 'Die eingegebene E-Mail Adresse ist ungültig.',
            success: false
        }
    }
    if(illegalForSubjectAndMessage.test(data.subject)){
        return{
            type: SEND_EMAIL,
            msg: 'Es dürfen keine Backspaces im Betreff oder in der Nachricht verwendet werden.',
            success: false
        }
    }

    else{
        let request = axios.get("http://localhost:3600/sendemail");

        console.log(request);

        return{
            type: SEND_EMAIL,
            msg: 'E-Mail wurde gesendet.',
            success: true
        };
    }


}

export const clearError = () => {
    return { type: CLEAR_ERROR };
};



