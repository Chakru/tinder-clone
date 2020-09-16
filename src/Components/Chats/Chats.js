import React, { useState, useEffect } from 'react';
import Chat from './Chat';
import database from '../../firebase';
import './Chats.css';

function Chats() {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const unsubscribe = database
      .collection('chats')
      .onSnapshot(snapshot => setChats(snapshot.docs.map(doc => doc.data())));

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <div className="chats">
        {chats.map(chat => (
          <div key={chat.name}>
            <Chat
              name={chat.name}
              message={chat.message}
              profilePicture={chat.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chats;
