import { createReducer, createActions } from 'reduxsauce';

export const INITIAL_STATE = {
  users: [],
};

const { Types, Creators } = createActions({
  getGitUsers: null,
  setState: ['data'],
});

const setState = (state, data) => {
  return state.merge(data.data);
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_STATE]: setState,
  [Types.GET_GIT_USERS]: null,
});

export const TestTypes = Types;
export default Creators;
