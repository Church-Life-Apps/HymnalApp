import { Input, Layout } from "@ui-kitten/components";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import LyricViewer from "../components/LyricViewer";
import TopMenuBar from "../navigation/TopMenuBar";



const HomePage = () => {
  var [hymnalNumber, setHymnalNumber] = useState<number>(1);

  const onNumberChange = (text) => {
    setHymnalNumber(parseInt(text, 10));
  }

  return (
    <Layout level='2' style={ styles.layout }>
      <TopMenuBar />

      <Input
        keyboardType="number-pad"
        placeholder="HymnalNumber"
        style={styles.textInput}
        onChange={onNumberChange}
        value={hymnalNumber.toString()}
      />
      <LyricViewer songNumber={1}/>
    </Layout>
  )
};

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

export default HomePage;