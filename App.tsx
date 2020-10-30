
import { StatusBar } from 'expo-status-bar';
import { Settings, useColorScheme } from "react-native";
import React, { useState } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Button, Avatar, Icon, IconRegistry, Layout, MenuItem, OverflowMenu, Text, Toggle, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import HomePage from './views/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {DefaultTheme,DarkTheme} from '@react-navigation/native'

const SettingsPage = () => {
  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text category="h3">
        Settings
      </Text>
    </Layout>
  )
}

const SettingsStack = createStackNavigator();

function SettingsScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsPage} />
    </SettingsStack.Navigator>
  )
}

const HomeStack = createStackNavigator();

function HomeScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomePage} />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <StatusBar backgroundColor="red" />
      <ApplicationProvider {...eva} theme={colorScheme == 'dark' ? eva.dark : eva.light} >
        <NavigationContainer theme={colorScheme == 'dark' ? DarkTheme : DefaultTheme}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused
                  ? 'book-open'
                  : 'book-open-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'settings-2' : 'settings-2-outline';
              }

              // You can return any component that you like here!
            return <Text><Icon fill={color} name={iconName} style={{ width: size, height: size, marginLeft: 4 }} /> {'\n'}</Text>;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#ff8566',
            inactiveTintColor: '#8F9BB3',
          }}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
}