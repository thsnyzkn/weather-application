import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 1000,
});

export function getWeathers() {
  return instance.get(
    "data/2.5/forecast?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22"
  );
}
