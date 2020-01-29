import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { friendsGet } from "../actions/friendsAPI"
import Friends from "./Friends"
import AddForm from "./AddForm"
import { useHistory } from "react-router-dom"

const FriendsList = () => {
  const friends = useSelector(state => state.friends)
  const dispatch = useDispatch()
  const { push } = useHistory()

  useEffect(() => {
    if (localStorage.getItem) {
      dispatch(friendsGet())
    } else {
      push("/login")
    }
  }, [dispatch])

  return (
    <div>
      <AddForm />
      {friends.map(friends => (
        <Friends friends={friends} />
      ))}
    </div>
  )
}

export default FriendsList
