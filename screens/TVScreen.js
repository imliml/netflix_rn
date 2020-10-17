import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TVScreen = () => {
  return (
    <View style={styles.container}>
      <Text>TV</Text>
    </View>
  );
};

export default TVScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
