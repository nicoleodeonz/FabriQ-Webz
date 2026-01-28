import React, { useState } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CartPage({ navigation}) {

    const backBtn = () => {
        console.log('This button goes back to product details (for now).')
        navigation.navigate('ProdDetails'); 
    };

    const contBtn = () => {
        console.log('This button goes back to home page.')
    }

    return (
      <View >
        <TouchableOpacity onPress={backBtn}>
            <Image style={styles.logo} source={require('../assets/backarrow.png')}/>
        </TouchableOpacity>

        <Text style={styles.title}> Shopping Cart </Text>
        <Text style={styles.text}> Here is what's in your cart! </Text>

        <View style={styles.divider}/>

        <Text style={styles.text2}>Your cart is empty</Text>
        <Text style={styles.text3}>Add some products to get started!</Text>

        <TouchableOpacity style={styles.addButton} onPress={contBtn}>
            <Text style={styles.addText}>Continue Shopping</Text>
        </TouchableOpacity>

      </View>
    )
}

const styles = StyleSheet.create({
  logo: {
    width: 20,
    height: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 50,
    marginLeft:30,
  },
  title: {
    fontSize: 28,
    marginLeft: 70,
    marginTop: -40,
    color: '#222222',
  },
  text: {
    opacity: 0.5,
    marginTop: 5,
    marginLeft: 75,
    color: '#222222',
  },
  divider: {
    marginTop: 20,
    borderBottomColor: '#a8a8a8',
    borderBottomWidth: 0.01,
    alignSelf:'stretch'
  },
  text2: {
    fontSize: 20,
    marginTop: 270,
    textAlign: 'center',
    color: '#222222',
  },
  text3: {
    opacity: 0.5,
    fontSize: 14,
    marginTop: 15,
    textAlign: 'center',
    color: '#222222',
  },
  addButton: {
    width:300,
    height:60,
    backgroundColor: '#222222',
    borderRadius: 7,
    marginTop: 50,
    marginLeft: 65,
    
  },
  addText: {
    color: '#d3d3d3',
    textAlign: 'center',
    paddingTop: 20,
  },
});
