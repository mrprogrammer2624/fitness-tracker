export const login = (credentials) => {
  return async (dispatch) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: { username: credentials.username },
    });
  };
};

export const signup = (userData) => {
  return async (dispatch) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    dispatch({
      type: "SIGNUP_SUCCESS",
      payload: { username: userData.username },
    });
  };
};

export const logWorkout = (workoutData) => {
  return async (dispatch) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    dispatch({ type: "LOG_WORKOUT", payload: workoutData });
  };
};

export const setGoal = (goalData) => {
  return async (dispatch) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    dispatch({ type: "SET_GOAL", payload: goalData });
  };
};
