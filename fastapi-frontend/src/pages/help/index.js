import Link from "next/link";
import React from "react";


function help() {
  return (
    <>
      <ol>
        <li>Open the app and log in to your account.</li>
        <li>Locate the "Add Friend" option.</li>
        <li>Enter the email address of the person you wish to message.</li>
        <li>Send the friend request.</li>
        <li>
          Once your friend accepts the request, proceed to create a message.
        </li>
        <li>Find the "Create Message" option in the app's menu.</li>
        <li>Enter your friend's name.</li>
        <li>Compose your message in the provided text box.</li>
        <li>Review the message and click "Send" to collaborate instantly.</li>
      </ol>
      <div>
        <h1>Messages</h1>
        <Link href="/messages">
          <div>Go to Messages</div>
        </Link>
        <br />
        <Link href="/login">
          <div>Go to Login</div>
        </Link>
      </div>
    </>
  );
}

export default help;
