// Re-render Example 

import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

function RefHook1() {
  const [userInput, setUserInput] = useState("");

  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <Wrapper>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <p>the number of times comp render:{count.current} </p>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 2.4rem;

  input {
    min-width: 20rem;
    /* padding: 1rem 0.5rem; */
    color: #000;
    font-size: 2rem;
  }
`;

export default RefHook1;
