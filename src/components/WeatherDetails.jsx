import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import AdditionalInfo from "./AdditionalInfo";

const WeatherDetails = ({ weatherData }) => {
  const rawTimeStamp = `${weatherData?.dt}`;
  const dateinmillisec = new Date(rawTimeStamp * 1000);
  const date = new Date(dateinmillisec).toDateString();
  return (
    <>
      <View style={styles.detailsContainer}>
        <Text style={{ color: "lightblue" }}>{`${date}`}</Text>
        <Text
          style={{
            color: "#fff",
            fontSize: 28,

            fontWeight: "300",
          }}
        >{`${weatherData?.name}`}</Text>
        <Text
          style={{
            color: "#fff",
            fontSize: 20,

            fontWeight: "300",
          }}
        >{`${weatherData?.weather[0]?.description}`}</Text>

        <Image
          style={styles.descriptionImage}
          source={{
            uri: `http://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@4x.png`,
          }}
        />
        <Text
          style={{
            color: "#fff",
            fontSize: 30,

            fontWeight: "300",
          }}
        >
          {(`${weatherData?.main?.temp}` - 273.15).toFixed(0)}&#8451;
        </Text>
      </View>
      <View style={styles.descriptionContainer}>
        <AdditionalInfo
          text="Humidity"
          temperature={`${weatherData?.main?.humidity}`}
        />
        <AdditionalInfo
          text="Feels-Like"
          temperature={(`${weatherData?.main?.feels_like}` - 273.15).toFixed(0)}
          degre
        />
        <AdditionalInfo
          text="Wind"
          temperature={`${weatherData?.wind?.speed}`}
        />
        <AdditionalInfo text="UV-index" />
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
    backgroundColor: "gray",
    flex: 1,
    flexWrap: "wrap",
  },
});
export default WeatherDetails;

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
