const submissionReducer = (state={
qn : 1
}, action) => {

    if(action.type === "UPDATE_QNO")
    {
        return{
            ...state,
            qn : action.qn
        }
    }
    return state;
}

export default submissionReducer;