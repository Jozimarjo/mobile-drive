import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Animated, StyleSheet, TextInput, View} from 'react-native';
import IconFont from 'react-native-vector-icons/Feather';

export default function Voice() {

    const [offset] = useState(new Animated.ValueXY({x: 0, y: 80}));
    const [opacity] = useState(new Animated.Value(0));
    const navigation = useNavigation();

    return (
            <View style={styles.voiceIcon}>
                <IconFont name="mic" color="#000" size={25}/>
            </View>
    );
}

const styles = StyleSheet.create({
    voiceIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 48,
        height: 48,
        borderRadius: 100,
        backgroundColor: 'rgba(55, 91, 244, 0.3)',
    }
});
