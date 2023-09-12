import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    marginTop: -100,
    textAlign: "center",
    color: "#00A86B",
    fontFamily: "JakartaBold",
    fontSize: 32,
  },
  subHeader: {
    marginTop: 22,
    textAlign: "center",
    color: "#00A86B",
    fontFamily: "JakartaBoldItalic",
    fontSize: 32,
   
  },
  button: {
    width: 196,
    height: 40,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#00A86B",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    display: "flex",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 20,
    fontFamily: "JakartaBold",
    letterSpacing: -0.4,
  }
});

const LandingScreen = ({ navigation }) => {
    return (
<View style={styles.container}>
      <Text style={styles.welcomeText}>welcome to</Text>
      <Text style={[styles.subHeader]}>the little green</Text>
      <Text style={[styles.subHeader]}>calendar</Text>
      <TouchableOpacity 
      style={styles.button}  
      onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Let's Go</Text>
      </TouchableOpacity>
    </View>
    );
  };

  export default LandingScreen;