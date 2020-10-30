import { useState, useEffect, useRef } from "react";
// This custom hook centralizes and streamlines handling of HTTP calls
class HymnalData{
  lyrics: string[];
  author: string;
  title: string;
}

export default function fetchHymnalData(url) {
  let [hymnalData, setHymnalData] = useState<HymnalData>({title: "Loading", author: 'unknown', lyrics: []});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const prevUrl = useRef();

  useEffect(() => {
  // Only refetch if url or init params change.
    if (prevUrl.current === url) return;
    prevUrl.current = url;
    fetch(url)
      .then(response => {
        if (response.ok) return response.json();
        setError(response);
      })
      .then(data => setHymnalData(data))
      .catch(err => {
        console.error(err);
        setError(err);
      })
      .finally(() => setLoading(false));
  }, [url]);

  return { hymnalData, loading, error };
}