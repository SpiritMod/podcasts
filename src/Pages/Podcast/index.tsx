// Core
import React from 'react';

//components
import Breadcrumb from '../../components/Breadcrumb';
import RecommendationBlock from "../../components/RecommendationBlock";
import PodcastBlock from "../../components/Podcast";

//layout
import { MainLayout } from "../../layouts";

const Podcast: React.FC = () => {
  return (
    <MainLayout>
      <Breadcrumb />
      <PodcastBlock />
      <RecommendationBlock />
    </MainLayout>
  );
};

export default Podcast;
