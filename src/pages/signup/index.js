import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Feather'
import {NavigationContainer} from '@react-navigation/native';

import {
    Animated,
    Image,
    KeyboardAvoidingView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function SignUp() {
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
        <>
                <StatusBar barStyle="light-content" backGroundColor="#7159c1"/>
                <KeyboardAvoidingView style={styles.background}>
                    <View style={styles.containerLogo}>
                        <Image source={require('../../assets/logo.png')}/>
                    </View>
                    <Animated.View style={[styles.container,

                    ]}>
                        <TextInput style={styles.input} placeholder="Nome"
                                   autoCorrect={false}
                                   onChangeText={() => {
                                   }}/>
                        <TextInput style={styles.input} placeholder="CPF"
                                   autoCorrect={false}
                                   onChangeText={() => {
                                   }}/>
                        <TextInput style={styles.input} placeholder="CNH"
                                   autoCorrect={false}
                                   onChangeText={() => {
                                   }}/>

                        <TouchableOpacity style={styles.btnSubmit}>
                            <Text style={styles.submitText}>Acessar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnRegister}>
                            <Text style={styles.registerText}>Não tem cadastro?</Text>
                            <Text style={styles.registerNow}>Cadastre-se agora</Text>
                        </TouchableOpacity>
                    </Animated.View>
                </KeyboardAvoidingView>
            <TouchableOpacity style={styles.back}>
                <Text style={styles.backText}> Voltar para logon</Text>
            </TouchableOpacity>
        </>
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
    back: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: '#191919',
        borderColor: '#302e3b',
        padding: 16,
        borderTopWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    backText: {
        color: '#FFF',
    },
});
