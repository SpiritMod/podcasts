import { useSelector } from 'react-redux';
import { IExampleState } from "./example/types";

type YourRootState = {
  example: IExampleState
}

export const useExample = (): IExampleState => {
  const {isFetching, error, data } = useSelector((state: YourRootState) => state.example);

  return {
    data,
    isFetching,
    error
  }
};
