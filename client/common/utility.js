import { history } from '../store';

export const redirectTo = (route, state = {}) => {
    history.push(route, state);
};