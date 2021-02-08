import React, { useState, useEffect, useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  ScrollView,
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
        setError("no data available");
        console.log(error);
      }
    })();
  }, [lat, lon]);
  //console.log(data);
  // console.log(lat);
  // console.log(lon);

  return (
    <ImageBackground
      style={styles.backgroundImage}
      // source={require("../../assets/sky.jpg")}
      source={require("../../assets/sky.gif")}
    >
      <SafeAreaView>
        <Text
          style={{
            fontSize: 30,
            //color: "#232363",
            color: "white",
            paddingBottom: 30,
            paddingTop: 10,
            margin: 10,
          }}
        >
          7 days forecast
          {/*  for {`${data?.timezone}`} */}
        </Text>
        <ScrollView>
          {data?.daily &&
            data?.daily?.map((day, index) => {
              return (
                <View style={styles.container} key={index}>
                  <Text style={styles.day}>
                    {new Date(day.dt * 1000).toLocaleDateString("en-GB", {
                      month: "2-digit",
                      day: "2-digit",
                      year: "2-digit",
                    })}
                  </Text>
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

                  <Text style={styles.temp}>
                    {(day.temp.max - 273.15).toFixed(0)}
                  </Text>
                  <Text style={styles.temp}>
                    {(day.temp.min - 273.15).toFixed(0)}
                  </Text>
                </View>
              );
            })}
        </ScrollView>
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
    padding: 15,
  },
  day: {
    flex: 1.5,
    fontSize: 15,
    textAlign: "left",
    color: "#232363",
  },
  icon: {
    flex: 1,
    height: 30,
  },
  text: {
    flex: 1,
    fontSize: 15,
    textAlign: "center",

    color: "#232363",
  },
  temp: {
    flex: 0.6,
    fontSize: 15,
    textAlign: "center",

    color: "#232363",
  },
});
