const uuidv4 = require("uuid/v4")

const initialState = {
  friend: {
    id: uuidv4(),
    name: "Joe",
    age: 24,
    email: "joe@lambdaschool.com"
  },

  isLoading: false,
  friends: [],
  error: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "DATA_START":
      return {
        ...state,
        isLoading: true
      }
    case "DATA_SUCCESS":
      return {
        ...state,
        isLoading: false,
        friends: action.payload
      }
    case "DATA_FAILURE":
      return {
        ...state,
        isLoading: false,
        friends: action.payload
      }
    default:
      return state
  }
}
