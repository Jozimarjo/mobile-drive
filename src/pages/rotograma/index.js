import React, {useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import {Animated, SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native';
import Voice from '../voice';
import IconFone from 'react-native-vector-icons/FontAwesome5';
import Lottie from 'lottie-react-native';
import microphone from '../../../microphone.json';

export default function Rotograma() {
    const [openVoice, setOpenVoice] = useState(true);
    const [openVoiceImg, setOpenVoiceImg] = useState(false);
    const [heightContainer, setHeightContainer] = useState(97);


    const expanded = () => {
        setOpenVoice(true);
        setOpenVoiceImg(false);
        setHeightContainer(97);
    };
    const collapsed = () => {
        setOpenVoice(false);
        setHeightContainer(25);
    };
    const openVoiceListen = () => {
        setHeightContainer(500);
        setOpenVoiceImg(true);
        setOpenVoice(false);
    };
    return (
        <View style={{flex: 1}}>
            <MapView
                style={styles.mapView}
                region={{
                    latitude: -3.0850058,
                    longitude: -60.0077936,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1,
                }}
                showsUserLocation={true}
            >
                <Marker showCallou title="Posto Guaiara - Pernoite" description="Parada 2 as 21h saida as 07h"
                        coordinate={{
                            latitude: -3.06602845552,
                            longitude: -60.000932173,
                        }}>
                </Marker>

                <Marker
                    showCallou title="Posto Guaiara - Pernoite" description="Parada 2 as 21h saida as 07h"
                    coordinate={{
                        latitude: -3.0850058,
                        longitude: -60.0077936,
                    }}>
                </Marker>

                <Marker
                    showCallou title="Posto Atem - Saida" description="saida as 07h"
                    coordinate={{
                        latitude: -3.0389552,
                        longitude: -59.9868914,
                    }}>
                </Marker>

                <Marker
                    showCallou title="Blitz Conveniência - Destino" description="Nilo Penha as 09h a.m"
                    coordinate={{
                        latitude: -3.0619159,
                        longitude: -59.9759095,
                    }}>
                </Marker>
            </MapView>
            <View
                style={{
                    position: 'absolute',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    height: '100%',
                    flexDirection: 'row',
                    flex: 1,
                }}>

                <Animated.View style={[styles.containerVoice, {height: heightContainer}]}>

                    {
                        openVoice ?
                            <IconFone style={{marginBottom: 5}} onPress={collapsed} name="angle-down" color="rgba(0, 0, 0, 0.3)" size={25}/>
                            : <IconFone onPress={expanded} name="angle-up" color="rgba(0, 0, 0, 0.3)" size={25}/>

                    }

                    <TouchableOpacity onPress={openVoiceListen}>
                        {openVoice ? <Voice/> : false}
                    </TouchableOpacity>
                    {
                        openVoiceImg ? (<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Lottie autoSize source={microphone} autoPlay loop/>
                        </View> ): false
                    }


                </Animated.View>

            </View>
        </View>

    );

};

const styles = StyleSheet.create({
    mapView: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    containerVoice: {
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#FFF',
        opacity: 0.8,
    },
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        elevation: 1,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 3,
        width: 150,
    },
    labelMarketText: {
        marginTop: 8,
        marginRight: 8,
        marginBottom: 8,
        marginLeft: 8,
        fontSize: 14,
        color: '#333',
    },
});
