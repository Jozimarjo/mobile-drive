import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {Alert, Animated, KeyboardAvoidingView, StatusBar, StyleSheet, Text, View} from 'react-native';
import CustomTextInput from '../../components/TextInput';
import CustomButton from '../../components/Button';
import api from '../../services/api';

export default function SignUp() {
    const [opacity] = useState(new Animated.Value(1));
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [cnh, setCnh] = useState('');
    const [phone, setPhone] = useState('');
    const [cel, setCel] = useState('');
    const [ident, setIdent] = useState('');
    const [key, setKey] = useState('');
    const [next, setNext] = useState(false);

    const navigation = useNavigation();

    const handlerNext = async () => {
        setNext(!next);
    };

    const submit = async () => {
        try {
            let result = await api.post('user', {
                name: name,
                email: email,
                password: password,
            });
            setName('');
            setEmail('');
            setPassword('');
            navigation.navigate('SignIn');
        } catch (e) {
            Alert.alert(
                'Erro na autenticação',
                'Ocorreu um erro ao fazer login, cheque as credenciais.',
            );
            setEmail({value: email.value, error: true});
            setPassword({value: password.value, error: true});
        }
        ;
    };

    const checkNext = (value, value2) => {

        return !next ? value : value2;
    };
    return (
        <>
            <StatusBar barStyle="light-content" backGroundColor="#7159c1"/>
            <KeyboardAvoidingView style={styles.backgroundDark}>
                {checkNext(<Text style={styles.title}> Nova Conta</Text>, <Text style={styles.title}>Estamos quase
                    lá...</Text>)}
                <View style={{justifyContent: 'center', alignItems: 'flex-start'}}>
                    {checkNext(
                        <>
                            <Text style={styles.subTitle}> Para prosseguirmos </Text>
                            <Text style={styles.subTitle}> Preencha as informações solicitadas </Text>
                        </>
                        , <Text style={styles.subTitle}> Só mais um pouco </Text>,
                    )}

                </View>

            </KeyboardAvoidingView>


            {
                checkNext(<KeyboardAvoidingView style={styles.background}>
                        <View style={[styles.container, {
                            opacity: opacity,
                        }]}>
                            <CustomTextInput
                                title={'Nome'}
                                placeholder={'Nome'}
                                value={name}
                                onChangeText={(e) => {
                                    setName(e);
                                }}
                            />
                            <CustomTextInput
                                title={'Email'}
                                placeholder={'email@addres.com'}
                                value={email}
                                onChangeText={(e) => {
                                    setEmail(e);
                                }}
                            />
                            <CustomTextInput
                                title={'SENHA'}
                                placeholder={'****************'}
                                secureTextEntry
                                value={password}
                                onChangeText={(e) => {
                                    setPassword(e);
                                }}
                            />
                            <CustomTextInput
                                title={'Cpf'}
                                value={cpf}
                                type="numeric"
                                placeholder={'99999999999'}
                                onChangeText={(e) => {
                                    setCpf(e);
                                }}
                            />
                            <CustomTextInput
                                title={'Cnh'}
                                placeholder={'99999999999'}
                                type="numeric"
                                value={cnh}
                                onChangeText={(e) => {
                                    setCnh(e);
                                }}
                            />
                            <CustomButton title={'PROSSEGUIR'} onPress={handlerNext}/>
                        </View>
                    </KeyboardAvoidingView>,
                    <KeyboardAvoidingView style={styles.background}>
                        <View style={[styles.container, {
                            opacity: opacity,
                        }]}>
                            <CustomTextInput
                                title={'Telefone'}
                                placeholder={'92 1234-5671'}
                                value={phone}
                                type="phone-pad"
                                onChangeText={(e) => {
                                    setPhone(e);
                                }}
                            />
                            <CustomTextInput
                                title={'Celular'}
                                placeholder={'92 9999-9999'}
                                value={cel}
                                type="phone-pad"
                                onChangeText={(e) => {
                                    setCel(e);
                                }}
                            />
                            <CustomTextInput
                                title={'Tipo de Identificação'}
                                placeholder={'Dispositivo identificado'}
                                value={ident}
                                onChangeText={(e) => {
                                    setIdent(e);
                                }}
                            />
                            <CustomTextInput
                                title={'Chave Identificador'}
                                placeholder={'000000'}
                                value={key}
                                type="numeric"
                                onChangeText={(e) => {
                                    setKey(e);
                                }}
                            />
                            {
                                checkNext(
                                    <CustomButton title={'PROSSEGUIR'} onPress={handlerNext}/>,
                                    <>
                                        <CustomButton title={'CADASTRAR'} onPress={submit}/>
                                        <CustomButton title={'VOLTAR'} onPress={handlerNext}/>
                                    </>,
                                )
                            }
                        </View>
                    </KeyboardAvoidingView>,
                )
            }
        </>

    );
}

const styles = StyleSheet.create({
    backgroundDark: {
        paddingLeft: 59,
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#001B2E',
    },
    title: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 36,
        color: '#FFFFFF',
        marginBottom: 8,

    },
    subTitle: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 14,
        lineHeight: 21,
        color: '#C4C4C4',

    },
    background: {
        flex: 2,
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
        color: '#6D6767',
    },

});
