import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default function App() {
  const [favoriteCar, setFavoriteCar] = useState('');
  // the use state allows component store and update data inputted while the app is running.

  return (
    <View style={styles.rootContainer}>
       
       {/* title or the Toyota AE86 showed on top of the page */}
      <Text style={[styles.title, styles.shadow]}>
        Toyota AE86
      </Text>

      {/* the small info given about what the AE86 is known for */}
      <Text style={styles.subtitle}>
        The Legendary Drift Icon
      </Text>

      {/* provides small information about the AE86 */}
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          The AE86, also known as the Hachiroku, is a lightweight, rear-wheel drive car from the 1980s.
        </Text>
      </View>

      {/* shows a short description of the specs of the car */}
      <View style={styles.specBox}>
        <Text style={styles.specText}>
          Powered by a rev-happy 4A-GE engine, it's famous for balance and precise handling.
        </Text>
      </View>

      {/* info about who adores the model of car */}
      <Text style={styles.footer}>
        Loved by racers, drifters, and anime fans around the world.
      </Text>

      {/* This will ask for the user's favorite car */}
      <Text style={styles.inputLabel}>
        What is your favorite car?
      </Text>


      {/* this is the area where the user will input their favorite car. */}
      <TextInput
        style={styles.input}
        placeholder="Type your favorite car here..."
        placeholderTextColor="#888"
        value={favoriteCar}
        onChangeText={setFavoriteCar}
      />


      {/* this will detect if there is data typed into the TextInput and will change/show the text if there is data inputted */}
      {favoriteCar !== '' && (
        <Text style={styles.responseText}>
          Nice choice! {favoriteCar} sounds awesome.
        </Text>
      )}

    </View>
  );
}
// this is where the views and components are styled
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1, //makes the container fill the entire screen
    padding: 20, // adds space inside the container
    backgroundColor: '#1b1b1b' //sets background color of the page to dark gray
  },

  title: {
    fontSize: 36, //sets the size of the title text
    fontWeight: 'bold', //makes the text bold / thicker
    color: '#ffcc00', //sets the color of text to yellow
    textAlign: 'center', //centers the text horizontally
    marginTop: 40, //adds space outside the top of the title
    marginBottom: 10 //adds space outside below  the title
  },
  //creates a shadow for texts
  shadow: {
    textShadowColor: '#000', //sets cplor of shadow
    textShadowOffset: { width: 2, height: 2 }, //moves the shadow: positive width= right, positive height= down
    textShadowRadius: 3 //sets the blur of the shadow making it look softer
  },

  subtitle: {
    fontSize: 20,
    color: '#f5f5f5',
    textAlign: 'center',
    marginBottom: 20
  },

  //the box for the information of the car
  infoBox: {
    backgroundColor: '#252525',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15
  },

  infoText: {
    color: '#ffffff',
    fontSize: 16,
    lineHeight: 22 //adds space between lines of text
  },

  //the box for the specifications of the car
  specBox: {
    backgroundColor: '#333333', 
    borderColor: '#ffcc00', //sets the color of the border around the box
    borderWidth: 2, //sets the thickness of the border
    padding: 15, //adds space inside the box
    borderRadius: 12, //makes the corners rounded
    marginBottom: 20
  },

  specText: {
    color: '#ffe680',
    fontSize: 16,
    fontWeight: '600'
  },

  footer: {
    color: '#cfcfcf',
    fontSize: 15,
    marginTop: 10,
    textAlign: 'center'
  },

  inputLabel: {
    color: '#ffcc00',
    fontSize: 18,
    marginTop: 30,
    marginBottom: 8
  },

  input: {
    backgroundColor: '#2c2c2c',
    color: '#fff',
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#555',
    marginBottom: 15
  },

  responseText: {
    color: '#ffdd66',
    fontSize: 16,
    marginTop: 5,
    textAlign: 'center'
  }
});
