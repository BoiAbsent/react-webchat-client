import React from 'react'
import Layout from './components/Layout'
import Login from './components/Login'
import { useSelector } from 'react-redux'
// import { StoreState } from './store/reducers'

export default  function App(props) {
  const user:User  = useSelector<StoreState>(state => state.user)
  return (
    user.id ? <Layout/> : <Login/>
  )
}