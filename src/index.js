import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';
import {Animated, StatusBar, StyleSheet, View} from 'react-native';

export default function App() {
    const [offset] = useState(new Animated.ValueXY({x: 0, y: 80}));
    const [opacity] = useState(new Animated.Value(0));
    useEffect(() => {
        Animated.parallel([
            Animated.spring(offset.y, {
                toValue: 0,
                speed: 4,
                useNativeDriver: true,
                bounciness: 30,
            }),
            Animated.timing(opacity, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true,

            }),
        ]).start();

    }, []);


    return (
            <NavigationContainer>
                <StatusBar barStyle="light-content" backGroundColor="#7159c1"/>
                <View style={{flex: 1, backgroundColor: '#7159c1'}}>
                    <Routes/>
                </View>
            </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#191919',
    },
    containerLogo: {
        flex: 1,
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        paddingBottom: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
    },
    input: {
        backgroundColor: '#FFF',
        width: '90%',
        marginBottom: 15,
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        padding: 10,

    },
    btnSubmit: {
        backgroundColor: '#35AAFF',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
    },
    submitText: {
        color: '#FFF',
        fontSize: 18,
    },
    btnRegister: {
        flexDirection: 'row',
        marginTop: 10,
    },
    registerText: {
        color: '#FFF',
        marginRight: 3,
    },
    registerNow: {
        color: '#35AAFF',
    },

});
