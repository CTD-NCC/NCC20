const codingReducer = (state={
question : "",
    qno : 1,
    ext : "c"
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
    return state;
}

export default codingReducer;