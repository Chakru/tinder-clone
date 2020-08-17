import React from 'react';
import Chat from './Chat';
import './Chats.css';

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Barkha"
        message="I was backpacking across Western Europe"
        timeStamp="35 min ago"
        profilePicture="https://qph.fs.quoracdn.net/main-qimg-900ea9ca9b6a7a04739875edcbe816f4"
      />
      <Chat
        name="Arica"
        message="Hey... How you Doin"
        timeStamp="32 min ago"
        profilePicture="https://i.ytimg.com/vi/DFRAzmBLy9E/maxresdefault.jpg"
      />
      <Chat
        name="Lieke"
        message="So you see where that trouble began. That smile... That damned smile"
        timeStamp="35 min ago"
        profilePicture="https://www.fcbarcelona.com/photo-resources/2019/08/24/650d710a-dd27-4d71-81de-f570917a3598/mini_22-LIEKE-MARTENS.JPG?width=1200&height=750"
      />
    </div>
  );
}

export default Chats;
