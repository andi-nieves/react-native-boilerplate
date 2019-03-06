import variable from './../variables';

export default (variables = variable) => {
  const iconTheme = {
    fontSize: variables.iconFontSize,
    color: '#000',

    '.light2': {
      color: variables.brandLight2,
    },
    '.white': {
      color: 'white',
    },
    '.noMargin': {
      margin: 0,
    },
    '.noMarginRight': {
      marginRight: 0,
    },
    '.noMarginLeft': {
      marginLeft: 0,
    },
  };

  return iconTheme;
};
