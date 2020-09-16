import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './Chat.css';
import { Link } from 'react-router-dom';
function Chat({ name, message, profilePicture, time }) {
  return (
    <Link to={`/chat/${name}`}>
      <div className="chat">
        <Avatar className="chat__image" alt="" src={profilePicture} />
        <div className="chat__details">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        <p className="chat__timestamp">35 min ago</p>
      </div>
    </Link>
  );
}

export default Chat;
