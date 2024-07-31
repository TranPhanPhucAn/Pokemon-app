import axios from "axios";
const fetchData = (offset: number) => {
  return axios.get(
    `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset * 10}`
  );
};
const fetchDetail = (id: any) => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
};
export { fetchData, fetchDetail };
