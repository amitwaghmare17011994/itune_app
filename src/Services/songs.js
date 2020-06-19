import {
  isEmptyString,
  setSongs,
  setSearchedTerm,
  setShowLoader,
} from "../Helpers/helpers";
import { BASE_URL, FILTER_TERM } from "../Constants/constants";

export const searchSongs = async (term) => {
  try {
    setShowLoader(true);
    if (!isEmptyString(term)) {
      const response = await fetch(`${BASE_URL}?term=${term}`)
        .then((res) => res.json())
        .then((res) => res);
      const searchedItems = response.results;
      setSongs(searchedItems.filter((item) => item.kind === FILTER_TERM));
      if (searchedItems && searchedItems.length) {
        setSearchedTerm("");
      }
      setShowLoader(false);
    }
  } catch (err) {
    setShowLoader(false);
  }
};
