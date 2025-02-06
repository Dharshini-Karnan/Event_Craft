import { TOGGLE_DARK_MODE } from './store';
import { SET_TOKEN } from './store';
export const toggleDarkMode = () => ({
  type: TOGGLE_DARK_MODE,
});
export const setToken = (token) => ({
  type: SET_TOKEN,
  payload: token,
});