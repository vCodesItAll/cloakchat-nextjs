import { useState } from 'react';
import axios from 'axios'; // Use Axios for HTTP requests

export default function MessageInput() {
  const [message, setMessage] = useState('');


  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={setMessage}>Send</button>
    </div>
  );
};

// export default MessageInput;
