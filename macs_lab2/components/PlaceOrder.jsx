import React, { useState } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PlaceOrder({ navigation}) {

    const back = () => {
        console.log('This button goes back to main menu but since it isnt connected yet, it will be to the product details instead.')
        navigation.navigate('ProdDetails'); 
    };

    return (
    <TouchableOpacity onPress={back} style={styles.container}>
        <View >
            <View style={styles.logobg}>
                <Image style={styles.logo} source={require('../assets/check.png')}></Image>
            </View>
            
            <Text style={styles.title}>Order Confirmed!</Text>
            <Text style={styles.desc}> Your order has been placed successfully. </Text>
            <Text style={styles.text}>You will receive a confirmation email shortly.</Text>
        </View>
    </TouchableOpacity>
      
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        marginTop: 10,
        marginLeft: 22,
        opacity: 0.7,
        color: '#222222',
    },
    desc: {
        opacity: 0.7,
        fontSize: 16,
        marginTop: 5,
        marginLeft: 10,
        color: '#222222',
    },
    title: {
        fontSize: 28,
        marginTop: 20,
        color: '#222222',
        textAlign: 'center',
    },
    logobg: {
        height: 100,
        width: 100,
        backgroundColor: '#cecece',
        alignContent: 'center',
        borderRadius: 100,
        marginLeft:90,
    },
    logo: {
        width: 50,
        height: 50,
        marginTop: 25,
        marginLeft: 25,
        opacity: 0.7,
    },
    container: {
        flex: 1,                 
        justifyContent: 'center', 
        alignItems: 'center',     
  },
});
