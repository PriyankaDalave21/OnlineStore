import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';


const HelloWorld = () => {
    return (
        <View style={styles.container}>
            <Animatable.Text
                animation="fadeInUp"
                duration={1000}
                delay={1000}
                style={{ margin: 20, fontSize: 40, fontWeight: 'bold', color: 'black' }}
            >
                HelloWord 
            </Animatable.Text>
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

export default HelloWorld;
