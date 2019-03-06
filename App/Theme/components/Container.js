import { Platform, Dimensions } from 'react-native';

import variable from './../variables/';

const deviceHeight = Dimensions.get('window').height;
export default (variables = variable) => {
  const theme = {
    flex: 1,
    height: Platform.OS === 'ios' ? deviceHeight : deviceHeight - 20,
    backgroundColor: 'white',
  };

  return theme;
};
