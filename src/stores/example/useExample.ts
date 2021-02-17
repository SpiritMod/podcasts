import { useSelector } from 'react-redux';
import { IExampleState } from "./types";

type storeState = {
  example: IExampleState
}

export const useExample = (): IExampleState => {
  const {isFetching, error, data } = useSelector((state: storeState) => state.example);

  return {
    data,
    isFetching,
    error
  }
};
