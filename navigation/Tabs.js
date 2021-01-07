import React, { useLayoutEffect } from  'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Favs from '../screens/Favs';
import Movies from '../screens/Movies';
import Search from '../screens/Search';
import Tv from '../screens/Tv';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from "react-native";

const Tab = createBottomTabNavigator();

const getHeaderName = route => {
    getFocusedRouteNameFromRoute(route) || "Movies";
}

export default ({navigation, route}) => {
useLayoutEffect(()=>{
    const name = getHeaderName(route);
    navigation.setOptions({
        title: name
    });
}, [route])
return(
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName = Platform.OS === "ios" ? "ios-" : "md-";
          console.log(route.name)
          if (route.name === "Movies") {
            iconName += "film";
          } else if (route.name === "Tv") {
            iconName += "tv";
          } else if (route.name === "Search") {
            iconName += "search";
          } else if (route.name === "Favs") {
            iconName += "heart";
          }
          return (
            <Ionicons
              name={iconName}
              color={focused ? "white" : "grey"}
              size={26}
            />
          );
        }
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: "black",
          borderTopColor: "black"
        }
      }}
    >
      <Tab.Screen name="Movies" component={Movies} />
      <Tab.Screen name="Tv" component={Tv} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Favs" component={Favs} />
    </Tab.Navigator>
  );
}
