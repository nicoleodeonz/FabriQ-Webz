import React, { useState } from 'react'
import { Text, View, Image, StyleSheet, Button, TouchableOpacity, ScrollView, Animated } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProductDetails({ navigation, route }) {

    const [quantity, setQuantity] = useState(1);
    const [showTopBar, setShowTopBar] = useState(false);
    const [topBarAnim] = useState(new Animated.Value(0));

    const cartQty = route.params?.cartQty ?? 0;
    const price = 1499;
    const total = price * quantity;

    const cartBtn = () => {
        if(cartQty == 0){
          navigation.navigate('CartPage'); 
        console.log('This button navigates to the cart page.')
        }
        else if(cartQty >= 1){
          navigation.navigate('AddPage', { existingQty: cartQty, from: 'product' });
          console.log('This button navigates to the added in cart page.')
        }
    };

    const addBtn = () => {
        navigation.navigate('AddPage', { addedQty: quantity, existingQty: cartQty, from: 'product' });
        console.log('This button navigates to the added in cart page.')
    }

    return (

      <View style={{ flex: 1 }}>
            <Animated.View style={[styles.topBar, { transform: [{ translateY: topBarAnim.interpolate({ inputRange: [0,1], outputRange: [-60,0] }) }] }]}>
              
              <TouchableOpacity onPress={() => console.log('this goes back to homepage')}>
                <Text style={styles.backBtn}>‹</Text>
              </TouchableOpacity>

              <Text style={styles.topTitle}>Product Details</Text>

            </Animated.View>

            <ScrollView onScroll={e => Animated.timing(topBarAnim, { toValue: e.nativeEvent.contentOffset.y > 120 ? 1 : 0, duration: 300, useNativeDriver: true }).start()} scrollEventThrottle={16}>

              <Image style={styles.logo} source={require('../assets/greensofa.png')}></Image>
              <Text style={styles.text}>Furniture</Text>
              <Text style={styles.title}>Modern Sofa</Text>
              <Text style={styles.priceText}>₱1,499</Text>

              <View style={styles.stock}>
                <Text style={styles.stockText}>In Stock</Text>
              </View>

              <View style={styles.divider}/>

              <Text style={styles.desc}>Description</Text>
              <Text style={styles.descText}>A beautifully crafted modern sofa with clean
                lines and comfortable seating. Perfect for
                any contemporary living space.
              </Text>

              <View style={styles.divider}/>

              <Text style={styles.desc}>Quantity</Text>

              <View style={styles.qty}> 
                <TouchableOpacity onPress={() => setQuantity(Math.max(0, quantity - 1))}>
                  <Text style={styles.dec}>—</Text>
                </TouchableOpacity>
           

              <Text style={styles.qtyText}>{quantity}</Text>
                
                <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
                  <Text style={styles.inc}>＋</Text>
                </TouchableOpacity>
                
              </View>

            <Text style={styles.total}>Total</Text>
            <Text style={styles.totalAmt}>₱{total.toLocaleString()}.00</Text>
            <Text> </Text>

            </ScrollView>

            <View style={styles.divider}/>

            <View>
              <TouchableOpacity style={styles.addButton} onPress={addBtn}>
                  <Text style={styles.addText}>Add to Cart</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.cartButton} onPress={cartBtn}>
                  <Image style={styles.cartLogo} source={require('../assets/cart.png')}></Image>
              </TouchableOpacity>

          </View>
      </View>
    )
}

const styles = StyleSheet.create({
  topBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
    zIndex: 50,
  },
  backBtn: {
    fontSize: 28,
    marginLeft: 10,
    marginBottom:7,
  },
  topTitle: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
     position: 'absolute',  
    left: 0,              
    right: 0,  
    pointerEvents: 'none',
  },

  totalAmt:{
    fontSize: 20,
    textAlign: 'right',
    marginRight: 30,
    marginTop:-50,
    color: '#222222',
  },
  total:{
    fontSize: 20,
    marginLeft: 30,
    marginTop: 20,
    paddingBottom:30,
    color: '#222222',
  },
  qty: {
    backgroundColor: '#d1d1d1',
    width: 200, 
    height: 50,
    marginTop: 20,
    marginLeft: 20,
    borderRadius: 7,
  },
  qtyText: {
    fontSize: 17,
    marginLeft: 95,
    marginTop: -20,
  },
  dec: {
    fontSize: 17,
    marginLeft: 18,
    marginTop: 13,
  },
  inc: {
    fontSize: 20,
    marginLeft: 165,
    marginTop: -27,
  },

  descText:{
    fontSize: 16,
    paddingRight: 30,
    paddingBottom: 20,
    marginTop: 20,
    marginLeft: 22,
    color: '#7e7e7e',
  },
  desc:{
    fontSize: 18,
    fontWeight: 500,
    marginTop: 30,
    marginLeft: 22,
    color: '#3d3d3d',
  },
  stockText: {
    fontSize: 15,
    paddingLeft: 13,
    paddingTop: 4,
    color: '#222222',
  },
  stock: {
    backgroundColor: '#d1d1d1',
    borderRadius: 10,
    width: 80,
    height: 30,
    marginTop: 10,
    marginLeft:20,
  },
  scroll: {
    paddingBottom: 100,
  },
  logo: {
    width: 440,
    height: 720,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignSelf: 'center',
    marginTop: 30,
  },
  title: {
    fontSize: 28,
    marginLeft: 20,
    color: '#222222',
  },
  text: {
    fontSize: 14,
    marginTop: 20,
    marginLeft: 22,
    color: '#3d3d3d',
  },
  priceText: {
    color: '#222222',
    textAlign: 'right',
    fontSize: 28,
    marginTop: -45,
    marginRight:20,
  },
  addButton: {
    width:300,
    height:60,
    backgroundColor: '#222222',
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 20,
  },
  addText: {
    color: '#d3d3d3',
    textAlign: 'center',
    paddingTop: 20,
  },
  divider: {
    marginTop: 20,
    borderBottomColor: '#a8a8a8',
    borderBottomWidth: 0.1,
    alignSelf:'stretch'
  },
  cartButton: {
    width:70,
    height:60,
    borderColor: '#b6b6b6',
    borderWidth: 1,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: -60,
    marginLeft: 335,
    marginBottom: 20,
  },
  cartLogo: {
    opacity:0.8,
    marginTop: 10,
    width: 40,
    height: 40,
  },

});
