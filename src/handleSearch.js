import React from "react";
import { useNavigate } from "react-router-dom";
import { Getdata } from "./context";
import { apiKey, engineId } from "./keys";

function HandleSearch(input, dispatch, navigate) {
  if (input) {
    fetch(
      `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${engineId}&q=${input}`
    )
      .then((resp) => resp.json())
      .then((resp) => {
        dispatch({ type: "GET_SEARCH", payload: resp });
        navigate("/results");
      });
  }
  return;
}

export default HandleSearch;
