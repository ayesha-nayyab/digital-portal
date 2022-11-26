import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Splash from "../screens/Splash";
import Main from "../screens/Main";
import {PAK_GOVT_GREEN_COLOR, PAK_GOVT_YELLOW_COLOR } from "../../res/drawables";
import WebViewScreen from "../screens/WebViewScreen";
import General from "../screens/General";
import NetworkErrorScreen from "../screens/NetworkErrorScreen";
import DropDownGovtSec from "../screens/DropDownGovtSec";
import DropDownDefence from "../screens/DropDownDefence";

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Splash"
          component={Splash}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="General"
          component={General}
          options={{
            headerTitleStyle: {
              color: PAK_GOVT_YELLOW_COLOR,
              fontFamily: "serif",
              fontWeight: "bold",
            },
            headerStyle: {
              backgroundColor: PAK_GOVT_GREEN_COLOR,
            },
            headerTintColor: PAK_GOVT_YELLOW_COLOR,
          }}
        />
        <Stack.Screen
          name="DropDownDefence"
          component={DropDownDefence}
          options={{
            headerTitleStyle: {
              color: PAK_GOVT_YELLOW_COLOR,
              fontFamily: "serif",
              fontWeight: "bold",
            },
            headerStyle: {
              backgroundColor: PAK_GOVT_GREEN_COLOR,
            },
            headerTintColor: PAK_GOVT_YELLOW_COLOR,
          }}
        />
        <Stack.Screen
          name="DropDownGovtSec"
          component={DropDownGovtSec}
          options={{
            headerTitleStyle: {
              color:PAK_GOVT_YELLOW_COLOR,
              fontFamily: "serif",
              fontWeight: "bold",
            },
            headerStyle: {
              backgroundColor:  PAK_GOVT_GREEN_COLOR,
            },
            headerTintColor:PAK_GOVT_YELLOW_COLOR
          }}
        />
        <Stack.Screen
          name="WebViewScreen"
          component={WebViewScreen}
          options={{
            headerTitleStyle: {
              color: PAK_GOVT_YELLOW_COLOR,
              fontFamily: "serif",
              fontWeight: "bold",
            },
            headerStyle: {
              backgroundColor:  PAK_GOVT_GREEN_COLOR,
            },
            headerTintColor:PAK_GOVT_YELLOW_COLOR,
          }}
          //options={{headerShown : false}}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="NetworkErrorScreen"
          component={NetworkErrorScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;
