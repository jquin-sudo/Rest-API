import { ref } from "vue";
import axios from "axios";

const jokes = ref([]);

const api = axios.create({
  baseURL: "https://api.chucknorris.io/jokes/",
});

const getRandomAdvice = async () => {
  const response = await api.get(`random`);
  if (response.status === 200) {
    jokes.value = [response.data.value];
    //console.log(jokes.value);
  }
};
export const useAdvice = () => {
  getRandomAdvice();
  const search = async (searchItem) => {
    const response = await api.get(`search?query=${searchItem}`);

    if (response.status === 200) {
      jokes.value = response.data.result;
    }
  };
  return { jokes, search };
};
