import React, {} from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const CustomButton = (props) => {

    return (
        <View style={style.view}>
            <TouchableOpacity {...props} style={style.button}>
                <Text style={style.text}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({
    button: {
        backgroundColor: '#001B2E',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 20,
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: "500"
    },
    view: {
        width: '100%'
    }
})

export default CustomButton;