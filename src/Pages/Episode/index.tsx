// Core
import React from 'react';

//components
import Breadcrumb from '../../components/Breadcrumb';
import RecommendationBlock from "../../components/RecommendationBlock";
import EpisodeBlock from "../../components/Episode";

//layout
import { MainLayout } from "../../layouts";

const Podcast: React.FC = () => {
  return (
    <MainLayout>
      <Breadcrumb />
      <EpisodeBlock />
      <RecommendationBlock />
    </MainLayout>
  );
};

export default Podcast;
