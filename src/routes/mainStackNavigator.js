import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import  Login  from '../components/Login/login';
import  Mapper from '../components/Mapper/mapper';
// import HomeTab from './homeTabNavigator';

const Root = createStackNavigator({
  Mapper: {
    screen: Mapper,
    navigationOptions: () => ({
      title: 'Map',
    }),
  },
  Login: {
    screen: Login,
    navigationOptions: () => ({
      title: 'Login',
    }),
  },
}, {
  navigationOptions: {
    gesturesEnabled: false,
  },
  initialRouteName: 'Login',
  headerMode: 'float',

});

class Nav extends Component {
  render() {
    return (
      <Root />
    )
  }
}
      
export default Nav

// export default Root;
