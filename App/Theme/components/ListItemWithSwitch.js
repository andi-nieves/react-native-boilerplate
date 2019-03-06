import React from 'react';
import { View, Switch } from 'react-native';
import { ListItem, Label } from 'native-base';
import PropTypes from 'prop-types';

import Theme from '../variables';

const styles = {
  container: {
    height: 95,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E8#9EA',
    marginLeft: -30,
    paddingLeft: 56,
  },
  label: { color: '#212830', marginBottom: 5 },
};
const { container, label } = styles;

const ListItemWithSwitch = ({
  title,
  subtitle,
  onValueChange,
  active,
  switchAccessibilityLabel,
}) => (
  <ListItem style={container}>
    <View>
      <Label style={label}>{title}</Label>
      {subtitle && <Label style={label}>{subtitle}</Label>}
    </View>
    <View>
      <Switch
        accessibilityLabel={switchAccessibilityLabel}
        onTintColor={Theme.blue5}
        onValueChange={onValueChange}
        value={active}
      />
    </View>
  </ListItem>
);

ListItemWithSwitch.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  onValueChange: PropTypes.func,
  active: PropTypes.bool,
  switchAccessibilityLabel: PropTypes.string,
};

export default ListItemWithSwitch;
