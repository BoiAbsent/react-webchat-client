import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { StoreState } from '@/store/reducers'

export default function Login(props) {
  const user  = useSelector((state: StoreState) => state.user)

  return  (
    <div className="login">
      <button onClick={() => {useDispatch()}}>登录</button>
    </div>
  )
}