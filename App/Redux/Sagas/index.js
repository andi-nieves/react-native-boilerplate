import { all } from 'redux-saga/effects';
import api from '../../Services/Api';

import watchGetUsers from './Test';

export default function* root() {
  yield all([watchGetUsers(api)]);
}
