//import "./styles.css";
import { useState } from "react";
export default function Input_TwoWayBinding() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = () => {
    setName("Example 1");
    setEmail("Example 2");
  };

  return (
    <div className="App" padding={32}>
      <h1>Input</h1>
      <label htmlFor="name">Name</label>
      <input id="name" value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <button onClick={handleChange} title="Click to change state">
        Change state
      </button>
      <div>{JSON.stringify({ name, email })}</div>
    </div>
  );
}
