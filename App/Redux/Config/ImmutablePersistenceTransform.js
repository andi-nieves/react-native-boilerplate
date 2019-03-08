import R from 'ramda';
import Immutable from 'seamless-immutable';

const isImmutable = R.has('asMutable');

const convertToJs = state => state.asMutable({ deep: true });

const fromImmutable = R.when(isImmutable, convertToJs);

const toImmutable = raw => Immutable(raw);

export default {
  out: state => {
    // eslint-disable-next-line
    state.mergeDeep = R.identity;
    return toImmutable(state);
  },
  in: raw => {
    return fromImmutable(raw);
  },
};
