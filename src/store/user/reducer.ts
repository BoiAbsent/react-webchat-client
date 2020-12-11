import { SET_USER, UserAction } from './types'

export default function user(state:User = {
  id: 101,
  name: 'Boi',
  avator: ''
}, action:UserAction):User {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.payload
      }
    default: 
      return state
  }
}