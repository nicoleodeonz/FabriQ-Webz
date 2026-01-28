import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AddPage({ navigation, route }) {

    const { addedQty = 0, existingQty = 0, from } = route.params || {};
    const [quantity, setQuantity] = useState(existingQty);
    
    const price = 1499;
    const subtotal = price * quantity;
    const total = subtotal;

    useEffect(() => {
      if (from === 'product' && addedQty > 0) {
        setQuantity(existingQty + addedQty);
      }

      if (from === 'check' || from === 'pay') {
        if (route.params?.quantity !== undefined) {
          setQuantity(route.params.quantity);
        }
      }
    }, [from, addedQty, existingQty]);

    const backBtn = () => {
        console.log('This button goes back to product details (for now).')
        navigation.navigate('ProdDetails', {cartQty: quantity}); 
    };

    const proceedBtn = () => {
        console.log('This button goes back to check out page.')
        navigation.navigate('CheckPage', {subtotal, total, quantity});
    }

    return ( 
      <View >
        <TouchableOpacity onPress={backBtn}>
            <Image style={styles.logo} source={require('../assets/backarrow.png')}/>
        </TouchableOpacity>

        <Text style={styles.title}> Shopping Cart </Text>
        <Text style={styles.text}> Here is what's in your cart! </Text>

        <View style={styles.divider}/>

        <View style={styles.item}>
            <Image style={styles.itemImg} source={require('../assets/greensofa.png')}></Image> 
            <Text style={styles.text2}>Modern Sofa</Text>
            <Text style={styles.text3}>Furniture</Text>
            <Text style={styles.text4}>₱1,499</Text>

            <View style={styles.qty}> 
                <TouchableOpacity onPress={() => setQuantity(Math.max(0, quantity - 1))}>
                    <Text style={styles.dec}>—</Text>
                </TouchableOpacity>

                <Text style={styles.qty1}>{quantity}</Text>

                <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
                    <Text style={styles.inc}>＋</Text>
                </TouchableOpacity>

            </View>

        </View>

        <View style={styles.divider2}/>

        <Text style={styles.sub}>Subtotal</Text>
        <Text style={styles.subAmt}>₱{subtotal.toLocaleString()}.00</Text>
        <Text style={styles.ship}>Shipping</Text>
        <Text style={styles.shipAmt}>Free</Text>
        

        <View style={styles.divider}/>

        <Text style={styles.total}>Total</Text>
        <Text style={styles.totalAmt}>₱{total.toLocaleString()}.00</Text>

        <TouchableOpacity style={styles.totalButton} onPress={proceedBtn}>
            <Text style={styles.totalText}>Proceed to Checkout</Text>
        </TouchableOpacity>

      </View>
    )
}

const styles = StyleSheet.create({
  totalButton: {
    width:370,
    height:60,
    backgroundColor: '#222222',
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 15,
    marginLeft: 30,
  },
  totalText: {
    color: '#d3d3d3',
    textAlign: 'center',
    paddingTop: 20,
  },
  subAmt:{
    fontSize: 15,
    textAlign: 'right',
    marginRight: 30,
    marginTop:-20,
    color: '#222222',
  },
  shipAmt:{
    fontSize: 15,
    textAlign: 'right',
    marginRight: 30,
    marginTop:-20,
    color: '#222222',
  },  
  totalAmt:{
    fontSize: 18,
    textAlign: 'right',
    marginRight: 30,
    marginTop:-20,
    color: '#222222',
  },
  total:{
    fontSize: 18,
    marginLeft: 30,
    marginTop: 10,
    color: '#222222',
  },
  sub: {
    fontSize: 15,
    opacity: 0.7,
    marginLeft: 30,
    marginTop:20,
    color: '#222222',
  },
  ship: {
    fontSize: 15,
    opacity: 0.7,
    marginLeft: 30,
    marginTop: 10,
    color: '#222222',
  },
    qty: {
    backgroundColor: '#d1cfcf',
    width: 90,
    height: 30,
    marginLeft: 250,
    borderRadius: 7,
  },
  qty1: {
    fontSize: 14,
    marginLeft: 45,
    marginTop: -17,
  },
  dec: {
    fontSize: 14,
    marginLeft: 10,
    marginTop:5,
  },
  inc: {
    fontSize: 18,
    marginLeft: 66,
    marginTop:-23,
  },
  item: {
    width: 360,
    height: 140,
    borderColor: '#b6b6b6',
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 30,
    marginLeft: 40,
    },
  itemImg: {
    marginTop: 20,
    marginLeft: 20,
    borderRadius: 15,
    width: 100,
    height: 100,
    },
  text2: {
    fontSize: 17,
    marginTop: -100,
    marginLeft: 140,
    color: '#222222',
  },    
  text3: {
    fontSize: 14,
    opacity: 0.7,
    marginLeft: 140,
    color: '#222222',
  },
  text4: {
    fontSize: 14,
    marginTop:10,
    marginLeft: 140,
    color: '#222222',
  },
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
  divider2: {
    opacity: 0.4,
    marginTop: 430,
    borderBottomColor: '#a8a8a8',
    borderBottomWidth: 0.01,
    alignSelf:'stretch'
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
