import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import {StyleSheet, View, Button} from 'react-native';

export default function Rotograma() {

    return (
        <View style={{flex: 1}}>
            <MapView
                style={styles.mapView}
                region={{
                    latitude: -3.0850058,
                    longitude: -60.0077936,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.02,
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
                <View style={{width: '100%', height: 150, backgroundColor: 'powderblue'}}>

                </View>

                {/*<Voice/>*/}
            </View>
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
