import variable from './../variables';

export default (variables = variable) => {
  const contentTheme = {
    flex: 1,
    backgroundColor: variables.gray10,
    zIndex: -3,
    'NativeBase.Segment': {
      borderWidth: 0,
      backgroundColor: 'transparent',
    },
    '.verticalPadder': {
      paddingVertical: variables.contentPadding,
    },
    '.white': {
      backgroundColor: 'white',
    },
  };

  return contentTheme;
};
