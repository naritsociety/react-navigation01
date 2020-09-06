import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.text}>Home</Text>

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
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
