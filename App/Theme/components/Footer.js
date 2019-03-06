import variable from './../variables';

export default (variables = variable) => {
  const iconCommon = {
    'NativeBase.Icon': {
      color: variables.tabBarActiveTextColor,
    },
  };
  const iconNBCommon = {
    'NativeBase.IconNB': {
      color: variables.tabBarActiveTextColor,
    },
  };
  const textCommon = {
    'NativeBase.Text': {
      color: variables.tabBarActiveTextColor,
    },
  };
  const footerTheme = {
    'NativeBase.Left': {
      'NativeBase.Button': {
        '.transparent': {
          backgroundColor: 'transparent',
          borderColor: null,
          elevation: 0,
          shadowColor: null,
          shadowOffset: null,
          shadowRadius: null,
          shadowOpacity: null,
          ...iconCommon,
          ...iconNBCommon,
          ...textCommon,
        },
        alignSelf: null,
        ...iconCommon,
        ...iconNBCommon,
        // ...textCommon
      },
      flex: 1,
      alignSelf: 'center',
      alignItems: 'flex-start',
    },
    'NativeBase.Body': {
      flex: 1,
      alignItems: 'center',
      alignSelf: 'center',
      flexDirection: 'row',
      'NativeBase.Button': {
        alignSelf: 'center',
        '.transparent': {
          backgroundColor: 'transparent',
          borderColor: null,
          elevation: 0,
          shadowColor: null,
          shadowOffset: null,
          shadowRadius: null,
          shadowOpacity: null,
          ...iconCommon,
          ...iconNBCommon,
          ...textCommon,
        },
        '.full': {
          height: variables.footerHeight,
          paddingBottom: variables.footerPaddingBottom,
          flex: 1,
        },
        ...iconCommon,
        ...iconNBCommon,
        // ...textCommon
      },
    },
    'NativeBase.Right': {
      'NativeBase.Button': {
        '.transparent': {
          backgroundColor: 'transparent',
          borderColor: null,
          elevation: 0,
          shadowColor: null,
          shadowOffset: null,
          shadowRadius: null,
          shadowOpacity: null,
          ...iconCommon,
          ...iconNBCommon,
          ...textCommon,
        },
        alignSelf: null,
        ...iconCommon,
        ...iconNBCommon,
        // ...textCommon
      },
      flex: 1,
      alignSelf: 'center',
      alignItems: 'flex-end',
    },

    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    height: variables.footerHeight,
    paddingBottom: variables.footerPaddingBottom,
    elevation: 8,
    shadowColor: variables.brandDark,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    left: 0,
    right: 0,
  };
  return footerTheme;
};
