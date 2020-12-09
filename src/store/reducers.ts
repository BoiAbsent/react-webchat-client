import { combineReducers } from 'redux'
import user from './user/reducer'
import global from '../components/Layout/reducer/reducer'
import conversationList from '../components/ConversationList/reducer/reducer'


export default combineReducers<StoreState>({
  user,
  global,
  conversationList
})