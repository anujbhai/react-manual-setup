import React, { useEffect, useState } from "react";

import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(1);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const clicked = () => console.log("window clicked");
    window.addEventListener("click", clicked);

    return () => window.addEventListener("click", clicked);
  }, []);

  const handleClick = () => {
    setCount(count + 1);
    setTime(new Date());
  };

  return (
    <div className="counter">
      <h3>Welcome to the Counter of Life</h3>

      <button onClick={() => handleClick()}>
        {count}
      </button>

      <p>At: {`${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`}</p>
    </div>
  );
};

export default Counter;
