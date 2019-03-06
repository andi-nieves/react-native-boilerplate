import variable from './../variables';

export default (variables = variable) => {
  const textTheme = {
    fontSize: variables.DefaultFontSize,
    fontFamily: variables.fontFamilyBook,
    color: variables.defaultTextColor,
    '.note': {
      color: 'black',
      fontSize: variables.noteFontSize,
    },

    '.white': {
      color: 'white',
    },
    '.blue1': {
      color: variables.blue1,
    },
    '.blue4': {
      color: variables.blue4,
    },
    '.gray11': {
      color: variables.gray11,
    },
    '.gray12': {
      color: variables.gray12,
    },
    '.gray3': {
      color: variables.gray3,
    },
    '.gray5': {
      color: variables.gray5,
    },
    '.gray5b': {
      color: variables.gray5b,
    },
    '.red2': {
      color: variables.red2,
    },

    '.fontBook': {
      fontFamily: variables.fontFamilyBook,
    },
    '.fontBlack': {
      fontFamily: variables.fontFamilyBlack,
    },
    '.fontLight': {
      fontFamily: variables.fontFamilyLight,
    },
    '.fontMedium': {
      fontFamily: variables.fontFamilyMedium,
    },
    '.fontBold': {
      fontFamily: variables.fontFamilyBlackBold,
    },

    '.textUnderline': {
      textDecorationLine: 'underline',
    },
    '.textCenter': {
      textAlign: 'center',
    },

    '.textSmall': {
      fontSize: variables.fontSizeSmall,
    },
    '.textXSmall': {
      fontSize: variables.fontSizeXSmall,
    },
    '.textNormal': {
      fontSize: variables.fontSizeBase,
    },
    '.textLarge': {
      fontSize: variables.fontSizeLg,
    },
    '.textXLarge': {
      fontSize: variables.fontSizeXLg,
    },
    '.textXXLarge': {
      fontSize: variables.fontSizeXXLg,
    },
  };

  return textTheme;
};
