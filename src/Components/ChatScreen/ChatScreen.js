import React, { useState } from 'react';
import './ChatScreen.css';
import { Avatar } from '@material-ui/core';
function ChatScreen() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      name: 'Kim',
      image:
        'https://i.pinimg.com/originals/fc/62/78/fc6278c3ef099a89a7a2bce349a717af.jpg',
      message:
        'So you see where that trouble began. That smile... That damned smile',
    },
    {
      message: 'Nice one',
    },
    {
      name: 'Kim',
      image:
        'https://i.pinimg.com/originals/fc/62/78/fc6278c3ef099a89a7a2bce349a717af.jpg',
      message: '😆',
    },
  ]);

  const handleSend = e => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput('');
  };
  return (
    <div className="chatScreen">
      <p className="chatScreen__timeStamp">
        You matched with Kim on 10/08/2020
      </p>
      {messages.map(message =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__userText">{message.message}</p>
          </div>
        )
      )}
      <form className="chatScreen__input">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          className="chatScreen__inputField"
          type="text"
          placeholder="Type a message"
        />
        <button
          type="submit"
          onClick={handleSend}
          className="chatScreen__button"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
