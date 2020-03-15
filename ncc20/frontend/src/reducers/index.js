import { combineReducers } from 'redux';
import rootReducer from './rootReducer';
import testCasesReducer from './testcasesReducers';
import codingReducer from "./codingReducer";
import submissionReducer from "./submissionReducer";
import urlReducer from "./url";
import qtab from "./qtabs";

export default combineReducers({
   root:  rootReducer,
    testcases : testCasesReducer,
    coding : codingReducer,
    submission : submissionReducer,
    Url : urlReducer,
    qtab : qtab
});