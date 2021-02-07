import { createContext } from "react";

export const LocationContext = createContext({
  currentCity: "",
  lat: null,
  lon: null,
  setCurrentCity: () => {
    console.log("city");
  },
  setLat: () => {
    console.log("lat");
  },
  setLon: () => {
    console.log("lang");
  },
});
