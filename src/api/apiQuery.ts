import axios, { AxiosResponse } from 'axios';

const key = `bad46dfee1ae1125ec4faf31e63449de`;

const instance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});

export async function apiQuery<T>(city: string): Promise<AxiosResponse<T>> {
  const urlToGetCoords = `/weather?q=${city}&appid=${key}`;
  const { lon, lat } = (await instance.get(urlToGetCoords)).data.coord;
  const urlToGetForecast = `/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${key}`;

  return instance.get(urlToGetForecast);
}
