import React from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});




const LoginScreen = ({ navigation }) => (
    <View style={styles.container}>
        <Text style={styles.welcome}>
            Screen A
        </Text>
        <Text style={styles.instructions}>
            This is great
        </Text>
    </View>
);



LoginScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default LoginScreen;