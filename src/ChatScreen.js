import React, { useState } from 'react';
import './ChatScreen.css';
import { Avatar } from '@material-ui/core';
function ChatScreen() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      name: 'Barkha Singh',
      image:
        'https://qph.fs.quoracdn.net/main-qimg-900ea9ca9b6a7a04739875edcbe816f4',
      message: 'How you doin',
    },
    {
      name: 'Barkha Singh',
      image:
        'https://qph.fs.quoracdn.net/main-qimg-900ea9ca9b6a7a04739875edcbe816f4',
      message: '😆 💓 ',
    },
    {
      message: 'I was backpacking across Western Europe',
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
        You matched with Barkha on 10/08/2020
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
