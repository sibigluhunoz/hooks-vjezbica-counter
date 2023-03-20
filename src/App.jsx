import { useState } from "react";
import './App.css';
import Kompa from './Kompa';

export default function App() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("Home Page");
  return (
    <div className="App">
      <h1 onClick={() => setTitle("About")}>{title}</h1>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Dodaj</button>
      <Kompa title={title} />
    </div>
  );
}

