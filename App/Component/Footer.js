import React from 'react';
import {
  Footer, FooterTab, Button, Icon, Text
} from 'native-base';

const SwimplyFooter = () => (
  <Footer style={{ backgroundColor: '#F6F6F6' }}>
    <FooterTab>
      <Button>
        <Icon style={style.icon} name="apps" />
        <Text style={style.text}>Profile</Text>
      </Button>

      <Button>
        <Icon style={style.icon} name="apps" />
        <Text style={style.text}>Profile</Text>
      </Button>

      <Button>
        <Icon style={style.icon} name="apps" />
        <Text style={style.text}>Profile</Text>
      </Button>

      <Button>
        <Icon style={style.icon} name="apps" />
        <Text style={style.text}>Profile</Text>
      </Button>

      <Button>
        <Icon style={style.icon} name="apps" />
        <Text style={style.text}>Profile</Text>
      </Button>
    </FooterTab>
  </Footer>
);

const style = {
  icon: {
    color: '#9D9D9D'
  },
  text: {
    color: '#9D9D9D',
    fontSize: 9
  }
};
export default SwimplyFooter;
