import React, { useEffect, useState } from 'react';
import { Text } from '@ui-kitten/components';
import { ScrollView } from 'react-native';
import fetchHymnalData from '../hooks/useFetch';

interface LyricViewProps {
  songNumber: number;
}

class HymnalData{
  lyrics: string[];
  author: string;
  title: string;
}

const LyricViewer: React.FC<LyricViewProps> = (props) => {
  let url = `https://raw.githubusercontent.com/Church-Life-Apps/Resources/master/SongsAndHymnsOfLifeLyrics/${props.songNumber}.json`;
  let { hymnalData, loading, error } = fetchHymnalData(url);

  if (hymnalData == undefined) {
    return <Text category="h3">No Song Found</Text>;
  }

  return (
    <>
      <ScrollView style={{ marginVertical: 20, marginHorizontal: 25 }}>
        <Text category="h5" style={{ textAlign: 'center', marginBottom: 20 }}>{hymnalData.title}</Text>
        <Text>{getLyrics(hymnalData)}</Text>
        <Text>Author: {hymnalData.author == '' ? 'Unknown' : hymnalData.author}</Text>
      </ScrollView>
    </>
  );

  /**
   * Parses all verse of the song to a string.
   */
  function getLyrics(data: any) {
    if (!data) {
      return "Loading"
    }

    let verses = Object.keys(data['lyrics']);
    var lyrics = ``;
    verses.forEach((versenumber) => {
      lyrics += `\n${versenumber}: `;
      data['lyrics'][versenumber].forEach((line: String) => {
        lyrics += `\t${line}\n`;
      });
    });
    lyrics = lyrics.trimStart();
    return lyrics;
  }
};

export default LyricViewer;