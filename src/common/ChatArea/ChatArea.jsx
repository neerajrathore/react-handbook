import React from 'react'
import ChatHead from '../ChatHead'
import ChatText from '../ChatText'
import './ChatArea.css'

const ChatArea = ({ chatContent, position = 'left' }) => {
  return (
    <div className={position === 'right' ? "chat-area-right" : "chat-area"}>
      <ChatHead></ChatHead>
      <ChatText content={chatContent}></ChatText>
    </div>
  )
}

export default ChatArea