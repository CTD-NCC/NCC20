const qtab = (state = {
    class1: "highlight",
    class2: "black",
    class3: "black",
    class4: "black",
    class5: "black",
    class6: "black",
    class7: "black",
    class8: "black",
    questionNumber: 1
},action) => {
    if (action.type === "HIGHLIGHT")
    {
        switch(action.questionNumber)
        {
            case 1:   
                state ={class1: "highlight",
                class2: "black",
                class3: "black",
                class4: "black",
                class5: "black",
                class6: "black",
                class7: "black",
                class8: "black",
                questionNumber: 1}
                break;
            case 2:
                console.log("hii");
                state ={class1: "black",
                class2: "highlight",
                class3: "black",
                class4: "black",
                class5: "black",
                class6: "black",
                class7: "black",
                class8: "black",
                questionNumber: 2}
                break;
            case 3:
                state ={class1: "black",
                class2: "black",
                class3: "highlight",
                class4: "black",
                class5: "black",
                class6: "black",
                class7: "black",
                class8: "black",
                questionNumber: 3}
                break;
            case 4:
                state ={class1: "black",
                class2: "black",
                class3: "black",
                class4: "highlight",
                class5: "black",
                class6: "black",
                class7: "black",
                class8: "black",
                questionNumber: 4}
                break;
            case 5:
                state ={class1: "black",
                class2: "black",
                class3: "black",
                class4: "black",
                class5: "highlight",
                class6: "black",
                class7: "black",
                class8: "black",
                questionNumber: 5}
                break;
            case 6:
                state ={class1: "black",
                class2: "black",
                class3: "black",
                class4: "black",
                class5: "black",
                class6: "highlight",
                class7: "black",
                class8: "black",
                questionNumber: 6}
                break;
        }
    }
    return state;
}

export default qtab;