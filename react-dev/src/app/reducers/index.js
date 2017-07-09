import { combineReducers } from 'redux';
import BreadcrumbReducer from "./reducer_breadcrumb";
import KeywordReducer from "./reducer_keywords";
import KeywordResultReducer from './reducer_keyword_results';

const rootReducer = combineReducers({
    setBreadcrumbState: BreadcrumbReducer,
    fetchKeywords: KeywordReducer,
    fetchKeywordResults: KeywordResultReducer
});


export default rootReducer;
