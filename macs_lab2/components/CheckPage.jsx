import React, { use, useState } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CheckPage({ navigation, route }) {

    const { subtotal, total, quantity, formData } = route.params || {};

    const [name, setName] = useState(formData?.name || '');
    const [email, setEmail] = useState(formData?.email || '');
    const [phone, setPhone] = useState(formData?.phone || '');
    const [address, setAdress] = useState(formData?.address || '');
    const [city, setCity] = useState(formData?.city || '');
    const [zip, setZip] = useState(formData?.zip || '');
    const [card, setCard] = useState(formData?.card || '');
    const [expiry, setExpiry] = useState(formData?.expiry || '');
    const [cvv, setCvv] = useState(formData?.cvv || '');
    const [validation, setValidation] = useState('');


    const backBtn = () => {
        console.log('This button goes back to product details (for now).')
        navigation.navigate('AddPage', {quantity, from: 'check'}); 
    };

    const proceedBtn = () => {

        if(!name || !email || !phone || !address || !city || !zip ){
          console.log('all fields must be filled')
          setValidation('All fields must be filled.')

        }  else if(!email.includes('@') || !email.includes('.')){
          console.log('plz enter a valid email')
          setValidation('Please enter a valid email address.')

        } else if (phone.length < 11 || !/^\d+$/.test(phone) || !phone.startsWith('09')){
          console.log('plz enter a valid phone num')
          setValidation('Please enter a valid phone number.')

        }else {
          console.log('This button goes to payment details page.')
          navigation.navigate('PayPage', {subtotal, total, quantity, from: 'check', formData: { ...formData, name, email, phone, address, city, zip }});
          setValidation('')
        }
      }

    return ( 
      <View >
        <TouchableOpacity onPress={backBtn}>
            <Image style={styles.logo} source={require('../assets/backarrow.png')}/>
        </TouchableOpacity>

        <Text style={styles.title}> Checkout </Text>
        <Text style={styles.text}> Shipping Details </Text>

        <View style={styles.divider}/>

        <Text style={styles.desc}>Full Name</Text>
        <TextInput style={styles.input} placeholder="First Name  Last Name" keyboardType="default" value={name} onChangeText={(text) => setName(text)}/>

        <Text style={styles.desc}>Email</Text>
        <TextInput style={styles.input} placeholder="user@example.com" keyboardType="email-address" value={email} onChangeText={(text) => setEmail(text)}/>

        <Text style={styles.desc}>Phone Number</Text>
        <TextInput style={styles.input} maxLength={11} placeholder="0912 345 6789" keyboardType="numeric" value={phone} onChangeText={(text) => setPhone(text)}/>
        
        <Text style={styles.desc}>Address</Text>
        <TextInput style={styles.input} placeholder="123 Main Street" keyboardType="default" value={address} onChangeText={(text) => setAdress(text)}/>

        <Text style={styles.desc}>City</Text>
        <TextInput style={styles.input1} placeholder="City" keyboardType="default" value={city} onChangeText={(text) => setCity(text)}/>

        <Text style={styles.desc1}>ZIP Code</Text>
        <TextInput style={styles.input2} placeholder="0000" maxLength={4} keyboardType="numeric" value={zip} onChangeText={(text) => setZip(text)}/>

        <TouchableOpacity style={styles.totalButton} onPress={proceedBtn}>
          <Text style={styles.totalText}>Continue to Payment</Text>
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
