import { useReducer } from "react";
import { UserActions, UserActionsTypes, IUserReducerState } from "./types";

const INITIAL_STATE: IUserReducerState = {
  user: null,
  token: null,
};

const UserReducer = (state: IUserReducerState, action: UserActionsTypes): IUserReducerState => {
  switch (action.type) {
    case UserActions.LOGIN:
      const { user, token } = action.payload;
      return { ...state, user, token };

    case UserActions.LOGOUT:
      return { ...state, user: null, token: null };

    default:
      throw Error("UserReducer: Invalid action type receive");
  }
};

export function useUserReducer(): [IUserReducerState, React.Dispatch<UserActionsTypes>] {
  const [userState, dispatch] = useReducer(UserReducer, INITIAL_STATE);
  return [userState, dispatch];
}
