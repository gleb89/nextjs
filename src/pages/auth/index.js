import React, { useState } from "react";

export default function AuthPage(params) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  async function submitContact(event) {
    event.preventDefault();
    console.log(4556);
  }

  return (
    <>
      <h1>auth</h1>
      <form onSubmit={submitContact} className="bg-white">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

