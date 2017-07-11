import { combineReducers } from 'redux';
import BreadcrumbReducer from "./reducer_breadcrumb";
import KeywordReducer from "./reducer_keywords";
import KeywordResultReducer from './reducer_keyword_results';
import KeywordArticlesReducer from './reducer_keyword_articles';

const rootReducer = combineReducers({
    breadcrumb: BreadcrumbReducer,
    keywords: KeywordReducer,
    keywordResults: KeywordResultReducer,
    keywordArticles: KeywordArticlesReducer
});


export default rootReducer;
