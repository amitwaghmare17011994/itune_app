import { updateSongs, setSearchedTerm } from "../Helpers/helpers";

export const searchSongs = async (term) => {
  try {
    const response = await fetch(`https://itunes.apple.com/search?term=${term}`)
      .then((res) => res.json())
      .then((res) => res);
    updateSongs(response.results);
    if (response.results && response.results.length) {
      setSearchedTerm("");
    }
  } catch (err) {}
};
