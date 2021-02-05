import { createContext } from "react";

export const LocationContext = createContext({
  currentCity: "",
  setCurrentCity: () => {
    console.log("city");
  },
  lat: null,
  lon: null,
  setLat: () => {
    console.log("lat");
  },
  setLon: () => {
    console.log("lang");
  },
});
