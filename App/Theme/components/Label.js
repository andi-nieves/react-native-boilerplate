import variable from './../variables';

export default (variables = variable) => {
  const labelTheme = {
    '.focused': {
      width: 0,
    },
    fontSize: 12,
    fontFamily: variables.fontFamilyBook,
    color: variables.gray5,
    marginBottom: 10,
  };

  return labelTheme;
};
