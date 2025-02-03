"use client";

import { useState } from "react";

export default function CSR() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>{count}</button>
    </div>
  );
}
