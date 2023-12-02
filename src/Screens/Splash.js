import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login');
        }, 2000);
    }, []);

    return (
        <View style={styles.container}>
            <Animatable.Image
        animation="zoomInDown" 
        duration={2000} 
        delay={200}
        style={{ resizeMode:'cover',height:300,width:300 ,borderRadius:40}}
        source={require('../Images/logo.png')}
      >

      </Animatable.Image>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
    },
});

export default Splash;


