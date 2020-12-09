export default function user(state:User = {
  id: 0,
  name: '游客',
  avator: ''
}, action):User {
  switch (action.type) {
    default: {
      return state
    }
  }
}