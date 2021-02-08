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
import { forecastHourly } from "../servises/index";
import { LocationContext } from "../contex/LocationContex";

const HourlyWeather = () => {
  const { lat, lon } = useContext(LocationContext);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const data = await forecastHourly(lat, lon);
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
    <View style={styles.hourContainer}>
      <ScrollView horizontal={true}>
        {data?.hourly &&
          data?.hourly?.map((day, index) => {
            return (
              <View style={styles.container} key={index}>
                <Text style={styles.day}>{data.dt + timeZone - 3600}</Text>
                <Image
                  style={styles.icon}
                  source={{
                    uri: `http://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png`,
                  }}
                />
              </View>
            );
          })}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  hourContainer: {
    flex: 1,
    height: 30,
  },
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    padding: 5,
  },
  icon: {
    flex: 1,
    height: 50,
    marginTop: null,
  },
});
export default HourlyWeather;
/*
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    padding: 5,
  },
  day: {
    flex: 1.7,
    fontSize: 15,
    textAlign: "left",
    color: "#232363",
  },
  icon: {
    flex: 1,
    height: 50,
    marginTop: null,
  },
  text: {
    flex: 1,
    fontSize: 15,
    textAlign: "left",
    padding: 10,
    color: "#232363",
  },
  temp: {
    flex: 0.5,
    fontSize: 15,
    textAlign: "center",
    padding: 10,
    color: "#232363",
  },
});
*/
