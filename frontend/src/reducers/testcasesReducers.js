const initState = {
    testcases : ["pass","pass","pass","fail","fail","fail"],
    time : 0,
    result : "Running Testcases"
};

const testCasesReducer = (state={ testcases : ["pass","pass","pass","fail","fail","fail"],
time : 0,
result : "Running Testcases...",
score : 0,
total : 0,
error : "",
}, action) => {
    switch(action.type)
    {
        case "UPDATE_TIME" : 
        {
            return {
                ...state,
                time : action.time
            };
        }
        case "UPDATE_RESULT" : 
        {
            return {
                ...state,
                result : action.result
            }
        }
        case "RESET_TESTCASES" :
            {
                return{
                    ...state,
                    result : "Running Testcases..."
                }
            }
        case "UPDATE_TESTCASES" :
            {
                return {
                    ...state,
                    testcases : action.testcases
                }
            }
        case "UPDATE_SCORE" : 
            {
                return {
                    ...state,
                    score : action.score
                }
            }
        case "UPDATE_CONSOLE" : 
        {
            return{
                ...state,
                error : action.error
            }
        }
        case "UPDATE_TOTAL":
            {

                 return {
                  ...state,
                  total: action.total
                }
            }
        
    }
    return state;
}

export default testCasesReducer;
