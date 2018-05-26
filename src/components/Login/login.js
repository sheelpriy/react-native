import React, { Component } from 'react';
import { Alert, View, Text, TouchableOpacity, Keyboard, StyleSheet, TouchableHighlight, NetInfo } from 'react-native';
import { connect } from 'react-redux';

import * as appConstants from '../../constants/appKeys';

import CustomStatusBar from '../Shared/CustomStatusBar'
import {setLoggedIn, connectionState} from '../../redux/app-redux'

async function getLocationAsync() {
    const { Location, Permissions } = Expo;
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status === 'granted') {
      return Location.getCurrentPositionAsync({enableHighAccuracy: true});
    } else {
      throw new Error('Location permission not granted');
    }
  }



const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn,
        isConnected: state.isConnected,
        userData: state.userData,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLoggedIn: (text) => { dispatch(setLoggedIn(text)) },
        connectionState: (text) => { dispatch(connectionState(text)) },
    };
}


class Login extends Component {

    getLocationAsync()
    

    constructor(props) {
        super(props)

        this.state = ({
                isLoggedIn: false,
                userData:{},
                isInternetConneced: true,
           })
    }

    componentDidMount() {
        NetInfo.isConnected.addEventListener('change', this._handleConnectionChange);
      }
    
      componentWillUnmount() {
        NetInfo.isConnected.removeEventListener('change', this._handleConnectionChange);
      }
    
      _handleConnectionChange = (isConnected) => {
        this.props.connectionState( isConnected );
      };


    async loginWithFacebook() {

        //ENTER YOUR APP ID 
        const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(appConstants.FACEBOOK_APPID, { permissions: ['public_profile'] })

        if (type == 'success') {

            const response = await fetch(
                `https://graph.facebook.com/me?access_token=${token}`);
            Alert.alert(
                'Logged in!',
                `Hi ${(await response.json()).name}!`,
            );
            const { navigate } = this.props.navigation;
            navigate("Mapper", { screen: "Mapper" })
            //make API call.
            /*  fetch('http://example.com/movies.json')
                 .then(function (response) {
                     return response.json();
                 })
                 .then(function (myJson) {
                     console.log(myJson);
                 }); */
        }
    }



    render() {
        const { navigate } = this.props.navigation;
        console.log('appconstants', appConstants);
        return (
            <View style={styles.container}>
                {/* <CustomStatusBar/> */}
                <View style={styles.innerContainer}>
                    <TouchableHighlight
                        style={styles.button}>
                        <Text style={styles.text} onPress={() => this.loginWithFacebook()}>Login With facebook </Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}



// export default Login;

export default connect(mapStateToProps, mapDispatchToProps)(Login);



const styles = StyleSheet.create({

    text: {
        color: '#052e49'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    innerContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#f5f5f5',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },

});

