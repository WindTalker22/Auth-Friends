import React, { useState } from "react"
import { Button, Form, FormGroup, Label, Input } from "reactstrap"
import { useDispatch } from "react-redux"
import { friendsPost } from "../actions/friendsAPI"

const AddForm = () => {
  const [newFriend, setNewFriend] = useState({ name: "", age: "", email: "" })

  const dispatch = useDispatch()

  const handleChange = e => {
    setNewFriend({ ...newFriend, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(friendsPost(newFriend))
    setNewFriend({ name: "", age: "", email: "" })
  }
  return (
    <Form onSubmit={e => handleSubmit(e)}>
      <FormGroup>
        <Label>
          Friends Name
          <Input
            type="text"
            name="name"
            value={newFriend.name}
            placeholder="Friends Name"
            onChange={handleChange}
          />
        </Label>
        <Label>
          Friends Age
          <Input
            type="text"
            name="age"
            value={newFriend.age}
            placeholder="Friends Age"
            onChange={handleChange}
          />
        </Label>
        <Label>
          Friends Email
          <Input
            type="email"
            name="email"
            value={newFriend.email}
            placeholder="Friends Email"
            onChange={handleChange}
          />
        </Label>
        <Button>Submit</Button>
      </FormGroup>
    </Form>
  )
}

export default AddForm
