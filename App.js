import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "./src/components/HomeScreen";
import { WeeklyScreen } from "./src/components/WeeklyScreen";
import { LocationContext } from "./src/contex/LocationContex";
import { LayoutAnimation } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
        <Tab.Navigator
          tabBarOptions={{
            labelStyle: { fontSize: 15 },
            inactiveTintColor: "black",
            activeTintColor: "#b8610b",
            inactiveBackgroundColor: "#09325c",
            activeBackgroundColor: "#429edb",
          }}
        >
          <Tab.Screen
            name="Today"
            component={HomeScreen}
            options={{
              tabBarLabel: "Today",
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="calendar-today"
                  size={24}
                  color="#28782e"
                />
              ),
            }}
          />
          <Tab.Screen
            name="Weekly"
            component={WeeklyScreen}
            options={{
              tabBarLabel: "Weekly",
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="calendar-week"
                  size={24}
                  color="#28782e"
                />
              ),
            }}
          />
        </Tab.Navigator>
      </LocationContext.Provider>
    </NavigationContainer>
  );
};

export default App;
