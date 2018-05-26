import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Keyboard, StyleSheet } from 'react-native';
import { connect } from 'react-redux';



const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn,
        isConnected: state.isConnected,
        userData: state.personData,
    };
}


class Mapper extends Component {



    render() {

        return (
            <View>
                <Text style={styles.text}>this is Mapper screen </Text>
                <Text>login status:{this.props.isLoggedIn}</Text>
                <Text>intenet status:{this.props.isConnected}</Text>
                <Text>user : {this.props.userData.name}- {this.props.userData.id}</Text>
            </View>
        );
    }
}


// export default Mapper;
export default connect(mapStateToProps)(Mapper);


const styles = StyleSheet.create({
    text: {
        color: '#052e49'
    },
});

