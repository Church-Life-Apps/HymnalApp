import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Avatar, Button, Icon, IconRegistry, Layout, MenuItem, OverflowMenu, Text, Toggle, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { StyleSheet, View, TextInput } from 'react-native';
import { Input } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import Constants from "expo-constants";
import HomePage from './views/HomePage';
import TopMenuBar from './navigation/TopMenuBar';



export default function App() {
  let [darkTheme, setDarkTheme] = useState<boolean>(false);

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <StatusBar backgroundColor="red" />
      <ApplicationProvider {...eva} theme={darkTheme ? eva.dark : eva.light} >
        <StatusBar style="auto" />
        <TopMenuBar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>

        <HomePage/>
      </ApplicationProvider>
    </>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    paddingHorizontal: 20, fontSize: 15, color: '#ccccef',
    paddingVertical: 10
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    marginHorizontal: 16,
  },
  searchBar: {
  }
});
