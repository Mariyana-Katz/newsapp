import React, { useState } from 'react';
import { useActionData } from 'react-router';

const Test = () => {
  const [h1Elements, setH1Elements] = useState([]);

  function printFiveTimes(n) {
    const elements = [];
    for (let i = 0; i < n; i++) {
      elements.push(<h1 key={i}>This is a test</h1>);
    } 
    setH1Elements(elements);
  }
  return (
    <div>
      <button className="sicknasty" onClick={() => printFiveTimes(5)}>
        Print Five Times
      </button>
      {h1Elements}
    </div>
  );
};

export default Test;
