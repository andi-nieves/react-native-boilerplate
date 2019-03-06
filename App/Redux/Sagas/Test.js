import { call, put, takeLatest } from "redux-saga/effects";
import TestActions, { TestTypes } from "../Reducer/Test";

export function* getTest(api) {
  try {
    const response = yield call(api.getGitUsers);
    return response.data;
  } catch (e) {
    console.log("e", e);
  }
}

function* watchGetUsers(api) {
  yield takeLatest(TestTypes.GET_GIT_USERS, getTest, api);
}
export default watchGetUsers;
