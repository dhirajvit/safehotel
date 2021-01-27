import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 50%;
  margin: 0 2rem;
  padding: 0.2rem;
`;

const PinDisplay = styled.input`
  background-color: grey;
  display: flex;
  flex: 1 1 50%;
  border: 2px solid black;
  border-radius: 5px;
  font-size: 3rem;
  color: #fff;
  padding: 1rem;
`;
const PinStatus = styled.div`
  display: flex;
  flex: 1 1 50%;
  justify-content: center;
  align-items: center;
`;
const StatusButton = styled.div`
  border: 1px solid black;
  background-color: ${(props) => (props.lockStatus ? "red" : "green")};
  width: 25px;
  height: 25px;
  border-radius: 50%;
`;

export { Container, PinDisplay, PinStatus, StatusButton };
