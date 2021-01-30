import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from '../pages/signup';
import SignIn from '../pages/signin';

const Auth = createStackNavigator();

const AuthRoutes= () => (
    <Auth.Navigator
        screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#191919'}
    }}
    >
        <Auth.Screen name="SignIn" component={SignIn}/>
        <Auth.Screen name="SignUp" component={SignUp}/>

    </Auth.Navigator>
);
export default AuthRoutes;
