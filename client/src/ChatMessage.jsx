import React from 'react';
import './ChatMessage.css';

function ChatMessage({ sender, text }) {
  return (
    <div className={`chat-message ${sender}`}>
      <div className="bubble">{text}</div>
    </div>
  );
}

export default ChatMessage;