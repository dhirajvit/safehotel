import React from "react";
import Lockpad from "./lock_pad";
import Numpad from "./num_pad";
import { Container } from "./styled";
function App() {
  return (
    <Container>
      <Numpad />
      <Lockpad />
    </Container>
  );
}

export default App;
