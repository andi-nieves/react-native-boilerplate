import React from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';

const style = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const Screen2 = props => {
  const {
    navigation: {
      state: {
        params: { params },
      },
    },
  } = props;
  return (
    <View style={style.container}>
      <Text>{params.login}</Text>
      <Text>{params.html_url}</Text>
      <Button
        title="Back"
        onPress={() => {
          props.navigation.navigate('Home');
        }}
      >
        <Text>Back</Text>
      </Button>
    </View>
  );
};

Screen2.defaultProps = {
  navigation: {},
};
Screen2.propTypes = {
  navigation: PropTypes.instanceOf(Object),
};
export default Screen2;
