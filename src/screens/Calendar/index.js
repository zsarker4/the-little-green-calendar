import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

import { COLORS, FONT, SIZES, icons } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingBtn: {
    width: 26,
    height: 26,
    position: "absolute", // Position the button absolutely
    top: 2, 
    right: 35,
},
});

const CalendarScreen = ({ navigation }) => {
    return (
<View style={styles.container}>
<Image
                source={icons.setting}
                style={styles.settingBtn}
            />
      <Text>September</Text>
      <Text>2023</Text>
      <Text>calendar</Text>
    </View>
    );
  };

  export default CalendarScreen;