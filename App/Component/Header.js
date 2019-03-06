import React from 'react';
import { Image } from 'react-native';
import {
  Header, Button, Left, Right, Body
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderBackground from '../Assets/HeaderBackground.png';
import Logo from '../Assets/Logo.png';

const SwimplyHeader = () => (
  <Header style={style.header}>
    <Image source={HeaderBackground} style={style.imageBg} />
    <Left>
      <Button transparent>
        <Icon name="angle-left" size={25} color="#fff" />
      </Button>
    </Left>
    <Body>
      <Image source={Logo} style={style.logo} />
    </Body>
    <Right>
      <Button transparent>
        <Icon name="angle-right" size={25} color="#fff" />
      </Button>
    </Right>
  </Header>
);

export default SwimplyHeader;

const style = {
  header: { backgroundColor: '#34BEE8', overflow: 'hidden' },
  imageBg: { width: '100%', height: 84, position: 'absolute' },
  logo: { width: 80, height: 25, resizeMode: 'stretch' }
};
