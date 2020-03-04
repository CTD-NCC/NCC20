const qtabReducer = (state = {
    class1: "highlight",
    class2: "black",
    class3: "black",
    class4: "black",
    class5: "black",
    class6: "black",
    class7: "black",
    class8: "black",
    questionNumber: 1
  }, action) => {

    if(action.type === "UPDATE_TAB")
    {
        return {
        state : action.state

        }
    }

  }