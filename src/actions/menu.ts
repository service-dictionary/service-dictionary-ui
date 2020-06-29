import { ActionT } from '../reducer';

export const openMenu = (): ActionT => ({
  type: 'SET_MENU_OPEN',
  payload: true
});

export const closeMenu = (): ActionT => ({
  type: 'SET_MENU_OPEN',
  payload: false
});
