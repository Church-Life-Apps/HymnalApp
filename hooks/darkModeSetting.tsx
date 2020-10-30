import { useState, useEffect, useRef } from "react";
import { Settings } from "react-native";
// This custom hook centralizes and streamlines handling of HTTP calls
class HymnalData{
  lyrics: string[];
  author: string;
  title: string;
}

export default function darkModeSetting() {
  let [darkMode, setDarkMode] = useState<boolean>(Settings.get('darkMode'));

  const toggleDarkMode = () => {
    Settings.set('darkMode');
    setDarkMode(Settings.get('darkMode'));
  }

  return { hymnalData, loading, error };
}