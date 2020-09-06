import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.text}>Home</Text>
      <Text />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
      <Text />
      <Button
        title="Go List Screen"
        onPress={() => navigation.navigate("List")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
  },
});

export default HomeScreen;
