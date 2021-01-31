import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const CustomTextInput = (props) => {
    return(
        <View style={props.error ? style.viewError : style.view}>
            <Text style={style.text}>{props.title}</Text>
            <TextInput {...props} style={style.input} placeholder={props.placeholder} />
        </View>
    );
}

const style = StyleSheet.create({
    view: {
        backgroundColor: '#fff',
        borderBottomColor: '#001B2E',
        borderBottomWidth: 1,
        width: '100%',
        marginTop: 20
    },
    viewError: {
        backgroundColor: '#fff',
        borderBottomColor: '#FFCC00',
        borderBottomWidth: 1,
        width: '100%',
        marginTop: 20
    },
    text: {
        width: '100%',
        paddingBottom: 0,
        fontSize: 14,
        fontWeight: '400',
    },
    input: {
        width: '100%',
        paddingBottom: 5,
        paddingTop: 0,
        paddingLeft: 0,
        fontSize: 14,
        fontWeight: '400',
    }
});

export default CustomTextInput;