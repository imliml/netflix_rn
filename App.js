import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import MovieScreen from "./screens/MovieScreen";
import TVScreen from "./screens/TVScreen";
import Search from "./screens/Search";

// export default function App() {
//   return <MovieScreen />;
// }

const TabNavigator = createBottomTabNavigator({
  Movie: {
    screen: MovieScreen,
  },
  TV: {
    screen: TVScreen,
  },
  Search: {
    screen: Search,
  },
});

export default createAppContainer(TabNavigator);
