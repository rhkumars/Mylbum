import { useEffect } from "react";
import { createClient } from "contentful";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import { setAlbums } from "../store/mypicSlice";
import { decryptString } from "../Shared/utils";

const SPACE_ID = "u7zlozaejruw";
const ACCESS_TOKEN = "mv0E72wjg8hg3PYB8oaoFdLHKpDwS0iRX80UP6ShdNk";
const client = createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
});

export default function FetchContent() {
  const navigate = useNavigate();
  const albums = [];
  const dispatch = useDispatch();
  const secretKey = process.env.REACT_APP_SECRET_KEY;

  useEffect(() => {
    const accessKey = localStorage.getItem("accessKey");
    if (!accessKey) {
      navigate("/auth");
    } else {
      let decryptedKey = decryptString(accessKey, secretKey);
      client
        .getEntries({ "metadata.tags.sys.id[all]": decryptedKey })
        .then((response) => loadData(response))
        .catch(console.error);
    }
  }, []);

  function loadData(response) {
    getURL(response.items);
  }

  function getURL(entries) {
    if (entries.length !== 0) {
      for (let key in entries) {
        let img = entries[key]?.fields?.defaultImages;
        const urls = [];
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
        albums[key] = urls;
      }
      dispatch(setAlbums([...albums]));
    }
  }

  return <div>{albums && <Dashboard />}</div>;
}
