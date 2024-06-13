import { useState, useEffect } from "react";
import { createClient } from "contentful";
import { useDispatch } from "react-redux";

import Gallery from "../Dashboard/Gallery/Gallery";
import { setResponse } from "../store/mypicSlice";

const SPACE_ID = "jbuh6ffk2dc1";
const ACCESS_TOKEN = "vIgkWsaGQS-aMGClV9awdFmf4JM-3NEL9yqennzrHKA";
const client = createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
});

export default function FetchContent() {
  const [entries, setEntries] = useState([]);
  const [urls, setURLs] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    client
      .getEntries()
      .then((response) => loadData(response))
      .catch(console.error);
  }, []);

  function loadData(response) {
    setEntries(response.items);
    getURL(response.items);
  }

  function getURL(entries) {
    let img = entries[0]?.fields?.defaultImages;

    if (img) {
      for (let key in img) {
        if (
          img[key].fields.file.contentType === "image/jpeg" ||
          img[key].fields.file.contentType === "image/png"
        ) {
          urls.push(img[key].fields.file.url);
        }
      }
    }
    console.log(urls);
    dispatch(setResponse([...urls]));
  }

  return <div>{urls && <Gallery images={urls} />}</div>;
}
