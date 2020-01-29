import { axiosWithAuth } from "../utils/axiosWithAuth"

export const friendsGet = () => dispatch => {
  dispatch({ type: "DATA_START" })

  axiosWithAuth()
    .get("/api/friends")
    .then(
      res =>
        console.log(res) & dispatch({ type: "DATA_SUCCESS", payload: res.data })
    )
    .catch(
      err => console.log(err) & dispatch({ type: "DATA_FAILURE", payload: err })
    )
}

export const friendsPost = newFriend => dispatch => {
  dispatch({ type: "DATA_START" })

  axiosWithAuth()
    .post("/api/friends", newFriend)
    .then(
      res =>
        console.log(res) & dispatch({ type: "DATA_SUCCESS", payload: res.data })
    )
    .catch(
      err => console.log(err) & dispatch({ type: "DATA_FAILURE", payload: err })
    )
}
