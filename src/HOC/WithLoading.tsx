//core
import React, { ReactChildren, ReactChild } from "react";

//components
import Loader from "../components/Loader";

// types
interface WithLoadingProps {
  isLoading: boolean,
  children: ReactChild | ReactChildren;
}

const WithLoading: React.FC<WithLoadingProps> = ({ isLoading, children }: WithLoadingProps) => {
  return (
    <>
      {isLoading ? <Loader/> : children}
    </>
  )
}

export default WithLoading;

