import { combineReducers } from 'redux';
import rootReducer from './rootReducer';
import testCasesReducer from './testcasesReducers';
import codingReducer from "./codingReducer";

export default combineReducers({
   root:  rootReducer,
    testcases : testCasesReducer,
    coding : codingReducer
});