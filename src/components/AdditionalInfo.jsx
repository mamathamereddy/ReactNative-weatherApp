import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "./Icon";

const AdditionalInfo = ({ text, temperature, units }) => {
  return (
    <View style={{ padding: 12, marginLeft: 35, flexDirection: "row" }}>
      <Icon iconFamily="FA" name="temperature-low" size={38} />
      <View style={{ padding: 7 }}>
        <Text>{text}</Text>
        <Text>
          {temperature}
          {units}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  descriptionContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    flex: 0.5,
  },
});
export default AdditionalInfo;
