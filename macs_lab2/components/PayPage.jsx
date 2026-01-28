import React, { useState } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PayPage({ navigation, route }) {
    
    const { subtotal, total, quantity, formData } = route.params || {};
    const [card, setCard] = useState(formData?.card || '');
    const [expiry, setExpiry] = useState(formData?.expiry || '');
    const [cvv, setCvv] = useState(formData?.cvv || '');
    const [validation, setValidation] = useState('');
    
    const backBtn = () => {
    console.log('Going back to shipping details with all form data');
    navigation.navigate('CheckPage', { quantity, subtotal, total, from: 'PAY', formData: { ...formData, card, expiry, cvv }});
    };

    const validateExpiry = (expiry) => {
   
    if(!/^\d{4}$/.test(expiry)){
        setValidation('Expiry must be 4 digits in MMYY format.');
        return false;
    }

    const month = parseInt(expiry.slice(0,2), 10);
    const year = parseInt(expiry.slice(2,4), 10);
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100; 
    const currentMonth = currentDate.getMonth() + 1; 
    
   
    if(month < 1 || month > 12){
        setValidation('Please enter a valid month (01-12).');
        return false;
    }


    if(year < currentYear || year > currentYear + 20){
        setValidation('Please enter a valid year for expiry.');
        return false;
    }

 
    if(year === currentYear && month < currentMonth){
        setValidation('The card has already expired.');
        return false;
    }

    setValidation('');
    return true;
    };

    const proceedBtn = () => {
         
        if(card.length < 16 || !/^\d+$/.test(card)){
            console.log('plz enter a valid card number')
            setValidation('Please enter a valid card number.')
            return;
        }

        if(!validateExpiry(expiry)){
            console.log('plz enter a valid expiry date')
            return;
        }

        if(cvv.length < 3 || !/^\d+$/.test(cvv)){
            console.log('plz enter a valid CVV')
            setValidation('Please enter a valid CVV.')
            return;
        }

        console.log('All payment details valid, proceeding...');
        navigation.navigate('PlaceOrder');
    }


    return ( 
      <View >
        <TouchableOpacity onPress={backBtn}>
            <Image style={styles.logo} source={require('../assets/backarrow.png')}/>
        </TouchableOpacity>

        <Text style={styles.title}> Checkout </Text>
        <Text style={styles.text}> Payment Details </Text>

        <View style={styles.divider}/>

        <Text style={styles.desc}>Card Number</Text>
        <TextInput style={styles.input} maxLength={16} placeholder="1234 5678 9012 3456" keyboardType="numeric" value={card} onChangeText={(text) => setCard(text)}/>
        
        <Text style={styles.desc}>Expiry Date</Text>
        <TextInput style={styles.input1} maxLength={4} placeholder="MM/YY" keyboardType="numeric" value={expiry} onChangeText={(text) => setExpiry(text)}/>

        <Text style={styles.desc1}>CVV</Text>
        <TextInput style={styles.input2} placeholder="123" maxLength={3} keyboardType="numeric" value={cvv} onChangeText={(text) => setCvv(text)}/>

        <View style={styles.divider}/>

        <Text style={styles.sub}>Subtotal</Text>
        <Text style={styles.subAmt}>₱{subtotal.toLocaleString()}.00</Text>
        <Text style={styles.ship}>Shipping</Text>
        <Text style={styles.shipAmt}>Free</Text>      
        
        <View style={styles.divider}/>
        
        <Text style={styles.total}>Total</Text>
        <Text style={styles.totalAmt}>₱{total.toLocaleString()}.00</Text>

        <TouchableOpacity style={styles.totalButton} onPress={proceedBtn}>
          <Text style={styles.totalText}>Place Order</Text>
        </TouchableOpacity>

        <Text style={styles.validation}>{validation} </Text>

      </View>
    )
}

const styles = StyleSheet.create({
    validation: {
    textAlign: 'center',
    color: '#fd7676',
    marginTop: 20,
    fontWeight: 600,
    fontSize: 18,
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
    totalButton: {
    width:390,
    height:60,
    backgroundColor: '#222222',
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 35,
    marginLeft: 20,
  },
  totalText: {
    color: '#d3d3d3',
    textAlign: 'center',
    paddingTop: 20,
  },
  input2: {
    width: 187,
    height: 40,
    marginTop: 8,
    marginLeft: 220,
    borderRadius: 5,
    borderColor: '#a8a8a8',
    borderWidth: 1,    
    placeholderTextColor: '#a8a8a8',
    paddingLeft: 10,

  },
  input1: {
    width: 188,
    height: 40,
    marginTop: 10,
    marginLeft: 20,
    borderRadius: 5,
    borderColor: '#a8a8a8',
    borderWidth: 1,    
    placeholderTextColor: '#a8a8a8',
    paddingLeft: 10,

  },
  desc1:{
    fontSize: 16,
    fontWeight: 400,
    marginTop: -70,
    marginLeft: 220,
    color: '#3d3d3d',
  },
  input: {
    width: 385,
    height: 40,
    marginTop: 10,
    marginLeft: 20,
    borderRadius: 5,
    borderColor: '#a8a8a8',
    borderWidth: 1,    
    placeholderTextColor: '#a8a8a8',
    paddingLeft: 10,

  },
  desc:{
    fontSize: 16,
    fontWeight: 400,
    marginTop: 30,
    marginLeft: 20,
    color: '#3d3d3d',
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
});
