import variable from './../variables';

export default (variables = variable) => {
  const viewTheme = {
    '.padder': {
      padding: variables.contentPadding,
    },
    '.alert': {
      backgroundColor: variables.yellow3,
      height: 50,
      paddingHorizontal: 10,
      flexDirection: 'row',
      alignItems: 'center',

      'NativeBase.Text': {
        color: variables.geminiBlue,
        fontFamily: variables.fontFamilyBook,
        fontSize: 14,
      },
    },
  };

  return viewTheme;
};
