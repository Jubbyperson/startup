import React, { useState, useEffect } from 'react';

export function Social() {
  const [username, setUsername] = useState("");
  const [friends, setFriends] = useState([]);
  const [newFriend, setNewFriend] = useState("");
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUsername(storedUser.email);
    }

    const storedFriends = JSON.parse(localStorage.getItem("friends"));
    if (storedFriends) {
      setFriends(storedFriends);
    }

    const storedMessages = JSON.parse(localStorage.getItem("messages"));
    if (storedMessages) {
      setMessages(storedMessages);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("friends", JSON.stringify(friends));
  }, [friends]);

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  const handleAddFriend = () => {
    if (newFriend.trim()) {
      setFriends([...friends, newFriend.trim()]);
      setNewFriend("");
    }
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        username: username || "Anonymous",
        content: newMessage.trim(),
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages([...messages, message]);
      setNewMessage("");
    }
  };

  return (
    <main>
      <br/>
      <br/>
      <br/>
      <br/>
      <h1>Social</h1>
      <h3>Username: {username || "Anonymous"}</h3>
      <h2>Friends</h2>
      {friends.length > 0 ? (
        friends.map((friend, index) => <p key={index}><i>{friend}</i></p>)
      ) : (
        <p><i>No friends added yet</i></p>
      )}
      <input
        type="text"
        placeholder="Add Friend"
        value={newFriend}
        onChange={(e) => setNewFriend(e.target.value)}
      />
      <button type="button" onClick={handleAddFriend}>+</button>
      <h2>Chats</h2>
      <div className="chat-box">
        {messages.map((message, index) => (
          <div key={index} className="chat-message">
            <strong>{message.username}</strong>: {message.content} <span>{message.timestamp}</span>
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type your message here"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button type="button" onClick={handleSendMessage}>Send</button>
    </main>
  );
}