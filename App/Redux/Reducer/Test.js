import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

export const INITIAL_STATE = Immutable({
  users: [],
});

const { Types, Creators } = createActions({
  getGitUsers: null,
});

const setState = (state, data) => state.merge({ ...data });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_GIT_USERS]: null,
});

export const TestTypes = Types;
export default Creators;
