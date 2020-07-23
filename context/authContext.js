import createDataContext from "./createDataContext";
import trackerApi from "../src/api/tracker";
import { AsyncStorage } from "react-navigation";
import { navigate } from "../src/navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signup":
      return { errorMessage: "", token: action.payload };
    default:
      return state;
  }
};

const signup = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post("/signup", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "signup", payload: response.data.token });

    navigate("TrackList");
  } catch (err) {
    dispatch({ type: "add_error", payload: "Something Went Wrong" });
  }
};

const signin = (dispatch) => {
  return ({ email, password }) => {};
};

const signout = (dispatch) => {};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { token: null, errorMessage: "" }
);
