const initState = {
  userName: "",
  password: "",
  player1Name: "",
  player1Contact: "",
  player1Email: "",
  player2Name: "",
  player2Contact: "",
  player2Email: "",
  lastSubmission: ""
};

const rootReducer = (state = {
  userName: "",
  password: "",
  player1Name: "",
  player1Contact: "",
  player1Email: "",
  player2Name: "",
  player2Contact: "",
  player2Email: "",
  lastSubmission: ""
}, action) => {
  switch (action.type) {
    case "CHANGE_USERNAME":
      return {
        ...state,
        userName: action.username
      };
    case "CHANGE_PASSWORD":
      return {
        ...state,
        password: action.password
      };
    case "CHANGE_PLAYER1NAME":
      return {
        ...state,
        player1Name: action.player1Name
      };
    case "CHANGE_PLAYER1CONTACT":
      return {
        ...state,
        player1Contact: action.player1Contact
      };
    case "CHANGE_PLAYER1EMAIL":
      return {
        ...state,
        player1Email: action.player1Email
      };
    case "CHANGE_PLAYER2NAME":
      return {
        ...state,
        player2Name: action.player2Name
      };
    case "CHANGE_PLAYER2CONTACT":
      return {
        ...state,
        player2Contact: action.player2Contact
      };
    case "CHANGE_PLAYER2EMAIL":
      return {
        ...state,
        player2Email: action.player2Email
      };
    case "CHANGE_LAST_SUBMISSION":
      return {
        ...state,
        lastSubmission: action.newSubmission
      };
  }
  return state;
};

export default rootReducer;
