import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { socialActions } from "./actions";
import { ISocialState } from "./types";

type storeState = {
  social: ISocialState
}

export const useSocial = () => {
  const dispatch = useDispatch();

  const { isFetching, error, data } = useSelector((state: storeState) => state.social);

  useEffect(() => {
    dispatch(socialActions.getData());
  },[dispatch]);

  return {
    isFetching,
    error,
    data,
  }
}
