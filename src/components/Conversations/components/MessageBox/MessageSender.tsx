import React, { useState } from 'react'
// import io from 'socket.io-client'
import { useSelector } from 'react-redux'

interface MessageSenderProps {
  userId: number,
  toId: number
}

const MessageSender: React.FC<MessageSenderProps> = (props) => {
  const { userId, toId } = props
  const socket = useSelector<StoreState, SocketIOClient.Socket | void>(state => state.global.socket)
  
  const [ content, setContent ] = useState('')

  const sendMsg = () => {
    console.log({
      to_id: toId,
      from_id: userId,
      content: content,
      create_time: new Date().getTime(),
    })
    if (socket && userId && toId) {
      socket.emit('send_msg', {
        to_id: toId,
        from_id: userId,
        content: content,
        create_time: new Date().getTime(),
      })
    }
    setContent('')
  }


  return (
    <div className="message-sender">
      <textarea
        value={content}
        onChange={(e) => {setContent(e.target.value)}}
        placeholder="请输入"
      ></textarea>
      <div
        className="message-sender-submit"
        onClick={sendMsg}
      >
        发送
      </div>
    </div>
  )
}

export default MessageSender