import React, {useState, useEffect } from 'react';

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
  
  return (
    <main>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1>Social</h1>
        <h3>Username: </h3>
        <h2>Friends</h2>
        <p><i>Friends listed here</i></p>
        <input type = "text" placeholder="Add Friend"/>
        <button type ="submit">+</button>
        <h2>Chats</h2>
        <p><i>Recent chats here</i></p>
    </main>
  );
}