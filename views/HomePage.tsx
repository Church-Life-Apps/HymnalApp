import { Input, Layout } from "@ui-kitten/components";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import LyricViewer from "../components/LyricViewer";
import TopMenuBar from "../navigation/TopMenuBar";



const HomePage = () => {
  var [hymnalNumber, setHymnalNumber] = useState<number>(1);
  var [searchText, setSearchText] = useState<string>('1');

  const onNumberChange = (text) => {
    setSearchText(text);
    setHymnalNumber(isNaN(+text) ? hymnalNumber : +text);
  }

  return (
    <Layout level='3' style={ styles.layout }>
      <Input
        keyboardType="number-pad"
        placeholder="Hymnal Number"
        style={styles.textInput}
        onChange={onNumberChange}
        value={searchText}
      />
      <LyricViewer songNumber={hymnalNumber}/>
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