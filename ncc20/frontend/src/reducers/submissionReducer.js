const submissionReducer = (state = {
    submissions: [],
    qn: 1
}, action) => {

    if (action.type === "UPDATE_QNO") {
        return {
            ...state,
            qn: action.qn
        }
    }
    if (action.type === "UPDATE_SUB") {
        return {
            ...state,
            submissions: action.submissions
        }
    }
    return state;
}

export default submissionReducer;