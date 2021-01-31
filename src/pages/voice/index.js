import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Animated, StyleSheet, TextInput, View} from 'react-native';

export default function Voice() {

    const [offset] = useState(new Animated.ValueXY({x: 0, y: 80}));
    const [opacity] = useState(new Animated.Value(0));
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/*<Button title="teste"/>*/}
            {/*<TextInput style={styles.input} placeholder="email"*/}
            {/*           autoCorrect={false}*/}
            {/*           onChangeText={() => {*/}
            {/*           }}/>*/}
        </View>
    );
}

const styles = StyleSheet.create({
    mapView: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    container: {
        flexDirection: 'row',
        backgroundColor: '#e22b2b',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 3,
    },
    labelMarketText: {
        marginTop: 8,
        marginRight: 8,
        marginBottom: 8,
        marginLeft: 8,
        fontSize: 14,
        color: '#333',
    },
    input:{
        backgroundColor: '#FFF',
        width: '90%',
        marginBottom: 15,
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        padding: 10,
    }
});
