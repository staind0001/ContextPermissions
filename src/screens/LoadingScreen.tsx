/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
/* eslint-disable comma-dangle */
import React from 'react';
import { View,ActivityIndicator, Text } from 'react-native';
//import { useSafeAreaInsets } from 'react-native-safe-area-context';


export const LoadingScreen = () => {
 
    //const {top} = useSafeAreaInsets();


    return (
        (
            <View
               
                 style={{
                     flex:1,
                     justifyContent:'center',
                     alignItems:'center'
                 }}
            >
 
                <ActivityIndicator 
                     size={150}
                     color='grey'
                />
 
                <Text
                     style={{
                         
                         color:'grey'
                     }}
                >
                    Loading...
                </Text>
 
            </View>
        )
    )
}
