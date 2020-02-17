import { combineReducers } from 'redux';
import rootReducer from './rootReducer';
import testCasesReducer from './testcasesReducers';

export default combineReducers({
   root:  rootReducer,
    testcases : testCasesReducer
});