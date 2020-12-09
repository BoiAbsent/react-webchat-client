import React from 'react'
import { useSelector } from 'react-redux'
// import { StoreState } from '../../store/reducers'

export default function Nav(props) {
  const user  = useSelector((state:StoreState) => state.user)
  return  (
    <div className="nav">
      {user.name}
    </div>
  )
}