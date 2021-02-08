import React, { useState, useEffect, useContext } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
} from "react-native";

import DelayInput from "react-native-debounce-input";

import Icon from "../screens/Icon";
import WeatherDetails from "../screens/WeatherDetails";

import { getWeatherByCityName } from "../servises/index";
import { LocationContext } from "../contex/LocationContex";

export const HomeScreen = () => {
  const { currentCity, setCurrentCity } = useContext(LocationContext);
  const { setLat, setLon } = useContext(LocationContext);
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  console.log(currentCity);

  useEffect(() => {
    (async () => {
      try {
        const weatherForCph = await getWeatherByCityName(currentCity);
        setLat(weatherForCph.coord.lat);
        setLon(weatherForCph.coord.lon);
        setWeatherData(weatherForCph);
        setError("");
      } catch (error) {
        setError("please enter valid city name");
        console.log(error);
      }
    })();
  }, [currentCity]);
  //console.log(weatherData);

  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../../assets/sky.gif")}
        // source={{
        //   uri: "https://gfycat.com/brownillegalchafer",
        // }}
      >
        <View style={styles.container1}>
          <View style={styles.headerContainer}>
            <Icon
              iconFamily="MA"
              name="hamburger"
              size={25}
              color="lightblue"
            />
            <DelayInput
              style={styles.textInput}
              autoCapitalize="none"
              clearButtonMode="while-editing"
              autoCorrect={false}
              value={currentCity}
              clearTextOnFocus
              onChangeText={setCurrentCity}
              delayTimeout={500}
              placeholder={"Type location name"}
              placeholderTextColor="black"
              textAlign="center"
            />
            <Icon iconFamily="FA5" name="search" color="lightblue" size={20} />
          </View>
          {error ? (
            <Text
              style={{
                color: "red",
                fontSize: 20,
                padding: 60,
              }}
            >
              {error}
            </Text>
          ) : (
            <WeatherDetails weatherData={weatherData} />
          )}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  androidSafeArea: {
    paddingTop: Platform.OS === "android" ? 25 : 0,
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  container1: {
    flex: 1,
    alignItems: "flex-start",
    color: "#fff",
    justifyContent: "flex-start",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    marginLeft: 10,
  },
  textInput: {
    height: 30,
    color: "black",
    fontSize: 22,
    fontFamily: "Helvetica Neue",
    fontWeight: "100",
    minWidth: 250,
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: "#4a81d9",
    marginLeft: 60,
  },
});
