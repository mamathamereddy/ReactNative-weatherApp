import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "./src/components/HomeScreen";
import { WeeklyScreen } from "./src/components/WeeklyScreen";
import { LocationContext } from "./src/contex/LocationContex";
import { LayoutAnimation } from "react-native";

const Tab = createBottomTabNavigator();

const App = () => {
  const [currentCity, setCurrentCity] = useState("copenhagen");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  return (
    <NavigationContainer>
      <LocationContext.Provider
        value={{ currentCity, setCurrentCity, lat, setLat, lon, setLon }}
      >
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Weekly" component={WeeklyScreen} />
        </Tab.Navigator>
      </LocationContext.Provider>
    </NavigationContainer>
  );
};

export default App;
