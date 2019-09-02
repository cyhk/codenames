import axios from "axios";

export async function getWordsFromApi() {
  let response = await axios.get("/api/words");
  return response.data.words;
}