import React from 'react';
import { Text } from '@ui-kitten/components';
import { ScrollView } from 'react-native';

interface LyricViewProps {
  songNumber: number;
}

const LyricViewer: React.FC<LyricViewProps> = (props) => {
  var data;
  var lyricFilePath = `../resources/Songs_&_Hymns_Of_Life/metadata/${props.songNumber}.json`;
  try {
    data = require('../resources/Songs_&_Hymns_Of_Life/metadata/303.json');
  } catch {
    return <Text category="h2">No Song Found</Text>;
  }
  let lyrics = getLyrics(data);
  return (
    <>
      <ScrollView style={{ marginVertical: 20, marginHorizontal: 40 }}>
        <Text category="h2" style={{ marginBottom: 20 }}>{data['title']}</Text>
        <Text>{lyrics}</Text>
        <Text>Author: {data['author'] == '' ? 'Unknown' : data['author']}</Text>
      </ScrollView>
    </>
  );

  /**
   * Parses all verse of the song to a string.
   */
  function getLyrics(data: any) {
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