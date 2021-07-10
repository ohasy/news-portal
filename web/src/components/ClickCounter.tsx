import React, { useState } from 'react';

export default function ClickCounter() {
  const [count, setCount] = useState(0);

  return (
    <div
      onClick={() => setCount(count + 1)}
      onKeyDown={() => setCount(count + 1)}
      role="button"
      tabIndex={0}
    >
      Counter : {count}
    </div>
  );
}
