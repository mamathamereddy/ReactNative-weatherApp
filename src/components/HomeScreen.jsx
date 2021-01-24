import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  TextInput,
} from "react-native";

import Icon from "./Icon";

import { getWeatherByCityName } from "../servises/index";

export const HomeScreen = () => {
  const [currentCity, setCurrentCity] = useState("copenhagen");
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    (async () => {
      const weatherForCph = await getWeatherByCityName(currentCity);
      setWeatherData(weatherForCph);
    })();
  }, [currentCity]);
  //console.log(weatherData);

  const rawTimeStamp = `${weatherData?.dt}`;
  const dateinmillisec = new Date(rawTimeStamp * 1000);
  const date = new Date(dateinmillisec).toDateString();

  return (
    <>
      <SafeAreaView style={styles.androidSafeArea}>
        <ImageBackground
          style={styles.backgroundImage}
          source={require("../../assets/weather.jpg")}
        >
          <View style={styles.navBarIcons}>
            <View style={styles.navBarIcons}>
              <Icon iconFamily="MA" name="hamburger" size={28} />
            </View>
            <View style={styles.navBarIcons}>
              <TextInput
                style={styles.textInput}
                autoCapitalize="none"
                autoCorrect={false}
                value={currentCity}
                clearTextOnFocus
                onChangeText={setCurrentCity}
                placeholder={"Type location name"}
                placeholderTextColor="black"
                textAlign="center"
              />
              <Icon iconFamily="FA5" name="search" size={28} />
            </View>
          </View>

          <View style={styles.displayContainer}>
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.locationNameText}>
                {`${weatherData?.name}`}
              </Text>
              <Text style={styles.dateText}>{`${date}`}</Text>
              <Text
                style={styles.descriptionText}
              >{`${weatherData?.weather[0]?.description}`}</Text>
            </View>

            <Image
              style={styles.descriptionImage}
              source={{
                uri: `http://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@4x.png`,
              }}
            />
          </View>

          <View>
            <Text style={styles.celcius}>℃</Text>
            <Text style={styles.temperature}>
              {(`${weatherData?.main?.temp}` - 273.15).toFixed(0)}
            </Text>
          </View>
        </ImageBackground>
      </SafeAreaView>

      <View style={styles.descriptionContainer}>
        <View style={styles.displayTempIcons}>
          <Icon iconFamily="FA" name="temperature-low" size={38} />
          <View style={styles.forecast}>
            <Text style={styles.text}>Feels Like</Text>
            <Text style={styles.display}>
              {(`${weatherData?.main?.feels_like}` - 273.15).toFixed(0)}℃
            </Text>
          </View>
          <Icon iconFamily="SI" name="drop" />
          <View style={styles.forecast}>
            <Text style={styles.text}>Humidity</Text>
            <Text style={styles.display}>
              {`${weatherData?.main?.humidity}`} %
            </Text>
          </View>
        </View>
        <View style={styles.displayTempIcons}>
          <Icon iconFamily="MA" name="weather-windy" />
          <View style={styles.forecast}>
            <Text style={styles.text}>Wind</Text>
            <Text style={styles.display}>
              {`${weatherData?.wind?.speed}`}km/h
            </Text>
          </View>
          <Icon iconFamily="FE" name="sun" />
          <View style={styles.forecast}>
            <Text style={styles.text}>UV Index</Text>
          </View>
        </View>
      </View>
    </>
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

  navBarIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 15,
  },
  textInput: {
    height: 30,
    color: "black",
    fontSize: 22,
    fontFamily: "Helvetica Neue",
    fontWeight: "100",
    minWidth: 250,
    paddingLeft: 20,
    backgroundColor: "#eeefdc",
    borderWidth: 1,
    borderColor: "black",
  },

  displayContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 25,
    paddingTop: 10,
  },

  locationNameText: {
    fontSize: 25,
    color: "green",
  },
  dateText: {
    fontSize: 12,
    color: "green",
    top: 5,
  },
  descriptionText: {
    fontSize: 18,
    color: "green",
    top: 25,
  },
  descriptionImage: {
    width: 100,
    height: 100,
  },
  celcius: {
    fontSize: 30,
    color: "white",
    position: "absolute",
    left: 50,
  },
  temperature: {
    fontSize: 70,
    color: "white",
    paddingBottom: 20,
    left: 20,
  },
  descriptionContainer: {
    flex: 0.5,
    alignContent: "center",
  },

  displayTempIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    marginTop: 20,
    paddingLeft: 25,
  },
  text: {
    color: "gray",
    fontSize: 20,
    alignContent: "flex-start",
    paddingRight: 55,
    paddingLeft: 5,
  },
  display: {
    fontSize: 18,
    alignContent: "flex-start",
    paddingRight: 55,
    paddingLeft: 10,
    paddingTop: 3,
  },
  forecast: {
    flex: 1,
    flexDirection: "column",
  },
});
