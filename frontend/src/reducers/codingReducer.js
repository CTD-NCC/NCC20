const codingReducer = (state={
question : "",
    title : "",
    qno : 1,
    ext : "c",
    attempt : -1
}, action) => {

    if(action.type === "UPDATE_QUESTION")
    {
        return{
            ...state,
            question : action.question
        }
    }
    if(action.type === "UPDATE_NO")
    {
        return{
            ...state,
            qno : action.qno
        }
    }
    if(action.type === "UPDATE_EXT")
    {
        return{
            ...state,
            ext : action.ext
        }
    }
    if(action.type === "UPDATE_TITLE")
    {
        return{
            ...state,
            title : action.title
        }
    }
    if(action.type === "UPDATE_ATTEMPT")
    {
        return{
            ...state,
            attempt : action.attempt
        }
    }
    return state;
}

export default codingReducer;