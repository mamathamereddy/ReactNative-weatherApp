import React, { useState, useEffect, useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { forecastFor7days } from "../servises/index";
import { LocationContext } from "../contex/LocationContex";

export const WeeklyScreen = () => {
  const { lat, lon } = useContext(LocationContext);
  const [weeklyData, setWeeklyData] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await forecastFor7days(lat, lon);
      setWeeklyData(data);
    })();
  }, [lat, lon]);
  console.log(weeklyData);
  console.log(lat);
  console.log(lon);

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require("../../assets/sky.jpg")}
    >
      <SafeAreaView>
        <Text>7 days forecast</Text>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
});
