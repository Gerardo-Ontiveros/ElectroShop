import { NavigationContainer } from "@react-navigation/native";
import { DarkTheme, LightTheme } from "@react-navigation/native";
import React, { useMemo, useState } from "react";
import { ThemeContext } from "@context/ThemeContext";
import { TabNavigator } from "@routes/screens.routing";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const themeContext = useMemo(() => {
    return { isDarkTheme, setIsDarkTheme };
  });
  return (
    <NavigationContainer theme={isDarkTheme ? DarkTheme : LightTheme}>
      <ThemeContext.Provider value={themeContext}>
        <TabNavigator />
        <StatusBar style={isDarkTheme ? "light" : "dark"} />
      </ThemeContext.Provider>
    </NavigationContainer>
  );
}
