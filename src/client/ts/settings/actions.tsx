export const ActionTypes = {
  SET_COUNTER_ACTION: "SET_COUNTER_ACTION",
};

export const setCounterAction = (data: number) => ({
  type: ActionTypes.SET_COUNTER_ACTION,
  data,
});
