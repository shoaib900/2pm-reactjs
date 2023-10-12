import React, { useEffect, useState } from "react";
import Button from "../components/Button";

const Home = () => {
  const [number, setNumber] = useState(0);
  const [api, setApi] = useState([]);

  const increment = () => {
    setNumber(number + 1);
  };
  const decrement = () => {
    setNumber(number - 1);
  };
  const reset = () => {
    setNumber(0);
  };

  console.log("api", api);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setApi(json));
  }, []);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <h1>Home</h1>
      <Button style={{color:"white"}} title="Home page"/>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <button onClick={increment}>increment</button>
        <p>{number}</p>
        <button onClick={decrement}>decrement</button>
      </div>
      <button onClick={reset}>reset value</button>

      <>
        {api.map((item) => (
          <li key={item.id}>
            {" "}
            {item.id} -- {item.title}
          </li>
        ))}
      </>
    </div>
  );
};

export default Home;
