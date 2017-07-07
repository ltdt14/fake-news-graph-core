import { combineReducers } from 'redux';
import GalleryPicsReducer from "./reducer_gallerypics";
import SendEmailReducer from "./reducer_sendEmail";
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    galleryPics: GalleryPicsReducer,
    sendEmail: SendEmailReducer,
    form: formReducer
});


export default rootReducer;
