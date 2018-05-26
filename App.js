import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Provider } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';


import { store } from './src/redux/app-redux';



import './src/constants/appStyles';


import AppNavigator from './src/routes/mainStackNavigator'

export default class App extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isLoggedIn: false,
  //     isAuthenticated: false,
  //     isInternetConnected: true,
  //   };
  // }




  render() {
    return (
      <Provider store={store}>
        <SafeAreaView
          style={{ flex: 1, backgroundColor: EStyleSheet.value('$purple') }}
          forceInset={{ vertical: 'never' }}>
          <StatusBar backgroundColor="red" barStyle="dark-content" />
          <AppNavigator style={styles.container} />
        </SafeAreaView>
      </Provider>
    );
  }
}

// export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#052e49'
  },
});
