import styled from "styled-components";
const Container = styled.div`
  display: flex;
  background-color: grey;
  flex: 1 1 50%;
  flex-wrap: wrap;
  padding: 0.2rem;
  margin: 0 2rem;
  border: 1px solid #000;
`;

const Button = styled.button`
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  width: 33.3%;
  height: 3rem;
  background: #fff;
  border: 1px solid grey;
`;
const Error = styled.div`
  color: #ff0000;
  background: #ffffff;
  width: 100%;
`;
export { Container, Button, Error };
