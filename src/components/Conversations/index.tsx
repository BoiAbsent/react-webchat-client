import React, { useCallback } from 'react'
import ReactDOM from 'react-dom'
import { useSelector, useDispatch } from 'react-redux'
import MessageBox from './components/MessageBox'
import { updateCurrent } from './reducer/action'

export default function ConversationList(props) {
  const conversations = useSelector<StoreState>(store => store.conversationStore.map)
  const convList = Object.keys(conversations)
  const dispatch = useDispatch() 
  window['test'] = () => {dispatch(updateCurrent(2))}
  const changeCurrent = useCallback(
    (number) => {
      dispatch(updateCurrent(number))
    },
    [dispatch],
  )
  
  return  (
    <div className="conversations">
      <div>
        {convList.map(c => (
          <div key={conversations[c].mate_id} onClick={() => {changeCurrent(conversations[c].mate_id)}}>
            {conversations[c].mate_name}
          </div>
        ))}
      </div>
      <MessageBox/>
    </div>
  )
}