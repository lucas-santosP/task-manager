import { useReducer } from "react";
import { TemplateActions, TemplateActionsTypes, ITemplateReducerState } from "./types";

const INITIAL_STATE: ITemplateReducerState = {
  templates: [],
};

const TemplateReducer = (
  state: ITemplateReducerState,
  action: TemplateActionsTypes
): ITemplateReducerState => {
  switch (action.type) {
    case TemplateActions.SET: {
      return { ...state, templates: [...action.payload.templates] };
    }

    case TemplateActions.CREATE: {
      state.templates.push(action.payload.template);
      return { ...state };
    }

    case TemplateActions.UPDATE: {
      const { payload } = action;
      const index = state.templates.findIndex((template) => template._id === payload.template._id);
      if (index !== -1) {
        state.templates.splice(index, 1, payload.template);
      }
      return { ...state };
    }

    case TemplateActions.DELETE: {
      const { payload } = action;
      state.templates = state.templates.filter((template) => template._id !== payload.templateId);
      return { ...state };
    }

    default:
      throw Error("TemplateReducer: Invalid action type receive");
  }
};

export function useTemplateReducer(): [
  ITemplateReducerState,
  React.Dispatch<TemplateActionsTypes>
] {
  const [templateState, dispatch] = useReducer(TemplateReducer, INITIAL_STATE);
  return [templateState, dispatch];
}