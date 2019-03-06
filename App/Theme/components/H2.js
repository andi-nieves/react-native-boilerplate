import variable from './../variables';

export default (variables = variable) => {
  const h2Theme = {
    '.blue1': {
      color: variables.blue1,
    },
    color: variables.textColor,
    fontSize: variables.fontSizeH2,
    lineHeight: variables.lineHeightH2,
    fontFamily: variables.fontFamilyMedium,
  };

  return h2Theme;
};
