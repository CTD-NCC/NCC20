import { combineReducers } from 'redux';
import rootReducer from './rootReducer';
import testCasesReducer from './testcasesReducers';
import codingReducer from "./codingReducer";
import submissionReducer from "./submissionReducer";

export default combineReducers({
   root:  rootReducer,
    testcases : testCasesReducer,
    coding : codingReducer,
    submission : submissionReducer
});