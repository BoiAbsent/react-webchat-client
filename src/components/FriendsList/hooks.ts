import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateFriendsList } from './reducer/action'
import { post } from '../../utils/fetch'

export const useFetchFriends = () => {
  const id = useSelector<StoreState, number>(state => state.user.id)
  const dispatch = useDispatch()
  useEffect(() => {
    // post('/user/friends', {
    //   id: id
    // }).then(res => {
    //   const { code, data } = res
    //   if (code === 200) {
    //     dispatch(updateFriendsList(data))
    //   }
    // })
    setTimeout(() => {
      dispatch(updateFriendsList({
        '103': {
          id: 103,
          name: '张三',
          avator: ''
        },
        '104': {
          id: 104,
          name: '李四',
          avator: ''
        },
        '105': {
          id: 105,
          name: '王五',
          avator: ''
        },
        '106': {
          id: 106,
          name: '赵六',
          avator: ''
        }
      }))
    }, 500)
  }, []);
}