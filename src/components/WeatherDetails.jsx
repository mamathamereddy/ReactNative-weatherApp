import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import AdditionalInfo from "./AdditionalInfo";
import Icon from "./Icon";

const WeatherDetails = ({ weatherData }) => {
  const rawTimeStamp = `${weatherData?.dt}`;
  const dateinmillisec = new Date(rawTimeStamp * 1000);
  const date = new Date(dateinmillisec).toDateString();

  return (
    <>
      <View style={styles.detailsContainer}>
        <Text style={{ color: "lightblue" }}>{`${date}`}</Text>
        <Text style={styles.text}>{`${weatherData?.name}`}</Text>
        <Text style={styles.text}>
          {`${weatherData?.weather[0]?.description}`}
        </Text>
        <Image
          style={styles.descriptionImage}
          source={{
            uri: `http://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@4x.png`,
          }}
        />
        <Text style={styles.text}>
          {(`${weatherData?.main?.temp}` - 273.15).toFixed(0)}&#8451;
        </Text>
      </View>

      <View style={styles.descriptionContainer}>
        <AdditionalInfo
          text="Feels-Like"
          temperature={(`${weatherData?.main?.feels_like}` - 273.15).toFixed(0)}
          units="℃"
          icon="FA"
          name="temperature-low"
          size={25}
        />

        <AdditionalInfo
          text="Humidity"
          temperature={`${weatherData?.main?.humidity}`}
          units="%"
          icon="SI"
          name="drop"
          size={25}
        />

        <AdditionalInfo
          text="Wind"
          temperature={`${weatherData?.wind?.speed}`}
          units="km/ph"
          icon="MA"
          name="weather-windy"
          size={25}
        />

        <AdditionalInfo text="UV-index" icon="FE" name="sun" size={25} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    alignItems: "center",
    color: "#fff",
    justifyContent: "flex-end",
    marginTop: 30,
    width: "100%",
  },
  descriptionImage: {
    width: 150,
    height: 150,
    padding: null,
    margin: null,
  },
  descriptionContainer: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "flex-start",
    marginTop: 50,
    // backgroundColor: "rgba(256, 256, 256, 0.1)",
    flex: 1,
    flexWrap: "wrap",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "300",
  },
});
export default WeatherDetails;
