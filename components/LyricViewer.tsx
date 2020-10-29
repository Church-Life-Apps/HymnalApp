import React from 'react';
import { Text } from '@ui-kitten/components';

interface LyricViewProps {
  songNumber: number;
}

const LyricViewer: React.FC<LyricViewProps> = (props) => {
  var data;
  try {
    data = require(`../resources/Songs_&_Hymns_Of_Life/metadata/${props.songNumber}.json`);
  } catch {
    return <Text category="h2">No Song Found</Text>;
  }
  let lyrics = getLyrics(data);
  return (
    <>
      <Text category="h2">{data['title']}</Text>

      <Text>{lyrics}</Text>


      <Text>Author: {data['author'] == '' ? 'Unknown' : data['author']}</Text>
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