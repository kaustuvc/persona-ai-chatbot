import React, { useState } from 'react';
import ChatMessage from './ChatMessage';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    const userMsg = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    const res = await fetch('http://localhost:5000/api/message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input })
    },console.log("recid"));
    const data = await res.json();
    console.log("received")
    const botMsg = { sender: 'bot', text: data.reply };
    setMessages((prev) => [...prev, botMsg]);
  };

  return (
    <div className="chat-container">
      <h1>💬 Chat with Hitesh (AI)</h1>
      <div className="chat-box">
        {messages.map((msg, idx) => <ChatMessage key={idx} {...msg} />)}
      </div>
      <div className="input-box">
        <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && sendMessage()} />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default App;