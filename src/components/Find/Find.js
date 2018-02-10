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




const FindScreen = ({ navigation }) => (
    <View style={styles.container}>
        <Text>发现音乐</Text>
        <Button
            onPress={() => navigation.push('Login',{title:'123'})}
            title="登录"
        />
    </View>
);



FindScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default FindScreen;