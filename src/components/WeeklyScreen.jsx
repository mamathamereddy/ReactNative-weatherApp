import React, { useState, useEffect, useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Image,
} from "react-native";
import { forecastFor7days } from "../servises/index";
import { LocationContext } from "../contex/LocationContex";

export const WeeklyScreen = () => {
  const { lat, lon } = useContext(LocationContext);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const data = await forecastFor7days(lat, lon);
        setData(data);
        setError("");
      } catch (error) {
        setError("please enter valid city name");
        console.log(error);
      }
    })();
  }, [lat, lon]);
  console.log(data);
  // console.log(lat);
  // console.log(lon);

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require("../../assets/sky.jpg")}
    >
      <SafeAreaView>
        <Text>7 days forecast hello</Text>
        {data?.daily &&
          data?.daily?.map((day, index) => {
            return (
              <View style={styles.container}>
                <Text style={styles.day}>
                  {new Date(day.dt * 1000).toLocaleDateString("en-US", {
                    weekday: "long",
                  })}
                </Text>
                <Image
                  style={styles.icon}
                  source={{
                    uri: `http://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png`,
                  }}
                />
                <Text style={styles.text}>{day.weather[0].main}</Text>

                <Text style={styles.text}>
                  H:
                  {(Math.ceil(day.temp.max) - 273.15).toFixed(0)}
                  °C
                </Text>
                <Text style={styles.text}>
                  L:
                  {(Math.ceil(day.temp.min) - 273.15).toFixed(0)}
                  °C
                </Text>
              </View>
            );
          })}
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    padding: 5,
  },
  day: {
    flex: 1.5,
    fontSize: 15,
    textAlign: "left",
    padding: 10,
    color: "#232363",
  },
  icon: {
    flex: 0.7,

    height: 50,

    justifyContent: "flex-start",
  },
  text: {
    flex: 1,
    fontSize: 15,
    textAlign: "center",
    padding: 10,
    color: "#232363",
  },
});
