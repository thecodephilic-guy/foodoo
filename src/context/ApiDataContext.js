import { createContext } from "react";

const ApiDataContext = createContext({
  locationCoordinates: {
    latitude: 28.367063100684394,
    longitude: 79.4430160444716,
  },

  appData: [],
});

export default ApiDataContext;
