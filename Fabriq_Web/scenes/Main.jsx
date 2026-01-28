import { StyleSheet, View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { ScrollView, TextInput } from 'react-native-web';

export default function Main() {
    

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.headerRow}>
        <Text style={styles.shopname}>Hannah Vanessa</Text>

        <View style={styles.topHeader}>
          <TouchableOpacity>
            <Text style={styles.topHeaderText}>COLLECTIONS</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.topHeaderText}>RENTALS</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.topHeaderText}>BESPOKE</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.topHeaderText}>BOOK</Text>
          </TouchableOpacity>
        </View>
          <TouchableOpacity>
            <Image style={styles.settings} source={require('../assets/gear.png')}/>
          </TouchableOpacity>
          
          <TouchableOpacity>
            <Image style={styles.profile} source={require('../assets/prof.png')}/>
          </TouchableOpacity>
          

        </View>
        
        <View style={styles.divider}/>

        <Text style={styles.catText1}>ELEGANT • BESPOKE • TIMELESS </Text>
        <Text style={styles.catText2}>Where {'\n'}Craftsmanship{'\n'}Meets Dreams </Text>
        <Text style={styles.catText3}>Experience the art of bespoke tailoring at Hannah{'\n'}Vanessa Boutique. From exquisite gown rentals to{'\n'}custom creations, we bring your vision to life. </Text>

        <TouchableOpacity style={styles.explore}>
          <Image style={styles.exploreArrow} source={require('../assets/whitearrow.png')}/>
          <Text style={styles.exploreText}>Explore{'\n'}Collection</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.custom}>
          <Text style={styles.customText}>Start Custom Order</Text>
        </TouchableOpacity>

        <Image style={styles.catImg1} source={require('../assets/cat1.jpg')}/>
        <View style={styles.catMsg1}>
          <Text style={styles.catMsgText1}>Trusted by clients since 1993</Text>
          <Text style={styles.catMsgText2}>5000+ Happy Clients</Text>
        </View>

        <View style={styles.cat2}>
          <Text style={styles.cat2Text1}>THE COLLECTION</Text>
          <Text style={styles.cat2Text2}>Curated Excellence</Text>
          <Text style={styles.cat2Text3}>Our collection features handpicked gowns from{'\n'}
            renowned designers, each piece selected for its{'\n'}
            exceptional craftsmanship and timeless elegance.{'\n'}
            {'\n'}
            From classic ballgowns to mo dern silhouettes,{'\n'}
            every dress in our boutique tells a story waiting to{'\n'}
            become yours.
          </Text>

          <TouchableOpacity style={styles.viewcol}>
            <Image style={styles.cat2Arrow} source={require('../assets/blackarrow.png')}/>
            <Text style={styles.cat2Text4}>VIEW ALL GOWNS</Text>
          </TouchableOpacity>

          <Image style={styles.catImg2} source={require('../assets/cat2.jpg')}/>

        </View>

        <Text style={styles.cat3Text1}>Our Services</Text>
        <Text style={styles.cat3Text2}>From ready-to-wear collections to fully customized pieces, we provide a{'\n'}
          seamless experience for all your formal wear needs.
        </Text>

        <TouchableOpacity style={styles.cat3v1}>
          <Image style={styles.cat3Img1} source={require('../assets/cat3.1.png')}/>
          <Text style={styles.cat3Text3}>Browse{'\n'}Catalog</Text>
          <Text style={styles.cat3Text4}>Explore our Curated{'\n'}
            collection of elegant{'\n'}
            gowns and suits for{'\n'}
            every occasion.
          </Text>

          <Image style={styles.cat3Arrow} source={require('../assets/blackarrow.png')}/>
          <Text style={styles.cat3Text5}>LEARN MORE</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cat3v2}>
          <Image style={styles.cat3Img1} source={require('../assets/cat3.2.png')}/>
          <Text style={styles.cat3Text3}>Rent a Gown</Text>
          <Text style={styles.cat3Text4}>Book your perfect{'\n'}
            dress for any special{'\n'}
            occasion with flexible{'\n'}
            rental periods.
          </Text>

          <Image style={styles.cat3Arrow} source={require('../assets/blackarrow.png')}/>
          <Text style={styles.cat3Text5}>LEARN MORE</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cat3v3}>
          <Image style={styles.cat3Img1} source={require('../assets/cat3.3.png')}/>
          <Text style={styles.cat3Text3}>Custom{'\n'}Orders</Text>
          <Text style={styles.cat3Text4}>Create a bespoke{'\n'}
            piece tailored just for{'\n'}
            you, from design to{'\n'}
            final fitting.
          </Text>

          <Image style={styles.cat3Arrow} source={require('../assets/blackarrow.png')}/>
          <Text style={styles.cat3Text5}>LEARN MORE</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cat3v4}>
          <Image style={styles.cat3Img1} source={require('../assets/cat3.4.png')}/>
          <Text style={styles.cat3Text3}>Book{'\n'}Appointments</Text>
          <Text style={styles.cat3Text4}>Schedule fittings and{'\n'}
            consultations with{'\n'}
            our expert team at{'\n'}
            your convenience.
          </Text>

          <Image style={styles.cat3Arrow} source={require('../assets/blackarrow.png')}/>
          <Text style={styles.cat3Text5}>LEARN MORE</Text>
        </TouchableOpacity>

        <View style={styles.cat4}>
          <Text style={styles.cat4Text1}>500+        1,200+        5+        15+</Text>
          <Text style={styles.cat4Text2}>GOWNS AVAILABLE                             HAPPY CLIENTS                           BRANCHES                   YEARS EXPERIENCE</Text>
        </View>

        <Text style={styles.cat4Text3}>Begin Your Journey With Us</Text>
        <Text style={styles.cat4Text4}>Whether you're looking for the perfect rental or a custom creation, our team is{'\n'}
          here to make your vision a reality.
        </Text>

        <TouchableOpacity style={styles.cat4Sched}>
          <Text style={styles.cat4SchedText}>Schedule Consultation</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cat4Coll}>
          <Text style={styles.cat4CollText}>View Collections</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.f1Text1}>Join the List</Text>
          <Text style={styles.f1Text2}>Sign up to be the first to know about new gown collections, exclusive offers, and more!</Text>
          
          <View style={styles.f1Input}>
            <TextInput style={styles.f1Text3} placeholder='Your Email'></TextInput>
          </View>

          <TouchableOpacity style={styles.f1Btn1}>
            <Image style={styles.f1Arrow} source={require('../assets/blackarrow.png')}/>
          </TouchableOpacity>

          <Text style={styles.f1Text4}>SHOP</Text>
          <Text style={styles.f1Text5}>SERVICES</Text>
          <Text style={styles.f1Text6}>COMPANY</Text>
          <Text style={styles.f1Text7}>CONNECT</Text>
          
          {/* Shop  */}
          <TouchableOpacity>
            <Text style={styles.f1Text8}>Wedding Gowns</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.f1Text8}>Evening Dresses</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.f1Text8}>Ball Gowns</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.f1Text8}>Cocktail Dresses</Text>
          </TouchableOpacity>

          {/* Services */}
          <TouchableOpacity>
            <Text style={styles.f1Text9}>Gown Rental</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.f1Text10}>Custom Orders</Text>
          </TouchableOpacity>
          
          <TouchableOpacity>
            <Text style={styles.f1Text11}>Appointments</Text>
          </TouchableOpacity>
          
          <TouchableOpacity>
            <Text style={styles.f1Text12}>Measurements</Text>
          </TouchableOpacity>

          {/* Company */}
          <TouchableOpacity>
            <Text style={styles.f1Text13}>About Us</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.f1Text14}>Our Story</Text>
          </TouchableOpacity>
          
          <TouchableOpacity>
            <Text style={styles.f1Text15}>Branches</Text>
          </TouchableOpacity>
          
          <TouchableOpacity>
            <Text style={styles.f1Text16}>Contact</Text>
          </TouchableOpacity>

          {/* connect */}
          <Text style={styles.f1Text17}>contact@hannahvanessa.com</Text>
          <Text style={styles.f1Text18}>Cadena de Amor, Taguig City</Text>
          <Text style={styles.f1Text18}>Philippines</Text>
          
          <TouchableOpacity style={styles.f1IgView}>
            <Image style={styles.f1Ig} source={require('../assets/igicon.png')}/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.f1FbView}>
            <Image style={styles.f1Fb} source={require('../assets/fbicon.png')}/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.f1MailView}>
            <Image style={styles.f1Mail} source={require('../assets/mailicon.png')}/>
          </TouchableOpacity>
          
          <View style={styles.divider2}/>

          <Text style={styles.f1Text19}>@ 2026 Hannah Vanessa Boutique. All Rights Reseved.</Text>
          <Text style={styles.f1Text20}>Privacy Policy    Terms of Service</Text>
        </View>

      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  f1Text20:{
    color: '#ffffff',
    opacity: 0.5,
    fontSize: 16,
    marginTop: -20,
    marginRight: 25,
    textAlign: 'right',
   },
  f1Text19:{
    color: '#ffffff',
    opacity: 0.5,
    fontSize: 16,
    marginTop: 10,
    marginLeft: 25,
   },
  divider2: {
    marginTop: 40,
    borderBottomColor: '#8b7a6c',
    borderBottomWidth: 0.01,
    alignSelf:'stretch'
  },
  f1Mail:{
    width: 35,
    height: 35,
    marginTop: -32,
    opacity: 0.8,
  },
  f1MailView:{
    marginLeft: 1625
  },
  f1Fb:{
    width: 30,
    height: 30,
    marginTop: -30,
    opacity: 0.8,
  },
  f1FbView:{
    marginLeft: 1575
  },
  f1Ig:{
    width: 30,
    height: 30,
    marginTop: 20,
    opacity: 0.8,
  },
  f1IgView:{
    marginLeft: 1525
  },
  f1Text18:{
    color: '#ffffff',
    opacity: 0.8,
    fontSize: 16,
    marginTop: 20,
    marginLeft: 1525,
   },
  f1Text17:{
    color: '#ffffff',
    opacity: 0.8,
    fontSize: 16,
    marginTop: -145,
    marginLeft: 1525,
   },
  f1Text16:{
    color: '#ffffff',
    opacity: 0.8,
    fontSize: 16,
    marginTop: -25,
    marginLeft: 1025,
   },
  f1Text15:{
    color: '#ffffff',
    opacity: 0.8,
    fontSize: 16,
    marginTop: -65,
    marginLeft: 1025,
   },
  f1Text14:{
    color: '#ffffff',
    opacity: 0.8,
    fontSize: 16,
    marginTop: -105,
    marginLeft: 1025,
   },
  f1Text13:{
    color: '#ffffff',
    opacity: 0.8,
    fontSize: 16,
    marginTop: -145,
    marginLeft: 1025,
   },
  f1Text12:{
    color: '#ffffff',
    opacity: 0.8,
    fontSize: 16,
    marginTop: -25,
    marginLeft: 525,
   },
  f1Text11:{
    color: '#ffffff',
    opacity: 0.8,
    fontSize: 16,
    marginTop: -65,
    marginLeft: 525,
   },
  f1Text10:{
    color: '#ffffff',
    opacity: 0.8,
    fontSize: 16,
    marginTop: -105,
    marginLeft: 525,
   },
  f1Text9:{
    color: '#ffffff',
    opacity: 0.8,
    fontSize: 16,
    marginTop: -145,
    marginLeft: 525,
   },
  f1Text8:{
    color: '#ffffff',
    opacity: 0.8,
    fontSize: 16,
    marginTop: 20,
    marginLeft: 25,
   },
  f1Text7:{
    color: '#ffffff',
    opacity: 0.8,
    fontSize: 16,
    marginTop: -20,
    marginLeft: 1525,
   },
  f1Text6:{
    color: '#ffffff',
    opacity: 0.8,
    fontSize: 16,
    marginTop: -20,
    marginLeft: 1025,
   },
  f1Text5:{
    color: '#ffffff',
    opacity: 0.8,
    fontSize: 16,
    marginTop: -20,
    marginLeft: 525,
   },
  f1Text4:{
    color: '#ffffff',
    opacity: 0.8,
    fontSize: 16,
    marginTop: 100,
    marginLeft: 25,
   },
  f1Arrow:{
    width: 30,
    height: 30,
    marginTop: 20,
    marginLeft: 30,
    opacity: 0.8,
  },
  f1Btn1:{
    backgroundColor: '#ffffff',
    opacity: 0.7,
    width: 90,
    height: 70,
    marginLeft: 735,
    marginTop: -70,
  },
  f1Input:{
    backgroundColor: '#8b7a6c',
    opacity: 0.5,
    width: 700,
    height: 70,
    marginLeft: 25,
    marginTop: 15,
  },
  f1Text3:{
    color: '#ffffff',
    opacity: 0.7,
    fontSize: 20,
    marginTop: 20,
    marginLeft: 25,
   },
  f1Text2:{
    color: '#ffffff',
    opacity: 0.7,
    fontSize: 16,
    marginTop: 10,
    marginLeft: 25,
   },
  f1Text1:{
    color: '#ffffff',
    fontFamily: 'Cormorant Garamond Medium',
    fontSize: 35,
    marginTop: 50,
    marginLeft: 25,
  },
  footer:{
    backgroundColor: '#615045',
    width: 1920,
    height: 700,
    marginTop: 150,
  },
  cat4CollText:{
    color: '#1b120d',
    opacity: 0.9,
    fontSize: 23,
    letterSpacing: 2,
    marginTop: 30,
    textAlign: 'center',
  },
  cat4Coll:{
    borderColor: '#1b120d',
    borderWidth: 1,
    width: 400,
    height: 100,
    marginLeft: 1000,
    marginTop: -100,
  },
  cat4SchedText: {
    color: '#ffffff',
    opacity: 0.9,
    fontSize: 23,
    letterSpacing: 2,
    marginTop: 30,
    textAlign: 'center',
  },
  cat4Sched:{
    backgroundColor: '#1b120d',
    width: 400,
    height: 100,
    marginLeft: 550,
    marginTop: 50,
  },
  cat4Text4:{
    color: '#422f22',
    opacity: 0.7,
    fontSize: 25,
    letterSpacing: 2,
    marginTop: 30,
    lineHeight: 40,
    textAlign: 'center'
  },
  cat4Text3:{
    color: '#422f22',
    fontFamily: 'Cormorant Garamond Medium',
    fontSize: 70,
    marginTop: 150,
    marginLeft: 40,
    textAlign: 'center',
  },
  cat4Text2:{
    color: '#ffffff',
    opacity: 0.7,
    fontSize: 18,
    letterSpacing: 6,
    fontWeight: 400,
    marginLeft: 155,
  },
  cat4Text1:{
    color: '#ffffff',
    fontFamily: 'Cormorant Garamond Medium',
    fontSize: 120,
    marginTop: 110,
    textAlign: 'center',
  },
  cat4:{
    marginTop:150,
    backgroundColor: '#1b120d',
    width: 1920,
    height:400, 
  },
  cat3v4:{
    backgroundColor:'white',
    width: 380,
    height:550,
    marginTop: -550,
    marginLeft: 1360,
  },
  cat3v3:{
    backgroundColor:'white',
    width: 380,
    height:550,
    marginTop: -550,
    marginLeft: 930,
  },
  cat3v2:{
    backgroundColor:'white',
    width: 380,
    height:550,
    marginTop: -550,
    marginLeft: 500,
  },
  cat3Arrow:{
    width: 30,
    height: 30,
    marginTop: 40,
    marginLeft: 180,
    opacity: 0.8,
  },
  cat3Text5:{
    color: '#422f22',
    opacity: 0.9,
    fontSize: 18,
    letterSpacing: 2,
    fontWeight: 400,
    marginTop: -28,
    marginLeft: 40,
  },
  cat3Text4:{
    color: '#422f22',
    opacity: 0.9,
    fontSize: 22,
    letterSpacing: 2,
    marginTop: 30,
    marginLeft: 40,
    lineHeight: 35,
  },
  cat3Text3:{
    color: '#422f22',
    fontFamily: 'Cormorant Garamond Medium',
    fontSize: 40,
    marginTop: 30,
    marginLeft: 40,
  },
  cat3Img1:{
    width: 90,
    height:90,
    marginTop: 40,
    marginLeft: 30,
  },  
  cat3v1:{
    backgroundColor:'white',
    width: 380,
    height:550,
    marginTop: 100,
    marginLeft: 70,
  },
  cat3Text2:{
    color: '#422f22',
    opacity: 0.7,
    fontSize: 25,
    letterSpacing: 2,
    marginTop: 30,
    lineHeight: 40,
    textAlign: 'center'
  },
  cat3Text1:{
    color: '#422f22',
    fontFamily: 'Cormorant Garamond Medium',
    fontSize: 90,
    marginTop: 120,
    textAlign: 'center',
  },
  catImg2:{
    marginTop: -720,
    marginLeft: 50,
    height: 750,
    width: 950,
  },
  cat2Arrow:{
    width: 30,
    height: 30,
    marginTop: 120,
    marginLeft: 1250,
    opacity: 0.8,
  },
  cat2Text4:{
    color: '#422f22',
    opacity: 0.9,
    fontSize: 18,
    letterSpacing: 2,
    fontWeight: 400,
    marginTop: -28,
    marginRight: 680,
    textAlign: 'right',
    textDecorationLine: 'underline',
  },
  cat2Text3:{
    color: '#422f22',
    opacity: 0.9,
    fontSize: 27,
    letterSpacing: 2,
    marginTop: 50,
    marginLeft: 1070,
    lineHeight: 50,
  },
  cat2Text2:{
    color: '#422f22',
    fontFamily: 'Cormorant Garamond Medium',
    fontSize: 90,
    paddingRight: 150,
    marginTop: 20,
    textAlign: 'right',
  },
  cat2Text1:{
    color: '#422f22',
    opacity: 0.7,
    fontSize: 18,
    letterSpacing: 6,
    fontWeight: 400,
    marginTop: 150,
    marginRight: 630,
    textAlign: 'right',
  },
  cat2:{
    backgroundColor: 'white',
    width: 1920,
    height:1000,
    marginTop: 100,
  },
  catMsgText2: {
    color: '#422f22',
    fontFamily: 'Cormorant Garamond Medium',
    fontSize: 34,
    paddingLeft: 30,
    marginTop: 10,
  },
  catMsgText1: {
    color: '#422f22',
    opacity: 0.7,
    fontSize: 16,
    letterSpacing: 2,
    fontWeight: 400,
    marginTop: 25,
    marginLeft: 50,
  },
  catMsg1:{
    backgroundColor:'#ffffff',
    width: 360,
    height: 140,
    marginLeft: 840,
    marginTop: -90,
    shadowColor: '#1b120d',
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    
  },
  catImg1:{
    marginTop: -800,
    marginLeft: 920,
    height: 800,
    width: 950,
  },
  customText:{
    color: '#1b120d',
    opacity: 0.9,
    fontSize: 23,
    letterSpacing: 2,
    marginTop: 30,
    textAlign: 'center',
  },
  custom:{
    borderColor: '#1b120d',
    borderWidth: 1,
    width: 340,
    height: 100,
    marginLeft: 410,
    marginTop: -100,
  },
  exploreArrow:{
    width: 60,
    height: 60,
    marginTop: -100,
    marginLeft: 240,
    opacity: 0.8,
    marginTop: 20,
  },
  exploreText: {
    color: '#ffffff',
    opacity: 0.9,
    fontSize: 23,
    letterSpacing: 2,
    marginTop: -62,
    textAlign: 'center',
    paddingRight: 60,
  },
  explore:{
    backgroundColor: '#1b120d',
    width: 340,
    height: 100,
    marginLeft: 50,
    marginTop: 50,
  },
  catText3: {
    color: '#422f22',
    opacity: 0.9,
    fontSize: 27,
    letterSpacing: 2,
    marginTop: 70,
    marginLeft: 50,
  },
  catText2: {
    color: '#422f22',
    fontFamily: 'Cormorant Garamond Medium',
    fontSize: 120,
    paddingLeft: 50,
    marginTop: 10,
  },
  catText1: {
    color: '#422f22',
    opacity: 0.7,
    fontSize: 16,
    letterSpacing: 6,
    fontWeight: 400,
    marginTop: 100,
    marginLeft: 50,
  },
  profile: {
    width: 20,
    height: 20,
    marginLeft: 1800,
    opacity: 0.5,
    marginTop: -26,
  },
  settings: {
    width: 25,
    height: 25,
    marginLeft: 1850,
    opacity: 0.7,
    marginTop: -30,
  },
  headerRow: {
    height: 90,
    justifyContent: 'center',
  },
  topHeader: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 30,
  },
  topHeaderText: {
    color: '#422f22',
    opacity: 0.7,
    fontSize: 16,
    letterSpacing: 2,
    fontWeight: 400
  },
  shopname: {
    color: '#422f22',
    fontFamily: 'Cormorant Garamond Medium',
    fontSize: 45,
    paddingTop: 15,
    paddingLeft: 70,
  },
    divider: {
    marginTop: 20,
    borderBottomColor: '#ece3bf',
    borderBottomWidth: 0.01,
    alignSelf:'stretch'
  },
  container: {
    flex: 1,
    backgroundColor: '#faf6e7',
  },
});