import axios from "axios";

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? `http://localhost:3000/`
      : "https://cors-anywhere.herokuapp.com/https://samples.openweathermap.org/",
  timeout: 3000,
});

export async function getWeathers() {
  return instance.get(
    "/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22"
  );
}
