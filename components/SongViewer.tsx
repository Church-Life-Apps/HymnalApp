import { Toggle } from '@ui-kitten/components/ui';
import React, { useState } from 'react';
import { View, Image, Modal } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

const baseUrl = 'https://raw.githubusercontent.com/Church-Life-Apps/Resources/master/';
const hymnalPart = 'SongsAndHymnsOfLife/SHL_'; // This part can change when red book is added
const imageSuffix = '.png';
const alt = 'No Song Found';

const songsWithTwoTunes = [156, 216, 278, 478];

// Props are kind of like the parameters for the constructor of this class.
interface SongViewProps {
  songNumber: number;
  setLyricsOnlyMode: (boolean) => void;
}

const makeThreeDigits = (num: number) => {
  if (num < 10) {
    return `00${num}`;
  } else if (num < 100) {
    return `0${num}`;
  } else {
    return num;
  }
}

/**
 * Song Viewer React Functional Component.
 */
const SongViewer: React.FC<SongViewProps> = (props) => {
  const [secondTune, setSecondTune] = useState<boolean>(false);

  let songHasTwoTunes = songsWithTwoTunes.includes(props.songNumber);
  let secondTuneSuffix = songHasTwoTunes && secondTune ? '-B' : '';
  let url = baseUrl + hymnalPart + makeThreeDigits(props.songNumber) + secondTuneSuffix + imageSuffix;

  // TODO: Add Pinch and Zoom to image.
  return (
    <View style={{ flex: 1 }}>
      {/* Second Tune Toggler  */}
      {songHasTwoTunes ? (
        <View>
          <Toggle checked={secondTune} onChange={() => setSecondTune(!secondTune)}></Toggle>
        </View>
      ) : null}

      {/* image */}
      <Modal
        visible={true}
        transparent={true}
        onRequestClose={() => props.setLyricsOnlyMode(true)}
      >

        <ImageViewer
          onSwipeDown={() => props.setLyricsOnlyMode(true)}
          enableSwipeDown={true} imageUrls={[ { url: url } ]}
        />
      </Modal>
    </View>
  );
};

export default SongViewer;