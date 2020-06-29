export type StateT = {
  menuOpen: boolean;
};

export type ActionTypeT =
  'SET_MENU_OPEN';

export type ActionT = {
  type: ActionTypeT;
  payload: any;
};

export const initialState: StateT = {
  menuOpen: false
};

export default function reducer(state: StateT = initialState, action: ActionT): StateT {
  switch (action.type) {
    case 'SET_MENU_OPEN':
      return { ...state, menuOpen: action.payload };
    default:
      return state;
  }
};
