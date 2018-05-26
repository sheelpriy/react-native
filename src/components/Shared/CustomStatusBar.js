import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Constants } from 'expo';

const styles = StyleSheet.create({
    statusBar: {
        backgroundColor: "#FF1111",
        height: Constants.statusBarHeight,
    },

    // rest of the styles
});

class CustomStatusBar extends Component {

    render() {

        return (
            <View>
                <View style={styles.statusBar} />
                {/* rest of the content */}
            </View>
        );
    }
}


export default CustomStatusBar;


