import { useState, useEffect } from "react";
import API_KEY from "./keys";

const CONTEXT_API = "95947162955ec4c83";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);
  console.log("Inside googlw", term);

  useEffect(() => {
    console.log("Inside googlw1");
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_API}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          console.log("Inside googlw2");
          console.log(result);
          setData(result);
        });
    };

    fetchData();
  }, [term]);

  return { data };
};

export default useGoogleSearch;
