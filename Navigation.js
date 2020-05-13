// all necessary components included
import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "./Screens/Home";
import Cases from "./Screens/Cases";
import Info from "./Screens/Info";
import Symptoms from "./Screens/Symptoms";

// creates bottom navigation
const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: "DashBoard",
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-globe" color={tintColor} size={25} />
      ),
    },
  },
  Cases: {
    screen: Cases,
    navigationOptions: {
      tabBarLabel: "All Cases",
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-list" color={tintColor} size={25} />
      ),
    },
  },
  Info: {
    screen: Info,
    navigationOptions: {
      tabBarLabel: "Info",
      tabBarIcon: ({ tintColor }) => (
        <Ionicons
          name="ios-information-circle-outline"
          color={tintColor}
          size={25}
        />
      ),
    },
  },
  Symptoms: {
    screen: Symptoms,
    navigationOptions: {
      tabBarLabel: "Symptoms",
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-eye" color={tintColor} size={25} />
      ),
    },
  },
});

const AppContainer = createAppContainer(AppNavigator);

export default function Navigation() {
  return <AppContainer />;
}
