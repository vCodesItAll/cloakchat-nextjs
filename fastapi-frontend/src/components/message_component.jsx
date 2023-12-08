import { useState } from 'react';
import axios from 'axios'; 

export default function MessageInput(props) {


  console.log(props.message);

  return (
    <div>
      <input
        type="text"
        value={props.message}
        onChange={(e) => props.setMessage(e.target.value)}
        placeholder="Type your message..."
      />
    </div>
  );
};

