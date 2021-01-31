import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconFone from 'react-native-vector-icons/Feather';
import {RectButton} from 'react-native-gesture-handler';
import {Animated, StyleSheet, Text, View} from 'react-native';

export default function Home() {

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View styles={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
            }}>
                <RectButton onPress={() => navigation.navigate('Rotograma')}
                            style={styles.containerButtons}>
                    <Icon style={styles.icon} color="#375BF4" backgroundColor="#FFFFFF" name='truck' size={20}/>
                    <Text style={styles.textButton}> Rotograma </Text>
                </RectButton>

                <RectButton onPress={() => navigation.navigate('Rotograma')}
                            style={styles.containerButtons}>
                    <Icon style={styles.icon} color="#375BF4" backgroundColor="#FFFFFF" name='map-marked-alt'
                          size={20}/>
                    <Text style={styles.textButton}> Vamos lá? </Text>
                </RectButton>

            </View>

            <View style={styles.voiceIcon}>
                <IconFone name="mic" color="#FFF" size={25}/>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    containerButtons: {
        borderRadius: 4,
        marginBottom: 21,
        backgroundColor: '#FFF',
        borderWidth: 5,
        borderColor: '#375BF4',
        width: 255,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    textButton: {
        color: '#375BF4',
    },
    icon: {
        marginRight: 5,
    },
    buttonVoice: {
        backgroundColor: '#375BF4',

    },
    buttonRotograma: {
        width: 255,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,

    },
    container: {
        backgroundColor: '#E5E5E5',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 3,
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 1,
    },
    voiceIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 68,
        height: 68,
        borderRadius: 100,
        backgroundColor: '#375BF4',
    },
});
