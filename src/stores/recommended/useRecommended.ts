import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { recommendedActions } from "./actions";
import { IRecommendedState } from "./types";

type storeState = {
  recommended: IRecommendedState
}

export const useRecommended = () => {
  const dispatch = useDispatch();

  const { isFetching, error, data } = useSelector((state: storeState) => state.recommended);

  useEffect(() => {
    dispatch(recommendedActions.getData());
  },[dispatch]);

  return {
    isFetching,
    error,
    data,
  }
}
