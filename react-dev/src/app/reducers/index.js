import { combineReducers } from 'redux';
import BreadcrumbReducer from "./reducer_breadcrumb";
import KeywordReducer from "./reducer_keywords";

const rootReducer = combineReducers({
    setBreadcrumbState: BreadcrumbReducer,
    fetchKeywords: KeywordReducer,
});


export default rootReducer;
