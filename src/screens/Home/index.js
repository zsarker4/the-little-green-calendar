import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    marginTop: -230,
    textAlign: "center",
    color: "#00A86B",
    fontFamily: "JakartaBold",
    fontSize: 32,
  },
  subText: {
    marginTop: 22,
    textAlign: "center",
    color: "#00A86B",
    fontFamily: "JakartaBold",
    fontSize: 32,
  },
  inputWithGreenLine: {
    marginTop: 35,
    borderBottomColor: "#00A86B", // Green color
    borderBottomWidth: 2, // Adjust the width as needed
    width: 200, // Adjust the width as needed
    fontSize: 16, // Adjust the font size as needed
    color: "#000", // Text color
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
    cursor: "pointer",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 20,
    fontFamily: "JakartaBold",
    letterSpacing: -0.4,
  }
});

const HomeScreen = ( {navigation} ) => {
    const [name, setName] = useState('');
    const isContinueButtonDisabled = () => {
        return name.trim() === ''; // Disable if 'name' is empty or contains only whitespace
      };
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>what's your</Text>
      <Text style={styles.subText}>name?</Text>
      <TextInput
        style={styles.inputWithGreenLine}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TouchableOpacity 
      style={[styles.button, isContinueButtonDisabled() ? styles.disabledButton : null]}  
      onPress={() => {
        if (!isContinueButtonDisabled()) {
          navigation.navigate('List', { userName: name });
        }
      }}
      disabled={isContinueButtonDisabled()} // Disable the button based on the condition
    >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;