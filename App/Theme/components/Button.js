import variable from './../variables';

export default (variables = variable) => {
  const { platformStyle, platform } = variables;
  const darkCommon = {
    'NativeBase.Text': {
      color: variables.brandDark,
    },
    'NativeBase.Icon': {
      color: variables.brandDark,
    },
    'NativeBase.IconNB': {
      color: variables.brandDark,
    },
  };
  const lightCommon = {
    'NativeBase.Text': {
      color: variables.brandLight,
    },
    'NativeBase.Icon': {
      color: variables.brandLight,
    },
    'NativeBase.IconNB': {
      color: variables.brandLight,
    },
  };
  const primaryCommon = {
    'NativeBase.Text': {
      color: variables.btnPrimaryBg,
    },
    'NativeBase.Icon': {
      color: variables.btnPrimaryBg,
    },
    'NativeBase.IconNB': {
      color: variables.btnPrimaryBg,
    },
  };
  const successCommon = {
    'NativeBase.Text': {
      color: variables.btnSuccessBg,
    },
    'NativeBase.Icon': {
      color: variables.btnSuccessBg,
    },
    'NativeBase.IconNB': {
      color: variables.btnSuccessBg,
    },
  };
  const infoCommon = {
    'NativeBase.Text': {
      color: variables.btnInfoBg,
    },
    'NativeBase.Icon': {
      color: variables.btnInfoBg,
    },
    'NativeBase.IconNB': {
      color: variables.btnInfoBg,
    },
  };
  const warningCommon = {
    'NativeBase.Text': {
      color: variables.btnWarningBg,
    },
    'NativeBase.Icon': {
      color: variables.btnWarningBg,
    },
    'NativeBase.IconNB': {
      color: variables.btnWarningBg,
    },
  };
  const dangerCommon = {
    'NativeBase.Text': {
      color: variables.btnDangerBg,
    },
    'NativeBase.Icon': {
      color: variables.btnDangerBg,
    },
    'NativeBase.IconNB': {
      color: variables.btnDangerBg,
    },
  };
  const buttonTheme = {
    'NativeBase.Text': {
      marginLeft: 0,
      marginRight: 0,
      color: variables.inverseTextColor,
      fontSize: variables.DefaultFontSize,
      paddingHorizontal: 16,
      backgroundColor: 'transparent',
    },

    'NativeBase.Icon': {
      color: variables.inverseTextColor,
      fontSize: 24,
      marginHorizontal: 16,
      paddingTop: platform === 'ios' ? 2 : undefined,
    },
    'NativeBase.IconNB': {
      color: variables.inverseTextColor,
      fontSize: 24,
      marginHorizontal: 16,
      paddingTop: platform === 'ios' ? 2 : undefined,
    },

    '.disabled': {
      '.transparent': {
        backgroundColor: null,
        'NativeBase.Text': {
          color: variables.btnDisabledBg,
        },
        'NativeBase.Icon': {
          color: variables.btnDisabledBg,
        },
        'NativeBase.IconNB': {
          color: variables.btnDisabledBg,
        },
      },
      'NativeBase.Icon': {
        color: variables.brandLight,
      },
      'NativeBase.IconNB': {
        color: variables.brandLight,
      },
      backgroundColor: variables.btnDisabledBg,
    },
    '.bordered': {
      '.dark': {
        ...darkCommon,
        backgroundColor: 'transparent',
        borderColor: variables.brandDark3,
        borderWidth: variables.borderWidth * 3,
      },
      '.light': {
        ...lightCommon,
        backgroundColor: 'transparent',
        borderColor: variables.brandLight,
        borderWidth: variables.borderWidth * 2,
      },
      '.primary': {
        ...primaryCommon,
        backgroundColor: 'transparent',
        borderColor: variables.btnPrimaryBg,
        borderWidth: variables.borderWidth * 2,
      },
      '.success': {
        ...successCommon,
        backgroundColor: 'transparent',
        borderColor: variables.btnSuccessBg,
        borderWidth: variables.borderWidth * 2,
      },
      '.info': {
        ...infoCommon,
        backgroundColor: 'transparent',
        borderColor: variables.btnInfoBg,
        borderWidth: variables.borderWidth * 2,
      },
      '.warning': {
        ...warningCommon,
        backgroundColor: 'transparent',
        borderColor: variables.btnWarningBg,
        borderWidth: variables.borderWidth * 2,
      },
      '.danger': {
        ...dangerCommon,
        backgroundColor: 'transparent',
        borderColor: variables.btnDangerBg,
        borderWidth: variables.borderWidth * 2,
      },
      '.disabled': {
        backgroundColor: null,
        borderColor: variables.btnDisabledBg,
        borderWidth: variables.borderWidth * 2,
        'NativeBase.Text': {
          color: variables.btnDisabledBg,
        },
      },
      ...primaryCommon,
      borderWidth: variables.borderWidth * 2,
      elevation: null,
      shadowColor: null,
      shadowOffset: null,
      shadowOpacity: null,
      shadowRadius: null,
      backgroundColor: 'transparent',
    },

    '.link': {
      height: 'auto',
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      elevation: 0,
      shadowColor: null,
      shadowOffset: null,
      shadowRadius: null,
      shadowOpacity: null,

      'NativeBase.Text': {
        paddingLeft: 0,
        paddingRight: 0,
        fontFamily: variables.fontFamilyBook,
      },

      '.blue': {
        'NativeBase.Text': {
          color: variables.blue4,
        },
      },
    },

    '.dark': {
      '.bordered': {
        ...darkCommon,
      },
      backgroundColor: variables.brandDark,
      borderRadius: 4,
      'NativeBase.Text': {
        fontFamily: variables.fontFamilyHeavy,
      },
    },
    '.light': {
      '.transparent': {
        ...lightCommon,
        backgroundColor: null,
      },
      '.bordered': {
        ...lightCommon,
      },
      ...darkCommon,
      backgroundColor: variables.brandLight,
    },

    '.primary': {
      '.bordered': {
        ...primaryCommon,
      },
      backgroundColor: variables.btnPrimaryBg,
      'NativeBase.Text': {
        fontSize: variables.fontSizeLg,
        fontFamily: variables.fontFamilyBlack,
        paddingTop: variables.platform === 'ios' ? 3 : 0,
      },
    },

    '.success': {
      '.bordered': {
        ...successCommon,
      },
      backgroundColor: variables.btnSuccessBg,
    },

    '.info': {
      '.bordered': {
        ...infoCommon,
      },
      backgroundColor: variables.btnInfoBg,
    },

    '.warning': {
      '.bordered': {
        ...warningCommon,
      },
      backgroundColor: variables.btnWarningBg,
    },

    '.danger': {
      '.bordered': {
        ...dangerCommon,
      },
      backgroundColor: variables.btnDangerBg,
    },

    '.block': {
      justifyContent: 'center',
      alignSelf: 'stretch',
    },

    '.full': {
      justifyContent: 'center',
      alignSelf: 'stretch',
      borderRadius: 0,
    },

    '.rounded': {
      // paddingHorizontal: variables.buttonPadding + 20,
      borderRadius: variables.borderRadiusLarge,
    },

    '.transparent': {
      backgroundColor: 'transparent',
      elevation: 0,
      shadowColor: null,
      shadowOffset: null,
      shadowRadius: null,
      shadowOpacity: null,
      ...primaryCommon,
      '.dark': {
        ...darkCommon,
        backgroundColor: null,
      },
      '.danger': {
        ...dangerCommon,
        backgroundColor: null,
      },
      '.warning': {
        ...warningCommon,
        backgroundColor: null,
      },
      '.info': {
        ...infoCommon,
        backgroundColor: null,
      },
      '.primary': {
        ...primaryCommon,
        backgroundColor: null,
      },
      '.success': {
        ...successCommon,
        backgroundColor: null,
      },
      '.light': {
        ...lightCommon,
        backgroundColor: null,
      },
      '.disabled': {
        backgroundColor: 'transparent',
        borderColor: variables.btnDisabledBg,
        borderWidth: variables.borderWidth * 2,
        'NativeBase.Text': {
          color: variables.btnDisabledBg,
        },
        'NativeBase.Icon': {
          color: variables.btnDisabledBg,
        },
        'NativeBase.IconNB': {
          color: variables.btnDisabledBg,
        },
      },
      '.bordered': {
        borderWidth: 1,
        borderColor: variable.brandLight6,
        shadowOffset: undefined,
        shadowColor: undefined,
        shadowOpacity: undefined,
        shadowRadius: undefined,

        'NativeBase.Text': {
          fontFamily: variables.fontFamilyLight,
          color: variables.brandLight7,
          paddingLeft: 10,
        },
        'NativeBase.Icon': {
          color: variables.brandLight7,
        },
      },
    },

    '.small': {
      height: 32,
      'NativeBase.Text': {
        fontSize: variables.fontSizeSmall,
        paddingHorizontal: 12,
      },
      'NativeBase.Icon': {
        fontSize: 20,
        paddingTop: 0,
      },
      'NativeBase.IconNB': {
        fontSize: 20,
        paddingTop: 0,
      },
    },

    '.withRightIcon': {
      'NativeBase.Text': {
        paddingRight: 0,
      },
    },

    '.large': {
      height: 50,
      'NativeBase.Text': {
        fontSize: 18,
      },
    },

    '.capitalize': {},

    '.vertical': {
      flexDirection: 'column',
      height: null,
    },

    '.iconLeft': {
      'NativeBase.Text': {
        marginLeft: 0,
      },
      'NativeBase.IconNB': {
        marginRight: 0,
        marginLeft: 16,
      },
      'NativeBase.Icon': {
        marginRight: 0,
        marginLeft: 16,
      },
    },
    '.iconRight': {
      'NativeBase.Text': {
        marginRight: 0,
      },
      'NativeBase.IconNB': {
        marginLeft: 0,
        marginRight: 16,
      },
      'NativeBase.Icon': {
        marginLeft: 0,
        marginRight: 16,
      },
    },
    '.picker': {
      'NativeBase.Text': {
        '.note': {
          fontSize: 16,
          lineHeight: null,
        },
      },
    },

    '.onboarding': {
      backgroundColor: variables.geminiBlue,
      borderRadius: 4,

      'NativeBase.Text': {
        fontFamily: variables.fontF,
      },

      '.disabled': {
        backgroundColor: variables.geminiDisabled,
        opacity: 0.5,
      },
    },

    '.blue': {
      backgroundColor: variables.blue2,
      borderRadius: 4,

      'NativeBase.Text': {
        fontFamily: variables.fontFamilyMedium,
      },

      '.disabled': {
        opacity: 0.5,
      },
    },

    '.blueOutline': {
      borderColor: variables.blue5,
      backgroundColor: 'white',
      borderWidth: 1,

      'NativeBase.Text': {
        color: variables.gray2,
        fontFamily: variables.fontFamilyMedium,
      },
    },

    '.noBorderRadius': {
      borderRadius: 0,
    },

    paddingVertical: variables.buttonPadding,
    backgroundColor: variables.btnPrimaryBg,
    borderRadius: variables.borderRadiusBase,
    borderColor: variables.btnPrimaryBg,
    borderWidth: null,
    height: 45,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    elevation: 2,
    shadowColor: platformStyle === 'material' ? variables.brandDark : undefined,
    shadowOffset: platformStyle === 'material' ? { width: 0, height: 2 } : undefined,
    shadowOpacity: platformStyle === 'material' ? 0.2 : undefined,
    shadowRadius: platformStyle === 'material' ? 1.2 : undefined,
    alignItems: 'center',
    justifyContent: 'space-between',
  };
  return buttonTheme;
};
