const TOGGLE = 'nav/TOGGLE';

export interface IToggle {
  toggle: boolean;
}

export const handleToggle = () => ({ type: TOGGLE });

const initialState: IToggle = {
  toggle: false,
};

interface ActionType {
  type: string;
  toggle: boolean;
}

const toggle = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case TOGGLE:
      return {
        ...state,
        toggle: !state.toggle,
      };
    default:
      return state;
  }
};

export default toggle;
