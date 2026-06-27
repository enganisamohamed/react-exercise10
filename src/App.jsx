import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  const [displayName, setDisplayName] = useState("");
  const [displayGreeting, setDisplayGreeting] = useState("");

  const showGreeting = () => {
    setDisplayName(name);
    setDisplayGreeting(greeting);
  };

  return (
    <div>
      <h1>Enter Your Name:</h1>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h1>Choose a Greeting:</h1>

      <input
        type="text"
        value={greeting}
        onChange={(e) => setGreeting(e.target.value)}
      />



      <h2>{displayGreeting} {displayName}</h2>
    </div>
  );
}

export default App;