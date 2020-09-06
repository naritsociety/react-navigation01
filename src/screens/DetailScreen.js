import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const DetailScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.bigText}>Detail Component</Text>
      <Text />
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push("Details")}
      />
      <Text></Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Text></Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  bigText: {
    fontSize: 25,
  },
});
export default DetailScreen;
