export const LOCK_SAFE = "LOCK_SAFE";
export const lockSafe = (lock) => ({
  type: LOCK_SAFE,
  payload: { lock },
});
