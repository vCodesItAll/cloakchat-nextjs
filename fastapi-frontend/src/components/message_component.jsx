import { useState } from 'react';
import axios from 'axios'; // Use Axios for HTTP requests

export default function MessageInput(props) {
  // const [message, setMessage] = useState(props.message);

  console.log(props.message);

  return (
    <div>
      <input
        type="text"
        value={props.message}
        onChange={(e) => props.setMessage(e.target.value)}
        placeholder="Type your message..."
      />
      {/* <button onClick={setMessage}>Send</button> */}
    </div>
  );
};

// export default MessageInput;
