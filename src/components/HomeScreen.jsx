import React, { useState, useEffect, useContext } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
} from "react-native";

import DelayInput from "react-native-debounce-input";

import Icon from "./Icon";
import WeatherDetails from "./WeatherDetails";

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
            <Icon iconFamily="FA5" name="search" color="lightblue" />
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

//  <View style={styles.navBarIcons}>
//             <View style={styles.navBarIcons}>
//               <Icon iconFamily="MA" name="hamburger" size={28} />
//             </View>
//             <View style={styles.searchbar}>
//               <DelayInput
//                 style={styles.textInput}
//                 autoCapitalize="none"
//                 autoCorrect={false}
//                 value={currentCity}
//                 clearTextOnFocus
//                 onChangeText={setCurrentCity}
//                 delayTimeout={500}
//                 placeholder={"Type location name"}
//                 placeholderTextColor="black"
//                 textAlign="center"
//               />
//               <Icon iconFamily="FA5" name="search" size={28} />

//           </View>

//            <View style={styles.displayContainer}>
//             <View style={{ flexDirection: "column" }}>
//               <Text style={styles.locationNameText}>
//                 {`${weatherData?.name}`}
//               </Text>
//               <Text style={styles.dateText}>{`${date}`}</Text>
//               <Text
//                 style={styles.descriptionText}
//               >{`${weatherData?.weather[0]?.description}`}</Text>
//             </View>

//             <Image
//               style={styles.descriptionImage}
//               source={{
//                 uri: `http://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@4x.png`,
//               }}
//             />
//           </View>

//           <View>
//             <Text style={styles.celcius}>℃</Text>
//             <Text style={styles.temperature}>
//               {(`${weatherData?.main?.temp}` - 273.15).toFixed(0)}
//             </Text>
//           </View>
//         </ImageBackground>
//       </SafeAreaView>

//       <View style={styles.descriptionContainer}>
//         <View style={styles.displayTempIcons}>
//           <Icon iconFamily="FA" name="temperature-low" size={38} />
//           <View style={styles.forecast}>
//             <Text style={styles.text}>Feels Like</Text>
//             <Text style={styles.display}>
//               {(`${weatherData?.main?.feels_like}` - 273.15).toFixed(0)}℃
//             </Text>
//           </View>
//           <Icon iconFamily="SI" name="drop" />
//           <View style={styles.forecast}>
//             <Text style={styles.text}>Humidity</Text>
//             <Text style={styles.display}>
//               {`${weatherData?.main?.humidity}`} %
//             </Text>
//           </View>
//         </View>
//         <View style={styles.displayTempIcons}>
//           <Icon iconFamily="MA" name="weather-windy" color="brown" />
//           <View style={styles.forecast}>
//             <Text style={styles.text}>Wind</Text>
//             <Text style={styles.display}>
//               {`${weatherData?.wind?.speed}`}km/h
//             </Text>
//           </View>
//           <Icon iconFamily="FE" name="sun" />
//           <View style={styles.forecast}>
//             <Text style={styles.text}>UV Index</Text>
//           </View>
//         </View>
//       </View>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   androidSafeArea: {
//     paddingTop: Platform.OS === "android" ? 25 : 0,
//     flex: 1,
//   },
//   backgroundImage: {
//     flex: 1,
//     resizeMode: "cover",
//   },

//   navBarIcons: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     margin: 5,
//   },
//   avBarIcons: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     margin: 5,
//   },
//   textInput: {
//     height: 30,
//     color: "gray",
//     fontSize: 22,
//     fontFamily: "Helvetica Neue",
//     fontWeight: "100",
//     minWidth: 250,
//     paddingLeft: 20,
//     borderWidth: 1,
//     borderColor: "gray",
//   },

//   displayContainer: {
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     margin: 25,
//     paddingTop: 10,
//   },

//   locationNameText: {
//     fontSize: 25,
//     color: "black",
//   },
//   dateText: {
//     fontSize: 12,
//     color: "black",
//     top: 5,
//   },
//   descriptionText: {
//     fontSize: 18,
//     color: "black",
//     top: 25,
//   },
//   descriptionImage: {
//     width: 100,
//     height: 100,
//   },
//   celcius: {
//     fontSize: 30,
//     color: "black",
//     position: "absolute",
//     left: 90,
//   },
//   temperature: {
//     fontSize: 50,
//     color: "black",
//     paddingBottom: 20,
//     left: 20,
//   },
//   descriptionContainer: {
//     flex: 0.5,
//     alignContent: "center",
//   },

//   displayTempIcons: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     flex: 1,
//     marginTop: 20,
//     paddingLeft: 25,
//   },
//   text: {
//     color: "gray",
//     fontSize: 20,
//     alignContent: "flex-start",
//     paddingRight: 55,
//     paddingLeft: 5,
//   },
//   display: {
//     fontSize: 18,
//     alignContent: "flex-start",
//     paddingRight: 55,
//     paddingLeft: 10,
//     paddingTop: 3,
//   },
//   forecast: {
//     flex: 1,
//     flexDirection: "column",
//   },
//   textError: {
//     fontSize: 26,
//     marginTop: 20,
//     opacity: 0.8,
//     textAlign: "center",
//     width: "100%",
//   },
//   font: {
//     color: "#fff",
//     fontFamily: "Helvetica Neue",
//     fontWeight: "200",
//   },
// }); */
