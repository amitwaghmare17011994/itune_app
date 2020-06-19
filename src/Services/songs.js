import { isEmptyString } from "../Helpers/helpers";
import { BASE_URL, FILTER_TERM } from "../Constants/constants";

export const searchSongsApi = async (term) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`${BASE_URL}?term=${term}`)
        .then((res) => res.json())
        .then((res) => res);
      const searchedItems = response.results;
      return resolve(searchedItems);
    } catch (err) {
      return reject(err);
    }
  });
};
