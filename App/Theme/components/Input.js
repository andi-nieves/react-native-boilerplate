import variable from './../variables';

export default (variables = variable) => {
  const inputTheme = {
    '.multiline': {
      height: null,
    },
    height: variables.inputHeightBase,
    color: variables.inputColor,
    paddingLeft: 5,
    paddingRight: 5,
    flex: 1,
    fontSize: variables.inputFontSize,
    fontFamily: variables.fontFamilyBook,
  };

  return inputTheme;
};
