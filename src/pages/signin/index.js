import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
    Alert,
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

/* Components */
import CustomTextInput from "../../components/TextInput";
import CustomButton from "../../components/Button";

/* Utils */ 
import api from '../../services/api';

export default function SignIn() {
    const [offset] = useState(new Animated.ValueXY({x: 0, y: 80}));
    const [opacity] = useState(new Animated.Value(0));
    const [email, setEmail] = useState({value: '', error: false});
    const [password, setPassword] = useState({value: '', error: false});
    const navigation = useNavigation();
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
        async function a (){
            let a = await api.get('user/find/')
                console.log(a.data);
        }
        a();
    }, []);

    const handlerSingIn = async() => {
        try{
            let result = await api.post('user/signIn/',{
                email: email.value, 
                password: password.value
            })
            setEmail({ value: '', error: false});
            setPassword({ value: '', error: false});
            navigation.navigate('Home');
        }catch(e){
            Alert.alert(
                'Erro na autenticação',
                'Ocorreu um erro ao fazer login, cheque as credenciais.',
            );
            setEmail({ value: email.value, error: true});
            setPassword({ value: password.value, error: true});
        };
    }

    return (
        <>
            <StatusBar barStyle="light-content" backGroundColor="#7159c1"/>
            <KeyboardAvoidingView style={styles.background}>
                <View style={styles.containerLogo}>
                    <Image source={require('../../assets/driveonlogo.png')}/>
                </View>
                <Animated.View style={[styles.container, {
                    opacity: opacity,
                    transform: [{
                        translateY: offset.y,
                    }],
                }]}>
                    <CustomTextInput 
                        title={'EMAIL'} 
                        placeholder={'email@addres.com'}
                        value={email.value}
                        error={email.error}
                        onChangeText={(e)=>{setEmail({value: e, error: email.error})}}
                    />
                    <CustomTextInput 
                        title={'SENHA'} 
                        placeholder={'****************'}
                        secureTextEntry
                        value={password.value}
                        error={password.error}
                        onChangeText={(e)=>{setPassword({value: e, error: password.error})}}
                    />
                    <CustomButton title={'LOGIN'} onPress={handlerSingIn}/>
                    <TouchableOpacity style={styles.btnRegister}>
                        <Text style={styles.text} onPress={() => {
                            navigation.navigate('SignUp');
                        }}><Text style={styles.registerNow}>Criar </Text>uma conta</Text>
                    </TouchableOpacity>
                {/*
                    <TextInput style={styles.input} placeholder="email"
                               autoCorrect={false}
                               onChangeText={() => {
                               }}/>
                    <TextInput style={styles.input} placeholder="Senha"
                               autoCorrect={false}
                               onChangeText={() => {
                               }}/>

                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Home');
                    }} style={styles.btnSubmit}>
                        <Text style={styles.submitText}>Acessar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnRegister}>
                        <Text style={styles.registerText}>Não tem cadastro?</Text>
                        <Text onPress={() => {
                            navigation.navigate('SignUp');
                        }} style={styles.registerNow}>Cadastre-se agora</Text>
                    </TouchableOpacity>
                */}
                </Animated.View>
            </KeyboardAvoidingView>
        </>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    containerLogo: {
        flex: 1,
        justifyContent: 'center',
    },
    container: {
        flex: 1,
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
        flex: 1,
        marginTop: 30,
        marginBottom: 50,
        flexDirection: 'row',
        alignItems: 'flex-end',
        
    },
    registerText: {
        color: '#FFF',
        marginRight: 3,
    },
    registerNow: {
        color: '#001B2E',
    },
    text: {
        color: '#6D6767'
    }

});
