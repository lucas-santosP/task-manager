import { useReducer } from "react";
import { UserActions, UserActionsTypes, IUserState } from "./userTypes";

const INITIAL_STATE: IUserState = {
  user: null,
  token: null,
};

const UserReducer = (state: IUserState, action: UserActionsTypes): IUserState => {
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

export function useUserReducer(): [IUserState, React.Dispatch<UserActionsTypes>] {
  const [userState, dispatch] = useReducer(UserReducer, INITIAL_STATE);
  return [userState, dispatch];
}
