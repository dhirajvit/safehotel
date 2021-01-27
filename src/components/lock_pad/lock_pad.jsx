import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/lock_pad/actions";
import * as selectors from "../../redux/lock_pad/selector";
import * as numpadSelectors from "../../redux/num_pad/selector";
import { Container, PinStatus, PinDisplay, StatusButton } from "./styled";
const Lockpad = () => {
  const dispatch = useDispatch();
  const pin = useSelector(numpadSelectors.selectPin);
  const [pinDisplayValue, setPinDisplayValue] = useState(pin);
  useEffect(() => {
    setPinDisplayValue(pin);
  }, [pin]);
  const lockStatus = useSelector(selectors.selectLockStatus);
  const handleLock = () => {
    if (pin.length === 4) {
      dispatch(actions.lockSafe(true));
      setPinDisplayValue("");
    }
  };
  return (
    <Container>
      <PinDisplay value={pinDisplayValue} />
      <PinStatus>
        <StatusButton lockStatus={lockStatus} onClick={handleLock} />
      </PinStatus>
    </Container>
  );
};
export default Lockpad;
