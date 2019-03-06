import variable from './../variables/';

export default (variables = variable) => {
  const { platform } = variables;

  const footerTabTheme = {
    'NativeBase.Button': {
      '.active': {
        'NativeBase.Text': {
          fontFamily: variables.fontFamilyBook,
          color: variables.gray1,
        },
        'NativeBase.Icon': {
          color: variables.blue5,
        },
        'NativeBase.IconNB': {
          color: variables.blue1,
        },
      },
      flexDirection: null,
      backgroundColor: 'transparent',
      borderColor: null,
      elevation: 0,
      shadowColor: null,
      shadowOffset: null,
      shadowRadius: null,
      shadowOpacity: null,
      alignSelf: 'center',
      flex: 1,
      height: variables.footerHeight - (variables.isIphoneX ? 34 : 0),
      justifyContent: 'center',
      '.badge': {
        'NativeBase.Badge': {
          'NativeBase.Text': {
            fontSize: 11,
            fontWeight: platform === 'ios' ? '600' : undefined,
            lineHeight: 14,
          },
          top: -3,
          alignSelf: 'center',
          left: 10,
          zIndex: 99,
          height: 18,
          padding: 1.7,
          paddingHorizontal: 3,
        },
        'NativeBase.Icon': {
          marginTop: -18,
        },
      },
      'NativeBase.Icon': {
        color: variables.gray1,
      },
      'NativeBase.IconNB': {
        color: variables.gray1,
      },
      'NativeBase.Text': {
        color: variables.gray1,
        fontSize: variables.tabBarTextSize,
        lineHeight: variables.platform === 'ios' ? 10 : 16,
        fontFamily: variables.fontFamilyBook,
      },
    },
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    alignSelf: 'stretch',
  };

  return footerTabTheme;
};
