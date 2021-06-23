import {
  ActionsType,
  PASS_DATA_TO_STORAGE,
  SET_CITY_ERROR,
} from '../actions/actions';
import { getDayofWeek } from '../../utils/utils';

export interface ResponseData {
  dt: number;
  temp: {
    day: number;
    eve: number;
    max: number;
    min: number;
    morn: number;
    night: number;
  };
}

const initialState: InitialStateType = {
  weekForecast: undefined,
  cityError: false,
};

export function reducer(
  state = initialState,
  action: ActionsType,
): typeof initialState {
  switch (action.type) {
    case PASS_DATA_TO_STORAGE:
      const transformedArr = action?.payload?.map((current: ResponseData) => {
        return {
          day: getDayofWeek(current.dt),
          temperature: current.temp.max.toFixed(0),
        };
      });

      return {
        weekForecast: transformedArr,
        cityError: false,
      };

    case SET_CITY_ERROR:
      return {
        weekForecast: [],
        cityError: true,
      };

    default:
      return state;
  }
}

export type InitialStateType = {
  weekForecast: { day: string; temperature: string }[] | undefined;
  cityError: boolean;
};

export const selectWeekForecast = (
  state: InitialStateType,
): { day: string; temperature: string }[] | undefined => state.weekForecast;
