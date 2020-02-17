const initState = {
    testcases : ["pass","pass","pass","fail","fail","fail"],
    time : 0,
    result : "Running Testcases"
};

const testCasesReducer = (state={ testcases : ["pass","pass","pass","fail","fail","fail"],
time : 0,
result : "Running Testcases..."
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
    }
    return state;
}

export default testCasesReducer;
