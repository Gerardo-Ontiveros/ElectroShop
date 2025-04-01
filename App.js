import { NavigationContainer } from "@react-navigation/native";
import { DarkTheme, LightTheme } from "@react-navigation/native";
import React, { useMemo, useState } from "react";
import { AppContext } from "@context/AppContext";
import { TabNavigator } from "@routes/screens.routing";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const appContext = useMemo(() => {
    return { isDarkTheme, setIsDarkTheme };
  });
  return (
    <NavigationContainer theme={isDarkTheme ? DarkTheme : LightTheme}>
      <AppContext.Provider value={appContext}>
        <TabNavigator />
        <StatusBar style={isDarkTheme ? "light" : "dark"} />
      </AppContext.Provider>
    </NavigationContainer>
  );
}
