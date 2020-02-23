const codingReducer = (state={
question : "",
    title : "",
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
    if(action.type === "UPDATE_TITLE")
    {
        return{
            ...state,
            title : action.title
        }
    }
    return state;
}

export default codingReducer;