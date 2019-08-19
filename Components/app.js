//lib
import React, { useState, useEffect } from "react";
//Style
import { Container } from "./style";

const App = () => {
  const [foo, _] = useState("wlecome");

  useEffect(() => {
    console.log("hello");
  }, []);
  return (
    <Container>
      <h1>{foo}</h1>
    </Container>
  );
};

export default App;
