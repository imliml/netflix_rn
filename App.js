import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "react-native-vector-icons";
import MovieScreen from "./screens/MovieScreen";
import TVScreen from "./screens/TVScreen";
import SearchScreen from "./screens/SearchScreen";

const TabNavigator = createBottomTabNavigator(
  {
    Movie: {
      screen: MovieScreen,
    },
    TV: {
      screen: TVScreen,
    },
    Search: {
      screen: SearchScreen,
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Movie") {
          iconsName = "ios-home";
        } else if (routeName === "TV") {
          iconsName = "ios-tv";
        } else if (routeName === "Search") {
          iconName = "ios-search";
        }
        return (
          <Ionicons
            name={iconsName}
            size={horizontal ? 20 : 25}
            color={tintColor}
          />
        );
      },
    }),
  }
);

export default createAppContainer(TabNavigator);
