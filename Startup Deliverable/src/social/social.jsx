import React, {useState, useEffect } from 'react';

export function Social() {
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