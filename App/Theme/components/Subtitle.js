import variable from './../variables/';

export default (variables = variable) => {
  const subtitleTheme = {
    fontSize: variables.subTitleFontSize,
    fontFamily: variables.titleFontfamily,
    color: variables.subtitleColor,
    textAlign: 'center',
  };

  return subtitleTheme;
};
