import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/num_pad/actions";
import * as lockActions from "../../redux/lock_pad/actions";
import * as selectors from "../../redux/num_pad/selector";
import { Container, Button, Error } from "./styled";
import * as lockSelectors from "../../redux/lock_pad/selector";

const ButtonComp = ({ value, selected = null, handleClick }) => {
  return <Button onClick={() => handleClick(value)}>{value}</Button>;
};
const Numpad = () => {
  const boxes = useSelector(selectors.selectBoxes);
  const error = useSelector(selectors.selectError);
  const pin = useSelector(selectors.selectPin);
  const lockStatus = useSelector(lockSelectors.selectLockStatus);

  const dispatch = useDispatch();
  let unlockKey = "";
  const handleClick = (value) => {
    if (lockStatus) {
      if (unlockKey.length < 4) {
        unlockKey = `${unlockKey}${value}`;
        if (unlockKey === pin) {
          dispatch(lockActions.lockSafe(false));
        }
      }
    } else {
      if (pin.length === 4 && value !== "CLR") {
        dispatch(actions.addError_0());
      } else {
        dispatch(actions.addToNumpad(value));
      }
    }
  };
  return (
    <Container>
      {boxes?.map((box) => (
        <ButtonComp value={box.value} handleClick={handleClick} />
      ))}
      {error && <Error>{error}</Error>}
    </Container>
  );
};
export default Numpad;
