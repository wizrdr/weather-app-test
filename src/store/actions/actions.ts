import { AxiosResponse } from 'axios';
import { apiQuery } from '../../api/apiQuery';
import { ResponseData } from '../reducers/reducers';

export const PASS_DATA_TO_STORAGE = 'PASS_DATA_TO_STORAGE';
export const SET_CITY_ERROR = 'SET_CITY_ERROR';

export const passDataToStorage = (data: ResponseData[]) => {
  return {
    type: PASS_DATA_TO_STORAGE,
    payload: data,
  };
};

export const setCityError = () => {
  return {
    type: SET_CITY_ERROR,
    payload: [],
  };
};

export function sendApiQuery(city: string) {
  return (
    dispatch: (arg0: { type: string; payload?: ResponseData[] }) => void,
  ) => {
    apiQuery(city)
      .then((response: AxiosResponse) => {
        dispatch(passDataToStorage(response.data.daily));
      })
      .catch(() => {
        dispatch(setCityError());
      });
  };
}

export type PassDataToStorageActionType = ReturnType<typeof passDataToStorage>;
export type SetCityErrorActionType = ReturnType<typeof setCityError>;

export type ActionsType = PassDataToStorageActionType | SetCityErrorActionType;
