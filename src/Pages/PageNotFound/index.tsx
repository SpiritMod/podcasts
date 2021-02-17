// Core
import React from 'react';

//components
import { MainLayout } from "../../layouts";
import NotFound from "../../components/NotFound";
import classes from "../../layouts/styles/MainLayout.module.scss";

const PageNotFound: React.FC = () => {
  return (
    <MainLayout vertical={true}>
      <NotFound />
    </MainLayout>
  );
};

export default PageNotFound;
